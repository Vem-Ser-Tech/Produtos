import styled from 'styled-components';


export const Container = styled.div`
  display: flex; 
  flex-direction: column;
  height: 100vh;
  width: min-content;
  color: rgb(32, 32, 32);
  margin-inline: 1%;
`;

export const StyledImage = styled.img`
  max-width: 100px; 
  height: auto; 
`;

export const Ul = styled.ul `
  list-style-type: none;
  padding: 0;
  flex-direction: row; 
`;

export const Li = styled.li `
  margin-bottom: 10%;
  width: 100%;
  background-color: white;
  border-radius: 5%;
`;
