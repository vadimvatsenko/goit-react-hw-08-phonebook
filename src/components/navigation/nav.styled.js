import { NavLink } from "react-router-dom";

import styled from "styled-components";


export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: green;
  }
`;

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  `;

  export const Content = styled('div')`
  flex: 1 0 auto;
  `;



