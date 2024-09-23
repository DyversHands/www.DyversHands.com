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
    <i> ChristopherA@DyversHands.com </i>
    <br>
    <i> c 2024 by Dyvers Hands Productions, LLC, r2av1 2024-08 </i>"
    position_title: left

  - url: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_01_SettingThe_Table.jpg
    image_path: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_01_SettingThe_Table.jpg
    alt: "Setting The Table"
    title: "<strong>1. Setting The Table</strong>
    <br/><br/> 
    <strong><i>We begin our storytelling session by establishing our <strong>RULES</strong> 🧾 & STORY 📖 ELEMENTS 🧩 on THE TABLE</strong> 🛋️:</i></strong> 
    <br/><br/> 
    <ul> 
      <li>The way we play together, and our dynamic storytelling choices are represented by <strong>ELEMENTS</strong> 🧩 on <strong>THE TABLE</strong> 🛋️.</li>
      <li>These include various <strong>RULES</strong> 🧾 and <strong>STORY</strong> 📖 aspects written on <strong>ELEMENT</strong> 🧩 <strong>CARDS</strong> 📝 from a <strong>STORYSET</strong> 📚 or on blank <strong>CARDS</strong> 📝 that we create together.</li>
      <li>Taking turns, we each propose an <strong>ELEMENT</strong> 🧩 <strong>CARD</strong> 📝 or create our own <strong>ELEMENT</strong> 🧩 by writing it up on a blank <strong>CARD</strong> 📝.</li>
      <li>We seek <strong>TABLE CONSENT</strong> 🤝 to ensure unanimous agreement – or at the least, no objections – before placing any <strong>ELEMENT</strong> 🧩 on <strong>THE TABLE</strong> 🛋️.</li><li>Resolve any <strong>ELEMENT</strong> 🧩 conflicts with <strong>TABLE CONSENT</strong> 🤝.</li>
      <li>We will remain open to refine our <strong>ELEMENTS</strong> 🧩 as the story evolves, allowing updates or removal from <strong>THE TABLE</strong> 🛋️ with <strong>TABLE CONSENT</strong> 🤝.</li>
    </ul>"
    position_title: right

  - url: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_02_InitialElements.jpg
    image_path: assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_SmallCard_02_InitialElements.jpg
    alt: "Initial Elements"
    title: "<strong>2. Initial Elements</strong>
    <br><br>
    <strong><i>Outline our story’s shape:</i></strong>
    <br><br>
    <ul>
      <li>To foster a safe, inclusive space, we first create, using a blank <strong>CARD</strong> 📝, our <strong>SAFETY</strong> 🔴          <strong>RULES</strong> 🧾, such as the simple but effective <i>X-Card</i>:
        <ul>
          <li>Tap this card if you experience any discomfort; no explanation is needed – the content is omitted.</li>
        </ul>
      </li>
      <li>If we are using <strong>ELEMENT</strong> 🧩 <strong>CARDS</strong> 📝 from a <strong>STORYSET</strong> 📚, we choose from them first. Read aloud their introductions and establish their <strong>TRUTHS</strong> ✝️.</li>
      <li>Create a <strong>PALETTE</strong> 🎨 on a blank <strong>CARD</strong> 📝 with a list of any narrative features we desire to explore in our story. On <strong>CONSTRAINTS</strong> 📑, we identify those narrative aspects we wish to avoid.</li>
      <li>We should define at least a <strong>GENRE</strong> 🔍 and one <strong>SETTING</strong> 🏙️, and consider adding a <strong>THEME</strong> 🎭 or <strong>TONE</strong> 🎶.</li>
      <li>Propose these collaboratively, one at a time, adding only with <strong>TABLE CONSENT</strong> 🤝.</li>
    </ul>"
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