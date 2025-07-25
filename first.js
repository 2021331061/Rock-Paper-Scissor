let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score1=document.querySelector("#score");
const score2=document.querySelector("#score1");

const comChoice=()=>{
    const option=["Rock","Paper","Scissor"];
    const idx=Math.floor(Math.random()*3);
    return option[idx];
    
}
const drawgame=()=>{
    msg.innerText="Draw!";
    msg.style.backgroundColor ="Blue";
};


const showWinner=(user,us,com)=>{
    if(user){
    userScore++;
    score1.innerText=userScore;
      msg.innerText=`You win!! Your ${us} beats ${com}`;
      msg.style.backgroundColor ="Green";
    }else{
    comScore++
    score2.innerText=comScore;
      console.log("lose");
      msg.innerText=`You Lose!!${com} beats your ${us}`;
      msg.style.backgroundColor ="red";
    }
};

const playgame=(userChoise)=>{
   console.log("user choice ",userChoise);
   const get=comChoice();
   console.log("computer choice",get);

   if(userChoise===get){
    drawgame();
   }
   else{
    let f=true;
    if(userChoise==="Rock"){
       if(get==="Paper"){
        f=false;
       }
       else{
        f=true;
       }
    }
    else if(userChoise==="Paper"){
        if(get==="Scissor"){
            f=false;
        }
        else{
            f=true;
        }
    }
    else if(userChoise==="Scissor"){
        if(get==="Rock"){
            f=false;
        }
        else{
            f=true;
        }
    }
    showWinner(f,userChoise,get);
   }
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoise=choice.getAttribute("id");
        playgame(userChoise);
    })
})