import React from 'react';
import JurStatus from './contracts/JurStatus.json';
import { DrizzleProvider} from 'drizzle-react';
import { LoadingContainer, AccountData, ContractData, ContractForm } from 'drizzle-react-components';
import Container from './Container';

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
					<p>-------------------------------------------------------</p>

					{/* <h4>Status:</h4> */}
					{/* <ContractData contract="JurStatus" method="status" methodArgs={[]}/> */}

					{/* <h4>View 1st Status type:</h4>
					<ContractData contract="JurStatus" method="statusTypes" methodArgs={[0]} /> */}

					<h4>Add Jur Status Type:</h4>
					<ContractForm contract="JurStatus" method="addStatusType" />

					<h4>Status count:</h4>
					<ContractData contract="JurStatus" method="statusCount" />

					<h4>Add Jur Status:</h4>
					<ContractForm contract="JurStatus" method="addJurStatus" />

					<h4>Change Jur Status State:</h4>
					<ContractForm contract="JurStatus" method="changeState" />


					<Container />

				</div>
			</LoadingContainer>
		</DrizzleProvider>
	);
}

export default App;
