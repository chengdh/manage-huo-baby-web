import React from "react";
import { HomeOutlined, BookOutlined, FormOutlined, LoginOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
import styles from "./NavBar.module.less";

interface NavBarProps {
    handleMobileDrawerOpen(): void,
    handleMobileDrawerClose(): void,
    mobileDrawerOpen: boolean,
    selectedTab: string,
    openRegisterDialog(): void,
    openLoginDialog(): void,
    appName: string

};

function NavBar(props: NavBarProps) {

    const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
    const {
        openRegisterDialog,
        openLoginDialog,
        handleMobileDrawerOpen,
        handleMobileDrawerClose,
        mobileDrawerOpen,
        selectedTab,
        appName
    } = props;
    const { Title } = Typography;
    const menuItems = [
        {
            link: "/",
            name: "Home",
            icon: (<HomeOutlined />)
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
        <Menu mode="horizontal">
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
                <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                    <div id="logo" className="logo">
                        <img src={LOGO_URL} alt="logo" />
                        <span>{appName}</span>
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                    <div  className={styles.menu}>{menu}</div>
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