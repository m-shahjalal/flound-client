import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../utils/axios';
import styles from './login.module.css';
import login from '../../images/register.png';

const initialState = {
	name: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Register = () => {
	const { push } = useHistory();
	const [inputs, setInputs] = useState(initialState);

	const changeHandler = (e) =>
		setInputs({ ...inputs, [e.target.name]: e.target.value });

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post('/user/signup', inputs)
			.then((res) => {
				console.log(res.data);
				if (res.data) push('/');
				setInputs(initialState);
			})
			.catch((e) => console.log(e));
	};

	return (
		<section className={styles.login}>
			<div className={styles.left}>
				<h1 className={styles.head}>Create Your Account</h1>
				<form onSubmit={submitHandler} className={styles.form}>
					<input
						type='text'
						className={styles.input}
						placeholder='First and Last name'
						name='name'
						value={inputs.name}
						onChange={changeHandler}
					/>
					<input
						type='text'
						className={styles.input}
						placeholder='Email'
						name='email'
						value={inputs.email}
						onChange={changeHandler}
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Password'
						name='password'
						value={inputs.password}
						onChange={changeHandler}
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Confirm Password'
						name='confirmPassword'
						value={inputs.confirmPassword}
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

export default Register;
