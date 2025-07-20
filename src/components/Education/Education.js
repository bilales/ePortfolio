import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
import { IoMdSchool, IoMdBriefcase } from "react-icons/io";

function Education() {
  return (
    <VerticalTimeline>
      {/* Research Engineer Intern - GET-OMP */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(17, 75, 122)" }}
        date="June 2024 - September 2024"
        iconStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        icon={<IoMdBriefcase />}
        ghLink="https://github.com/Abdelmouhaimen/DL4SahelLakes/"
      >
        <h3 className="vertical-timeline-element-title">
          AI Research Intern – Vision–Language Models
        </h3>
        <h4 className="vertical-timeline-element-subtitle">AIRBUS, France</h4>
        <p>
          • Led research on 5+ SOTA Vision-Language Models, leveraging
          HuggingFace on GCP for VLM fine-tuning and evaluation. Developed
          LangChain-based multimodal agents for spatio-temporal video analysis,
          improving insight extraction by 15%. • Architected and deployed an
          end-to-end multimodal search platform on GCP, which automated data
          pipelines for unstructured data (PDFs, images) and enabled cross-modal
          queries via a unified vector embedding space. • Presented research
          findings to internal stakeholders, collaborated with leading external
          AI experts.
        </p>
      </VerticalTimelineElement>
      {/* Research Engineer Intern - GET-OMP */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(17, 75, 122)" }}
        date="June 2024 - September 2024"
        iconStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        icon={<IoMdBriefcase />}
        ghLink="https://github.com/Abdelmouhaimen/DL4SahelLakes/"
      >
        <h3 className="vertical-timeline-element-title">
          AI Research Intern – Neural Network Training GUI
        </h3>
        <h4 className="vertical-timeline-element-subtitle">ALTEN, France</h4>
        <p>
          • Developed a GUI in Tkinter to monitor and steer adversarial neural
          network (GAN) training pipelines written in PyTorch. • Enabled
          real-time hyper-parameter tuning (learning rate, optimizer choice) of
          individual GAN components. • Implemented comparative dashboards to
          analyse training runs across architectures and optimisers, increasing
          experiment throughput by 40%, pipelines validated on the MNIST
          dataset.
        </p>
      </VerticalTimelineElement>

      {/* Research Engineer Intern - GET-OMP */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(17, 75, 122)" }}
        date="June 2024 - September 2024"
        iconStyle={{ background: "rgb(17, 75, 122)", color: "#fff" }}
        icon={<IoMdBriefcase />}
        ghLink="https://github.com/Abdelmouhaimen/DL4SahelLakes/"
      >
        <h3 className="vertical-timeline-element-title">
          AI Research intern | Deep Learning for Autonomous Driving
        </h3>
        <h4 className="vertical-timeline-element-subtitle">IRIT, France</h4>
        <p>
          • Engineered a driver-assistance application integrating YOLO for
          object detection and MiDaS for depth estimation. • Architected
          on-device image processing pipelines for efficient inference of
          detection and depth models, applying quantization to reduce model size
          by 30% for mobile deployment. • Boosted overall perception accuracy by
          20% by fine-tuning Yolov8 on public road datasets.
        </p>
      </VerticalTimelineElement>

      {/* ENSEEIHT - Specialized in Image & Multimedia */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2022 - Present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          ENSEEIHT - SN | Computer Science Student
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Toulouse, France</h4>
        <p>
          I joined ENSEEIHT a TOP French engineering school in Applied
          Mathematics and Computer Science, I am specializing in Multimedia
          (Speech, Vision, NLP) and AI. I am also completing a research master
          in Parallel Computing HPC and distributed systems.
        </p>
      </VerticalTimelineElement>

      {/* CPGE Vauvenargues - PTSI/PT* */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          CPGE Vauvenargues | PTSI-PT*
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Aix-en-Provences, France
        </h4>
        <p>
          Intensive preparatory program covering **mathematics, physics,
          computer science**, and **industrial sciences**. Prepared for
          competitive engineering school entrance exams.
        </p>
      </VerticalTimelineElement>

      {/* High School Diploma */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<IoMdSchool />}
      >
        <h3 className="vertical-timeline-element-title">
          High School Diploma | Mention Très Bien
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Arles, France</h4>
        <p>
          **Specialization:** Mathematics&Physics Graduated with highest honors.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Education;
