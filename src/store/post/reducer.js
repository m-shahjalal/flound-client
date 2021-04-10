import types from './type';

const initialState = {
	posts: [
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
	],
};

const {
	GET_ALL_POSTS,
	CREATE_POST,
	GET_POST,
	UPDATE_POST,
	DELETE_POST,
} = types;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			return { ...state, post: action.payload };
		case CREATE_POST:
			return { ...state, post: action.payload };
		case GET_POST:
			return { ...state, post: action.payload };
		case UPDATE_POST:
			return { ...state, post: action.payload };
		case DELETE_POST:
			return { ...state, post: action.payload };
		default:
			return state;
	}
};

export default reducer;
