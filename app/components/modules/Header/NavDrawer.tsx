import { Drawer, List, Menu } from "antd";
import Link from "next/link";
import React, { useEffect } from "react";
import { appName } from "../../../constants/constants";

type MenuItemType = {
    link?: string,
    name: string,
    icon: React.ReactNode,
    onClick?: () => void

};
interface NavDrawerProps {
    width?: string | number;
    visible: boolean;
    onClose: () => void;
    menuItems: Array<MenuItemType>,
    selectedItem: string | null
};
//小屏幕尺寸下导航抽屉
const NavDrawer: React.FC<NavDrawerProps> = ({ width, visible, onClose, menuItems, selectedItem }) => {

    useEffect(() => {
        window.onresize = () => {
            if (visible) {
                onClose();
            }
        };
    }, [width, visible, onClose]);

    return (
        <Drawer
            title={appName}
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
        >
            <Menu mode="inline">
                {menuItems.map(element => {
                    if (element.link) {
                        return (
                            <Menu.Item key={element.name} icon={element.icon}>
                                <Link
                                    key={element.name}
                                    href={element.link}
                                >
                                    <a onClick={onClose}>{element.name} </a>
                                </Link>

                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item key={element.name} icon={element.icon}>
                            <a onClick={element.onClick}>{element.name} </a>
                        </Menu.Item>
                    )
                })}
            </Menu>
        </Drawer>
    );
};
export default NavDrawer;