import { BookOutlined, FormOutlined, HomeOutlined, LoginOutlined } from "@ant-design/icons";
import { Col, Menu, Row, Typography } from "antd";
import Link from "next/link";
import React from "react";

type NavBarProps = {
    handleMobileDrawerOpen(): void,
    handleMobileDrawerClose(): void,
    mobileDrawerOpen: boolean,
    selectedTab: string,
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
            </div>

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
            }
            #logo  img {
                  display: inline;
                  vertical-align: middle;
                  margin-right: 16px;
                  width: 32px;
                }
            #logo  span {
                  color: @primary-color;
                  outline: none;
                  font-size: 14px;
                  line-height: 28px;
              }
              
            #header-meta {
                padding-right: 40px;
              }
              
            #menu {
                float: right;
                overflow: hidden;
                height: 64px;
              }
            #menu  :global(.ant-menu){
                  line-height: 60px;
              }
            #menu :global(.ant-menu-horizontal){
                  border-bottom: none ;
              }
            `}</style>
        </div>
    );
}
export default NavBar;