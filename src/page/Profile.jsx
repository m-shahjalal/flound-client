import List from '../components/list/List';
import Top from '../components/topProfile/Top';

const Profile = () => {
	const post = { posts: [] };
	return (
		<div>
			<Top />
			<List posts={post} create='true' title='Your all post timeline' />
		</div>
	);
};

export default Profile;
