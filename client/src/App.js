import React from 'react';
import JurStatus from './contracts/JurStatus.json';
import { DrizzleProvider} from 'drizzle-react';

const drizzleOptions = {
  contracts: [JurStatus]
}

function App() {
  return (
    <DrizzleProvider options={drizzleOptions}>
      <h1>Hi!</h1>
    </DrizzleProvider>
  );
}

export default App;
