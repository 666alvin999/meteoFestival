import {Logo, LogoFestival, LogoMeteo} from "../../styledComponents/Logo";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #6b9ac4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80px;
`;

const Header = (props): JSX.Element => {
    return (
        <>
            <StyledHeader className="GridBox">
                <Logo>
                    <LogoMeteo>Météo</LogoMeteo>
                    <LogoFestival>Festivals</LogoFestival>
                </Logo>
            </StyledHeader>
        </>
    );
}

export default Header