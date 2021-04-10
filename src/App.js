import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './page/Home';
import About from './page/About';
import EditProfile from './page/EditProfile';
import Login from './page/Login';
import Post from './page/Post';
import Profile from './page/Profile';
import Register from './page/Register';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Create from './page/Create';

function App() {
	return (
		<div className='app'>
			<div className='worn'>
				<h1>Under construction...</h1>
			</div>
			<Router>
				<Navbar />
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/register' component={Register} />
						<Route path='/login' component={Login} />
						<Route path='/profile' component={Profile} />
						<Route path='/edit-profile' component={EditProfile} />
						<Route path='/single' component={Post} />
						<Route path='/create' component={Create} />
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
