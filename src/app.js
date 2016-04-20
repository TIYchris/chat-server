import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import App from 'layouts/app';


// Components
import ChatroomContainer from 'ui/chatroomContainer';

render(  
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={ChatroomContainer} />
    </Route>
  </Router>
, document.getElementById('app'));