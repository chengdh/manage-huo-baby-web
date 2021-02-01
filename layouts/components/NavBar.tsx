import { BookOutlined, FormOutlined, HomeOutlined, LoginOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";

type NavBarProps = {
    handleMobileDrawerOpen(): void,
    handleMobileDrawerClose(): void,
    selectTab(tab: string): void,
    mobileDrawerOpen: boolean,
    selectedTab: string | null,
    openRegisterDialog(): void,
    openLoginDialog(): void,
    appName: string

};
const NavBar: React.FC<NavBarProps> = (props) => {

    const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
    const {
        openRegisterDialog,
        openLoginDialog,
        handleMobileDrawerOpen,
        handleMobileDrawerClose,
        mobileDrawerOpen,
        selectedTab,
        selectTab,
        appName
    } = props;
    const { Title } = Typography;
    const menuItems = [
        {
            link: "/",
            name: "Home",
            icon: <HomeOutlined />
        },
        {
            link: "/blog",
            name: "Blog",
            icon: <BookOutlined />
        },
        {
            name: "Register",
            onClick: openRegisterDialog,
            icon: <FormOutlined />
        },
        {
            name: "Login",
            onClick: openLoginDialog,
            icon: <LoginOutlined />
        }
    ];
    const menu = (
        <Menu mode="horizontal" >
            {menuItems.map(element => {
                if (element.link) {
                    return (
                        <Menu.Item key={element.name}>
                            <Link
                                href={element.link}
                                onClick={handleMobileDrawerClose}
                            >
                                {element.name}
                            </Link>
                        </Menu.Item>
                    );
                }
                return (

                    <Menu.Item key={element.name}>
                        {element.name}
                    </Menu.Item>
                );
            })}
        </Menu>

    );
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
                    <div style={{display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "64px"
                    }}>
                        <Button icon={<MenuFoldOutlined />} />
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                    <div className={styles.menu}>{menu}</div>
                </Col>
            </Row>
            <div>
                {/* <NavigationDrawer
                menuItems={menuItems}
                anchor="right"
                open={mobileDrawerOpen}
                selectedItem={selectedTab}
                onClose={handleMobileDrawerClose}
            /> */}
            </div>
        </div>
    );
}
export default NavBar;