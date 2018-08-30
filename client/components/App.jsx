import React from "react";


import { HashRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>I Am Nice</a></h1>
        {/* <div>
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/links/:rank" render={ props => {
            return <Rank {...props}/>}}
          />
          <Route path="/rank/:rank/:name" render={props => {
            return <Description {...props}/>
          }}/>
          </div>
          <div className="hack">
          <Route path="/rank/:rank/:name/species" render={props => {
            return <Species {...props}/>
          }}/>
          </div> */}
      </React.Fragment>
    </Router>
  );
};

export default App;
