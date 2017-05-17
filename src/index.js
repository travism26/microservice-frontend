import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './client.min.js'
import Bootstrap from "./vendor/bootstrap-without-jquery"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives"
import Featured from "./pages/Featured"
import Layout from "./pages/Layout"
import Settings from "./pages/Settings"

// ReactDOM.render(
//   <Layout />,
//   document.getElementById('root')
// );

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" components={Layout}>
			<IndexRoute component={Featured}></IndexRoute>
			<Route path="archives" component={Archives}></Route>
			<Route path="settings" component={Settings}></Route>
		</Route>
	</Router>,
document.getElementById('root'));
