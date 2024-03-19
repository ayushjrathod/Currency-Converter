const url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_nnm3DlGDGbf5F8CSI49Jr3crem4KVwa4HysUydl8"
const para = document.querySelector("#para");
const results = document.querySelector("#results");
const runTask  = async ()=>{
    console.log("Fetching API .....");
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    para.innerText = data;

    let c1 = document.querySelector("#currOne");
    let c2 = document.querySelector("#currTwo");
    

};

document.querySelector("#button").addEventListener("click",runTask);