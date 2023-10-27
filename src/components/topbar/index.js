import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

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

// En Topbar
const Container = styled.div`
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px; /* Mantiene la altura fija */
  z-index: 999; /* Asegura que la barra superior esté encima de la barra lateral */
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  padding: 5px;
  margin-right: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.White};
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.White};
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.Grayish};
  border-radius: 4px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.Grayish};
  }
`;

export default TopBar;
