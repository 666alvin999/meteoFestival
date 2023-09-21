import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #6b9ac4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = (props): JSX.Element => {
    return (
        <>
            <StyledFooter className="GridBox">
                <p>Created by Hamaide Alvin</p>
            </StyledFooter>
        </>
    );
}

export default Footer;