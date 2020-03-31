---
title: Bild und Video
order: 80
---

Auf der Kommandozeile gibt es Werkzeuge um mit
Bild und Video einfach zu arbeiten

## Bildverarbeitung mit image magick

[https://imagemagick.org/index.php image magick] kann auf apple mit `brew install imagemagick` installiert werden.

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

* [Dokumentation: ](https://imagemagick.org/script/command-line-processing.php)

image magick kann auch als library in vielen Programmiersprachen
verwendet werden. z.B. [PHP](https://www.php.net/manual/de/book.imagick.php), [C#](https://github.com/dlemstra/Magick.NET), [node.js](https://www.npmjs.com/package/imagemagick-native)

## Videoverarbeitung mit ffmpeg

[https://www.ffmpeg.org/ ffmpeg] kann auf apple mit `brew install ffmpeg` installiert werden.

### Video schneiden

Um einen kürzeren Clip aus einem Vidoe herauszuschneiden:

<shell>
$ ffmpeg -ss 00:40:00.0 -i  Besprechung.mp4 -c copy -t 00:01:00.0 Besprechung.mp4
ffmpeg version 4.2.2 Copyright (c) 2000-2019 the FFmpeg developers
  built with Apple clang version 11.0.0 (clang-1100.0.33.17)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/4.2.2_2 --enable-shared --enable-pthreads --enable-version3 --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-ffplay --enable-gnutls --enable-gpl --enable-libaom --enable-libbluray --enable-libmp3lame --enable-libopus --enable-librubberband --enable-libsnappy --enable-libtesseract --enable-libtheora --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-lzma --enable-libfontconfig --enable-libfreetype --enable-frei0r --enable-libass --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-librtmp --enable-libspeex --enable-libsoxr --enable-videotoolbox --disable-libjack --disable-indev=jack
  libavutil      56. 31.100 / 56. 31.100
  libavcodec     58. 54.100 / 58. 54.100
  libavformat    58. 29.100 / 58. 29.100
  libavdevice    58.  8.100 / 58.  8.100
  libavfilter     7. 57.100 /  7. 57.100
  libavresample   4.  0.  0 /  4.  0.  0
  libswscale      5.  5.100 /  5.  5.100
  libswresample   3.  5.100 /  3.  5.100
  libpostproc    55.  5.100 / 55.  5.100
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'Besprechung.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: mp41isom
    creation_time   : 2020-03-23T13:04:13.000000Z
    artist          : Microsoft Game DVR
    title           : Besprechung | Microsoft Teams
  Duration: 01:27:28.44, start: 0.000000, bitrate: 5175 kb/s
    Stream #0:0(und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p, 1376x732 [SAR 1:1 DAR 344:183], 5039 kb/s, 30 fps, 60 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : VideoHandler
      encoder         : AVC Coding
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : SoundHandler
Output #0, mp4, to 'Besprechung.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: mp41isom
    title           : Besprechung | Microsoft Teams
    artist          : Microsoft Game DVR
    encoder         : Lavf58.29.100
    Stream #0:0(und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p, 1376x732 [SAR 1:1 DAR 344:183], q=2-31, 5039 kb/s, 30 fps, 60 tbr, 30k tbn, 30k tbc (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : VideoHandler
      encoder         : AVC Coding
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : SoundHandler
Stream mapping:
  Stream #0:0 -> #0:0 (copy)
  Stream #0:1 -> #0:1 (copy)
Press [q] to stop, [?] for help
frame= 1859 fps=0.0 q=-1.0 Lsize=   39140kB time=00:00:59.99 bitrate=5344.7kbits/s speed= 773x
video:38102kB audio:962kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.194155%
</shell>

### Ein Standbild aus einem Video entnehmen

<shell>
$ ffmpeg -ss 0:20:00  -i  Besprechung.mp4 -vframes 1 -q:v 2 output.jpg
ffmpeg version 4.2.2 Copyright (c) 2000-2019 the FFmpeg developers
  built with Apple clang version 11.0.0 (clang-1100.0.33.17)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/4.2.2_2 --enable-shared --enable-pthreads --enable-version3 --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-ffplay --enable-gnutls --enable-gpl --enable-libaom --enable-libbluray --enable-libmp3lame --enable-libopus --enable-librubberband --enable-libsnappy --enable-libtesseract --enable-libtheora --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-lzma --enable-libfontconfig --enable-libfreetype --enable-frei0r --enable-libass --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-librtmp --enable-libspeex --enable-libsoxr --enable-videotoolbox --disable-libjack --disable-indev=jack
  libavutil      56. 31.100 / 56. 31.100
  libavcodec     58. 54.100 / 58. 54.100
  libavformat    58. 29.100 / 58. 29.100
  libavdevice    58.  8.100 / 58.  8.100
  libavfilter     7. 57.100 /  7. 57.100
  libavresample   4.  0.  0 /  4.  0.  0
  libswscale      5.  5.100 /  5.  5.100
  libswresample   3.  5.100 /  3.  5.100
  libpostproc    55.  5.100 / 55.  5.100
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'Besprechung.mp4':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: mp41isom
    creation_time   : 2020-03-23T13:04:13.000000Z
    artist          : Microsoft Game DVR
    title           : Besprechung | Microsoft Teams
  Duration: 01:27:28.44, start: 0.000000, bitrate: 5175 kb/s
    Stream #0:0(und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p, 1376x732 [SAR 1:1 DAR 344:183], 5039 kb/s, 30 fps, 60 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : VideoHandler
      encoder         : AVC Coding
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : SoundHandler
Stream mapping:
  Stream #0:0 -> #0:0 (h264 (native) -> mjpeg (native))
Press [q] to stop, [?] for help
[swscaler @ 0x116926000] deprecated pixel format used, make sure you did set range correctly
Output #0, image2, to 'output.jpg':
  Metadata:
    major_brand     : mp42
    minor_version   : 0
    compatible_brands: mp41isom
    title           : Besprechung | Microsoft Teams
    artist          : Microsoft Game DVR
    encoder         : Lavf58.29.100
    Stream #0:0(und): Video: mjpeg, yuvj420p(pc), 1376x732 [SAR 1:1 DAR 344:183], q=2-31, 200 kb/s, 29.97 fps, 29.97 tbn, 29.97 tbc (default)
    Metadata:
      creation_time   : 2020-03-23T13:04:13.000000Z
      handler_name    : VideoHandler
      encoder         : Lavc58.54.100 mjpeg
    Side data:
      cpb: bitrate max/min/avg: 0/0/200000 buffer size: 0 vbv_delay: -1
frame=    1 fps=0.0 q=2.0 Lsize=N/A time=00:00:00.03 bitrate=N/A speed=0.635x
video:161kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: unknown
</shell>

So sieht das Ergebnis aus:

![](images/kommandozeile/output.jpg)

Aus diesem Standbild konnte ich herauslesen
welchen Ausschnitt des Bildschirms ausgeschnitten werden soll.

### Ein Video auf ein kleineres Rechteck beschneiden

<shell>
ffmpeg version 4.2.2 Copyright (c) 2000-2019 the FFmpeg developers
  built with Apple clang version 11.0.0 (clang-1100.0.33.17)
  configuration: --prefix=/usr/local/Cellar/ffmpeg/4.2.2_2 --enable-shared --enable-pthreads --enable-version3 --enable-avresample --cc=clang --host-cflags= --host-ldflags= --enable-ffplay --enable-gnutls --enable-gpl --enable-libaom --enable-libbluray --enable-libmp3lame --enable-libopus --enable-librubberband --enable-libsnappy --enable-libtesseract --enable-libtheora --enable-libvidstab --enable-libvorbis --enable-libvpx --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-lzma --enable-libfontconfig --enable-libfreetype --enable-frei0r --enable-libass --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libopenjpeg --enable-librtmp --enable-libspeex --enable-libsoxr --enable-videotoolbox --disable-libjack --disable-indev=jack
  libavutil      56. 31.100 / 56. 31.100
  libavcodec     58. 54.100 / 58. 54.100
  libavformat    58. 29.100 / 58. 29.100
  libavdevice    58.  8.100 / 58.  8.100
  libavfilter     7. 57.100 /  7. 57.100
  libavresample   4.  0.  0 /  4.  0.  0
  libswscale      5.  5.100 /  5.  5.100
  libswresample   3.  5.100 /  3.  5.100
  libpostproc    55.  5.100 / 55.  5.100
Input #0, mov,mp4,m4a,3gp,3g2,mj2, from 'Besprechung.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    title           : Besprechung | Microsoft Teams
    artist          : Microsoft Game DVR
    encoder         : Lavf58.29.100
  Duration: 00:01:01.97, start: 0.000000, bitrate: 5173 kb/s
    Stream #0:0(und): Video: h264 (Main) (avc1 / 0x31637661), yuv420p, 1376x732 [SAR 1:1 DAR 344:183], 5038 kb/s, 30.01 fps, 30 tbr, 30k tbn, 59.94 tbc (default)
    Metadata:
      handler_name    : VideoHandler
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 127 kb/s (default)
    Metadata:
      handler_name    : SoundHandler
Stream mapping:
  Stream #0:0 -> #0:0 (h264 (native) -> h264 (libx264))
  Stream #0:1 -> #0:1 (aac (native) -> aac (native))
Press [q] to stop, [?] for help
[libx264 @ 0x7fb02403ae00] using SAR=1/1
[libx264 @ 0x7fb02403ae00] using cpu capabilities: MMX2 SSE2Fast SSSE3 SSE4.2 AVX FMA3 BMI2 AVX2
[libx264 @ 0x7fb02403ae00] profile High, level 3.0
[libx264 @ 0x7fb02403ae00] 264 - core 155 r2917 0a84d98 - H.264/MPEG-4 AVC codec - Copyleft 2003-2018 - http://www.videolan.org/x264.html - options: cabac=1 ref=3 deblock=1:0:0 analyse=0x3:0x113 me=hex subme=7 psy=1 psy_rd=1.00:0.00 mixed_ref=1 me_range=16 chroma_me=1 trellis=1 8x8dct=1 cqm=0 deadzone=21,11 fast_pskip=1 chroma_qp_offset=-2 threads=11 lookahead_threads=1 sliced_threads=0 nr=0 decimate=1 interlaced=0 bluray_compat=0 constrained_intra=0 bframes=3 b_pyramid=2 b_adapt=1 b_bias=0 direct=1 weightb=1 open_gop=0 weightp=2 keyint=250 keyint_min=25 scenecut=40 intra_refresh=0 rc_lookahead=40 rc=crf mbtree=1 crf=23.0 qcomp=0.60 qpmin=0 qpmax=69 qpstep=4 ip_ratio=1.40 aq=1:1.00
Output #0, mp4, to 'Browser-aus-der-Besprechung.mp4':
  Metadata:
    major_brand     : isom
    minor_version   : 512
    compatible_brands: isomiso2avc1mp41
    title           : Besprechung | Microsoft Teams
    artist          : Microsoft Game DVR
    encoder         : Lavf58.29.100
    Stream #0:0(und): Video: h264 (libx264) (avc1 / 0x31637661), yuv420p, 640x360 [SAR 1:1 DAR 16:9], q=-1--1, 30 fps, 15360 tbn, 30 tbc (default)
    Metadata:
      handler_name    : VideoHandler
      encoder         : Lavc58.54.100 libx264
    Side data:
      cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: -1
    Stream #0:1(und): Audio: aac (LC) (mp4a / 0x6134706D), 48000 Hz, stereo, fltp, 128 kb/s (default)
    Metadata:
      handler_name    : SoundHandler
      encoder         : Lavc58.54.100 aac
frame= 1802 fps=601 q=-1.0 Lsize=    1815kB time=00:01:00.01 bitrate= 247.8kbits/s speed=  20x
video:808kB audio:942kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 3.760907%
[libx264 @ 0x7fb02403ae00] frame I:8     Avg QP:17.34  size: 41938
[libx264 @ 0x7fb02403ae00] frame P:511   Avg QP:18.54  size:   865
[libx264 @ 0x7fb02403ae00] frame B:1283  Avg QP:23.54  size:    38
[libx264 @ 0x7fb02403ae00] consecutive B-frames:  3.7%  3.0%  3.7% 89.7%
[libx264 @ 0x7fb02403ae00] mb I  I16..4: 25.6%  9.7% 64.7%
[libx264 @ 0x7fb02403ae00] mb P  I16..4:  1.3%  0.3%  0.1%  P16..4:  9.1%  1.0%  0.9%  0.0%  0.0%    skip:87.3%
[libx264 @ 0x7fb02403ae00] mb B  I16..4:  0.0%  0.0%  0.0%  B16..8:  2.5%  0.0%  0.0%  direct: 0.0%  skip:97.5%  L0:26.8% L1:73.0% BI: 0.2%
[libx264 @ 0x7fb02403ae00] 8x8 transform intra:13.1% inter:49.9%
[libx264 @ 0x7fb02403ae00] coded y,uvDC,uvAC intra: 33.5% 56.1% 34.1% inter: 1.1% 1.6% 0.2%
[libx264 @ 0x7fb02403ae00] i16 v,h,dc,p: 11% 86%  3%  1%
[libx264 @ 0x7fb02403ae00] i8 v,h,dc,ddl,ddr,vr,hd,vl,hu: 17% 48% 28%  1%  0%  0%  1%  1%  3%
[libx264 @ 0x7fb02403ae00] i4 v,h,dc,ddl,ddr,vr,hd,vl,hu: 27% 43% 10%  2%  3%  3%  4%  2%  6%
[libx264 @ 0x7fb02403ae00] i8c dc,h,v,p: 30% 60%  9%  2%
[libx264 @ 0x7fb02403ae00] Weighted P-Frames: Y:0.4% UV:0.2%
[libx264 @ 0x7fb02403ae00] ref P L0: 87.2%  5.6%  6.1%  1.0%  0.0%
[libx264 @ 0x7fb02403ae00] ref B L0: 66.3% 32.0%  1.7%
[libx264 @ 0x7fb02403ae00] ref B L1: 96.3%  3.7%
[libx264 @ 0x7fb02403ae00] kb/s:110.07
[aac @ 0x7fb02400d000] Qavg: 232.021
</shell>



