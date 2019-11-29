import React from "react";
import PropTypes from "prop-types";

import { RouterLink } from "@deity/falcon-ui-kit";
import { List, ListItem, Icon, Button } from "@deity/falcon-ui";

/**
 * Parent Menu Item
 */
export const SideMenuItem = ({ item, open = false }) => (
  <ListItem {...ItemStyles}>
    <Item item={item} parentOpen={open} />
  </ListItem>
);

/**
 * Menu Item
 */
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleMenuState() {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  }

  render() {
    const { item } = this.props;
    const { open } = this.state;
    if (item.children && item.children.length > 0) {
      return (
        <React.Fragment>
          <Button onClick={e => this.toggleMenuState(e)} {...ButtonStyles}>
            <span>{item.name}</span>
            <Icon
              src={open ? "dropdownArrowUp" : "dropdownArrowDown"}
              {...IconStyles}
            />
          </Button>
          <List display={open ? "block" : "none"} {...ListStyles}>
            <ListItem {...ItemStyles}>
              <RouterLink p="sm" to={item.urlPath} {...LinkStyles}>
                View all {item.name}
              </RouterLink>
            </ListItem>
            {item.children.map(subItem => (
              <SideMenuItem key={subItem.urlPath} item={subItem} open={open} />
            ))}
          </List>
        </React.Fragment>
      );
    }

    return (
      <RouterLink p="sm" to={item.urlPath} {...LinkStyles}>
        {item.name}
      </RouterLink>
    );
  }
}

const ListStyles = {
  css: {
    listStyle: "none"
  }
};

const ItemStyles = {
  borderBottom: "regular",
  borderColor: "primaryLight",
  p: "none",
  diplay: "flex",
  flexDirection: "column"
};

const LinkStyles = {
  py: "md",
  px: "none"
};

const ButtonStyles = {
  color: "black",
  bg: "transparent",
  py: "md",
  px: "none",
  css: {
    width: "100%",
    height: "auto"
  }
};

const IconStyles = {
  css: {
    marginLeft: "auto"
  }
};

Item.propTypes = {
  parentOpen: PropTypes.bool
};
