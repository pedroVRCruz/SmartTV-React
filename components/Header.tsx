import React, { useState } from "react";
import { Container } from "../src/styles/Header";

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Estado para o item ativo

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Alterna a visibilidade do dropdown
  };

  const handleItemClick = (index: number) => {
    setActiveIndex(index); // Define o item clicado como ativo
    setIsDropdownOpen(false); // Fecha o dropdown após clicar

    setTimeout(() => {
      setActiveIndex(null);
    }, 1000);
  };

  return (
    <Container>
      <div className="gradient">
        <div className="box">
          <div className="logo">
            <a href="#">
              <img src="/src/assets/LogoSmartTV.svg" alt="Logo" />{" "}
            </a>
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
                <img src="/src/assets/dropdown.svg" alt="Menu" />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#services">
                    <div
                      className="text"
                      style={{
                        color: activeIndex === 0 ? "#23A4DD" : "#2f2f31",
                      }} // Muda a cor on click
                      onClick={() => handleItemClick(0)}
                    >
                      Serviços
                    </div>
                  </a>
                  <a href="#about">
                    <div
                      className="text"
                      style={{
                        color: activeIndex === 1 ? "#23A4DD" : "#2f2f31",
                      }} // Muda a cor on click
                      onClick={() => handleItemClick(1)}
                    >
                      Sobre nós
                    </div>
                  </a>
                  <a href="#contact">
                    <div
                      className="text"
                      style={{
                        color: activeIndex === 2 ? "#23A4DD" : "#2f2f31",
                      }} // Muda a cor on click
                      onClick={() => handleItemClick(2)}
                    >
                      Contato
                    </div>
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
