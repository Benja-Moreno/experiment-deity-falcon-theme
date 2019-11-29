import gql from "graphql-tag";
import { Mutation } from "@deity/falcon-data";

const TOGGLE_MENU_MUTATION = gql`
  mutation ToggleMenuMutation {
    toggleMenu @client
  }
`;

export class ToggleMenuMutation extends Mutation {
  static defaultProps = {
    mutation: TOGGLE_MENU_MUTATION
  };
}
