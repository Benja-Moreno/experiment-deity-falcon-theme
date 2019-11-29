import { getClientConfigResolver } from '@deity/falcon-front-kit';
import {
  openSidebarResolver,
  closeSidebarResolver,
  toggleMenuResolver
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

    menu: {
      isOpen: false,
      __typename: "MenuStatus"
    }
  },

  resolvers: {
    Query: {
      clientConfig: getClientConfigResolver
    },

    Mutation: {
      openSidebar: openSidebarResolver,
      closeSidebar: closeSidebarResolver,
      toggleMenu: toggleMenuResolver
    }
  }
};
