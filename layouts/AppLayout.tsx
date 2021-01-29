import { Button, Layout } from "antd";
import React, { useState } from "react";

type ChildrenProps = {
  children?: React.ReactNode;
};
export default function AppLayout({ children }: ChildrenProps) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}