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

- Un terminal est le owner de la playlist, c'est lui qui diffusera le son et aura certain privilège
- Les autres terminaux sont des contributeurs et peuvent modifier la playlist

La simplicité d'utilisation étant au coeur de mes préocupation, il suffit de partager l'url de la playlist (à l'oral ou via le QRcode) pour y accéder et la modifier.

On peut ajouter des musiques de youtube ou directement des fichiers mp3 stockés sur le terminal (pc ou téléphone par exemple).

Le transfert s'effectue en peer-to-peer via la technologie webRTC.
Cette technologie présente les avantages suivants :

- Respect de la confidentialité des données, toutes les informations sont stockés chez les utilisateurs
- Pas besoin de mettre en place un backend, donc réduction des coûts et de la maintenance  
- Affranchissement des problèmes liés aux licences des fichiers mp3 car il ne sont jamais stockés sur un serveur

Ce projet possède plusieurs limitations :

- La technologie est jeune et n'est pas completement implémenté dans les navigateurs (Safari par exemple)
- Il semblerait que les opérateurs téléphoniques n'autorisent pas encore ce type de connection sur les reseaux mobiles (3G ou 4G)
- S'il n'y a plus de serveur faisant office d'autorité centrale, comment assuré l'identité des utilisteurs et surtout du proprietaire de la playlist

Pour ce dernier point, il serait possible d'utiliser la technologie blockchain qui assure l'intégrité et l'immutabilité d'une information. Je vous renvoi au livre traitant du bitcoin (le bitcoin est construit sur une blockchain) et au reseau ethereum qui permet d'implémenter ce type d'infrastructure.
