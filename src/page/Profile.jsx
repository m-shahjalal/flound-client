import List from '../components/list/List';
import Top from '../components/topProfile/Top';

const Profile = () => {
	return (
		<div>
			<Top />
			<List create='true' title='Your all post timeline' />
		</div>
	);
};

export default Profile;
