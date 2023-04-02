import React from "react";
import logo from "../../images/logo.svg";
import login from "../../images/log-in.svg";
import { HeaderContainer, Logo, LogIn } from "./Styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <LogIn>
          <div>
            <img src={login} alt="" />
            <p>Faça seu login</p>
          </div>
          <p>Entre com suas informações de login.</p>
        </LogIn>
      </HeaderContainer>
    </>
  );
}
