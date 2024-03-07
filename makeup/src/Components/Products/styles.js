import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: min-content;
`;

export const StyledImage = styled.img`
  max-width: 100px; 
  height: auto; 
`;

export const Ul = styled.ul `
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li `
  display: flex;
  align-items: center;
  flex-direction: column;
`;
