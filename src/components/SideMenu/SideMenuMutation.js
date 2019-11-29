import gql from "graphql-tag";
import { Mutation } from "@deity/falcon-data";

const TOGGLE_SIDEMENU_MUTATION = gql`
  mutation ToggleSideMenuMutation {
    toggleSideMenu @client
  }
`;

export class ToggleSideMenuMutation extends Mutation {
  static defaultProps = {
    mutation: TOGGLE_SIDEMENU_MUTATION
  };
}
