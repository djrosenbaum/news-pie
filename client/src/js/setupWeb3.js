import { ethers } from 'ethers';

export default async function setupWeb3() {
  if (window.ethereum || window.web3) {
    if (window.ethereum) {
      console.log('enable ethereum');
      await window.ethereum.enable();
    }
    window.dapp.provider = new ethers.providers.Web3Provider(web3.currentProvider);
  } else {
    console.log('no provider detected');
    window.dapp.provider = new ethers.providers.BaseProvider();
  }
}