import styles from './login.module.css';
import login from '../../images/register.png';

const Register = () => {
	return (
		<section className={styles.login}>
			<div className={styles.left}>
				<h1 className={styles.head}>Create Your Account</h1>
				<form className={styles.form}>
					<input
						type='text'
						className={styles.input}
						placeholder='Username'
					/>
					<input
						type='text'
						className={styles.input}
						placeholder='Email'
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Password'
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Confirm Password'
					/>
					<input
						value='submit'
						type='submit'
						className={styles.submit}
					/>
				</form>
			</div>
			<div className={styles.right}>
				<img className={styles.img} src={login} alt='side appearance' />
			</div>
		</section>
	);
};

export default Register;
