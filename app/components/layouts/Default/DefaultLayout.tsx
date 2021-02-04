import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import NavBar from "../../modules/Header/NavBar";

interface LayoutProps {
  children?: React.ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>
    <Layout.Header>
      <NavBar />
    </Layout.Header>
    <Layout.Content>
      {children}
    </Layout.Content>
    <Layout.Footer>
      <Footer></Footer>
    </Layout.Footer>
  </Layout>
);
export default DefaultLayout;