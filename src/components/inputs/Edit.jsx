import styles from './login.module.css';
import login from '../../images/edit.png';

const Edit = () => {
	return (
		<section className={styles.login}>
			<div className={styles.left}>
				<h1 className={styles.head}>Edit your Profile</h1>
				<form className={styles.form}>
					<input
						type='text'
						className={styles.input}
						placeholder='Username'
					/>
					<input
						type='text'
						className={styles.input}
						placeholder='Full name'
					/>
					<input
						type='text'
						className={styles.input}
						placeholder='Bio'
					/>
					<input
						type='file'
						className={styles.input}
						placeholder='Change Profile picture'
					/>
					<input
						type='file'
						className={styles.input}
						placeholder='Change Cover photo'
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Type your new password'
					/>
					<input
						type='password'
						className={styles.input}
						placeholder='Type your old password'
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

export default Edit;
