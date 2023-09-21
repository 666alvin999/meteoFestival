import {SearchWrapper} from "../../../styledComponents/SearchBar";
import {SearchBox} from "@mapbox/search-js-react";
import {MapRef} from "react-map-gl";

type Props = {
    map: MapRef | null
}

const SearchBar = (props: Props): JSX.Element => {

    return (
      <>
          <SearchWrapper>
              <SearchBox
                accessToken={process.env.REACT_APP_MAPBOX_TOKEN as string}
                map={props.map?.getMap()}
                value={""}
              />
          </SearchWrapper>
      </>
    );

}

export default SearchBar;