import vscodeImg from "@/app/assets/images/vscode_ss.png";
import wdccImg from "@/app/assets/images/wdcc_ss.png";
import freecyclingImg from "@/app/assets/images/freecycling_ss.png";
import escapeRoomImg from "@/app/assets/images/escape_room.png";
import motorImg from "@/app/assets/images/299-motor.png";
import freakyBirdImg from "@/app/assets/images/freaky-bird.png";
import { Project } from "@/lib/types";

export const projectList: Project[] = [
  {
    title: "Smart Energy Monitor",
    imageUrl:
      "https://images.unsplash.com/photo-1724770388447-30b015a5cbb6?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Expected Start: Jul 2025",
    status: "coming-soon",
    skillsUsed: ["Altium Designer", "Microchip Studio", "Proteus", "LTSpice"],
    placeholderImage: true,
  },
  {
    title: "Freaky Bird",
    description:
      "Flappy Bird-inspired game... with a twist! Implemented in VHDL on an FPGA board (DE0-CV). Displayed on a VGA screen and controlled with a PS/2 mouse. Built with Quartus.",
    imageUrl: freakyBirdImg,
    date: "Apr 2025 – Present",
    status: "in-progress",
    skillsUsed: ["VHDL", "FPGA", "Quartus Prime 19.1", "GitHub"],
  },
  {
    title: "Portfolio Website",
    description:
      "This is it, right here! A clean personal site to showcase my projects and experience. Built with Vite, React, and TailwindCSS.",
    imageUrl: vscodeImg,
    repoUrl: "https://github.com/basicallycommits/basically-website",
    date: "Apr 2025 – Present",
    status: "published",
    skillsUsed: ["React", "Vite", "TailwindCSS"],
  },
  {
    title: "Brushless DC Motor",
    description:
      "Soldered, 3d-printed, laser-cut and assembled parts for a brushless DC motor.",
    imageUrl: motorImg,
    date: "Mar 2025 – Present",
    status: "in-progress",
    skillsUsed: [
      "Soldering",
      "3d-Printing",
      "Laser-Cutting",
      "Assembling",
      "Troubleshooting",
    ],
  },
  {
    title: "AUSA Wellbeing Tracker",
    imageUrl: wdccImg,
    repoUrl: "https://github.com/UoaWDCC/ausa",
    date: "Mar 2025 – Present",
    status: "in-progress",
    skillsUsed: ["Next.js", "React", "TailwindCSS", "Express.js", "Firebase"],
  },
  {
    title: "Freecycling Website",
    description:
      "High-fidelity prototype of an aesthically pleasing, responsive website designed to promote recycling. Built in vanilla HTML, CSS and JavaScript.",
    imageUrl: freecyclingImg,
    repoUrl: "https://github.com/basicallycommits/freecycling-website-hfp",
    date: "May 2024 – Jun 2024",
    status: "published",
    skillsUsed: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI Escape Room Game",
    description:
      "Text-based puzzle game with AI-powered game master. Built with OpenAI API and JavaFX.",
    imageUrl: escapeRoomImg,
    repoUrl: "https://github.com/basicallycommits/escaipe-room-game",
    date: "Jul 2023 – Nov 2023",
    status: "published",
    skillsUsed: ["Java", "JavaFX", "CSS", "OpenAI API"],
  },
];
