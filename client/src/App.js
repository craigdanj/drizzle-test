import React from 'react';
import JurStatus from './contracts/JurStatus.json';
import { DrizzleProvider} from 'drizzle-react';
import { LoadingContainer} from 'drizzle-react-components';

const drizzleOptions = {
	contracts: [JurStatus]
}

function App() {
	return (
		<DrizzleProvider options={drizzleOptions}>
			<LoadingContainer>
				<h1>Hi!</h1>
			</LoadingContainer>
		</DrizzleProvider>
	);
}

export default App;
