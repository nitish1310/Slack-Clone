import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* alt={user?.displayName} src={user?.photoURL} */}

        <img
          className="header__logo"
          src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_Old-to-New-Final.gif"
        />

        {/* Time Icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search Icon */}
        <SearchIcon />
        {/* input */}

        <input placeholder="Search Nitish" type="text" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
      <div className="header__avatar">
        {/* Avatar */}

        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
      </div>
    </div>
  );
}

export default Header;
