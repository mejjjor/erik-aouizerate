+++
date = "2015-09-29T19:42:20+02:00"
description = "Create and use a collaborative and decentralized playlist."
title = "MeetMusic"
weight=20
cv="dataGraphExample/filters/dataGraph.html"

images = ["img/projects/meetMusic.png","img/projects/meetMusic_2.png","img/projects/meetMusic_3.png"]

+++
[MeetMusic](http://erik-aouizerate.me/meetMusic/) is a collaborative playlist allows to add or remove a music from any terminal.

How to use this application :

- One terminal owns the playlist which commands the sound, as well as having certain privileges
- Other terminals are contributors and can edit playlist

To simplify usage just share address to edit the playlist.  
You can add song from youtube or mp3 directly from the terminal (computer or smartphone for exemple).

It is a peer-to-peer transfert that use [webRTC](https://webrtc.org/) technology.  
This project have some limits:

- This technology is young and not fully implemented in browsers (safari for exemple)
- It does not work on mobile network (3G ou 4G)
- The lack of a central authority server forces to use [bitcoin / blockchain](https://bitcoin.org/bitcoin.pdf) technology and in particular [ethereum](https://www.ethereum.org/) to guarantee owner identity

Source code available on [GitHub](https://github.com/mejjjor/dataGraph).
