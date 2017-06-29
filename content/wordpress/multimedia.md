---
title: Medien
order: 90
---

Während Texte in Beiträgen und Seiten gespeichert werden, müssen Bild-, Audio-, und Video-Dateien („Attachments“) erst einmal separat hochgeladen werden. Direkt im Editor für Beiträge oder Seiten finden Sie den Link zum Uploader:

![Abbildung 109: Menü für den Upload von Datei im Editor](/images/wordpress-media-upload.png)


### Speicherung von Medien

Die hochgeladenen Dateien werden einen Unter-Ordner von wp-content/uploads hochgeladen, und haben damit euch eine entsprechende URL. Die folgende Abbildung zeigt den relevanten Teil der Ordnerstruktur:


![Abbildung 111: Ordnerstruktur für hochgeladene Attachment-Dateien (Audio, Video)](/images/wordpress-uploads.png)

### Zugriffsrechte

Bei der genauen Betrachtung dieser Dateien und Ordner erkennen Sie, dass Wordpress unter einem andere (UNIX) User arbeitet als Sie selbst. Meist hat dieser User einen Namen wie „www-data“ oder „apache“. Die Zugriffsrechte im upload-Ordner müssen also so gesetzt sein, dass dieser fremde User Dateien speichern darf!

Hinweis: nur die Bilder (z.B. mit FTP) in den richtigen Ordner zu speichern ist nicht ausreichend, es ist auch ein Eintrag in der Datenbank notwendig.  Dieser Eintrag wird gemacht, wenn man den Wordpress Uploader verwendet.

### Einbinden von Medien in Beiträge und Seiten

Anschliessend können diese Dateien auf verschiedene Arten im Beiträge bzw. in der Seite eingebunden werden. Ein Bild kann als „Beitragsbild“ festgelegt werden, und wird dann bei manchen Themes besonders angezeigt.


![Abbildung 112: Verwendung von Bildern in Wordpress](/images/wordpress-bild-einfuegen.png)


