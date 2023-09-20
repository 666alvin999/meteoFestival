import {SearchInput, SearchWrapper} from "../../../styledComponents/SearchBar";

const SearchBar = (props): JSX.Element => {
    return (
      <>
          <SearchWrapper>
              <SearchInput type="text"/>
          </SearchWrapper>
      </>
    );
}

export default SearchBar;