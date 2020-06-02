import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export default StyledNav;