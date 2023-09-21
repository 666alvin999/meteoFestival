import {SearchBar} from "./SearchBar";
import {PersonalMap} from "./Map";
import {Col, Container, Row} from "react-bootstrap";
import {useState} from "react";

const Main = (props): JSX.Element => {


    const [searchValue, setSearchValue] = useState<string>("");

    const submitSearch = () => {

    }

    return (
        <>
            <Container fluid="sm">
                <Row>
                    <Col>
                        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} submitSearch={submitSearch}/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <PersonalMap/>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default Main;