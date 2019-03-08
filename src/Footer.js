import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Footer extends React.Component {

  render() {
    const auth = this.props.auth;

    const links = [
      {id:1, href: "/link1", text: "Link 1"},
      {id:2, href: "/link2", text: "Link 2"},
      {id:3, href: "/link3", text: "Link 3"},
      {id:4, href: "/link4", text: "Link 4"},
    ];

    if (auth) {
      links.push({id:99, href: "/logout", text: "Logout"});
    }
    const linkList = links.map((link) =>
      <ListItem key={link.id} component="a" href={link.href} >
        <ListItemText primary={link.text} />
      </ListItem>
    );

    return (
      <footer>
      Footer
        <List>
          {linkList}
        </List>
      </footer>
    );
  }
}

export default Footer;
