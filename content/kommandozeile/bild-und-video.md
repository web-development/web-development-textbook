---
title: Bild und Video
order: 80
---

Auf der Kommandozeile gibt es Werkzeuge um mit
Bild und Video einfach zu arbeiten

## Bildverarbeitung mit image magick

[image magick](https://imagemagick.org/index.php) kann auf apple mit `brew install imagemagick` installiert werden.

Das Paket enthält mehrere spearate Befehle:

- `identify` zum anzeigen des Typs und der Dimensionen von Bildern
- `mogrify` zum Verändern einer Bild-Datei "in place" - das Original wird also überschrieben
- `convert` zum Verändern des Typs
- `montage` zum Zusammenstellen von Collagen aus mehreren Bildern.

### Bilder identifizieren

Der Befehl `identify` zeigt den typ und die wichtigsten Eckdaten eines Bildes an:

<shell>
$ identify *
teletype.jpg JPEG 1600x1200 1600x1200+0+0 8-bit sRGB 189649B 0.000u 0:00.000
terminal-pwd.png PNG 336x128 336x128+0+0 8-bit sRGB 14051B 0.000u 0:00.000
terminal.png PNG 848x552 848x552+0+0 8-bit sRGB 171623B 0.000u 0:00.000
tinymce.png PNG 767x214 767x214+0+0 8-bit sRGB 26551B 0.000u 0:00.000
tinymce@2x.png PNG 1534x428 1534x428+0+0 8-bit sRGB 44612B 0.000u 0:00.000
</shell>

Bei gif-Animationen werden die einzelnen Frames angezeigt:

<shell>
$ identify drag-and-drop-upload.gif
drag-and-drop-upload.gif[0] GIF 600x206 600x206+0+0 8-bit sRGB 256c 0.000u 0:00.002
drag-and-drop-upload.gif[1] GIF 600x206 600x206+0+0 8-bit sRGB 256c 0.000u 0:00.002
...
drag-and-drop-upload.gif[22] GIF 600x206 600x206+0+0 8-bit sRGB 256c 0.000u 0:00.001
drag-and-drop-upload.gif[23] GIF 600x206 600x206+0+0 8-bit sRGB 256c 956685B 0.000u 0:00.001
</shell>

### Bild Konvertieren

Manchmal erhält man Bilder in einem unpassenden Format.
So erzeugt der Mac alle Bildschirmphotos als pngs.
Manche profitieren durch die jpg-Komprimierung:

<shell>
$ convert Bildschirmfoto.png Bildschirmfoto.jpg

$ identify Bildschirmfoto.*
Bildschirmfoto.jpg JPEG 640x480 640x480+0+0 8-bit sRGB 79723B 0.000u 0:00.000
Bildschirmfoto.png PNG 640x480 640x480+0+0 8-bit sRGB 364595B 0.000u 0:00.000

$ ls -la Bildschirmfoto.*
-rw-r--r-- 1 bjelline staff 79723 25 Mär 07:09 Bildschirmfoto.jpg
-rw-r--r-- 1 bjelline staff 364595 24 Mär 12:29 Bildschirmfoto.png
</shell>

In der jpg-Version ist die Dateigröße auf ein 5tel geschrumpft!

### Bildgröße Verändern

Oft erhält man Photos mit sehr hoher Auflösung:

<shell>
$ identify Hochzeit.jpg
Hochzeit.jpg JPEG 5760x3840 5760x3840+0+0 8-bit sRGB 18.2662MiB 0.000u 0:00.005
</shell>

Aus diesem Bild kann man kleinere Varianten erzeugen

<shell>
$ convert -geometry 2400x Hochzeit.jpg hochzeit_2400.jpg
$ convert -geometry 1200x Hochzeit.jpg hochzeit_1200.jpg
$ convert -geometry 800x Hochzeit.jpg hochzeit_800.jpg
$ identify hochzeit_*
hochzeit_1200.jpg JPEG 1200x800 1200x800+0+0 8-bit sRGB 1.06958MiB 0.000u 0:00.003
hochzeit_2400.jpg JPEG 2400x1600 2400x1600+0+0 8-bit sRGB 4076950B 0.000u 0:00.000
hochzeit_800.jpg JPEG 800x533 800x533+0+0 8-bit sRGB 555496B 0.000u 0:00.000
</shell>


### Aus Standbildern ein Animiertes GIF machen

Aus mehreren Standbildern - in diesem Beispiel mehreren png-dateien
kann imagemagic ein animiertes gif machen:

<shell>
convert -delay 7 -loop 0 -alpha set -dispose previous *.png sprite.gif
</shell>

### Mehr über image magick

Das waren sehr einfache Beispiele.
Über die Kommandozeilen-Tools gibt es noch viel zu lernen, siehe:

* [Dokumentation](https://imagemagick.org/script/command-line-processing.php)

image magick kann auch als library in vielen Programmiersprachen
verwendet werden. z.B. [PHP](https://www.php.net/manual/de/book.imagick.php), [C#](https://github.com/dlemstra/Magick.NET), [node.js](https://www.npmjs.com/package/imagemagick-native)

## Videoverarbeitung mit ffmpeg

[ffmpeg](https://www.ffmpeg.org/) kann auf apple mit `brew install ffmpeg` installiert werden.

### Video schneiden

Um einen kürzeren Clip aus einem Vidoe herauszuschneiden:

<shell>
$ ffmpeg -ss 00:40:00.0 -i  Besprechung.mp4 -c copy -t 00:01:00.0 Besprechung.mp4
</shell>

[output](/images/kommandozeile/ffout3.txt)


### Ein Standbild aus einem Video entnehmen

<shell>
$ ffmpeg -ss 0:20:00  -i  Besprechung.mp4 -vframes 1 -q:v 2 output.jpg
</shell>

[output](/images/kommandozeile/ffout2.txt)

So sieht das Ergebnis aus:

![](/images/kommandozeile/output.jpg)

Aus diesem Standbild konnte ich herauslesen
welchen Ausschnitt des Bildschirms ausgeschnitten werden soll.

### Ein Video auf ein kleineres Rechteck beschneiden

Ein Rechteck das an Koordinaten x/y startet, und breite out_w, höhe out_h hat
aus einem Video ausschneiden und neue Datei out abspeichern:


<shell>
$ ffmpeg -i Besprechung.mp4 -filter:v "crop=out_w:out_h:x:y" Slides.mp4
</shell>

[output](/images/kommandozeile/ffout1.txt)


