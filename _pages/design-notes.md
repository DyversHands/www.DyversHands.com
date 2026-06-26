---
title: "Design Notes"
permalink: /design-notes/
classes:
  - wide
author_profile: true
---

Game-design notes from Dyvers Hands Productions &mdash; reflections on the craft behind our games, the ones in print and the ones still taking shape.

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
