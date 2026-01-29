---
layout: page
title: Decentralized Perception for Human Intent Prediction
description: Paper published in IEEE RA-L and presented at IEEE IROS 2025
img: assets/img/publication_preview/ral1.png
importance: 1
category: research
related_publications: false
---


<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/publication_preview/ral1.png" title="Decentralized shared perception for intent prediction" class="img-fluid rounded z-depth-1" %}
</div> 

Predicting human actions in industrial environments is essential for safe and effective human-robot collaboration. In practice, robots often operate with partial views, occlusions, and sensor noise, making reliable intent inference difficult from a single perspective.

This work introduces a decentralized shared-perception framework for mobile robots. Each robot builds a spatial graph of the human and surrounding objects, shares compact information with its neighbors, and fuses these observations over time to infer the human's ongoing action. A swarm-inspired consensus mechanism then aligns the robots' predictions into a unified team-level interpretation, improving robustness in dynamic settings.

Key contributions:

- Spatial understanding via graph neural networks to model human-object relations.
- Temporal understanding that aggregates information from multiple robots in a decentralized manner.
- A consensus mechanism that helps predictions converge across the team, increasing resilience.
- Empirical results showing improved accuracy with more robots and longer temporal context.
<p>
Explore this <a href="https://initrobots.ca/spwi">page</a> to dive deeper into the workings of this model. Read the paper <a href="https://example.com/paper-link">here</a>. For an overview, see the video below (it may take a while to load).
</p>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ralv4.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>



<!-- <div class="clearfix"></div> -->