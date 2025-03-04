---
title: Datei Upload - Frontend
order: 65
---

## Frontend

Im "Frontend" gab es in den letzten Jahren einige Verbesserungen beim
Datei-Upload: in modernen Browsern kann man Dateien mit
"Drag-and-Drop" in den Browser befördern, und erst in einem
zweiten Schritt hochladen:

<video controls width="100%">
  <source src="/images/php/upload-drag-and-drop.mp4" type="video/mp4" />


  Download the
  <a href="/images/php/upload-drag-and-drop.mp4">mp4</a>
  video.
</video>


### Drag-and-Drop entgegen nehmen

Wählen Sie einen Tag in der Webseite aus, der die Dateien entgegen nehmen
soll.   Für diesen Tag müssen
die Events "dragenter", "dragover" und "drop" behandelt werden.



<javascript>
dropbox.addEventListener("dragenter", ignore_all, false);
dropbox.addEventListener("dragover", ignore_all, false);
dropbox.addEventListener("drop", handle_drop, false);

function ignore_all(e) {
    e.stopPropagation();
    e.preventDefault();
}

function handle_drop(e) {
    e.stopPropagation();
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
}
</javascript>

Das drop-Event erhält unter `dataTransfer.files` die Daten aus
den gedroppten Dateien.

### Dateien behandeln

In dieser Funktion werden zuerst alle Informationen
zu den Dateien ausgegeben.

Es ist sehr einfach eine einzelne Datei an ein file-input Feld zu übergeben.

<javascript>
function handleFiles(files) {
    var count = files.length;
    console.log("File Count: " + count + "\n");

    for (var i = 0; i < files.length; i++) {
    console.log(" File " + i + ":\n(" + (typeof files[i]) + ") : <" + files[i] + " > " +
            files[i].name + " " + files[i].size + "\n");
    }

    if(count == 1) {
        console.log("Eine Datei hochgeladen");
        var file = files[0];
        var input = document.querySelector('input[name="bild"]');
        input.files = files;
    }
}
</javascript>

### Preview einer Datei

Um eine Preview der Datei im Browser anzuzeigen
muss ein image-tag in die Seite eingebaut werden.
Die Übertragung der Daten ist kompliziert: Ein `FileReader` Objekt
kann die Daten aus der Datei lesen, löst dann das event `onload` aus,
und kann dann das `src`-Attibut des image-tags setzen:


<javascript>
if (file.type.startsWith('image/')) {
    var preview = document.getElementById('preview');
    var img = document.createElement('img');
    img.style.maxWidth = '100%';
    img.style.maxHeight = '200px';

    var reader = new FileReader();
    reader.onload = function(e) {
        img.src = e.target.result;
    };

    preview.innerHTML = ''; // Clear previous preview
    preview.appendChild(img);
    reader.readAsDataURL(file);
}
</javascript>

### JavaScript Library

Die Library [Dropzone](https://www.dropzone.dev/) bietet noch einige
zusätzliche Funktionen an.


