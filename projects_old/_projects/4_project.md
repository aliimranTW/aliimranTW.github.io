---
layout: page
title:  Open Vocabulary models based real-Time MEP detection on Mobile Robots 
description: Paper presented at ISARC Montreal 2025
img: assets/img/Robotic_Platform.jpg
importance: 1
category: research
related_publications: false
---


<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/Robotic_Platform.jpg" title="Journeybot platform used for data collection" class="img-fluid rounded z-depth-1" %}
</div>

Despite steady progress in construction robotics, robust perception on active jobsites remains a key bottleneck. In particular, automated monitoring of mechanical, electrical, and plumbing (MEP) assets is difficult due to clutter, occlusions, variable lighting, and the long tail of component appearances.

This paper studies whether modern open-vocabulary detectors (powered by large vision-language models) are ready for real-world MEP monitoring on a mobile robot, compared to a lightweight closed-set detector fine-tuned on site data. We collected and annotated a real-world dataset using our Journeybot ground platform and benchmarked a fine-tuned YOLO11 Nano against three open-vocabulary models: Grounding-SAM2, Grounding DINO, and DETIC.

Key contributions and takeaways:

- A real-world, robot-collected dataset of MEP components, annotated for object detection.
- A head-to-head comparison of fine-tuned lightweight detection vs pre-trained open-vocabulary models on the same task.
- Strong performance and real-time deployability from the fine-tuned YOLO11 Nano; open-vocabulary models lag on domain-specific classes.
- Practical guidance on when open-vocabulary models help (generalization) versus when small fine-tuned models still win (accuracy/latency).


<p>
Read the paper <a href="https://arxiv.org/abs/2501.09267">here</a>. 
</p>
