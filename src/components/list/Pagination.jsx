import styles from './list.module.css';

const Pagination = () => {
	return (
		<div className={styles.pagination}>
			<button className={styles.button}>&larr; back</button>
			<button className={styles.button}>1</button>
			<button className={styles.button}>2</button>
			<button className={styles.button}>3</button>
			<button className={styles.button}>4</button>
			<button className={styles.button}>5</button>
			<button className={styles.button}>next &rarr;</button>
		</div>
	);
};

export default Pagination;
