import styled from "styled-components";

const SearchWrapper = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  align-self: center;
  width: 20vw;
  height: 2vw;
`;

export {SearchInput, SearchWrapper};