import React from "react";
import PropTypes from "prop-types";

import { RouterLink } from "@deity/falcon-ui-kit";

export class SideMenuItem extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          open: false
      };
      // this.toggleMenuState = this.toggleMenuState.bind(this);
      
  }
    
    
    toggleMenuState() {
        const { open } = this.state;
        this.setState({
          open: !open
        });
  }

    getMenuItemHtml(item) {
      const { open } = this.state;
    if (item.children && item.children.length > 0) {
      return (
        <React.Fragment>
          <button onClick={e => this.toggleMenuState(e)}>{item.name}</button>
              {open &&
                  <p>OPen</p>
          }
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
