import React from "react";
import PropTypes from "prop-types";

import { RouterLink } from "@deity/falcon-ui-kit";

export class SideMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getMenuItemHtml(item) {
    if (item.children && item.children.length > 0) {
      return (
        <React.Fragment>
          <button>{item.name}</button>
          <ul>
            <li>
              <RouterLink p="sm" to={item.urlPath}>
                View all {item.name}
              </RouterLink>
            </li>
            {item.children.map(subItem => (
              <li key={subItem.urlPath}>{this.getMenuItemHtml(subItem)}</li>
            ))}
          </ul>
        </React.Fragment>
      );
    }

    return (
      <RouterLink p="sm" to={item.urlPath}>
        {item.name}
      </RouterLink>
    );
  }

  render() {
    const { item } = this.props;

    return this.getMenuItemHtml(item);
  }
}
