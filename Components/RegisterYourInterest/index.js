import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const RegisterYourInterest = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);

    notification.success({
      message: t("form.successTitle"),
      description: t("form.successMessage"),
    });

    form.resetFields();
  };

  return (
    <div className={styles.wrapperRegisterYourInterest} id="register">
      <div className="container">
        <h4>{t("registerInterest.title")}</h4>
        <p>{t("registerInterest.description")}</p>

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
      </div>
    </div>
  );
};

export default RegisterYourInterest;
