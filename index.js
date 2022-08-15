 let totalAttempts=5;
 let attempts=0;
 let tatalWons=0;
 let totallosts=0;
 
 const form =document.querySelector("form");
 const cardBody=document.querySelector(".card-body");
 const guessingNumber=form.querySelector("#guessingNumber");
 const checkButton =form.querySelector("#check");
 const resultText=cardBody.querySelector(".resultText");
 const lostWonMessage = document.createElement("p");
 const remainingAttempts=cardBody.querySelector(".remainingAttempts");
 

 form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts>5)
    {
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }
    else
    {
      checkResult(guessingNumber.value);
      remainingAttempts.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value="";
 })

 function checkResult(guessingNumber){
    const randomNumber=getRandomNumber(5);
    console.log(guessingNumber);
    console.log(randomNumber);
   
    
    if(guessingNumber==randomNumber)
    { 
        console.log("hlw");
        resultText.innerHTML=`you have won`;
        tatalWons++;
    }
    else{
        resultText.innerHTML=`you have lost : random number was
        : ${randomNumber}`;
        totallosts++;
    }
    lostWonMessage.innerHTML=`Won: ${tatalWons}, Lost: ${totallosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
 }

 function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
 }
