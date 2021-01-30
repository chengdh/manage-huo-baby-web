import React from "react";
import { HomeOutlined, BookOutlined, FormOutlined, LoginOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Col, Menu, Row, Typography } from "antd";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";
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
        <div id="header" >
            <Row>
                <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
                    <div id="logo">
                        <img src={LOGO_URL} alt="logo" />
                        <span>{appName}</span>
                    </div>
                </Col>
                <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
                    <div id="menu">{menu}</div>
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


            <style jsx>{`
            #header {
                background-color: #fff;
                position: relative;
                z-index: 10;
                height: 64px;
              }
              
              #logo {
                overflow: hidden;
                padding-left: 40px;
                float: left;
                line-height: 64px;
                text-decoration: none;
                height: 64px;
                img {
                  display: inline;
                  vertical-align: middle;
                  margin-right: 16px;
                  width: 32px;
                }
                span {
                  color: @primary-color;
                  outline: none;
                  font-size: 14px;
                  line-height: 28px;
                }
              }
              
              #header-meta {
                padding-right: 40px;
              }
              
              #menu {
                float: right;
                overflow: hidden;
                height: 64px;
                .ant-menu {
                  line-height: 60px;
                }
                .ant-menu-horizontal {
                  border-bottom: none ;
                  &>.ant-menu-item {
                    border-top: 2px solid transparent;
                    &:hover {
                      border-top: 2px solid @primary-color;
                      border-bottom: 2px solid transparent;
                    }
                  }
                  &>.ant-menu-item-selected {
                    border-top: 2px solid @primary-color;
                    border-bottom: 2px solid transparent;
                    a {
                      color: @primary-color;
                    }
                  }
                }
              }

            `}</style>
            </div>
        </div>
    );
}
export default NavBar;