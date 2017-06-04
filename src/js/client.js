import React from 'react';
import {render, reactDOM} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Layout from './components/Layout';
import Featured from './pages/Featured';
import Archived from './pages/Archived';
import Settings from './pages/Settings';

const app = document.getElementById('app');


render(
	<BrowserRouter>
		<Route path ="/" component={Layout}></Route>
	</BrowserRouter>
,app);
	
