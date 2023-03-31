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

At Dyvers Hands Productions, we craft collaborative storytelling experiences across various media, focusing on tabletop games, shared worlds, and beyond. Our passion lies in uniting creators to build unforgettable stories that inspire. Discover our latest project, [Tableau](https://www.kickstarter.com/projects/christophera/tableau-twilight-road-and-gate-watch-playsets-quickstarter?ref=7c3fvi), a storytelling game emphasizing character development, just launched on [Kickstarter](https://www.kickstarter.com/projects/christophera/tableau-twilight-road-and-gate-watch-playsets-quickstarter?ref=7c3fvi).

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
