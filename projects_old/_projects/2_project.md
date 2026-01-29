---
layout: page
title: Benchmarking localization strategies for swarm robotics
description: Accepted to Swarm Intelligence
img: assets/img/rel_loc_website2.png
importance: 1
category: research
giscus_comments: false
---


<div class="float-right ml-3 mb-2" style="width: 60%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/localization_methods-Page-6.jpg" title="Localization modalities compared" class="img-fluid rounded z-depth-1" %}
</div>




Efficient swarm collaboration depends on accurate relative localization: each robot must estimate where its neighbors are to coordinate motion and execute collective behaviors. In real deployments—especially indoors or in GNSS-denied environments—this is challenging because there is no global reference frame, sensing is noisy, and communication bandwidth is limited.

In this work, we benchmark four localization strategies commonly used in swarms:

- Direct infrared (IR) range-and-bearing sensing.
- Indirect visual-inertial odometry (VIO) with situated communication.
- Indirect ultra-wideband (UWB) localization with fixed anchors.
- A decentralized, camera-based spatial foundation model (CoViS-Net).

We evaluate these approaches across low-fidelity large-scale simulations (to study scalability), high-fidelity photorealistic simulations (to test realistic sensing pipelines), and real-robot experiments with both ground and aerial platforms executing three representative swarm behaviors.

Key contributions and takeaways:

- No single modality is universally best—each trades off accuracy, infrastructure requirements, computation, and communication overhead.
- Localization error directly impacts behavior stability and convergence, especially for bearing-sensitive behaviors.
- The benchmark highlights practical guidance for choosing a localization stack based on environment constraints and task requirements.
- We validate these conclusions across ARGoS scalability tests, Isaac Sim photorealistic simulations, and real experiments on both ground and aerial swarms.

Explore this <a href="https://initrobots.ca/relloc">page</a> to dive deeper into the workings of this model. For real robots doing pursuit, see the video below.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Ground Pursuit.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>