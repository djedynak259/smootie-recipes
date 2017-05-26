import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';

const app = document.getElementById('app');


ReactDOM.render((
	<BrowserRouter>
		<Route path ="/" component={Layout}>
		</Route>
	</BrowserRouter>
),app);
	

