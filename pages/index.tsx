import { Content } from 'antd/lib/layout/layout';
import { NextPage } from 'next';
import React, { FC, ReactNode, useCallback, useState } from 'react';
import Header from '../app/components/modules/Header/Header';
import smoothScrollTop from '../app/utils/smoothScrollTop';

interface HomeProps {
  appName: string;
}

const Home: NextPage<HomeProps> = ({ appName }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [dialogOpen, setDialogOpen] = useState<string | null>(null);
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title =
      "WaVer - Free template for building an SaaS or admin application";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "WaVer - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const openLoginDialog = useCallback(() => {
    setDialogOpen("login");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const closeDialog = useCallback(() => {
    setDialogOpen(null);
  }, [setDialogOpen]);

  const openRegisterDialog = useCallback(() => {
    setDialogOpen("register");
    setIsMobileDrawerOpen(false);
  }, [setDialogOpen, setIsMobileDrawerOpen]);

  const openTermsDialog = useCallback(() => {
    setDialogOpen("termsOfService");
  }, [setDialogOpen]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const openChangePasswordDialog = useCallback(() => {
    setDialogOpen("changePassword");
  }, [setDialogOpen]);

  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  const header = (<Header
    appName={appName}
    selectedTab={selectedTab}
    selectTab={setSelectedTab}
    openLoginDialog={openLoginDialog}
    openRegisterDialog={openRegisterDialog}
    mobileDrawerOpen={isMobileDrawerOpen}
    handleMobileDrawerOpen={handleMobileDrawerOpen}
    handleMobileDrawerClose={handleMobileDrawerClose}
  />
  );
  const footer = (
    <>
      <p>this is footer</p>
    </>

  );
  return (
    <>
      {/* <DialogSelector
        openLoginDialog={openLoginDialog}
        dialogOpen={dialogOpen}
        onClose={closeDialog}
        openTermsDialog={openTermsDialog}
        openRegisterDialog={openRegisterDialog}
        openChangePasswordDialog={openChangePasswordDialog}
      />
      <CookieRulesDialog
        open={isCookieRulesDialogOpen}
        onClose={handleCookieRulesDialogClose}
      /> */}
      {header}
      {/* <Routing
        blogPosts={blogPosts}
        selectHome={selectHome}
        selectBlog={selectBlog}
      /> */}
      {footer}
    </>
  );
};

Home.getInitialProps = () => {
  return { appName: "管货宝" };
};
export default Home;
