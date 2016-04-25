+++
date = "2015-09-29T19:42:20+02:00"
description = "Create and use a collaborative and decentralized playlist."
title = "MeetMusic"
weight=20
cv="dataGraphExample/filters/dataGraph.html"

images = ["img/projects/meetMusic.png","img/projects/meetMusic_2.png","img/projects/meetMusic_3.png"]

+++
[MeetMusic](http://erik-aouizerate.me/meetMusic/) is a collaborative playlist allow to add or remove a music from any terminal.

The use case is :

- One terminal is the playlist's owner, It's him who play sound and have privileges
- Other terminals are contributors and can edit playlist

For a simple use, it just need to share url to edit the playlist.  
We can add song from youtube or directly mp3 from the terminal (computer or smartphone for exemple).

It is a peer-to-peer transfert that use [webRTC](https://webrtc.org/) technology.  
This project have some limits:

- This technology is young and not fully implemented in browsers (safari for exemple)
- It's not working on mobile network (3G ou 4G)
- The lack of central authority server force to use [bitcoin / blockchain](https://bitcoin.org/bitcoin.pdf) technology and in particular [ethereum](https://www.ethereum.org/) to guarantee the owner identity

Source code available on [GitHub](https://github.com/mejjjor/dataGraph).
