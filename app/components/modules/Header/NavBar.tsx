import { BookOutlined, FormOutlined, HomeOutlined, LoginOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row, Typography } from "antd";
import styles from "./NavBar.module.css";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import smoothScrollTop from "../../../utils/smoothScrollTop";
import { appName } from "../../../constants/constants";
import NavDrawer from "./NavDrawer";
import { useAuth } from "react-use-auth";

import dynamic from 'next/dynamic';
const AuthingDialog = dynamic(() => import("../Authing/AuthingDialog"), { ssr: false });

const NavBar: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const [dialogOpen, setDialogOpen] = useState<string | null>(null);
    const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

    const { isAuthenticated, login, logout } = useAuth();

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


    const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
    const { Title } = Typography;
    const menuItems = [
        {
            link: "/",
            name: "首页",
            icon: <HomeOutlined />
        },
        {
            link: "/blog",
            name: "Blog",
            icon: <BookOutlined />
        },
        {
            name: "注册",
            onClick: login,
            icon: <FormOutlined />
        },
        {
            name: "登录",
            // link: "/login",
            onClick: login,
            icon: <LoginOutlined />
        }
    ];
    const menu = (
        <Menu mode="horizontal" >
            {menuItems.map(element => {
                if (element.link) {
                    return (
                        <Menu.Item key={element.name} className={styles.menuitem}>
                            <Link href={element.link} >
                                <a onClick={handleMobileDrawerClose}>{element.name}</a>
                            </Link>
                        </Menu.Item>
                    );
                }
                return (

                    <Menu.Item key={element.name} className={styles.menuitem}>
                        <Button type="primary" shape="round" onClick={element.onClick}>
                            {element.name}
                        </Button>
                    </Menu.Item>
                );
            })}
        </Menu>

    );
    return (
        <div className={styles.header} >
            <AuthingDialog
                dialogOpen={dialogOpen}
                title={appName}
                closeDialog={closeDialog}
            />
            <Row>
                {/* 图标及app名称*/}
                <Col xxl={4} xl={5} lg={8} md={8} sm={20} xs={20}>
                    <div className={styles.logo}>
                        <img src={LOGO_URL} alt="logo" />
                        <span>{appName}</span>
                    </div>
                </Col>

                {/* 小屏幕尺寸下菜单按钮 */}
                <Col xxl={0} xl={0} lg={0} md={0} sm={4} xs={4}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "64px"
                    }}>
                        <Button icon={<MenuFoldOutlined onClick={handleMobileDrawerOpen} />} />
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                    <div className={styles.menu}>{menu}</div>
                </Col>
            </Row>
            <div>
                <NavDrawer
                    menuItems={menuItems}
                    visible={isMobileDrawerOpen}
                    selectedItem={selectedTab}
                    onClose={handleMobileDrawerClose}
                />
            </div>
        </div>
    );
}
export default NavBar;