---
title: Threat Modeling
order: 5
---

Für verschiedene Situationen gibt es verschiedene Threat Models ([wikipedia](https://en.wikipedia.org/wiki/Threat_model)),
wie in diesem [tweet](https://twitter.com/hvcco/status/1364104368228859906) von
Nik gezeigt:

![Tweet "Your threat model is not my threat model, hospital edition"](/images/security/threat-model-endoscopy.jpg)

Die Gefahr, dass der Snack-Automat mit Endoskopie-Geräten attackiert wird, ist
wohl nur in einem Krankenhaus gegeben, nicht aber in einer Schule oder einem Büro.

Zuerst betrachten wir zwei Schritte aus der Definition von [Threat Modeling](https://owasp.org/www-community/Threat_Modeling) der OWASP:


## Assessment Scope

> Assessment Scope - The first step is always to understand what’s on the line. Identifying tangible
> assets, like databases of information or sensitive files is usually easy. Understanding the
> capabilities provided by the application and valuing them is more difficult. Less concrete things, such
> as reputation and goodwill are the most difficult to measure, but are often the most critical.

Ein Beispiel als Diagram:

![Beispiel Threat Model Diagramm aus dem Threat Modeling Cookbook](/images/security/cryptowallet.vsdx.svg)

## Identify Threat Agents and Possible Attacks

> Identify Threat Agents and Possible Attacks - A key part of the threat model is a characterization of
> the different groups of people who might be able to attack your application. These groups should
> include insiders and outsiders, performing both inadvertent mistakes and malicious attacks.


Hier kann man ein Attack Tree einsetzen:

![Beispiel plantuml Diagramm aus dem Threat Modeling Cookbook](/images/security/cryptowallet.plantuml.svg)


## Weitere Quellen

* Beispiele aus dem [OWASP Threat Model Cookbook](https://github.com/OWASP/threat-model-cookbook/blob/master/INDEX.md)
* Bruce Schneier: [Attack Tree](https://www.schneier.com/academic/archives/1999/12/attack_trees.html#rf1)
* Wikipedia [Threat Model](https://en.wikipedia.org/wiki/Threat_model#Visual_representations_based_on_data_flow_diagrams)