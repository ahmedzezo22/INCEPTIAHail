import "@/styles/globals.css";
import "./../locale/i18n";
import Layout from "./../layouts";

const layouts = {
  Home: Layout,
};

export default function App({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || (({ children }) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}



