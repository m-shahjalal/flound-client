import cover from '../../images/login.png';
import styles from './post.module.css';

const Post = () => {
	return (
		<div>
			<img src={cover} alt='this is cover' className={styles.cover} />
			<h1 className={styles.head}>
				Thi si a aismple title to write down
			</h1>
		</div>
	);
};

export default Post;
