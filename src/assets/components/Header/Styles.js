import styled from "styled-components";

export const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  gap: 4px;
  color: var(--text-title);
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
export const LogIn = styled.div`
  font-size: 24px;
  font-weight: 600;
  gap: 5px;
  display: flex;
  flex-direction: column;

  div {
    color: var(--text-title);
    display: flex;
    gap: 10px;
  }

  > p {
    font-size: 1rem;
  }
`;
