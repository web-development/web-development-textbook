import { DataSet } from "vis-data/peer/esm/vis-data.js";
import { Network } from "vis-network";
import { calculate } from "specificity";
// CSS Specificity calculation (simplified version)

function calculateSpecificity(selector) {
  return calculate(selector);
}


// Build network data from DOM tree
function buildNetwork(parent, data, parentId = "1") {
  let childIndex = 1;

  for (const tag of [...parent.childNodes].filter(
    (n) => Node.ELEMENT_NODE === n.nodeType && n.id !== "skip_me"
  )) {
    const id = parentId + childIndex;
    let label = `*${tag.tagName.toLowerCase()}*`;

    if (tag.id) {
      label += ` _#${tag.id}_`;
    }

    const classes = [...tag.classList];
    if (classes.length > 0) {
      label += ` _.${classes.join(".")}_`;
    }

    const node = {
      id,
      label,
      shape: "box",
    };

    data.nodes.push(node);
    data.edges.push({
      from: parentId,
      to: id,
    });

    // Check if this element matches the selector
    try {
      const style = getComputedStyle(tag);
      if ("rgb(255, 255, 0)" === style.getPropertyValue("background-color")) {
        node.group = "highlighted";
      }
    } catch (e) {
      console.log(e);
    }

    buildNetwork(tag, data, id);
    childIndex++;
  }

  return data;
}

export class DOMCSSVisualizer {
  constructor( htmlInput, selectorInput, specificityDisplay, treeContainer, iframe) {
    this.visNetwork = null;
    this.iframe = null;
    this.style = null;
    this.iframeDoc = null;

    this.htmlInput = htmlInput;
    this.selectorInput = selectorInput;
    this.specificityDisplay = specificityDisplay;
    this.treeContainer = treeContainer;
    this.iframe = iframe;

    this.init();
  }

  init() {
    // Get references to DOM elements


    // Set up iframe
    this.setupIframe();

    // Add event listeners
    this.htmlInput.addEventListener('input', () => this.build());
    this.selectorInput.addEventListener('input', () => this.build());

    // Initial build
    this.build();

    // Handle window resize
    window.addEventListener('resize', () => {
      if (this.visNetwork) {
        this.visNetwork.redraw();
      }
    });
  }

  setupIframe() {
    // Create iframe content
    this.iframeDoc = this.iframe.contentDocument;
    if (!this.iframeDoc) {
      this.iframeDoc = this.iframe.contentWindow.document;
    }

    // Create style element for selector highlighting
    this.style = this.iframeDoc.createElement("style");
    this.style.id = "skip_me";
  }

  build() {
    // Destroy existing network
    if (this.visNetwork) {
      this.visNetwork.destroy();
    }

    // Get HTML and selector values
    const html = this.htmlInput.value;
    const selector = this.selectorInput.value;

    // Update specificity display
    // this.updateSpecificity(selector);

    // Set up iframe content
    let startNode = this.iframeDoc.body;
    const hasHTML = html.toLowerCase().includes("<html");
    if (hasHTML) {
      startNode = this.iframeDoc.children[0];
    }

    startNode.innerHTML = html;
    this.iframeDoc.head.appendChild(this.style);

    // Apply selector highlighting
    console.log("setting style selector to", selector);
    this.style.textContent = `${selector} { background-color: rgb(255, 255, 0); }`;

    // Clear and rebuild tree
    this.treeContainer.innerHTML = "";

    // Build network data
    const data = buildNetwork(startNode, {
      nodes: [{
        id: "1",
        label: `*${hasHTML ? "html" : "body"}*`,
        // Check if root node matches the selector
        group: this.checkNodeMatch(startNode) ? "highlighted" : undefined
      }],
      edges: [],
    });

    // Create vis-network
    const options = {
      autoResize: false,
      height: "100%",
      width: "100%",
      layout: {
        hierarchical: {
          direction: "UD",
          sortMethod: "directed",
          levelSeparation: 70,
          nodeSpacing: 100,
          parentCentralization: true,
          edgeMinimization: true,
          blockShifting: true,
          shakeTowards: "roots",
        },
      },
      interaction: { dragNodes: false },
      physics: {
        enabled: false,
      },
      nodes: {
        borderWidth: 0,
        color: {
          background: "#00171d",
        },
        font: {
          color: "white",
          size: 24,
          multi: "md",
          face: "Lato",
        },
      },
      groups: {
        highlighted: {
          font: { color: "black" },
          color: { background: "#FFEB3B" },
        },
      },
    };

    this.visNetwork = new Network(
      this.treeContainer,
      {
        nodes: new DataSet(data.nodes),
        edges: new DataSet(data.edges),
      },
      options
    );
  }

  checkNodeMatch(node) {
    try {
      const style = getComputedStyle(node);
      return "rgb(255, 255, 0)" === style.getPropertyValue("background-color");
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  updateSpecificity(selector) {
    const specificity = calculateSpecificity(selector);
    const spans = this.specificityDisplay.querySelectorAll('span');

    if (spans.length >= 3) {
      spans[0].textContent = specificity.A; // IDs
      spans[1].textContent = specificity.B; // Classes/Attributes
      spans[2].textContent = specificity.C; // Elements
    }
  }
}


