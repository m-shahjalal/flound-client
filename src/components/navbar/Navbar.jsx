import { useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className={styles.nav}>
			<Link to='/' className={styles.logo}>
				<img src={logo} alt='logo' />
				<span className={styles.text}>Flound</span>
			</Link>
			<div
				className={styles.hamburger}
				onClick={() => setToggle(!toggle)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
			<ul className={toggle ? styles.show : styles.hide}>
				<li className={styles.linkItem}>
					<Link to='/'>Home</Link>
				</li>
				<li className={styles.linkItem}>
					<Link to='/about'>About</Link>
				</li>
				<li className={styles.linkItem}>
					<Link to='/login'>Log in</Link>
				</li>
				<li className={`${styles.linkItem} ${styles.register}`}>
					<Link to='/register'>Register</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
