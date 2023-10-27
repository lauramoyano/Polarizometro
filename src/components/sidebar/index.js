import React, { useState } from "react";
import { Container, Sidebar, Logo, MobileNav, Itens, Rota } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDatabase,
  faPoll,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import logo from "../../assets/images/favicon.icon.png";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "react-pro-sidebar";

export default function SidebarMenu() {
  const [navToggle, setNavToggle] = useState(false);

  const toggleNav = () => {
    setNavToggle(!navToggle);
  };

  return (
    <Container>
      <MobileNav navToggle={navToggle}>
        <button onClick={toggleNav}>
          {navToggle ? (
            <i>
              <img src={Close} alt="Cerrar" />
            </i>
          ) : (
            <i>
              <img src={Hamburger} alt="Abrir" />
            </i>
          )}
        </button>
        <Link to="/">
          {!navToggle ? (
            <Menu iconShape="square">
              {" "}
              <Rota>
                {" "}
                <FontAwesomeIcon icon={faUser} />{" "}
              </Rota>{" "}
              <Rota>
                <FontAwesomeIcon icon={faDatabase} />{" "}
              </Rota>
              <Rota>
                <FontAwesomeIcon icon={faPoll} />{" "}
              </Rota>
              <Rota>
                <FontAwesomeIcon icon={faChartBar} />{" "}
              </Rota>
            </Menu>
          ): (
              <Itens>
                <Menu iconShape="square">
                  <Link to="/dashboard">
                    <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                      Profile
                    </MenuItem>
                  </Link>
                  <Link to="/data">
                    <MenuItem icon={<FontAwesomeIcon icon={faDatabase} />}>
                      Data
                    </MenuItem>
                  </Link>
                  <Link to="/surveys">
                    <MenuItem icon={<FontAwesomeIcon icon={faPoll} />}>
                      Surveys
                    </MenuItem>
                  </Link>
                  <Link to="/analytics">
                    <MenuItem icon={<FontAwesomeIcon icon={faChartBar} />}>
                      Analytics
                    </MenuItem>
                  </Link>
                </Menu>
              </Itens>
              
          )}
        </Link>
      </MobileNav>
      <Sidebar width={navToggle ? "250px" : "70px"}>
        <Logo src={logo} alt="promueva" />
        
        <Itens>
          <Menu iconShape="square">
            <Link to="/dashboard">
              <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
                Profile
              </MenuItem>
            </Link>
            <Link to="/data">
              <MenuItem icon={<FontAwesomeIcon icon={faDatabase} />}>
                Data
              </MenuItem>
            </Link>
            <Link to="/surveys">
              <MenuItem icon={<FontAwesomeIcon icon={faPoll} />}>
                Surveys
              </MenuItem>
            </Link>
            <Link to="/analytics">
              <MenuItem icon={<FontAwesomeIcon icon={faChartBar} />}>
                Analytics
              </MenuItem>
            </Link>
          </Menu>
        </Itens>
      </Sidebar>
    </Container>
  );
}
