import React from 'react';
import JurStatus from './contracts/JurStatus.json';
import { DrizzleProvider} from 'drizzle-react';
import { LoadingContainer, AccountData, ContractData, ContractForm } from 'drizzle-react-components';

const drizzleOptions = {
	contracts: [JurStatus]
}

function App() {
	return (
		<DrizzleProvider options={drizzleOptions}>
			<LoadingContainer>
				<div>
					<h4>Account details:</h4>
					<AccountData accountIndex={0} units={"ether"} precision={2} />

					<h4>Status count:</h4>
					<ContractData contract="JurStatus" method="statusCount"/>
					{/* <ContractForm /> */}
				</div>
			</LoadingContainer>
		</DrizzleProvider>
	);
}

export default App;
