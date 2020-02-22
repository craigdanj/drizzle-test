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
					<ContractData contract="JurStatus" method="statusCount" />

					<h4>Status types:</h4>
					<ContractForm contract="JurStatus" method="statusTypes" />

					<h4>Add Jur Status:</h4>
					<ContractForm contract="JurStatus" method="addJurStatus" />

					<h4>Change Jur Status State:</h4>
					<ContractForm contract="JurStatus" method="changeState" />

					<h4>Add Jur Status Type:</h4>
					<ContractForm contract="JurStatus" method="addStatusType" />
				</div>
			</LoadingContainer>
		</DrizzleProvider>
	);
}

export default App;
