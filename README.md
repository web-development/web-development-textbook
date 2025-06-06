# Das Buch 'Web Development'

A german language Textbook on Web Development. Developed on github, published at
http://web-development.github.io

I try to keep up to date with baseline features (e.g. [baseline 2025](https://web.dev/baseline/2025?hl=en)),
and keep an I out for interop (e.g. [interop 2025](https://wpt.fyi/interop-2025) will be relevant in 2026)

## Similar Projects

https://github.com/getify/You-Dont-Know-JS - only Javascript, in English
Very good!

## How to Read the book

Point your browser at
http://web-development.github.io

## How to contribute small changes

Look at the source repository at

https://github.com/web-development/web-development-textbook

You can fork it on github, and browse to the folder **content**... you'll find
all the texts there.  Use githubs editing capability to fix
typos, add clarifications.

Send me a pull request when you're done.

## How to contribute large changes - with docker (UNFINISHED)

fork the repository
https://github.com/web-development/web-development-textbook

have a look at the Dockerfile to make sure everything is ok,
then run

  docker build . -t bjelline/nanoc
  docker run -rm --volume ./output:/output --volume ./source:/source bjelline/nanoc compile

after a few seconds you can now view the page on http://localhost:3000

## How to contribute large changes - with ruby

Same as before: fork the repository
https://github.com/web-development/web-development-textbook

install the right ruby version (see Gemfile) on your computer.
With ruby you also get bundle. Now install the dependencies with bundle:

  bundle install

run nanoc in the root folder like so:

  bundle exec nanoc live
 
now edit the files in content/* and see the results at http://localhost:3000/

When you are content with your changes, push up to your own github repository,
and send me a pull request.

## How the images were generated:

  pushd content/images/responsive-images

  convert japanischer-garten.jpg -geometry 350x japanischer-garten_350px.jpg
  convert japanischer-garten.jpg -geometry 701x japanischer-garten_701px.jpg
  convert japanischer-garten.jpg -geometry 1401x japanischer-garten_1401px.jpg
  convert japanischer-garten.jpg -geometry 2802x japanischer-garten_2802px.jpg
  convert japanischer-garten.jpg -geometry 4500x japanischer-garten_4500px.jpg
  convert japanischer-garten.jpg -geometry 6000x japanischer-garten_6000px.jpg


  convert japanischer-garten_350px.jpg  -gravity northeast -fill red -annotate +50+5 '350px' japanischer-garten_350px.webp
  convert japanischer-garten_701px.jpg  -gravity northeast -fill red -annotate +80+10 '701px' japanischer-garten_701px.webp
  convert japanischer-garten_1401px.jpg  -gravity northeast -fill red -pointsize 36 -annotate +150+20 '1401px' japanischer-garten_1401px.webp
  convert japanischer-garten_2802px.jpg  -gravity northeast -fill red -pointsize 72 -annotate +300+40 '2802px' japanischer-garten_2802px.webp
  convert japanischer-garten_4500px.jpg  -gravity northeast -fill red -pointsize 140 -annotate +600+80 '4500px' japanischer-garten_4500px.webp
  convert japanischer-garten_6000px.jpg  -gravity northeast -fill red -pointsize 280 -annotate +1200+160 '6000px' japanischer-garten_6000px.webp

  rm japanischer-garten_*.jpg

  popd
