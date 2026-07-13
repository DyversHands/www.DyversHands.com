---
title: Auspice
subtitle: Storytelling, One Question at a Time
hide_description: true
author: DyversHands
author_profile: false
summary: Auspice is a line of GM-less story games told through a deck of prompts,
  answered one question at a time.
image: /assets/images/posts/the-launch-cover.jpg
cover: false
header:
  overlay_image: /assets/images/games/auspice/auspice_banner_1280_360.jpg
  overlay_filter: "0.1"
  overlay_color: "#481E5F"
  show_overlay_excerpt: false
classes:
  - wide
permalink: /games/Auspice/
redirect_from:
  - /Auspice
  - /Auspice/
  - /auspice/
  - /AuspiceGames/
  - /auspiceGames/
  - /auspiceGames
  - /games/auspice/
the_launch:
  - url: /games/Auspice/TheLaunch/
    image_path: /assets/images/posts/the-launch-cover.jpg
    alt: "The Launch, an Auspice story game"
    title: "The Launch"
    btn_label: "Read More…"
    btn_class: "btn--inverse"
    excerpt: "A story game of leaving, the long dark, and taking root. A people build a ship and cross the void from a home that can no longer hold them, carrying what they hope is enough to begin again. Three to five players, one evening, no game master."
---

<style>
/* The banner carries the Auspice wordmark and tagline, so suppress the theme's hero
   title (kept in the DOM for SEO and screen readers) and size the hero band to the
   full 1280x360 banner so its composition is not cover-cropped. */
.page__hero--overlay{ padding-top:0 !important; padding-bottom:0 !important; min-height:0 !important; aspect-ratio:1280 / 360; }
.page__hero--overlay .page__title,
.page__hero .page__title{ position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>

**Auspice** is a line of GM-less story games you play from a deck of prompts. There is no game master and almost nothing to learn. You draw a card, answer the question it asks, and pass the deck along. From those answers, taken one at a time, a whole story builds itself at the table.

Each Auspice game gives that simple shape a world of its own: a crew leaving a home that can no longer hold them, a family and the thing it hands down, a circle of friends with a secret among them. Most seat three to five players for a single evening, needing little more than the deck and the people around the table. A good question, honestly answered, becomes a story.

## The name

An auspice is a sign read for what is coming. The old augurs read theirs in the flight of birds; an Auspice table reads them in the answers around it, one question at a time, until a story is divined from them. The word has a hopeful sense too: to begin _under good auspices_ is to start under a favorable sign, the way every Auspice game opens, a table gathered in good faith to make something together.

## The Debut: The Launch

{% include feature_row id="the_launch" type="left" %}

## Coming Soon to the Auspice Line

More Auspice games are on the way:

**The Bequest.** A story game of a family and the thing it hands down, one generation to the next, and what it asks of the one who carries it.

**In Confidence.** A story game of masks, whispers, and one poisoned pen: a circle of friends at the Grand Hotel, and a rumor that one among them holds the Poison Pen.

**The Long Watch.** A story game of the long vigil at a threshold, the watch that keeps it, and the night it finally stirs.

## Latest News about Auspice

{% assign auspice_posts = site.tags.Auspice %}
{% if auspice_posts.size > 0 %}
<ul>
  {% for post in auspice_posts limit: 7 %}
    {% if post.url %}
      <li><a href="{{ post.url }}">{{ post.date | date: '%B %d, %Y' }}: {{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

See the _[complete posts archive](/posts/)._
{: .text-right}
{% else %}
_Design notes and announcements for the Auspice line are on the way. Check back soon._
{: .notice--info}
{% endif %}

### Mailing List

Sign up for the [Dyvers Hands Announcements Mailing List](/Subscribe) to be the first to hear about new Auspice games and releases.

### Credits

Written & Designed by: Christopher Allen <ChristopherA@DyversHands.com>

©2026 by Dyvers Hands Productions, LLC.

In the wider tradition of Alex Roberts' *For the Queen*. Dyvers Hands™ is a trademark of Dyvers Hands Productions, LLC.
