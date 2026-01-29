---
layout: page
title: PyBuzz – Unified Swarm Programming Platform (Ongoing)
description: Paper published in IEEE RA-L and presented at IEEE IROS 2025
img: assets/img/ral1.jpg
importance: 1
category: work
related_publications: false
---


<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/ral1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
</div>

In today’s rapidly evolving industrial landscape, the seamless collaboration between humans and robots is essential for safety and efficiency. We present a multi-robot shared perception approach that enables mobile robots to anticipate and understand human actions. By combining spatial understanding based on the relation between the human and the surrounding objects and developing a temporal link between frames with decentralized communication among multiple robots, our system ensures that robots can accurately predict human behavior and respond appropriately in dynamic environments.

<!-- <div class="clearfix"></div> -->

Following are the main contributions of this paper:
<ul>
<li>Development of a spatial understanding block that utilizes graph neural networks, understanding the relations between the subject (human) and the nearby objects using simple attributes.</li>
<li>A temporal understanding block that aggregates the spatial understanding of other robots in a decentralized manner and predicts and forecasts the action of the human in the scene.</li>
<li>Enhancing the distributed shared perception pipeline by incorporating a swarm intelligence-inspired consensus mechanism that ensures that the decisions of all the robots converge.</li>
</ul>
<p>
Explore this <a href="https://initrobots.ca/spwi">page</a> to dive deeper into the workings of this model. Read the paper <a href="https://example.com/paper-link">here</a>. For an overview, see the video below (it may take a while to load).
</p>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ralv4.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>



<!-- <div class="clearfix"></div> -->