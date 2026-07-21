---
title: "Design Notes"
permalink: /design-notes/
image: /assets/images/pages/design_notes_og_1200_630.jpg
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /assets/images/pages/design_notes_banner_1280_360.jpg
  og_image: /assets/images/pages/design_notes_og_1200_630.jpg
  show_overlay_excerpt: false
classes:
  - wide
author_profile: true
author: Christopher Allen
---

<style>
/* Full-band masthead: size the hero to the full 1280x360 banner (not a cover-cropped
   title slice) and suppress the theme H1 (kept in the DOM for SEO and screen readers),
   since the title is baked into the banner artwork. */
.page__hero--overlay{ padding-top:0 !important; padding-bottom:0 !important; min-height:0 !important; aspect-ratio:1280 / 360; }
.page__hero--overlay .page__title,
.page__hero .page__title{ position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>

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
