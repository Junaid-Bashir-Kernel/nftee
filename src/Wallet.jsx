import { ethers } from "ethers";


function Wallet() {


 async function Connect(){
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner()
  let balance = await provider.getBalance("ethers.eth")
  console.log(ethers.utils.formatEther(balance))

 }


return (
 <div>
<button onClick={()=>Connect()}>Connect</button>
 </div>
)


}

export default  Wallet
