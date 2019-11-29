import { getClientConfigResolver } from '@deity/falcon-front-kit';
import {
  openSidebarResolver,
  closeSidebarResolver,
  toggleSideMenuResolver
} from "src/components";

/**
 * Defines client-side state resolvers
 */

export default {
  data: {
    sidebar: {
      contentType: null,
      side: "right",
      isOpen: false,
      __typename: "SidebarStatus"
    },

    sidemenu: {
      isOpen: false,
      __typename: "SideMenuStatus"
    }
  },

  resolvers: {
    Query: {
      clientConfig: getClientConfigResolver
    },

    Mutation: {
      openSidebar: openSidebarResolver,
      closeSidebar: closeSidebarResolver,
      toggleSideMenu: toggleSideMenuResolver
    }
  }
};
