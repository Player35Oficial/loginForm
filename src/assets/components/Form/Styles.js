import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    width: 100%;
    height: 45px;
    border-radius: 0.4rem;
    border-style: none;
    background-color: inherit;
    padding-left: 2.5rem;
    font-size: 14px;
    color: inherit;
    border: 1px solid #868686;

    &:focus-visible {
      outline: 1px solid var(--primary-color);
      outline-offset: -1px;
    }
  }

  label {
    position: relative;
  }

  img {
    position: absolute;
    text-align: flex-end;
    top: 37px;
    left: 10px;
  }
`;
