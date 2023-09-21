import {SearchInput, SearchWrapper, StyledButton} from "../../../styledComponents/SearchBar";
import PropTypes from "prop-types";

type ChangeEventType = React.ChangeEvent<HTMLInputElement>;

type Props = {
    searchValue: string,
    setSearchValue: Function,
    submitSearch: Function;
}

const SearchBar = (props: Props): JSX.Element => {

    const handleInputChange = (event: ChangeEventType) => {
        props.setSearchValue(event.target.value);
    }

    return (
      <>
          <SearchWrapper>
              <SearchInput type="text" value={props.searchValue} onChange={handleInputChange}/>
              <StyledButton className="btn btn-primary" onClick={() => props.submitSearch}>Search</StyledButton>
          </SearchWrapper>
      </>
    );

}

SearchBar.propTypes = {
    submitSearch: PropTypes.func.isRequired
}

export default SearchBar;