---
layout: page
title: System Integration & Software Architecture for Autonomous Mobile Robot Fleet
description: Teaching Assisstant
img: assets/img/dingos.png
importance: 1
category: research
related_publications: false
---


<div class="float-right ml-3 mb-2" style="width: 33.33%; max-width: 420px;">
    {% include figure.liquid loading="eager" path="assets/img/dingos.png" title="example image" class="img-fluid rounded z-depth-1" %}
</div>

Designed and deployed the full-stack software architecture for a heterogeneous fleet of 8 Clearpath mobile bases, equipping each with Nvidia Jetson compute units optimized for low-latency inference and control. The core autonomy stack was built from the ground up, featuring a robust multi-sensor fusion framework that integrates Visual Inertial Odometry (VIO) and Ultra-Wideband (UWB) ranging via an Extended Kalman Filter (EKF) for precise localization in GPS-denied environments. To support mobile manipulation tasks, I integrated Kinova Gen3 Lite arms into the ROS ecosystem, developing a custom teleoperation driver that maps high-degree-of-freedom manipulation and navigation controls to a standard PS4 interface for intuitive operation.

This infrastructure was developed in my capacity as the Lead Teaching Assistant for the robotics laboratory, serving as the primary experimental platform for graduate coursework. The initiative involved the complete physical commissioning of the robots and the creation of a modular, standardized codebase to ensure reproducibility across the fleet. By implementing reliable path planning algorithms and optimizing the compute overhead on the Jetsons, I established a stable, plug-and-play testbed that allows students to validate theoretical concepts—from SLAM to motion planning—on physical hardware without the friction of low-level driver integration.

<!-- <div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/ralv4.mp4" class="img-fluid rounded z-depth-1" controls=true autoplay=true muted=true loop=true %}
    </div>
</div> -->



<!-- <div class="clearfix"></div> -->