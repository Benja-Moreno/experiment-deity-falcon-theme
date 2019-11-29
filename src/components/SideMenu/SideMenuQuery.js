import gql from "graphql-tag";
import { Query } from "@deity/falcon-data";

export const GET_SIDEMENU_STATE = gql`
  query SideMenu {
    sidemenu @client {
      isOpen
    }
  }
`;

export class SideMenuQuery extends Query {
  static defaultProps = {
    query: GET_SIDEMENU_STATE
  };
}
