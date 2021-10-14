# letting-dapp

## Blockchain-based letting dApp

A blockchain-based decentralisd application that improves the current letting process by implemeting rental agreements as smart contracts on the Ethereum Blockchain.

This project was submitted alongside a postgraduate dissertation to the University of Strathclyde.

## Screenshots

<img src="./screenshots/WelcomePage.png" alt="Welcome Page" style="height: 425px; width: 1025px;"/>
<img src="./screenshots/NewTenancyPage.png" alt="New Tenancy Page" style="height: 425px; width: 1025px;"/>

## Setup

1. Clone the repository.

2. Install the [MetaMask](https://metamask.io/) extension for the Chrome browser and complete its setup.

3. Install the project:

```
    npm i
```

1. Compile the smart contract:


2. Deploy the smart contract:

3. Update the rentalAgreementBlockchainId within [NewTenancy.js](./src/components/mainPanel/panels/NewTenancy.js).

4. Start the project:

```
npm start
```
//Docker
docker build --rm -f Dockerfile -t letting:latest .
docker run --rm -d -p 8000:8000 letting:latest
