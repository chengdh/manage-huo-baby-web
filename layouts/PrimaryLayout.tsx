import { Layout } from "antd";
import React from "react";

type ChildrenProps = {
  children?: React.ReactNode;
};
export default function PrimaryLayout({ children }: ChildrenProps) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}