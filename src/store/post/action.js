import types from './type';

const actions = {};

actions.getAllPosts = () => ({ type: types.GET_ALL_POSTS });

actions.createPost = () => ({ type: types.CREATE_POST });

actions.getPost = (id) => ({ type: types.GET_POST, payload: id });

actions.deletePost = (id) => ({ type: types.DELETE_POST, payload: id });

actions.updatePost = (id) => ({ type: types.UPDATE_POST, payload: id });

export default actions;
