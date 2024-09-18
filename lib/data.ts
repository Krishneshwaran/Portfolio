import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import Drop from "@/public/Drop.png";
import predict from "@/public/Predict.jpg";
import AI from "@/public/AI.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-taught",
    location: "Kerala, IN",
    description:
      "Learning and exploring Web development to build a career in tech by utalizing free online resources and applying for oppertunity.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Philosophical AI",
    description:
      "Developed a Philosophical AI that generates insights and responses based on quotes from renowned philosophers.",
    tags: [
      "Python",
      "GENAI",
      "Telegram API",
      "Openai",
    ],
    imageUrl: AI,
    link: "",
  },

  {
    title: "Concentration Drop Analysis",
    description:
      "• Analyzed four years of historical data to predict and manage concentration drops in manufacturing.",
    tags: ["Python", "Excel", "Flask", "Pandas"],
    imageUrl: Drop,
    link: "",
  },
  {
    title: "Forecasting Machine Failures",
    description:
      "• Developed a predictive model using LSTM to forecast machine defects.",
    tags: [
      "Python",
      "Tensorflow",
      "Numpy",
      "Pandas",
    ],
    imageUrl: predict,
    link: "",
  },
] as const;

export const skillsData = [
  "Python",
  "Numpy",
  "Pandas",
  "Tensorflow",
  "Jupyter",
  "React.js",
  "Next.js",
  "Git",
  "SQL",
  ".Net",
  "Machine Learning",
  "Android Development",
  "Javascript",
  "Android Development",
] as const;
