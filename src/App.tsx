import {GridContainer} from "./styledComponents/Grid";
import {Header, Main, Footer} from "./components";

const App = (): JSX.Element => {
    return (
        <>
            <GridContainer>
                <Header/>
                <Main/>
                <Footer/>
            </GridContainer>
        </>
    );
}

export default App;