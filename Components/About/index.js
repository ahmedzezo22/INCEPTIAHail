"use client";
import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container" id="about" key={i18n.language}>
      <div className={styles.wrapperAbout}>
        {/* صورة البانر */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/mages/About/banner.jpg"
            alt="image logo nisbau"
            width={300}
            height={100}
            className={styles.logo_img}
          />
        </motion.div>

        {/* النصوص */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4>{t("about.title")}</h4>
          <p>{t("about.desc")}</p>
          <div className={styles.wrapperBut}>
            <button className="butDefault">{t("about.but")}</button>
          </div>
        </motion.div>

        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default About;
