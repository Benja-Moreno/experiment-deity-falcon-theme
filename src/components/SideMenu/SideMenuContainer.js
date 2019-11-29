import React from "react";
import PropTypes from "prop-types";
import { EnsureTTI } from "@deity/falcon-front-kit";
import { ToggleSideMenuMutation } from "./SideMenuMutation";
import { SideMenuQuery } from "./SideMenuQuery";

export const SideMenuContainer = ({ children }) => {
  return (
    <EnsureTTI>
      {({ isReady, forceReady }) => (
        <SideMenuQuery>
          {({ data: { sidemenu } }) => {
            if (!isReady && sidemenu.isOpen) {
              forceReady();
            }

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
      )}
    </EnsureTTI>
  );
};

SideMenuContainer.propTypes = {
  children: PropTypes.func.isRequired
};
