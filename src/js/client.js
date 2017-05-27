import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Featured from './pages/Featured';
import Archived from './pages/Archived';
import Settings from './pages/Settings';

const app = document.getElementById('app');


ReactDOM.render((
	<BrowserRouter>
		<Route path ="/" component={Layout}>
		</Route>
	</BrowserRouter>
),app);
	

