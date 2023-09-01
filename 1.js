// app.js
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
      {
        "constant": false,
        "inputs": [],
        "name": "inc Cryptocurrency",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "get Cryptocurrency",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4'; 
    const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
    window.incCryptocurrency = async () => {
      await contractInstance.methods.incCryptocurrency().send({ from: web3.eth.defaultAccount });
    };
    window.getCryptocurrency = async () => {
      const value = await contractInstance.methods.getCryptocurrency().call();
      document.getElementById('currentValue').innerText = value;
    };
  });
