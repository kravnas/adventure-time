import React from "react";
import './index.css';

class Error extends React.Component {
    render() {
      return (
        <div className="row">
            <h1>Error: path does not exist</h1>
        </div>
      );
    }
  }

export default Error;
