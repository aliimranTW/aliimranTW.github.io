---
layout: page
title: Swarm Robotics
description: Multi-robot coordination, localization, and programming frameworks
img: assets/img/rel_loc_website2.png
importance: 2
category: research
related_publications: false
---

I work on decentralized relative localization for robot swarms and tools to make swarm programming simpler.

<details>
<summary><strong>PyBuzz – Unified Swarm Programming Platform</strong> — Ongoing</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/ral1.jpg" title="PyBuzz platform" class="img-fluid rounded z-depth-1" %}
</div>

Programming swarm behaviors usually means dealing with multiple tools, simulators, and robot-specific APIs. PyBuzz aims to simplify this:

- One programming interface for different robot types
- Easy transition from simulation to real robots
- Common swarm behaviors built-in (consensus, stigmergy, virtual physics)
- Works with existing robotics tools (ROS, Buzz)

<div class="clearfix"></div>
</div>
</details>

---

<details>
<summary><strong>Benchmarking Localization Strategies for Swarm Robotics</strong> — Swarm Intelligence Journal</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 50%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/localization_methods-Page-6.jpg" title="Localization modalities compared" class="img-fluid rounded z-depth-1" %}
</div>

Robot swarms need to know where their neighbors are to work together. This is hard indoors or when GPS isn't available—there's no global reference, sensors are noisy, and communication is limited.

We compared four common localization approaches:

- Infrared (IR) range-and-bearing sensors
- Visual-inertial odometry (VIO) with communication
- Ultra-wideband (UWB) with fixed anchors
- Camera-based spatial model (CoViS-Net)

We tested these in large-scale simulations, photorealistic simulations, and real experiments with ground and aerial robots doing three different swarm behaviors.

Main findings:

- No single approach works best everywhere—each has trade-offs in accuracy, setup complexity, computation, and communication needs
- Localization errors directly affect how well swarm behaviors work, especially those that depend on precise directions
- The results provide guidance for choosing a localization method based on your environment and task
- Tested across ARGoS simulations, Isaac Sim, and real robot experiments

Explore this <a href="https://initrobots.ca/relloc">page</a> to dive deeper into the workings of this model. For real robots doing pursuit, see the video below.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/Ground Pursuit.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div>
<div class="clearfix"></div>
</div>
</details>

---

