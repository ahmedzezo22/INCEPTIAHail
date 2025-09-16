import React from "react";
import styles from "./style.module.css";
import { Form, Input, Select, Button, message } from "antd";
import { useTranslation } from "react-i18next";

const { Option } = Select;
const { TextArea } = Input;

const ContactUs = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success(t("contact.successMessage"));
    form.resetFields();
  };

  return (
    <div className={styles.wrapperContactUs} id="contact">
      <div className="container">
        <h4>{t("contact.title")}</h4>
        <p>{t("contact.subtitle")}</p>

        <div className={styles.content}>
          {/* Location Section */}
          <div className={styles.location}>
            <h6>{t("contact.locationTitle")}</h6>
            {/* clickable address */}
            <a
              href="https://maps.google.com/?q=Hail"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.addressLink}
            >
              حي النقرة، طريق الملك عبدالعزيز (حائل)
            </a>
            <iframe
              src="https://www.google.com/maps?q=Hail&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="location"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className={styles.formSection}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className={styles.form}
            >
              <Form.Item
                name="name"
                label={t("contact.name")}
                rules={[{ required: true, message: t("contact.required") }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label={t("contact.email")}
                rules={[
                  { required: true, message: t("contact.required") },
                  { type: "email", message: t("contact.invalidEmail") },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="subject"
                label={t("contact.subject")}
                rules={[{ required: true, message: t("contact.required") }]}
              >
                <Select placeholder={t("contact.selectPlaceholder")}>
                  <Option value="registration">
                    {t("contact.options.registration")}
                  </Option>
                  <Option value="technical">
                    {t("contact.options.technical")}
                  </Option>
                  <Option value="sponsorship">
                    {t("contact.options.sponsorship")}
                  </Option>
                  <Option value="media">{t("contact.options.media")}</Option>
                  <Option value="general">
                    {t("contact.options.general")}
                  </Option>
                  <Option value="other">{t("contact.options.other")}</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
                label={t("contact.message")}
                rules={[{ required: true, message: t("contact.required") }]}
              >
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {t("contact.send")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
