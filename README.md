# ethavax2.sol
# Ethereum Smart Contract Interaction using Web3

This is an example code snippet demonstrating how to interact with an Ethereum smart contract using the Web3 library in JavaScript. The smart contract contains methods to increase a cryptocurrency value and to retrieve the current value of the cryptocurrency.

## Setup

1. Add the Web3 library to your project 

```html
<script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>
Use the following code snippet in your JavaScript file (e.g., app.js) to interact with the smart contract:

 code
window.addEventListener('load', async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }
  else {
    console.log('Non-Ethereum');
  }

  const contractABI = [
    // Contract ABI details here...
  ];
  const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; 
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

  // Function to increase the cryptocurrency value
  window.incCryptocurrency = async () => {
    await contractInstance.methods.incCryptocurrency().send({ from: web3.eth.defaultAccount });
  };

  // Function to get the current value of the cryptocurrency
  window.getCryptocurrency = async () => {
    const value = await contractInstance.methods.getCryptocurrency().call();
    document.getElementById('currentValue').innerText = value;
  };
});

# Usage
Include the Web3 library in your HTML file.
Load your Ethereum-enabled browser or install an Ethereum wallet extension.
Add this code snippet to your JavaScript file.
Access the incCryptocurrency and getCryptocurrency functions in your browser's JavaScript console.
Remember to replace contractABI and contractAddress with your actual contract's ABI and address.

# License
This code is provided under the MIT License.

## Author
Abhayjeet Singh 



