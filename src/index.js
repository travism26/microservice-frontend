import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './client.min.js'
import Layout from "./pages/Layout"

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "./vendor/bootstrap-without-jquery"

// ReactDOM.render(
//   <Layout />,
//   document.getElementById('root')
// );

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" components={Layout}>
		</Route>
	</Router>,
document.getElementById('root'));
