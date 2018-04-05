var React = require('react');
var ReactDOM = require('react-dom');

var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var CountDown = require('CountDown');
var Timer = require('Timer');


require('style!css!foundation-sites/dist/foundation.min.css');
// App css
require('style!css!sass!applicationStyles');
$(document).foundation();
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={CountDown} />
            <IndexRoute component={Timer} />
        </Route>
    </Router>,
    document.getElementById('app')
);
