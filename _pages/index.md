---
cover: false
header:
  overlay_image: /assets/images/pages/dyvershands_banner_1280_360.jpg
  overlay_filter: "0.1"
  overlay_color: "#1a0a06"
  show_overlay_excerpt: false
title: Dyvers Hands Productions
subtitle: "The best stories are the ones we tell together"
hide_description: true
author: Dyvers Hands Productions
author_profile: false
classes:
  - wide
permalink: /index.html
---

<style>
/* The banner carries the Dyvers Hands wordmark and tagline, so suppress the theme's hero
   title (kept in the DOM for SEO and screen readers) and size the hero band to the full
   1280x360 banner so its composition is not cover-cropped. */
.page__hero--overlay{ padding-top:0 !important; padding-bottom:0 !important; min-height:0 !important; aspect-ratio:1280 / 360; }
.page__hero--overlay .page__title,
.page__hero .page__title{ position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>

At [Dyvers Hands Productions](/About), we craft collaborative storytelling experiences across various media, focusing on games, shared worlds, comics, anthologies, and beyond. Our passion lies in uniting creators to build unforgettable stories that inspire.

# Auspice Games

{% include auspice_news.md %}

<div style="width:50%; min-width:260px; max-width:480px;">
<a href="/games/Auspice/"><img src="/assets/images/games/auspice/the-launch-game-cover.jpg" alt="The Launch, an Auspice story game" style="width:100%; display:block;"></a>
<p style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:0.5em; margin-top:0.6em;">
<a href="/games/Auspice/" class="btn btn--inverse">The <em><strong>Auspice</strong></em> line…</a>
<a href="/games/Auspice/TheLaunch/" class="btn btn--inverse">Debut game: <em><strong>The Launch</strong></em>…</a>
</p>
</div>

_**Auspice**_ is our line of GM-less story games told one question at a time. Each game gives the table a deck of prompts and a shared situation, then gets out of the way: you take turns drawing, answering, and discovering together where the story goes. No game master, no preparation, one evening.

# Tableau Games

{% include tableau_news.md %}

<div style="width:50%; min-width:260px; max-width:480px;">
<a href="/Tableau"><img src="/assets/images/games/tableau/tableaucoreaccelerated/TableauCoreAccelerated_Small_Illustration_Table.jpg" alt="Tableau: Accelerated Core" style="width:100%; display:block;"></a>
<p style="margin-top:0.6em;">
<a href="/Tableau" class="btn btn--inverse">Read More about <em><strong>Tableau</strong></em>…</a>
</p>
</div>

_**Tableau**_ is our system of collaborative, cinematic storytelling. A modular deck of themes, tones, settings, and characters gives a group the pieces to build scenes and follow the questions that drive a story forward, in any genre, without a game master or preparation.

<!-- Future lines slot in here as sibling sections without reworking the above:
     Meeples Together (book), Lovecraft Country (comics, lovecraftcountry.com). Not built yet. -->

<div style="clear:both"></div>

## Latest News about Dyvers Hands

<ul>
{% for post in site.posts limit: 7 %}
<li><b>{{ post.date | date: "%b %-d, %Y" }}</b>{% if post.tags[0] %} &middot; <em>{{ post.tags[0] }}</em>{% elsif post.categories[0] %} &middot; <em>{{ post.categories[0] }}</em>{% endif %}<br/><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

See the _[complete posts archive](/posts/)._
{: .text-right}

### Mailing List

To stay updated on the latest news, including announcements about future products, future Kickstarter campaigns, and opportunities to playtest, sign up for our [Dyvers Hands Announcements Mailing List](/Subscribe). You'll be the first to know about exciting developments, promotions, and more.
