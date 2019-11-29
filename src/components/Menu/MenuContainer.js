import React from "react";
import PropTypes from "prop-types";
import { EnsureTTI } from "@deity/falcon-front-kit";
import { ToggleMenuMutation } from "./MenuMutation";
import { MenuQuery } from "./MenuQuery";

export const MenuContainer = ({ children }) => {
         return (
           <EnsureTTI>
             {({ isReady, forceReady }) => (
               <MenuQuery>
                 {({ data: { menu } }) => {
                   if (!isReady && menu.isOpen) {
                     forceReady();
                   }

                   return (
                     <ToggleMenuMutation>
                       {toggleMenu =>
                         children({
                           isOpen: menu.isOpen,
                           toggle: toggleMenu
                         })
                       }
                     </ToggleMenuMutation>
                   );
                 }}
               </MenuQuery>
             )}
           </EnsureTTI>
         );
       };

MenuContainer.propTypes = {
  children: PropTypes.func.isRequired
};

