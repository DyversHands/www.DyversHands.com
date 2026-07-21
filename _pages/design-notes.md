---
title: "Design Notes"
permalink: /design-notes/
image: /assets/images/pages/subscribe_og_1200_630.jpg
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /assets/images/pages/subscribe_banner_1280_360.jpg
  og_image: /assets/images/pages/subscribe_og_1200_630.jpg
classes:
  - wide
author_profile: true
author: Christopher Allen
---

These are my design notes &mdash; first-person reflections on the craft behind the games I make, from Tableau to the projects still taking shape. I'm Christopher Allen, a creator and publisher of cooperative storytelling games, fascinated by how and why collaboration works at the table. [More about me &rarr;](/About/ChristopherA/)

{% assign design_notes = site.categories['Design Notes'] %}
{% if design_notes and design_notes.size > 0 %}
<div class="entries-list">
  {% for post in design_notes %}
  <article class="archive__item">
    {% if post.header.teaser %}
    <div class="archive__item-teaser">
      <a href="{{ post.url | relative_url }}"><img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }}"></a>
    </div>
    {% endif %}
    <h2 class="archive__item-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.subtitle %}<p class="archive__item-excerpt"><em>{{ post.subtitle }}</em></p>{% endif %}
    <p class="page__meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
    <p class="archive__item-excerpt">{{ post.excerpt | strip_html | strip_newlines | truncatewords: 50 }}</p>
  </article>
  {% endfor %}
</div>
{% else %}
No design notes yet &mdash; check back soon.
{% endif %}
