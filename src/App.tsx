import {Header, Main} from "./main/components";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

const App = (): JSX.Element => {
    return (
        <>
            <Container fluid style={{
                margin: 0,
                padding: 0,
            }}>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Main/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;