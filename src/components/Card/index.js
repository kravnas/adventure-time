import React from "react";
import './index.css';

import {Row, Col, Card, CardImg} from 'react-bootstrap';
import Button from "../Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = (props) => {
    return (
        <Col lg={3} md={4} sm={12}>

            <Card>
                <Row>
                    <Col sm={12}>
                        <CardImg variant="top" className="card-image" src="http://placehold.it/250/d4d6e9" alt="" height="250" width="100%" />
                        
                        <div className="card-date-event">
                            25.<br/> des
                        </div>
                        <div className="card-category">
                            Kategori
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>
                        <Card.Body className="pb-2">
                            <p className="card-date-posted text-muted pt-2 pb-3"><span className="bolder blue">Lagt ut:</span> 20.05.2018</p>
                            <Card.Title className="card-title mt-2"><h1>Aktivitetstittel</h1></Card.Title>
                            <h4 className="card-subtitle">Subtittel</h4>
                            <Card.Text className="card-description mt-3">
                                Lorem ipsum dolor sit amet et consequetur et descipit let amendatus al colvonion
                            </Card.Text>
                            <button  
                                title="Outline button"
                                type="button"
                                className="mt-4 btn btn btn-outline-primary btn-block"
                            >
                                    Les mer om aktiviteten
                            </button>
                            <Card.Footer className="card-tags mt-4">
                                <div className="card-tag-icon">
                                    <FontAwesomeIcon icon="tag" />
                                </div>
                                <div className="card-tag smallest">
                                    sport
                                </div>
                            </Card.Footer>
                        </Card.Body>
                    </Col>
                </Row>    
            </Card>
        </Col>
    );
}

export default Cards;