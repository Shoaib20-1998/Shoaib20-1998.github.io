import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaRedux,
  FaNodeJs,
  FaDatabase,
  FaChakra,
  FaMaterialUi,
} from "react-icons/fa";
import styles from './All.module.css'
import express from '../../images/ex1.png'
import javascript from '../../images/js.png'
import react from '../../images/react.png'
import html from '../../images/html.png'
import node from '../../images/node.png'
import redux from '../../images/redux.png'
import mongodb from '../../images/mongodb.png'
import css from '../../images/css.png'
import ai from '../../images/ai1.png'
import prompt from '../../images/prompt.png'

import typescript from '../../images/typescript.png'
import chakraui from '../../images/chakraui.png'
import materialui from '../../images/materialui.png'
import vscode from '../../images/vscode.png'
const skills = [
  { name: "HTML", level: 5, logo: html },
  { name: "CSS", level: 5, logo: css },
  { name: "JavaScript", level: 5, logo: javascript },
  { name: "React", level: 5, logo: react },
  { name: "React Native", level: 5, logo: react },
  { name: "Redux", level: 5, logo: redux},
  { name: "TypeScript", level: 5, logo: typescript },
  { name: "Node.js", level: 5, logo: node },
  { name: "MongoDB", level: 5, logo: mongodb },
  { name: "Express", level: 5, logo: express },
  { name: "Chakra UI", level: 5, logo: chakraui },
  { name: "Material UI", level: 5, logo: materialui },
  { name: "Generative AI", level: 5, logo: ai },
  { name: "Prompt Engineering", level: 5, logo: prompt },


  


];
const SkillSection = () => {
  return (
    <div className="skills-card">
    <section className={styles.skillssection}>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={styles.skillbar}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: `${skill.level * 20}%`, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          data-aos="fade-right"
        >
          <motion.div>
            <img className="skills-card-img" style={{width:"40px"}} src={skill.logo} alt="" />
          </motion.div>
          <span className="skills-card-name">{skill.name}</span>
        </motion.div>
      ))}
    </section>
    </div>
  );
};

export default SkillSection;