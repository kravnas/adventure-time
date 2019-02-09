import React from "react";
import './index.css';

import Header from '../../Header';

class Home extends React.Component {
    render() {
      return (
        <div>
          <div className="row">
              <Header/>
          </div>
        </div>
      );
    }
  }

  export default Home;