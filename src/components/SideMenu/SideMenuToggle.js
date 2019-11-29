import React from "react";
import { Icon, Link } from "@deity/falcon-ui";
import PropTypes from "prop-types";
import { SideMenuContainer } from "./SideMenuContainer";

export const SideMenuToggleButton = ({ isOpen, toggle }) => {
  if (isOpen) {
    return (
      <Link onClick={toggle} title="Close Menu">
        <Icon src="close" />
      </Link>
    );
  } else {
    return (
      <Link onClick={toggle} title="Open Menu">
        <Icon src="menu" />
      </Link>
    );
  }
};

SideMenuToggleButton.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

export const SideMenuToggle = () => (
  <SideMenuContainer>
    {sideMenuProps => <SideMenuToggleButton {...sideMenuProps} />}
  </SideMenuContainer>
);