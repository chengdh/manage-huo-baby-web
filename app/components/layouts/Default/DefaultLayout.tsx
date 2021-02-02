import { Layout } from "antd";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
};
const DefaultLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout>
    {children}
  </Layout>
);
export default DefaultLayout;