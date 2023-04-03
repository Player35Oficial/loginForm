import React, { useEffect, useState } from "react";
import { Form } from "./Styles";
import mail from "../../images/mail.svg";
import lock from "../../images/lock.svg";
import Input from "./Input";

export default function Forms() {
  return (
    <Form>
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
      <button type="submit">Enviar</button>
    </Form>
  );
}
