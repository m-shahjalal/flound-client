import { useState, createContext } from 'react';

const context = createContext();

const AppWrapper = ({ children }) => {
	const [user] = useState({});

	return <context.Provider value={{ user }}>{children}</context.Provider>;
};

export default AppWrapper;
