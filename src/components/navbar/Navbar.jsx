import { useState } from 'react';
import { useSelector } from 'react-redux';
import actions from '../../store/user/action';

import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const user = useSelector((state) => state.user);

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
				{user.length ? (
					<>
						<li className={styles.linkItem}>
							<Link to='/profile'>{user}</Link>
						</li>
						<li className={`${styles.linkItem} ${styles.register}`}>
							<button
								className={styles.button}
								onClick={() => actions.logout()}
								to='/logout'>
								<span className={styles.logout}>logout</span>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
									/>
								</svg>
							</button>
						</li>
					</>
				) : (
					<>
						<li className={styles.linkItem}>
							<Link to='/login'>Log in</Link>
						</li>
						<li className={`${styles.linkItem} ${styles.register}`}>
							<Link to='/register'>Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
