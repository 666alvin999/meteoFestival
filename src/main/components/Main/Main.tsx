import {PersonalMap} from "./Map";
import {Col, Container, Row} from "react-bootstrap";

const Main = (props): JSX.Element => {

    return (
        <>
            <Container fluid="sm">
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