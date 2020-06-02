import React from 'react';
import styled from 'styled-components';

const StyledSubNavLink = styled.a`
  text-decoration: none;
  font-size: 1.2 em;
  color: ${props => props.linkFontColor};
  white-space: nowrap;
  margin: 2%;

  &:hover {
    color: #2B80D4;
  }
`

export default StyledSubNavLink;