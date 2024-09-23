---
cover: false
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /images/qr-background.jpg
  # og_image: /images/games-card.jpg
title: Card Gallery
author: Dyvers Hands Productions
toc: true
toc_label: Card Gallery
hide_description: true
permalink: /cardgallery/

cardgallery_dark_expeditions:
  - url: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_00_Cover.jpg
    image_path: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_00_Cover.jpg
    alt: "Cover"
    title: "<strong>Tableau</strong>
    <br/><br/> 
    <strong><i>Collaborative Cinematic Storytelling:</i></strong> 
    <br/><br/>
    <strong><i>Accelerated Core💫 RULES 📑 </i></strong> 
    <p>Written & Designed by</p> 
    <br>
    <strong>Christopher Allen</strong>
    <br>
    <ChristopherA@DyversHands.com>"
    position_title: left
---


<style>
  {% include cardgallery.css %}
</style>

<div class="grid">
  {% for card in page.cardgallery_dark_expeditions %}
    <img src="/{{card.image_path}}" data-description="{{card.title | markdownify}}" data-side="{{card.position_title}}">
  {% endfor %}
</div> 

<script>
    {% include cardgallery.js %}
</script>