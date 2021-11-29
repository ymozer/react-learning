//CTRL + ALT + R rfcp rfce
import React from 'react'
import { Route, Switch, NavLink, Link } from 'react-router-dom'

import './Home.css'

function Home() {
	return (
		<>
			<main>
				<h2>Welcome to the homepage!</h2>
				<p>You can do this, I believe in you.</p>
			</main>
			<nav>
				<Link to="/products">products</Link>
			</nav>
		</>
	)
}

export default Home



