import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Axios from 'axios';
import Wrapper from './Wrapper.js';
import Bulbasaur from './bulbasaur.component.js';
import ShowImage from './show-image.component.js';
import Charmander from './charmander.component.js';
import Squirtle from './squirtle.component.js';


class App extends React.Component {
	render() {
		return (
      <Router history={hashHistory}>
				<Route path="/" component={Wrapper}>
          <Route path="bulbasaur" component={Bulbasaur}>
            <Route path=":image" component={ShowImage} />
          </Route>
          <Route path="charmander" component={Charmander}>
            <Route path=":image" component={ShowImage} />
          </Route>
          <Route path="squirtle" component={Squirtle}>
            <Route path=":image" component={ShowImage} />
          </Route>
				</Route>
			</Router>
		)
	}
};

ReactDOM.render(<App />, document.getElementById("app"));
