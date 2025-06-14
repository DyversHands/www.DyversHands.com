---
# ==============================================================================
# JEKYLL CONFIGURATION
# These settings control how Jekyll processes and displays this page
# ==============================================================================

layout: script
permalink: /Comics/graphic-novel-script-format-template
published: true  # Jekyll setting: true = page is rendered, false = page is hidden
categories: [script, sample-series]

# Page Display Settings
classes:
  - script-page
  - wide
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
>
> **Adaptation Notes:** {{ page.adaptation_notes }}

---

## Script Template

### 📄 **Page One**

  > [🎨 Artist Note: Full page splash. Establish the tone and atmosphere.]

#### 🎬 **PANEL ONE**

  > [🎨 Artist Note: Describe the visual composition, camera angle, lighting, and key elements in frame.]

- **📝 CAPTION:**<br/> Narrative text that sets the scene or provides internal monologue.

- **🗣️ CHARACTER NAME:**<br/> Dialogue goes here.

### 📄 **Page Two**

  > [🎨 Artist Note: Six-panel grid. Focus on character introduction.]

#### 🎬 **PANEL ONE**

  > [🎨 Artist Note: Medium shot. Character enters frame left.]

- **📝 CAPTION:**<br/> The city breathes in shadows.

#### 🎬 **PANEL TWO**

  > [🎨 Artist Note: Close-up on character's eyes. Show emotion.]

- **🗣️ JANE:**<br/> This isn't what I expected.

#### 🎬 **PANEL THREE**

  > [🎨 Artist Note: Wide shot. Reveal the environment.]

- **🗣️ VOICE (OFF-PANEL):**<br/> Nothing ever is.

#### 🎬 **PANEL FOUR**

  > [🎨 Artist Note: Over-the-shoulder shot. Jane turns toward voice.]

- **🗣️ JANE:**<br/> Who's there?

#### 🎬 **PANEL FIVE**

  > [🎨 Artist Note: Silhouette in doorway. Keep mysterious.]

- **🗣️ STRANGER:**<br/> Someone who knows the truth.

#### 🎬 **PANEL SIX**

  > [🎨 Artist Note: Extreme close-up on Jane's hand reaching for something.]

- **📝 CAPTION:**<br/> Every choice echoes forward.

---

## Layout Examples

### Panel Layout Descriptions

- **🎬 STANDARD SIX-PANEL GRID:** Two rows of three panels each
- **🎬 NINE-PANEL GRID:** Three rows of three panels each
- **🎬 WIDESCREEN:** Three horizontal panels stacked
- **🎬 VERTICAL STACK:** One tall panel on left, smaller panels on right
- **🎬 SPLASH PAGE:** Full page single image
- **🎬 DOUBLE-PAGE SPREAD:** Image spans across two facing pages

### Script Formatting Elements

- **📘** - Issue/series markers
- **📄** - Page markers  
- **🎬** - Panel markers and layout instructions
- **🎨** - Artist notes and visual direction
- **📝** - Captions and narrative text
- **🗣️** - Character dialogue
- **🗂️** - Organizational sections

---

## Notes for Writers

1. **Visual Storytelling**: Remember that comics are a visual medium. Show don't tell.
2. **Panel Economy**: Each panel should advance the story or reveal character.
3. **Page Turns**: Use page turns for reveals and cliffhangers.
4. **Dialogue Brevity**: Keep dialogue concise. Comics have limited space.
5. **Artist Collaboration**: Leave room for artist interpretation while being clear about essential elements.

---

## Script Version History

- **v1.0** - Initial draft template (Current)
- **v0.9** - Beta template structure
- **v0.8** - Early concept

---

*End of Template*