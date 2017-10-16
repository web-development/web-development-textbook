---
title: CSS Sprites
order: 27
---


CSS-Sprites
----------

Das Laden von vielen kleinen Icons über HTTP 1.1 kann sehr lange
dauern. Wenn man alle Bilder in ein Bild vereinigt muss nur noch
eine Datei geladen werden.  Das ist die Idee von CSS-Sprites.


![Abbildung 42: CSS Sprites von Yahoo](/images/yahoo-spritemap.png)

  So könnte der CSS Code aussehen:

<css>
.icon{
  display:block;
  padding:8px 0 9px 40px;
  background:url(http://us.i1.yimg.com/pa-icons2.gif) 5px 3px no-repeat;
}
#messenger .icon{
  padding-left:31px;
  background-position:2px -497px;
}
#music .icon{
  background-position:5px -197px;
}
</css>


