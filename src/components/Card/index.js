import React from "react";
import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card mt-5 mb-5">
                
                <div className="card-top">
                    <img className="card-image" src="http://placehold.it/250/d4d6e9" alt="" height="250" width="100%" />
                    
                    <div className="card-date-event">
                        25.<br/> des
                    </div>
                    <div className="card-category">
                        Kategori
                    </div>
                </div>
                
                <div className="container pb-2">
                    <p className="card-date-posted text-muted pt-2 pb-3"><span className="bolder blue">Lagt ut:</span> 20.05.2018</p>
                    <h2 className="card-title mt-2">Aktivitetstittel</h2>
                    <h4 className="card-subtitle">Subtittel</h4>
                    <p className="card-description mt-3">
                        Lorem ipsum dolor sit amet et consequetur et descipit let amendatus al colvonion
                    </p>
                    <button  
                        title="Outline button"
                        type="button"
                        className="mt-4 btn btn btn-outline-primary btn-block"
                    >
                            Les mer om aktiviteten
                    </button>
                    <div className="card-tags mt-4">
                        <div className="card-tag-icon">
                            <FontAwesomeIcon icon="tag" />
                        </div>
                        <div className="card-tag smallest">
                            sport
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;