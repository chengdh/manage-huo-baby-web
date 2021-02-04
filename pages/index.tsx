import { NextPage } from "next";
import React from "react";
import DefaultLayout from "../app/components/layouts/Default/DefaultLayout";
import HomePage from "../app/components/templates/HomePage/HomePage";
import { withLayout } from "@chengdh/next-layout";

const App: NextPage = () => (
  <HomePage />
);

export default withLayout(<DefaultLayout />)(App);
