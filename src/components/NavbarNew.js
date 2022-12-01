import React, { Component } from "react";

import AuthService from "../services/auth.services";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default class NavbarNew extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      isUser: false,
      isStaff: false,
      isAdmin: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        isUser: user.roles.includes("ROLE_USER"),
        isStaff: user.roles.includes("ROLE_STAFF"),
        isAdmin: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    const confirm = window.confirm("Are you sure you want to log out?");
    if (confirm) {
      AuthService.logout();
      this.setState({
        isUser: false,
        isStaff: false,
        isAdmin: false,
        currentUser: undefined,
      });
      window.location = "/";
    }
  }

  render() {
    const { currentUser, isAdmin, isStaff, isUser } = this.state;
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          RateGame
        </Link>
        <ul>
          {currentUser && <CustomLink href="/profile">Profile</CustomLink>}
          {!currentUser && <CustomLink href="/login">Login</CustomLink>}
          {!currentUser && <CustomLink href="/register">Register</CustomLink>}
          {isAdmin && <CustomLink href="/review/new">New review</CustomLink>}
          {isStaff && <CustomLink href="/review/new">New review</CustomLink>}
          {currentUser && (
            <Link onClick={this.logOut} className="logout-link">
              Log out
            </Link>
          )}
        </ul>
      </nav>
    );
  }
}

function CustomLink({ href, children, ...props }) {
  const resolvedPath = useResolvedPath(href);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
}
