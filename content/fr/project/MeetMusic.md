+++
date = "2015-09-29T19:42:20+02:00"
description = "Créer et utiliser une playlist musicale collaborative et décentralisée."
title = "MeetMusic"
weight=20
cv="dataGraphExample/filters/dataGraph.html"

images = ["img/projects/meetMusic.png","img/projects/meetMusic_2.png","img/projects/meetMusic_3.png"]

+++
[MeetMusic](http://erik-aouizerate.me/meetMusic/) est une playlist collaborative afin que chacun puisse facilement et via n'importe quel terminal connecté ajouter ou enlever une musique.

Le cas d'utilisation est le suivant :

- Un terminal est le owner de la playlist, c'est lui qui diffusera le son et aura certains privilèges
- Les autres terminaux sont des contributeurs et peuvent modifier la playlist

Afin de simplifier l'utilisation de cette application, il suffit de partager l'url de la playlist pour y accéder et la modifier.  
On peut ajouter des musiques de youtube ou directement des fichiers mp3 stockés sur le terminal (pc ou téléphone par exemple).

Le transfert s'effectue en peer-to-peer via la technologie [webRTC](https://webrtc.org/).  
Ce projet présente quelques limitations :

- La technologie est jeune et n'est pas completement implémenté dans les navigateurs (Safari par exemple)
- Il semblerait que les opérateurs téléphoniques n'autorisent pas encore ce type de connexion sur les réseaux mobiles (3G ou 4G)
- L'absence de serveur faisant office d'autorité centrale oblige à utilisé la technologie [bitcoin / blockchain](https://bitcoin.org/bitcoin.pdf) et notamment [ethereum](https://www.ethereum.org/) pour garantir l'identité du proprietaire de la playlist