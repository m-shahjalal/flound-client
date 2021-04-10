import Cover from '../components/cover/Cover';
import List from '../components/list/List';
import cover from '../images/cover.png';

import { useSelector } from 'react-redux';

const Home = () => {
	const post = useSelector((state) => state.post);
	return (
		<>
			<Cover
				text='We the community who always improving and making others
					improve'
				img={cover}
			/>
			<List posts={post} title='Recent Posts...' />
		</>
	);
};

export default Home;
