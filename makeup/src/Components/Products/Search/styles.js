import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #c67e79;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ea9070;
  }
`;
