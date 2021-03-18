import Cover from '../cover/Cover';
import about from '../../images/about.png';
import styles from './about.module.css';

const About = () => {
	return (
		<section>
			<Cover
				text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto quam maxime perferendis veniam placeat et commodi, i'
				img={about}
			/>
			<div className={styles.bottom}>
				<h1 className={styles.head}>Who We Are!</h1>
				<p className={styles.text}>
					<span className={styles.span}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mattis arcu aliquam pretium tortor. Elementum sodales
						ornare mi, et nec quis netus integer ut. Ac mass
					</span>
					<span className={styles.span}>
						a massa tempus malesuada duis et scelerisque arcu. Justo
						amet eu egestas mollis in. Adipiscing consectetur
						feugiat venenatis, sed proin. Tellus ultrices aliquam
						accumsan facilisis nisi, sed purus id. Aliquam quam
						habitant phasellus risus et ultricies sed tincidunt.
						purus elit. Vitae enim amet lacus turpis neque
						vestibulum elementum, sed. Pulvin. Magnis ips
					</span>
					<span className={styles.span}>
						um ultricies nunc ultricies vulputate sapien turpis
						mauris. Enim.
					</span>
				</p>
			</div>
		</section>
	);
};

export default About;
