"use client";
import React from "react";
import { Form, Input, Checkbox, notification } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RegisterYourInterest = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

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
          <Form
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
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterYourInterest;
