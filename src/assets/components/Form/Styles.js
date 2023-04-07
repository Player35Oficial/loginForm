import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    text-align: center;
  }

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
    p {
      text-align: start;
      width: 100%;
      span {
        color: var(--primary-color);
        text-align: end;
      }
    }
  }

  img {
    position: absolute;
    text-align: flex-end;
    top: 37px;
    left: 10px;
  }

  button {
    background-color: var(--primary-color);
    border-style: none;
    font-size: 18px;
    padding: 12px 0;
    text-transform: uppercase;
    font-weight: 600;
    color: #473404;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: 0.2s;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--form-background);
    width: 572px;
    height: 542px;
    padding: 54px 120px;
    border-radius: 4px;

    place-content: center;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: inherit;
    align-items: center;
    gap: 8px;
  }

  label input {
    height: 20px;
    width: 20px;
    border-style: none;
  }

  label p {
    font-size: 16px;
    width: max-content;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-color);
  }
`;

export const RegisterParagraph = styled.p`
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 300;
`;
