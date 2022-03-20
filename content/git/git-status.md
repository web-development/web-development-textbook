---
title: Status von Git abfragen
order: 35
---

Mit dem Befehl `git status` kann man den aktuellen Zustand des lokalen Repositories und der working copy abfragen.

Clean
------

Bevor man mit der Arbeit beginnt ist die working copy clean:

      D:\Webprojekte\wp2>git status
      On branch main
      Initial commit
      nothing to commit (create/copy files and use "git add" to track)



Changed but not updated
------

Wenn ich nun zwei Dateien verändere zeigt mir git status das genau an:

      D:\Webprojekte\wp2>git status
      # On branch main
      #
      # Changed but not updated:
      #   (use "git add <file>..." to update what will be committed)
      #   (use "git checkout -- <file>..." to discard changes in working directory)
      #
      #       modified:   bestellung.php
      #       modified:   form.html
      #
      no changes added to commit (use "git add" and/or "git commit -a")

Changes to be commited
------

Nach dem git add werden die beiden Dateien als gestaged angezeigt:

      D:\Webprojekte\wp2>git status
      # On branch main
      #
      # Changes to be committed:
      #   (use "git reset HEAD <file>..." to unstage)
      #
      #       modified:   bestellung.php
      #       modified:   form.html
      #

Nach dem Commit ist die working copy wieder clean.

git log
------

Mit git log kann man die alten Commits anzeigen:

      D:\Webprojekte\wp2>git log
      commit 611a84e34ee4eb7de3264befc07cede24e0f3bfa
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Feb 27 15:06:54 2013 +0100

          von get auf post umgestellt - wir sind restful!

      commit a86390b0d0ae00ae35b2110657d7c11b1fd41e9a
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Feb 27 15:06:26 2013 +0100

          bestellung funktioniert jetzt

      commit 21c7ff3047cb710cb2edb554545582ee7f7ce74d
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Feb 27 15:05:43 2013 +0100

          bestellformular da, bestellung geht noch nicht

git log optionen
------

für git log gibt es viele verschiedene optionen, die verschiedene Details anzeigen, z.B. --numstat zeigt die Anzahl der hinzugefügten und gelöschten Zeilen in jeder veränderten Datei

      D:\Webprojekte\wp2>git log –numstat
      commit d01a7db9b741b14dfb95dc810b4c002122565560
      Author: Brigitte Jellinek <brigitte.jellinek@fh-salzburg.ac.at>
      Date:   Wed Mar 23 17:07:44 2011 +0100

          von get auf post umgestellt - wir sind restful!

      17      5       bestellung.php
      10      7       form.html







