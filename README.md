# drizzle-test


This project is hooked up to a blockchain that is created via Ganache. To set this up you will need to do the following:
1. Clone the repository to folder on your hard drive.
2. Download, install and startup Ganache. This sets up the blockchain you can connect to via the client.
3. Install the meata mask chrome extension, register if you haven't already and log in.
4. Navigate to the client folder and run "npm start" to startup the client (The smart contract has already been compiled and migrations have been run).
5. After the client has been run you will need to connect your client to the blockchain via metamask. 
 - You can go to 'import account' in the metamask app, then copy and paste in your private key from Ganache. 
 - You can then set up a custom network by choosing "Custom RPC" and entering the "RPC url" mentioned in your Ganache app. Select this netwrok from the dropdown to connect to it.
