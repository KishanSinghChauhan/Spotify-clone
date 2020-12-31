import React from "react";
import "./Header.scss";
import { useStateValue } from "../../../Context/DataLayer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";

const Header = ({ spotify }) => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?display_name.uri} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;