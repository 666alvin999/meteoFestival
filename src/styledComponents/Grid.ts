import styled from "styled-components";

const GridContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-row-gap: 3vw;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: repeat(2, 7vw) 75vw 7vw;
`;

const GridBox = styled.div`
    justify-self: center;
    align-self: center;
`;

export {GridContainer, GridBox};