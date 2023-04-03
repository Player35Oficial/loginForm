import React, { useEffect, useState } from "react";
import { Form, Options, RegisterParagraph } from "./Styles";
import mail from "../../images/mail.svg";
import lock from "../../images/lock.svg";
import Input from "./Input";
import Header from "../Header/Index";

export default function Forms() {
  return (
    <Form>
      <Header />
      <Input
        htmlFor="email"
        label="E-mail"
        icon={mail}
        type="email"
        id="email2"
        placeholder="Email"
      />
      <Input
        htmlFor="password"
        label="Senha"
        icon={lock}
        type="password"
        id="password"
        placeholder="Senha"
        autocomplete="current-password"
      />

      <Options>
        <label htmlFor="remember">
          <input type="checkbox" name="remember" id="remember" />
          <p>Lembre-me</p>
        </label>
        <span>Esqueci minha senha</span>
      </Options>

      <button type="submit">Enviar</button>
      <RegisterParagraph>
        Não tem uma conta? <strong>Registre-se</strong>
      </RegisterParagraph>
    </Form>
  );
}
