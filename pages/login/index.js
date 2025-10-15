import React, { useState } from "react";
import styles from "./../../styles/login.module.css";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [showForm, setShowForm] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleStart = () => setShowForm(true);

  const onFinish = (values) => {
    const { username, password } = values;

    if (username !== "superAdmin" && password !== "123456") {
      message.error(t("login.errors.username"));
    } else if (username === "superAdmin" && password !== "123456") {
      message.error(t("login.errors.password"));
    } else if (username !== "superAdmin" && password === "123456") {
      message.error(t("login.errors.username"));
    } else {
      message.success(t("login.success"));
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    }
  };

  return (
    <div className="container">
      {/* <div className={styles.wrapperLogin}>
        {!showForm ? (
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
              onClick={handleStart}
            >
              {t("login.continue")}
            </Button>
          </div>
        ) : (
          <div className={styles.login}>
            <h1>{t("login.title")}</h1>
            <Form name="loginForm" layout="vertical" onFinish={onFinish}>
              <Form.Item
                label={t("login.usernameLabel")}
                name="username"
                rules={[{ required: true, message: t("login.usernameError") }]}
              >
                <Input placeholder="" />
              </Form.Item>

              <Form.Item
                label={t("login.passwordLabel")}
                name="password"
                rules={[{ required: true, message: t("login.passwordError") }]}
              >
                <Input.Password placeholder="" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  {t("login.submit")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div> */}
      <div className={styles.wrapperLogin}>
        <div className={styles.login}>
          <h1>{t("login.title")}</h1>
          <Form name="loginForm" layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={t("login.usernameLabel")}
              name="username"
              rules={[{ required: true, message: t("login.usernameError") }]}
            >
              <Input placeholder="" />
            </Form.Item>

            <Form.Item
              label={t("login.passwordLabel")}
              name="password"
              rules={[{ required: true, message: t("login.passwordError") }]}
            >
              <Input.Password placeholder="" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {t("login.submit")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
Login.layout = "Home";

export default Login;
