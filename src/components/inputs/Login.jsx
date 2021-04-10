import useForm from '../../hooks/useForm';
import styles from './login.module.css';
import login from '../../images/login.png';

const Login = () => {
	const { inputs, changeHandler, submitHandler } = useForm('login');
	return (
		<section className={styles.login}>
			<div className={styles.left}>
				<h1 className={styles.head}>Login Your Account</h1>
				<form onSubmit={submitHandler} className={styles.form}>
					<input
						type='text'
						className={styles.input}
						placeholder='Email'
						name='email'
						value={inputs.email || ''}
						onChange={changeHandler}
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Password'
						name='password'
						value={inputs.password || ''}
						onChange={changeHandler}
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

export default Login;
