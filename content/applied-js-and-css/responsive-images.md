---
title: Responsive Images
order: 30
---

<div class="alert"><strong>ToDo</strong> fertig stellen </div>


Bilder mit doppelter und vierfacher Pixeldichte.



## Bilder erzeugen

Auf Mac und Unix kann man die "imagemagick" command line tools
benutzen um die nötigen Bild-Varianten zu erstellen: mit `identify`
kann man Größe und Format von Bildern feststellen, mit `mogrify -geometry`
kann man die Größe eines  Bildes verändern:

<shell>
$ identify reviews*
reviews.jpg JPEG 7117x4090 7117x4090+0+0 8-bit sRGB 45.56MB 0.000u 0:00.000

$ cp reviews.jpg reviews-4000x.jpg

$ mogrify -geometry 4000x reviews-4000x.jpg

$ identify reviews-4000x.jpg
reviews-4000x.jpg JPEG 4000x2299 4000x2299+0+0 8-bit sRGB 13.94MB 0.010u 0:00.019

$ cp reviews-4000x.jpg reviews-2000x.jpg

$ mogrify -geometry 50% reviews-2000x.jpg

$ identify reviews-2000x.jpg
reviews-2000x.jpg JPEG 2000x1150 2000x1150+0+0 8-bit sRGB 3.584MB 0.000u 0:00.009

$ cp reviews-2000x.jpg reviews-1000x.jpg

$ mogrify -geometry 50% reviews-1000x.jpg

$ identify reviews*
reviews-1000x.jpg JPEG 1000x575 1000x575+0+0 8-bit sRGB 839KB 0.000u 0:00.000
reviews-2000x.jpg JPEG 2000x1150 2000x1150+0+0 8-bit sRGB 3.584MB 0.000u 0:00.000
reviews-4000x.jpg JPEG 4000x2299 4000x2299+0+0 8-bit sRGB 13.94MB 0.000u 0:00.000
reviews.jpg JPEG 7117x4090 7117x4090+0+0 8-bit sRGB 45.56MB 0.000u 0:00.000

$ du -h reviews*
820K  reviews-1000x.jpg
3,4M  reviews-2000x.jpg
 13M  reviews-4000x.jpg
 43M  reviews.jpg    
</shell>

## Hintergundbild füllt Raum aus

<css>
.reviews .background-image{
  background-image: url(../img/reviews-1000x.jpg);
  background-size: cover;  
}
</css>

## Responsive Background Images

<css>
.reviews .background-image{
  background-image: url(../img/reviews-1000x.jpg);
  background-size: cover;
}


@media (min-resolution: 2dppx) {
  .reviews .background-image {
    background-image: url(../img/reviews-2000x.jpg);
  }
}
</css>




