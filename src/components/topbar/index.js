import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, SearchBar, SearchInput, SearchButton,  ProfileMenu, MenuItem, ProfileIcon } from "./style";

const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // Agrega aquí la lógica para cerrar la sesión.
  };

  return (
    <Container>
      <SearchBar>
        <SearchInput type="text" placeholder="Buscar" />
        <SearchButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchBar>
      <ProfileIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faUser} />
        {showMenu && (
          <ProfileMenu>
            <MenuItem onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </MenuItem>
          </ProfileMenu>
        )}
      </ProfileIcon>
    </Container>
  );
};


export default TopBar;
