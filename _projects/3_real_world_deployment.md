---
layout: page
title: Real-World Deployment
description: Addressing challenges of deploying algorithms on robot hardware
img: assets/img/Doodies.jpg
importance: 3
category: research
related_publications: false
---

I am interested in working on making robots function reliably in the real world. My work focuses on system integration, sensor fusion, and optimizing software for edge computing constraints.

---

<details>
<summary><strong>ROS2 Stack for a Mobile Fleet</strong> — Lab Infrastructure</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 40%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/dingos.png" title="Clearpath Dingo fleet" class="img-fluid rounded z-depth-1" %}
</div>

Contributed to the development of a software stack for a fleet of 8 Clearpath mobile platforms. 

<strong>Key Contributions:</strong>
* <strong>State Estimation:</strong> Implemented the sensor fusion pipeline (EKF), integrating Visual-Inertial Odometry (VIO) and Ultra-Wideband (UWB) to achieve drift-free localization in GPS-denied environments.
* <strong>System Integration:</strong> Configured NVIDIA Jetson compute units for on-board autonomy and integrated Kinova Gen3 Lite arms for mobile manipulation.
* <strong>Deployment:</strong> Helped establish a containerized ROS2 workflow to ensure consistent performance across all agents.

</div>
</details>

---

<details>
<summary><strong>DESSAIM: Decentralized Swarm Coordination</strong> — Best Video Award, ICRA 2025 - Field Robotics Workshop paper ICRA 2024</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 40%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/Doodies.jpg" title="DESSAIM performance" class="img-fluid rounded z-depth-1" %}
</div>

Collaborated on a multi-agent system comprising micro-robots, indoor drones, and mobile manipulators for live performances. I worked on the engineering team responsible for the system's decentralized control .

<em>Awarded Best Video at ICRA 2025.</em> | <a href="https://initrobots.ca/en/researches/ecriture-choregraphique-des-esssaims">Project Page</a>

<div class="clearfix"></div>
</div>
</details>

---

<details>
<summary><strong>Benchmarking Open-Vocabulary Models for Construction</strong> — ISARC 2025</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/Robotic_Platform.jpg" title="Journeybot platform" class="img-fluid rounded z-depth-1" %}
</div>

Contributed to a study evaluating Vision-Language Models (VLMs) for detecting MEP (Mechanical, Electrical, Plumbing) components. I focused on the practical deployment and benchmarking of these models on a mobile "Journeybot" platform.

<strong>Key Contributions:</strong>
* <strong>Data Collection:</strong> Managed the on-site data acquisition and dataset curation in high-clutter construction environments.
* <strong>Benchmarking:</strong> Compared the inference speed and accuracy of fine-tuned YOLO11 Nano against zero-shot models (Grounding-SAM2, Grounding DINO).
* <strong>Results:</strong> The study highlighted that while open-vocabulary models generalize well, supervised lightweight models (YOLO) remain superior for real-time edge deployment.

Paper: <a href="https://arxiv.org/abs/2501.09267">arXiv</a>

<div class="clearfix"></div>
</div>
</details>

---

<details>
<summary><strong>Spectral Analysis for Bio-Inspired Sensing</strong> — Agricultural Robotics</summary>

<div class="mt-3">
<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/see_bee.jpg" title="UV sensing for agriculture" class="img-fluid rounded z-depth-1" %}
</div>

Collaborated on a study investigating near-ultraviolet (UV) sensing for agricultural monitoring. I assisted in the data collection and analysis to determine if UV reflectance could serve as a viable marker for crop health.

<strong>Key Contributions:</strong>
* <strong>Field Measurement:</strong> Performed in-situ spectral reflectance measurements of strawberry cultivars.
* <strong>Analysis:</strong> Applied pollinator-vision models to translate raw spectral data into contrast metrics, identifying features overlooked in standard RGB/IR imagery.

Paper: <a href="https://doi.org/10.1080/07038992.2024.2332179">DOI</a>

</div>
</details>