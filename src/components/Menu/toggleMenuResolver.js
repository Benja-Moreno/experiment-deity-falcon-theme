import { GET_MENU_STATE } from "./MenuQuery";

export const toggleMenuResolver = (_, _variables, { cache }) => {
  const queryResponse = cache.readQuery({ query: GET_MENU_STATE });
  const menu = { ...queryResponse.menu };
  menu.isOpen = !menu.isOpen;

  cache.writeQuery({
    query: GET_MENU_STATE,
    data: { menu }
  });

  return null;
};
