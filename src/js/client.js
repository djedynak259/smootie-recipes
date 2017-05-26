import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';

const app = document.getElementById('app');


ReactDOM.render((
	<HashRouter>
		<Route path ="/" component={Layout}>
		</Route>
	</HashRouter>
),app);
	

