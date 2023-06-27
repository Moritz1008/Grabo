# "LinkShrink" - ein URL Shortener


# Gruppenmitglieder
- Moritz Riedel, 35596
- Alexander Schmid, 35603
- Andreas Ulrich, 33412

# Beschreibung
Mit LinkShrink kann man:
- URLs kuerzen und in einer Datenbank abspeichern
- beim Aufrufen der Seite bisher abgespeicherte URLs anschauen und in die Zwischenablage kopieren
- einzelne URLs wieder aus der Datenbank loeschen
- Die verkürzten Links auch an Freunde verschicken

Unsere Anwendung verwendet ein Node.js-Backend für die Interaktion mit einer MongoDB Atlas-Datenbank. Sowohl das Frontend als auch das Backend sind zur einfachen Bereitstellung mithilfe von Docker in Containern verpackt. Der Host des Docker Containers ist ein Fujitsu ThinClient S920. HTTPS und Subdomain-Management werden von NGINX übernommen. Datenpersistenz wird mit dem kostenlosen Kontingent von MongoDB Atlas erreicht.


# Fremder Code
Wir haben ChatGPT zur ursprünglichen erstellung eines (sehr einfachen) Grundgerüsts verwendet. 
Ebenso kam ChatGPT beim debugging zum Einsatz sowohl bei der Suche von zum Vue-Grün passenden Farbcodes.

Zum Nachschlagen bei Unklarheiten mit HTML, CSS oder JavaScript haben wir W3Schools verwendet.

Bei Unsicherheiten zu Vue war die Tutorial-Serie von The Net Ninja sehr hilfreich: 
https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1

# Die Datenbank
https://www.mongodb.com/atlas


# Anweisungen zum starten der Anwendung
```sh
npm install
```
```sh
npm run dev
```

# Link zur Anwendung (deployed)
https://grabo.riedel1.duckdns.org/

# Das Backend (deployed)
https://be.riedel1.duckdns.org/

# GitHub Repository (Frontend)
https://github.com/Moritz1008/Grabo

# GitHub Repository (Backend)
https://github.com/Moritz1008/grabo_backend