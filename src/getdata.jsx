import { useState } from "react"

function GetNFT(){

 const [nfts,setNFTS]=useState("")
 const [query,setQ]=useState("")
const[owners,setOwners]=useState("")
const [nftaddress,setAddress]=useState("")

async function getdata(){


let request=await fetch(`https://deep-index.moralis.io/api/v2/nft/search?chain=eth&format=decimal&q=${query}&filter=global`,{
 method:"get",
 headers:{
  "accept":"application/json",
  "X-API-Key":`${import.meta.env.VITE_MORALIS}`
 }
})
let response=await request.json();

setNFTS(response.result)
//console.log(nfts)
//console.log(response)
}

async function getowners(){

let request=await fetch(`https://deep-index.moralis.io/api/v2/nft/${nftaddress}/owners?chain=eth&format=decimal`,{
 method:"get",
 headers:{
  "accept":"application/json",
  //"X-API-Key": "dQqwOfyiJmUmbpw1HFDevR2hAIVyqci43mab0bY8XzhMm2qMiQH9ZIidjMFiP6Jx"
  "X-API-Key":`${import.meta.env.VITE_MORALIS}`
 }
})
let response=await request.json();
setOwners(response.result)
console.log(response)
}

return (
 <div>
  <img src="r.png" width={300}></img>

  <hr></hr>
  <div className="container">
  <div className="row">

<div className="col-6">
<input type="text" placeholder="Get NFTs that match a given metadata search query. " onChange={(e)=>setQ(e.target.value)} ></input>
<button onClick={()=>getdata()}>search NFTS</button>

{
Array.isArray(nfts)==true?

nfts.map((obj) => (
 <div className="">
   <div className="">

   <div className="card">
   <div className="card-body" style={{color:"yellow"}}>
   <p>{obj.token_address}</p>
   <p>{obj.metadata}</p>
   </div>

 </div>

 </div>

 </div>
 
 
  ))

  :

  <p>query </p>
}



</div>
<div  className="col-6" style={{backgroundColor:"ivory"}}>
<input type="text" placeholder="NFT contract address here ?" onChange={(e)=>setAddress(e.target.value)} ></input>
<button onClick={()=>getowners()}>get NFT Owners</button>

{

Array.isArray(owners)==true?

owners.map((obj) => (
 <div className="">
   <div className="">

   <div className="card">
   <div className="card-body" style={{color:"yellow"}}>
   <mark>Token Address</mark><p>{obj.token_address}</p>
   <mark>Token Name</mark><p>{obj.name}</p>
   <mark>Token owner</mark><p>{obj.owner_of}</p>
   <mark>Token URI</mark><p>{obj.token_uri}</p>
   </div>

 </div>

 </div>

 </div>
 
 
  ))

  :

  <p>query </p>
}



</div>

</div>

  </div>
  


    

  
  
    
  
 </div>
)



}
export default GetNFT 