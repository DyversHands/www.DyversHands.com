---
title: Auspice
subtitle: Storytelling, One Question at a Time
hide_description: true
author: DyversHands
summary: Auspice is a line of GM-less story games told through a deck of prompts,
  answered one question at a time.
image: /assets/images/posts/the-launch-cover.jpg
cover: false
header:
  overlay_color: "#481E5F"
  overlay_filter: "0.2"
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
    excerpt: "A story game of leaving, the long dark, and taking root. A crew builds a ship, leaves a home that can no longer hold them, crosses the void, and tries to make a colony live. Three to five players, one evening, no game master."
---

# Auspice

_**Storytelling, One Question at a Time**_

**Auspice** is a line of GM-less story games you play from a deck of prompts. There is no game master and almost nothing to learn. You draw a card, answer the question it asks, and pass the deck along. From those answers, taken one at a time, a whole story builds itself at the table.

Each Auspice game gives that simple shape a world of its own: a crew leaving a home that can no longer hold them, a family and the thing it hands down, a circle of friends with a secret among them. Most run three to five players over a single evening, needing little more than the deck and the people around the table. If you have played Alex Roberts' *For the Queen*, you know the feeling already: a good question, honestly answered, becomes a story.

## The Debut: The Launch

{% include feature_row id="the_launch" type="left" %}

## Coming Soon to the Auspice Line

More Auspice games are on the way:

**The Bequest.** A story game of a family and the thing it hands down, one generation to the next.

**In Confidence.** A prompt game of masks, whispers, and one poisoned pen: a circle of friends at the Grand Hotel, and a rumor that one of them holds the Poison Pen.

**The Long Watch.** A prompt game of the vigil at a threshold, and the night it finally stirs.

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

In the tradition of Alex Roberts' *For the Queen*. Dyvers Hands™ is a trademark of Dyvers Hands Productions, LLC.
