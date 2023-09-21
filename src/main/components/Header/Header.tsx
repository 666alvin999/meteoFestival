import {Logo, LogoFestival, LogoMeteo} from "../../styledComponents/Logo";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #6b9ac4;
  display: flex;
  grid-column: auto;
  flex-direction: column;
  justify-content: center;
  height: 6vh;
`;

const Header = (props): JSX.Element => {
    return (
        <>
            <StyledHeader>
                <Logo>
                    <LogoMeteo>Météo</LogoMeteo>
                    <LogoFestival>Festivals</LogoFestival>
                </Logo>
            </StyledHeader>
        </>
    );
}

export default Header