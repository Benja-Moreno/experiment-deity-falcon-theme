import { GET_SIDEMENU_STATE } from "./SideMenuQuery";

export const toggleSideMenuResolver = (_, _variables, { cache }) => {
  const queryResponse = cache.readQuery({ query: GET_SIDEMENU_STATE });
  const sidemenu = { ...queryResponse.sidemenu };
  sidemenu.isOpen = !sidemenu.isOpen;

  cache.writeQuery({
    query: GET_SIDEMENU_STATE,
    data: { sidemenu }
  });

  return null;
};
