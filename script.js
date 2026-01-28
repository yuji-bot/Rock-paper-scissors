let yscore=0;
let cscore=0;
let winmsg=document.querySelector("#msg")
const signs=document.querySelectorAll(".sign");
let yscorep=document.querySelector("#yscore");
let cscorep=document.querySelector("#cscore");
let reset=document.querySelector(".reset");

const gensign=()=>{
    const obj=["stone","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    return obj[index];
};

reset.addEventListener("click", ()=>{
    yscore=0;
    cscore=0;
    yscorep.innerText=yscore;
    cscorep.innerText=cscore;

})

const drawgame=()=>{
    winmsg.innerText="the game is draw";
};


const showWinner=(userwin)=>{
     if(userwin){
        yscore++;
        yscorep.innerText=yscore;
        winmsg.innerText="you Win";
     }
     else{
        cscore++;
        cscorep.innerText=cscore;
        winmsg.innerText="comp win";
     }
};
const playcomp=(signID)=>{
    console.log("user id",signID);
    const cosign=gensign();
    console.log(cosign);

    if (signID===cosign){
        drawgame();
    }else{
        let userwin=false;
        if(signID==="stone"){
            userwin=cosign==='paper'?false:true;
        }
        else if(signID==="paper"){
            userwin=cosign==='scissors'?false:true;
        }else{
            userwin=cosign==='stone'?false:true;
        }
        showWinner(userwin);
    }
};
signs.forEach((sign)=>{
    sign.addEventListener("click", ()=>{
        const signID=sign.getAttribute("id");
        console.log("choise was clicked", signID);
        playcomp(signID);
    })
});