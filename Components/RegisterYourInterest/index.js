"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Form, Input, Button, Checkbox, message, notification } from "antd";
import { useRouter } from "next/router";

const RegisterYourInterest = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const router = useRouter();
  const [agree, setAgree] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 يتكرر مع كل دخول
    threshold: 0.2,
  });

  const onFinish = (values) => {
    console.log("Form Values:", values);

    notification.success({
      message: t("form.successTitle"),
      description: t("form.successMessage"),
    });

    form.resetFields();
  };

  const titleVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const formVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <div className={styles.wrapperRegisterYourInterest} id="register" ref={ref}>
      <div className="container">
        <motion.h4
          variants={titleVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("registerInterest.title")}
        </motion.h4>

        <motion.p
          variants={descVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {t("registerInterest.description")}
        </motion.p>

        <motion.div
          variants={formVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className={styles.form}
          >
            <Form.Item
              label={t("form.fullName")}
              name="fullName"
              rules={[
                { required: true, message: t("validation.requiredName") },
                { min: 3, message: t("validation.minName") },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("form.email")}
              name="email"
              rules={[
                { required: true, message: t("validation.requiredEmail") },
                { type: "email", message: t("validation.invalidEmail") },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("form.phone")}
              name="phone"
              rules={[
                { required: true, message: t("validation.requiredPhone") },
                {
                  pattern: /^[0-9]{9,15}$/,
                  message: t("validation.invalidPhone"),
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={t("form.company")}
              name="company"
              rules={[
                { required: true, message: t("validation.requiredCompany") },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(t("validation.requiredAgreement"))
                        ),
                },
              ]}
            >
              <Checkbox>
                {t("form.agreePrefix")}{" "}
                <span className={styles.link}>{t("form.terms")}</span>{" "}
                {t("form.and")}{" "}
                <span className={styles.link}>{t("form.privacy")}</span>
              </Checkbox>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="butDefault">{t("form.submit")}</button>
            </Form.Item>
          </Form> */}
          <div className={styles.beforeLogin}>
            <h2>{t("login.conditionsTitle")}</h2>
            <ol>
              {t("login.conditionsList", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ol>

            <h2>{t("login.requirementsTitle")}</h2>
            <ol>
              {t("login.requirementsList", { returnObjects: true }).map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ol>
            <Checkbox
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              style={{ marginTop: "20px" }}
            >
              {t("login.agree")}
            </Checkbox>

            <Button
              type="primary"
              block
              disabled={!agree}
              style={{ marginTop: "20px" }}
              onClick={() => router.push("https://sdl.edu.sa/SDLPortal")}
            >
              {t("login.continue")}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterYourInterest;
