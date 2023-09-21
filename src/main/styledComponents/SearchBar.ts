import styled from "styled-components";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  align-self: center;
  width: 30%;
  height: 40px;
`;

const StyledButton = styled.button`
  background-color: #ffa630;
  border-color: #ffa630;
  color: #f5f9e9;
  width: 10%;
  height: 40px;
`;

export {SearchInput, SearchWrapper, StyledButton};