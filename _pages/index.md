---
cover: false
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /images/qr-background.jpg
  og_image: /images/dyvershands-card.jpg
title: Welcome to Dyvers Hands Productions
hide_description: true
classes:
  - wide
permalink: /index.html
---

![Dyvers Hands Logo (portrait white on black)](./_assets/images/logos/dyvers_hands_portrait_white_on_black.svg){: .align-center height="20%" width="20%" }

At Dyvers Hands Productions, we are passionate about creating and developing collaborative storytelling experiences across a wide range of media. Our focus includes tabletop games, online communities, comics, graphic novels, and short-story anthologies, and we hope to one day expand into TV and movies. We believe that the best stories are the ones told together, and our mission is to foster creativity, promote collaboration, and bring people together through immersive and engaging gameplay.

One of our core initiatives is the development of shared worlds, where creators can come together to contribute and expand on unique and diverse story settings. By inviting writers, artists, and game designers to participate in the creation of these shared universes, we aim to cultivate a rich and vibrant community of creators who share a common vision and passion for storytelling.

Our latest project, Tableau, is a storytelling game system that emphasizes shared storytelling and character development, and we are currently seeking support on Kickstarter. As we continue to grow, we remain committed to providing opportunities for creators to join us in crafting unforgettable stories and experiences that unite and inspire us all.

## News

<ul>
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

See the _[complete posts archive](/posts/)._


**Games:**

- [Tableau Kickstarter](https://www.kickstarter.com/projects/christophera/tableau-twilight-road-and-gate-watch-playsets-quickstarter?ref=7c3fvi) - Discover the joy of collaborative storytelling with Tableau, a versatile game system that encourages creativity and character development across diverse genres. Pledge your support on Kickstarter today and be among the first to experience immersive, narrative-driven gameplay with our inaugural playsets, Twilight Road and Gate Watch. Don't miss this opportunity to embark on transformative journeys and create unforgettable stories together. [Pledge now!](https://www.kickstarter.com/projects/christophera/tableau-twilight-road-and-gate-watch-playsets-quickstarter?ref=7c3fvi))

- [Gate Watch: 1st Edition (2019)](GateWatch) - The original 18-card version of Gate Watch, successfully Kickstarted in 2019.

<form style="border:1px solid #ccc;padding:3px;text-align:center;" action="https://tinyletter.com/DyversHands" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/DyversHands', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><label for="tlemail">Subscribe to our low volume announcements list for books, comics, games<br/>and other content from Dyvers Hands Productions.</label></p><p><input type="text" style="width:140px" name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /><p><a href="https://tinyletter.com" target="_blank">powered by TinyLetter</a></p></form>
