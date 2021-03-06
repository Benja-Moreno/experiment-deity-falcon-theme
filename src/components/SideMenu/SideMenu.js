import React from "react";
import PropTypes from "prop-types";
import {
  Sidebar as FalconSidebar,
  Portal,
  Backdrop,
  Icon,
  Box,
  List
} from "@deity/falcon-ui";

import { MenuQuery } from "@deity/falcon-shop-data";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu = ({ isOpen, toggle }) => (
  <React.Fragment>
    <FalconSidebar as={Portal} visible={isOpen} side="left">
      <Box position="relative" flex={1}>
        <h3>Menu</h3>
        <Icon
          src="close"
          stroke="black"
          position="absolute"
          {...sidebarSideToPosition}
          onClick={() => toggle && toggle()}
        />
        <nav>
          <MenuQuery>
            {({ data: { menu } }) => <SideMenuContents items={menu} />}
          </MenuQuery>
        </nav>
      </Box>
    </FalconSidebar>
    <Backdrop as={Portal} visible={isOpen} onClick={() => toggle && toggle()} />
  </React.Fragment>
);

SideMenu.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

const sidebarSideToPosition = {
  top: 0,
  left: 0
};

export const SideMenuContents = ({ items }) => (
  <List {...ListStyles}>
    {items.map(item => (
      <SideMenuItem key={item.urlPath} item={item} />
    ))}
  </List>
);

const ListStyles = {
  css: {
    listStyle: "none"
  }
};
