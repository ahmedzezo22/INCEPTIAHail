"use client";
import React from "react";
import styles from "./style.module.css";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const { Panel } = Collapse;

const FrequentlyAskedQuestions = () => {
  const { t } = useTranslation();

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
  ];

  return (
    <div className={styles.wrapperFrequentlyAskedQuestions} id="faq">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="container">
        {/* العنوان من اليمين */}
        <motion.h4
          key="faq-title"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {t("faq.title")}
        </motion.h4>

        {/* الكولابس من تحت */}
        <motion.div
          key="faq-collapse"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Collapse accordion>
            {faqs.map((item, index) => (
              <Panel header={item.question} key={index}>
                <p>{item.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </motion.div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
