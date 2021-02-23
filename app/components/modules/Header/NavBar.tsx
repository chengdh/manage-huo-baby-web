import { BookOutlined, FormOutlined, HomeOutlined, LoginOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row } from "antd";
import Link from "next/link";
import React, { ReactNode, useCallback, useState } from "react";
import { useAuth } from "react-use-auth";
import { appName } from "../../../constants/constants";
import smoothScrollTop from "../../../utils/smoothScrollTop";
import styles from "./NavBar.module.css";
import NavDrawer from "./NavDrawer";

const NavBar: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

    const { isAuthenticated, login, logout, user } = useAuth();

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

    const handleMobileDrawerOpen = useCallback(() => {
        setIsMobileDrawerOpen(true);
    }, [setIsMobileDrawerOpen]);

    const handleMobileDrawerClose = useCallback(() => {
        setIsMobileDrawerOpen(false);
    }, [setIsMobileDrawerOpen]);

    const handleCookieRulesDialogOpen = useCallback(() => {
        setIsCookieRulesDialogOpen(true);
    }, [setIsCookieRulesDialogOpen]);

    const handleCookieRulesDialogClose = useCallback(() => {
        setIsCookieRulesDialogOpen(false);
    }, [setIsCookieRulesDialogOpen]);


    const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
    type MenuItemType = {
        link?: string,
        name: string,
        onClick?: () => void,
        subMenuItems?: Array<MenuItemType>,
        icon: ReactNode
    }


    function getMenuItems(): React.ReactElement{
        const menuItems: Array<MenuItemType> = [
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
        ];
        if (isAuthenticated()) {
            const subMenuitems: Array<MenuItemType> = [
                {
                    name: "个人中心",
                    link: "/pfofile",
                    icon: <LoginOutlined />
                },
                {
                    name: "订单管理",
                    link: "/orders",
                    icon: <LoginOutlined />
                },
                {
                    name: "退出",
                    onClick: logout,
                    icon: <LoginOutlined />
                }
            ];
            menuItems.push({
                name: user.username,
                icon: <LoginOutlined />,
                subMenuItems: subMenuitems
            });
        }
        else {
            menuItems.push({
                name: "注册",
                onClick: login,
                icon: <FormOutlined />
            });
            menuItems.push(
                {
                    name: "登录",
                    onClick: login,
                    icon: <LoginOutlined />
                }
            );
        }


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
                    else if (element.subMenuItems) {
                        return (
                            <Menu.SubMenu key={element.name} icon={element.icon} title={element.name}>
                                {element.subMenuItems.map(subElement => {
                                    if (subElement.link) {
                                        return (
                                            <Menu.Item key={subElement.name} className={styles.menuitem}>
                                                <Link href={subElement.link} >
                                                    <a onClick={handleMobileDrawerClose}>{subElement.name}</a>
                                                </Link>
                                            </Menu.Item>
                                        );
                                    }
                                    return (<Menu.Item key={subElement.name} className={styles.menuitem}>
                                        <Button type="link" onClick={subElement.onClick}>
                                            {subElement.name}
                                        </Button>
                                    </Menu.Item>)
                                })
                                }
                            </Menu.SubMenu>
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
        return menu;
    }
    return (
        <div className={styles.header} >
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
                    <div className={styles.menu}>{getMenuItems()}</div>
                </Col>
            </Row>
            {/* <div>
                <NavDrawer
                    menuItems={getMenuItems()}
                    visible={isMobileDrawerOpen}
                    selectedItem={selectedTab}
                    onClose={handleMobileDrawerClose}
                />
            </div> */}
        </div>
    );
}
export default NavBar;