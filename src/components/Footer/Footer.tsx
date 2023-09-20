import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #6b9ac4;
  grid-column: 1/4;
  grid-row: 4/5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = (props): JSX.Element => {
    return (
        <>
            <StyledFooter className="GridBox">
            </StyledFooter>
        </>
    );
}

export default Footer;