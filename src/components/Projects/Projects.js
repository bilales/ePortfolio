import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import trafficlights from "../../Assets/Projects/trafficlights.png";
import anonymization from "../../Assets/Projects/anonymization.png";
import heart from "../../Assets/Projects/heart.png";
import jpeg from "../../Assets/Projects/jpeg.png";
import maps from "../../Assets/Projects/maps.png";
import mnist from "../../Assets/Projects/MNIST.png";
import VLMs from "../../Assets/Projects/VLMs.jpeg";
import PI3D from "../../Assets/Projects/PI3D.png";
import PI3D_slides from "../../Assets/Projects/PI3D_slides.pdf";
import traffic from "../../Assets/Projects/DeepLearning_Intro.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mnist}
              title="MNIST Diffusion Model"
              description="Developed a diffusion model for the MNIST dataset, achieving a 98.5% accuracy on the test set. The model was trained using PyTorch, leveraging a UNet architecture with attention mechanisms. Implemented data augmentation techniques to enhance model robustness and prevent overfitting. The project demonstrates the effectiveness of diffusion models in generating high-quality images from noise."
              ghLink="https://github.com/bilales/MNIST_Diffusion"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anonymization}
              title="Person Anonymization with Dynamic Background Reconstruction"
              description="This project provides tools for real-time person anonymization in videos using computer vision techniques. It replaces detected persons with a dynamically generated background, effectively redacting them from the scene while preserving context. The system can use either bounding boxes or segmentation masks for person detection and overlays skeletal keypoints to maintain motion information.
                          This is ideal for applications requiring privacy protection, such as public video surveillance analysis, data collection for autonomous vehicles, or any domain where personal identity must be obscured."
              ghLink="https://github.com/bilales/person-anonymize/tree/main"
              demoLink="https://imgur.com/a/GxbTIQk"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VLMs}
              title="VLM fine-tuning for Medical Image Analysis"
              description="Fine-tuned a 3-billion-parameter Vision Language Model for the specialized domain of medical pathology VQA, leveraging the 32k-example PathVQA dataset to improve its diagnostic reasoning capabilities.Engineered a memory-efficient training pipeline using QLoRA and PEFT, successfully fine-tuning the model on a single8GB consumer GPU. Implemented a robust evaluation framework, benchmarking performance with accuracy for closed-formanswers and BERTScore for open-ended generation. Deployed a proof-of-concept interactive demo with Gradio."
              ghLink="https://github.com/bilales/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PI3D}
              title="3D Projector Pose Adjustment - Grotte Chauvet"
              description="Developed a computer vision system for precise alignment of prehistoric paintings onto a replica of the Chauvet Cave. Utilized Structure-from-Motion (SfM) and Multi-View Stereo (MVS) to reconstruct a 3D model of the replica. Implemented Zhang's method for projector calibration, treating the projector as an inverted camera. Applied Iterative Closest Point (ICP) and scale correction to align the reconstructed model with the original cave structure. This project optimizes projection accuracy and reduces manual positioning errors."
              ghLink="https://github.com/Abdelhakimourkia/BE_Pi_3D"
              file={PI3D_slides}
              fileText="Slides"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trafficlights}
              title="Traffic Sign Recognition using Deep Learning"
              description="Developed a deep learning-based model for detecting and classifying traffic signs using convolutional neural networks (CNNs). The project involved data collection via web scraping and manual acquisition, model optimization using VGG16 fine-tuning, and performance analysis with accuracy reaching 92.9%."
              ghLink="https://github.com/bilales/Traffic_Signs_Classification"
              file={traffic}
              fileText="report"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maps}
              title="3D Surface Compression and Remeshing using MAPS"
              description="Developed a Multiresolution Adaptive Parameterization of Surfaces (MAPS) approach for 3D mesh compression and remeshing. Implemented progressive vertex removal, constrained Delaunay retriangulation, and adaptive parameterization to optimize mesh complexity while preserving topology. Achieved O(N log N) efficiency for large-scale 3D models, with applications in 3D scanning, texturing, and morphing."
              ghLink="https://github.com/Abdelmouhaimen/CSI_3D_MAPS_N7"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heart}
              title="3D Heart Segmentation and Analysis from CT Scans"
              description="Built a pipeline for 3D cardiac CT analysis, converting world-to-voxel coordinates for precise cropping.
Developed advanced segmentation masks by applying complex boolean logic, including intensity thresholding, isolating the
largest connected component, and performing union/subtraction of key anatomical structures (atria, ventricles, aorta)
Implemented Dice and Hausdorff validation metrics to quantitatively compare mask volumes and accuracy."
              ghLink="https://github.com/bilales/Medical_Image_Processing/tree/main"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jpeg}
              title="Image and Video Compression using JPEG and MPEG Algorithms"
              description="Developed a comprehensive image and video compression system using JPEG and MPEG standards. The project involved implementing the Discrete Cosine Transform (DCT) for image compression, quantization, and Huffman coding for efficient data representation. For video, utilized motion estimation and compensation techniques to reduce temporal redundancy, achieving significant file size reduction while maintaining visual quality."
              ghLink="https://github.com/bilales/Image-Video-Compression"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
