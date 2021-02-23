import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React from "react";
import NavBar from "../../modules/Header/NavBar";

interface LayoutProps {
  children?: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <Layout>
      <Layout.Header style={{ padding: 0, position: 'fixed', zIndex: 1, width: '100%' }}>
        <NavBar />
      </Layout.Header>
      <Layout.Content style={{ marginTop: 64 }}>
        {children}
      </Layout.Content>
      <Layout.Footer>
        <Footer></Footer>
      </Layout.Footer>
    </Layout>
  );
};
export default DefaultLayout;