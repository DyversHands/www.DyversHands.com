---
# ==============================================================================
# JEKYLL CONFIGURATION
# These settings control how Jekyll processes and displays this page
# ==============================================================================

layout: splash
permalink: /Comics/graphic-novel-script-format-template
published: true  # Jekyll setting: true = page is rendered, false = page is hidden
categories: [script, sample-series]

# Page Display Settings
classes:
  - script-page

cover: false
hide_description: true
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /images/sample-cover.jpg

# ==============================================================================
# COMIC METADATA
# Information about the comic book/graphic novel itself
# ==============================================================================

# Basic Issue Information
title: "Sample Comic Title"
series: "Sample Series"
issue: 1
issue_title: "Sample Issue Subtitle"

# Creative Team
creators:
  writers: John Smith
  artists: Jane Artist
  letterers: Lex Graphix
  editors: Sample Editor
  cover_artists: Jane Artist

# Publication Details
publication_status: "Unpublished"  # Options: Published, Unpublished, In Development
first_published_date: 2025  # Year of first publication (if published)
publisher: "Sample Press Publishing"
script_version: "v1.0"
script_status: "Draft"  # Options: Draft, Final, Revised

# Story Information
synopsis: >
  Jane Doe uncovers a sinister plot beneath the streets of Sample City. As reality
  bends and fractures, the line between memory and magic begins to unravel.
logline: "A reluctant hero navigates a city haunted by past trauma and future horrors."
tagline: "Magic hides in the cracks of the familiar."
main_characters: "Jane Doe"
setting: "Sample City, Modern Day"

# Genre and Classification
genres:
  - "Horror"
  - "Urban Fantasy"
  - "Mystery"
rating: "Teen+"
keywords:
  - "supernatural"
  - "memory"
  - "urban decay"

# Series/Arc Information
continuity:
  arc: "Urban Echoes"
  placement: "Issue 1 of Arc"
  timeline: "Winter 2025"
arc_total_issues: 4

# Adaptation Information (if applicable)
runtime: "Estimated 90 mins if adapted to screen"
aspect_ratio: "2.39:1"
language: "English"
subtitle_languages:
  - "Spanish"
  - "French"
adaptation_notes: >
  This comic is structured for both print and screen adaptation. Each page maps 
  to a scene beat, with room for pacing and visual rhythm.

# Legal Information
copyright: "© 2025 Sample Press Publishing"
license: "Creative Commons BY-NC-SA 4.0"
license-short: CC-BY-NC-SA
license-long: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"
license-url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
rights_holder: "Sample Press Publishing"
---

# 📘 {{ page.title }} – Issue {{ page.issue }}

> Written by {{ page.creators.writers }}  
> Art by {{ page.creators.artists }}  
> Lettering by {{ page.creators.letterers }}  
> Published by {{ page.publisher }}  
> First published: {{ page.first_published_date }}  
>
> {{ page.copyright }}, licensed {{ page.license-short }}.  
> This work is licensed [{{ page.license-long }}]({{ page.license-url }}).  
>
> This script is part of the *{{ page.series }}* series.  
> *{{ page.series }}*™ is a trademark of {{ page.rights_holder }}.  

---

## 🗂️ Issue Overview

> **Title:** {{ page.issue_title }}  
> **Series:** {{ page.series }}  
> **Arc:** {{ page.continuity.arc }}  
> **Arc Placement:** {{ page.continuity.placement }}  
> **Issue:** {{ page.issue }} of {{ page.arc_total_issues }}  
> **Continuity Date:** {{ page.continuity.timeline }}  
> **Setting:** {{ page.setting }}  
> **Main Characters:** {{ page.main_characters }}  
> **Synopsis:** {{ page.synopsis }}  
>
> **Logline:** {{ page.logline }}  
> **Tagline:** *{{ page.tagline }}*  
> **Genres:** {{ page.genres | join: ', ' }}  
> **Rating:** {{ page.rating }}  
> **Keywords:** {{ page.keywords | join: ', ' }}  
>
> **Runtime (Adaptation Estimate):** {{ page.runtime }}  
> **Aspect Ratio (Suggested for Screen):** {{ page.aspect_ratio }}  
> **Language:** {{ page.language }}  
> **Subtitles Available:** {{ page.subtitle_languages | join: ', ' }}  
> **Adaptation Notes:** {{ page.adaptation_notes }}

### 📝 Script Notes

  > 🎨 ARTIST: Maintain realism with subtle surreal cues. Use strong shadows and ambient details to create unease.

  > 🎭 COSTUME: Jane's trench coat should appear increasingly worn through the issue.

  > 📦 PROP: The pendant must always be visible when Jane speaks with the ghost.

  > 🌫️ ATMOSPHERE: A humid, cold quality to all indoor scenes. Mist clings to windows.

  > 📎 REFERENCE: Inspiration for city layout from Fritz Lang's *Metropolis*.

  > 📎 REFERENCE: See aerial image reference: /images/skylines/sample.jpg

---

### 📄 **Page One**

  > 🔲 PANEL LAYOUT: Full-page splash panel.

#### 🖼️ **PANEL ONE**

  > 🎨 ARTIST: Bird's-eye view of Sample City skyline at dusk, Jane walking alone. Cold palette.
  > 🌆 BACKGROUND: Include faded billboard advertising "DreamTech"
  > 🌀 FLASHBACK: Color tones shift to pale sepia.
  > 📎 REFERENCE: https://unsplash.com/photos/cityscape

  - **🎙️ CAPTION (JANE):**<br/> You never forget the first time you see it from above.
  - **🔊 SFX (AMBIENT):**<br/> wind whistling

---

### 📄 **Page Two**

  > 🔲 PANEL LAYOUT: 3 top panels, 1 wide panel below.

#### 🖼️ **PANEL ONE**

  > 🎨 ARTIST: Close-up of Jane's eye. Reflections hint at a ghostly figure.

  - **🎙️ CAPTION (NARRATOR):**<br/> There are cracks in every surface.

#### 🖼️ **PANEL TWO**

  > 🎨 ARTIST: Side view of Jane on a subway train. Reflections distort in the glass.

  - **🗣️ JANE (BALLOON):**<br/> You see it too, right?
  
  > ✍️ LETTERER: Jane's dialogue should have a whispery tail.

#### 🖼️ **PANEL THREE**

  > 🎨 ARTIST: Insert of a pendant glowing faintly against her coat.

  - **🔊 SFX (MAGIC):**<br/> thrum-thrum-thrum

#### 🖼️ **PANEL FOUR**

  > 🎨 ARTIST: A wide shot of the train speeding into the underground tunnel. Mist trailing.

  - **🎙️ CAPTION (JANE):**<br/> It always begins underground.

---

### 📄 **Page Three**

  > 🔲 PANEL LAYOUT: 2x2 grid

#### 🖼️ **PANEL ONE**

  > 🎨 ARTIST: Interior hallway, flickering lights. Jane's shadow splits into two.

  - **🗣️ VOICE (OFF-PANEL):**<br/> Jane…?
  - **🔊 SFX (ELECTRICAL):**<br/> bzzzZT

#### 🖼️ **PANEL TWO**

  > 🎭 COSTUME: Jane's scarf is now twisted unnaturally.

  - **🗣️ JANE (THOUGHT BALLOON):**<br/> Not again. Not this soon.

#### 🖼️ **PANEL THREE**

  > 🎨 ARTIST: Flashlight beam reveals a sigil on the wall.

  - **🎙️ CAPTION (JANE):**<br/> I've seen that mark before.

#### 🖼️ **PANEL FOUR**

  > 🎨 ARTIST: Close-up on Jane's hand brushing over the sigil.

  > ♻️ REUSE PANEL: Page 2, Panel 3 (same pendant glow and composition).

  - **🔊 SFX (MAGIC):**<br/> humMMM

  > 📎 REFERENCE: Arcane sigil sketch: ![Arcane Sigil](/assets/img/references/sigil-sketch.png "Glowing arcane image on black background")

---

## Layout Examples

### Panel Layout Descriptions

- **🔲 STANDARD SIX-PANEL GRID:** Two rows of three panels each
- **🔲 NINE-PANEL GRID:** Three rows of three panels each
- **🔲 WIDESCREEN:** Three horizontal panels stacked
- **🔲 VERTICAL STACK:** One tall panel on left, smaller panels on right
- **🔲 SPLASH PAGE:** Full page single image
- **🔲 DOUBLE-PAGE SPREAD:** Image spans across two facing pages

---

## Notes for Graphic Novel Script Writers

1. **Visual Storytelling**: Remember that comics are a visual medium. Show don't tell.
2. **Panel Economy**: Each panel should advance the story or reveal character.
3. **Page Turns**: Use page turns for reveals and cliffhangers.
4. **Dialogue Brevity**: Keep dialogue concise. Comics have limited space.
5. **Artist Collaboration**: Leave room for artist interpretation while being clear about essential elements.

---

## 📌 Legend of Tags

### Script Formatting Elements

> **📘** - Issue/series markers <br/>
> **🗂️** - Organizational sections <br/>
> **📝** - Script notes for overall script <br/>
> **📄** - Page markers   <br/>
> **🖼️** - Panel designator  <br/>
> **🔲** - Panel layout instructions <br/>
> **🎬** - Panel markers and layout instructions (alternative to 🖼️) <br/>
> **🎨** - Artist notes and visual direction <br/>
> **🎙️** - Captions (narrator or character internal monologue) <br/>
> **🗣️** - Character dialogue (spoken) <br/>
> **🔊** - Sound effects (SFX) <br/>
> **✍️** - Letterer notes <br/>
> **🎭** - Costume notes <br/>
> **📦** - Prop notes <br/>
> **🌫️** - Atmosphere/mood notes <br/>
> **🌆** - Background/setting notes <br/>
> **🌀** - Flashback/time shift indicators <br/>
> **♻️** - Panel reuse instructions <br/>
> **📎** - Reference links/images <br/>

### Dialogue Types

- **(BALLOON)** - Standard speech balloon
- **(THOUGHT BALLOON)** - Internal thoughts
- **(OFF-PANEL)** - Voice from outside the panel
- **(WHISPER)** - Quiet/whispered dialogue
- **(SHOUT)** - Loud/shouted dialogue
- **(ELECTRONIC)** - Radio, phone, or digital voice

### Sound Effect Types

- **(AMBIENT)** - Environmental sounds
- **(IMPACT)** - Collision/hit sounds
- **(ELECTRICAL)** - Electronic/energy sounds
- **(MAGIC)** - Supernatural sounds
- **(MECHANICAL)** - Machine/device sounds

---

## GNSF Template Version History

- **v1.0** - Initial draft template (Current)

---

*End of GNSF Template*
