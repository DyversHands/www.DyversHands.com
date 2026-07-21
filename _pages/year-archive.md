---
title: "Posts"
permalink: /posts/
image: /assets/images/pages/posts_og_1200_630.jpg
classes:
- wide
header:
  overlay_color: "#000"
  overlay_filter: "0.25"
  overlay_image: /assets/images/pages/posts_banner_1280_360.jpg
  og_image: /assets/images/pages/posts_og_1200_630.jpg
  show_overlay_excerpt: false
author_profile: true
---

<style>
/* Full-band masthead: size the hero to the full 1280x360 banner (not a cover-cropped
   title slice) and suppress the theme H1 (kept in the DOM for SEO and screen readers),
   since the title is baked into the banner artwork. */
.page__hero--overlay{ padding-top:0 !important; padding-bottom:0 !important; min-height:0 !important; aspect-ratio:1280 / 360; }
.page__hero--overlay .page__title,
.page__hero .page__title{ position:absolute !important; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
</style>

{% include post_archive.html %}
