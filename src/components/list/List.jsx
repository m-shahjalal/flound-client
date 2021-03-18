import { Link } from 'react-router-dom';
import styles from './list.module.css';
import Pagination from './Pagination';

const List = ({ title, create }) => {
	const posts = [
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
		{
			title: 'Lorem ipsum dolor sit amet.',
			author: 'jhon due',
			date: 'Fri, 21 May 2015',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugit dignissimos obcaecati magnam libero impedit rerum nam, tenetur id quidem iure laborum possimus repellat temporibus debitis ea, nesciunt, repudiandae porro!',
		},
	];
	return (
		<>
			<h1 className={styles.head}>{title}</h1>
			{create && (
				<div className={styles.create}>
					<Link className={styles.createButton} to='/create'>
						Write a post now!
					</Link>
				</div>
			)}
			<div className={styles.list}>
				{posts.map((post, index) => (
					<div key={index} className={styles.post}>
						<h2 className={styles.title}>{post.title}</h2>
						<small className={styles.author}>{post.author}</small>
						<p className={styles.content}>{post.content}</p>
					</div>
				))}
			</div>
			<Pagination />
		</>
	);
};

export default List;
