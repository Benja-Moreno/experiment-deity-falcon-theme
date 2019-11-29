import gql from "graphql-tag";
import { Query } from "@deity/falcon-data";

export const GET_MENU_STATE = gql`
  query Menu {
    menu @client {
      isOpen
    }
  }
`;

export class MenuQuery extends Query {
  static defaultProps = {
    query: GET_MENU_STATE
  };
}
