import React from 'react';
import { Provider } from 'react-redux';
// # services
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './src/services/apollo';
// # utils
// # components
import Navigation from './src/navigation';
// # actions
import store from './src/store/store';

export default (props) => {

	return (
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>
				<Navigation />
			</Provider>
		</ApolloProvider>
	);
};