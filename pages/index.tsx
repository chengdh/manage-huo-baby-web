import { NextPage } from "next";
import React from "react";
import DefaultLayout from "../app/components/layouts/Default/DefaultLayout";
import HomePage from "../app/components/templates/HomePage/HomePage";
import { withLayout } from "@chengdh/next-layout";
import withApollo from "../lib/apollo/withApollo";

const App: NextPage = () => (
  <HomePage />
);
const app = withApollo()(App);
export default withLayout(<DefaultLayout />)(app);
