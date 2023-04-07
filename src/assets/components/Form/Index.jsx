import React, { useEffect, useState } from "react";
import { Form, Options, RegisterParagraph } from "./Styles";
import mail from "../../images/mail.svg";
import mailFocus from "../../images/mail-focus.svg";
import lock from "../../images/lock.svg";
import lockFocus from "../../images/lock-focus.svg";
import Header from "../Header/Index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("(Insira um email válido)")
      .required("(Email é obrigatório)"),
    password: yup.string().required("(A senha é obrigatória)"),
  })
  .required();

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(userData) {
    console.log(userData);
  }

  const [focusMail, setFocusMail] = useState(false);
  const [focusLock, setFocusLock] = useState(false);

  function handleFocusMail() {
    setFocusMail(!focusMail);
  }
  function handleFocusLock() {
    setFocusLock(!focusLock);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Header />

      <label htmlFor="email">
        <p>Email {errors.email && <span>{errors.email?.message}</span>}</p>
        <img src={focusMail ? mailFocus : mail} />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
          onFocus={handleFocusMail}
          onBlur={handleFocusMail}
        />
      </label>
      <label htmlFor="password">
        <p>
          Senha {errors.password && <span>{errors.password?.message}</span>}
        </p>
        <img src={focusLock ? lockFocus : lock} />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          {...register("password", { required: true })}
          onFocus={handleFocusLock}
          onBlur={handleFocusLock}
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
