import Cover from '../components/cover/Cover';
import List from '../components/list/List';
import cover from '../images/cover.png';

const Home = () => {
	return (
		<>
			<Cover
				text='We the community who always improving and making others
					improve'
				img={cover}
			/>
			<List title='Recent Posts...' />
		</>
	);
};

export default Home;
