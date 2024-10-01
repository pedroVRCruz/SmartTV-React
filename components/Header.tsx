import React, { useState } from "react";
import { Container } from "../src/styles/Header";

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle na visibilidade do dropdown
  };

  return (
    <Container>
      <div className="gradient">
        <div className="box">
          <div className="logo">
            <img src="../src/assets/LogoSmartTV.svg" alt="Logo" />
          </div>
          <div className="menu">
            <a href="#services">
              <div className="text">Serviços</div>
            </a>
            <a href="#about">
              <div className="text">Sobre nós</div>
            </a>
            <a href="#contact">
              <div className="text">Contato</div>
            </a>
          </div>
          <div className="mobilemenu">
            <div className="dropdown">
              <button onClick={toggleDropdown}>
                <img src="../src/assets/dropdown.svg" alt="Menu" />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#services">
                    <div className="text">Serviços</div>
                  </a>
                  <a href="#about">
                    <div className="text">Sobre nós</div>
                  </a>
                  <a href="#contact">
                    <div className="text">Contato</div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
