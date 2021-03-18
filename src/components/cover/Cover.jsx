import styles from './cover.module.css';

const Cover = ({ text, img }) => {
	return (
		<>
			<div className={styles.cover}>
				<div className={styles.imgDiv}>
					<img src={img} alt='cover' className={styles.img} />
				</div>
				<h2 className={styles.text}>{text}</h2>
			</div>
		</>
	);
};

export default Cover;
