import React, { useEffect, useState } from "react";
import { Form, Options, RegisterParagraph } from "./Styles";
import mail from "../../images/mail.svg";
import lock from "../../images/lock.svg";
import Header from "../Header/Index";
import { useForm } from "react-hook-form";

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(userData) {
    console.log(userData);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header />

      <label htmlFor="email">
        <p>Email {errors.email && <span>(Email é obrigatório)</span>}</p>
        <img src={mail} />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
      </label>
      <label htmlFor="password">
        <p>Senha</p>
        <img src={lock} />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          {...register("password")}
        />
      </label>

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
