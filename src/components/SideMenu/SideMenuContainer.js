import React from "react";
import PropTypes from "prop-types";
import { ToggleSideMenuMutation } from "./SideMenuMutation";
import { SideMenuQuery } from "./SideMenuQuery";

export const SideMenuContainer = ({ children }) => {
  return (
    <SideMenuQuery>
      {({ data: { sidemenu } }) => {
        return (
          <ToggleSideMenuMutation>
            {toggleSideMenu =>
              children({
                isOpen: sidemenu.isOpen,
                toggle: toggleSideMenu
              })
            }
          </ToggleSideMenuMutation>
        );
      }}
    </SideMenuQuery>
  );
};

SideMenuContainer.propTypes = {
  children: PropTypes.func.isRequired
};
