import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.left}>
					<Link to='/' className={styles.logo}>
						<img src={logo} alt='logo' />
						<span className={styles.text}>Flound</span>
					</Link>
					<div className={styles.para}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eos quidem distinctio voluptas nulla,
					</div>
				</div>
				<div className={styles.right}>
					<ul className={styles.list}>
						<h3 className={styles.head}>Navigation</h3>
						<li className={styles.item}>
							<Link to='/'>Home</Link>
						</li>
						<li className={styles.item}>
							<Link to='/about'>About</Link>
						</li>
						<li className={styles.item}>
							<Link to='/login'>Login</Link>
						</li>
						<li className={styles.item}>
							<Link to='/register'>Register</Link>
						</li>
					</ul>
					<ul className={styles.list}>
						<h3 className={styles.head}>Import Links</h3>
						<li className={styles.item}>
							<Link to='/'>Community</Link>
						</li>
						<li className={styles.item}>
							<Link to='/'>Authors</Link>
						</li>
						<li className={styles.item}>
							<Link to='/'>Terms & Conditions</Link>
						</li>
						<li className={styles.item}>
							<Link to='/'>Contribution guidelines</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
