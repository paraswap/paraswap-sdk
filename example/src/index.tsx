import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import "./stylesheets/style.scss";
import 'c3/c3.css';

import Swapper from "./swapper";

declare let document: any;

class Root extends React.Component {

  render() {
    return (
      <div className={"root-container"}>
        <div className={"app"}>
         <Swapper />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
