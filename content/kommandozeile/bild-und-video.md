---
title: Bild und Video
order: 80
---

Auf der Kommandozeile gibt es Werkzeuge um mit
Bild und Video einfach zu arbeiten

## Bildverarbeitung mit image magick

[image magick](https://imagemagick.org/index.php) kann auf apple mit `brew install imagemagick` installiert werden.

Das Paket enthält mehrere spearate Befehle:

- `magick` zum Verändern einer Bild-Datei
- `magick identify` zum anzeigen des Typs und der Dimensionen von Bildern
- `magick montage` zum Zusammenstellen von Collagen aus mehreren Bildern.

### Bilder identifizieren

Der Befehl `magick identify` zeigt den typ und die wichtigsten Eckdaten eines Bildes an:

<shell>
$ magick identify *
teletype.jpg JPEG 1600x1200 1600x1200+0+0 8-bit sRGB 189649B 0.000u 0:00.000
terminal-pwd.png PNG 336x128 336x128+0+0 8-bit sRGB 14051B 0.000u 0:00.000
terminal.png PNG 848x552 848x552+0+0 8-bit sRGB 171623B 0.000u 0:00.000
tinymce.png PNG 767x214 767x214+0+0 8-bit sRGB 26551B 0.000u 0:00.000
tinymce@2x.png PNG 1534x428 1534x428+0+0 8-bit sRGB 44612B 0.000u 0:00.000
</shell>

Bei gif-Animationen werden die einzelnen Frames angezeigt:

<shell>
$ magick identify drag-and-drop-upload.gif
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
$ magick Bildschirmfoto.png Bildschirmfoto.jpg
$ magick Bildschirmfoto.png Bildschirmfoto.webp
$ magick identify Bildschirmfoto.*
Bildschirmfoto.jpg JPEG 2880x1800 2880x1800+0+0 8-bit sRGB 656908B 0.000u 0:00.000
Bildschirmfoto.png PNG 2880x1800 2880x1800+0+0 8-bit sRGB 1.73215MiB 0.000u 0:00.000
Bildschirmfoto.webp WEBP 2880x1800 2880x1800+0+0 8-bit sRGB 182964B 0.070u 0:00.064
$ du -h Bildschirmfoto.*
644K	Bildschirmfoto.jpg
1,7M	Bildschirmfoto.png
180K	Bildschirmfoto.webp
</shell>

Aus 1,6 Megabyte png wurden also 644 Kilobyte jpeg und 180 Kilobyte webp.
Ein Faktor 10 Kompression zahlt sich auf jeden Fall aus!
### Bildgröße Verändern

Oft erhält man Photos mit sehr hoher Auflösung:

<shell>
$ magick identify Hochzeit.jpg
Hochzeit.jpg JPEG 5760x3840 5760x3840+0+0 8-bit sRGB 18.2662MiB 0.000u 0:00.005
</shell>

Aus diesem Bild kann man kleinere Varianten erzeugen

<shell>
$ magick Hochzeit.jpg -geometry 2400x hochzeit_2400.jpg
$ magick Hochzeit.jpg -geometry 1200x hochzeit_1200.jpg
$ magick Hochzeit.jpg -geometry 800x  hochzeit_800.jpg
$ magick identify hochzeit_*
hochzeit_1200.jpg JPEG 1200x800 1200x800+0+0 8-bit sRGB 1.06958MiB 0.000u 0:00.003
hochzeit_2400.jpg JPEG 2400x1600 2400x1600+0+0 8-bit sRGB 4076950B 0.000u 0:00.000
hochzeit_800.jpg JPEG 800x533 800x533+0+0 8-bit sRGB 555496B 0.000u 0:00.000
</shell>


### Aus Standbildern ein Animiertes GIF machen

Aus mehreren Standbildern - in diesem Beispiel mehreren png-dateien
kann imagemagic ein animiertes gif machen:

<shell>
magick *.png -delay 7 -loop 0 -alpha set -dispose previous  sprite.gif
</shell>

### Collagen

Mehrere Bilder nebeneinander zusammenfügen:

<shell>
magick left.jpg right.jpg +append side_by_side.jpg
</shell>

Mehrere Bilder untereinander zusammenfügen:

<shell>
magick top.jpg bottom.jpg -append above_and_below.jpg
</shell>

### Meta-Information über Rotation entfernen

Handy-Photos können Information über die Orientierung
des Bildes enhalten.  Falls die Kamera am Kopf steht wenn
man das Bild macht, dann wird im Bild gespeichert dass es um 180°
gedreht angezeigt werden soll.  Das fukntioniert aber nicht immer.

Folgender Befehl rückt das Bild gerade und entfernt die Meta-Information:

<shell>
magick IMG_20180830_110737.jpg -auto-orient -strip aufrecht.jpg
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


