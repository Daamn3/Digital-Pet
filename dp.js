let pet={
    name:"Buddy",
    Hapiness:100,
    Hunger:0,
    Energy:100,
};
let name=document.getElementById("name");
let hpy=document.querySelector(".hpyfillbar");
let hg=document.querySelector(".hgfillbar");
let eng=document.querySelector(".engfillbar");
let dialog=document.getElementById("dialog");
let mood=document.getElementById("mood");
let gameActive = true;

function update()
{
    name.innerHTML=pet.name;
    hpy.style.width=pet.Hapiness+"%";
    hg.style.width=pet.Hunger+"%";
    eng.style.width=pet.Energy+"%";
    checkGameOver();

}


function feed()
{
    if(!gameActive) return;
    pet.Hunger=Math.max(0, pet.Hunger - 10);
    // pet.Hapiness=Math.min(100, pet.Hapiness + 5);
    pet.Energy=Math.min(100, pet.Energy + 10);
    dialog.innerHTML="Yummy ,<BR> Thank You";

    if(pet.Hunger<=0)
    {
        dialog.innerHTML="Thank You ,<BR> I'm full";
        
    }
    if(pet.Hunger>=80){
        dialog.innerHTML="I'm Hungry";
    }
    update();
     
}
function play()
{
    if(!gameActive) return;
    pet.Hapiness=Math.min(100, pet.Hapiness + 10);
    pet.Hunger=Math.min(100, pet.Hunger + 10);
    pet.Energy=Math.max(0, pet.Energy - 10);
    if(pet.Energy<=30)
    {
        dialog.innerHTML="I'm Tired";
    }
    update();
}
function sleep()
{
    if(!gameActive) return;
    pet.Energy=Math.min(100, pet.Energy + 10);
    pet.Hunger=Math.min(100, pet.Hunger + 10);
    pet.Hapiness=Math.max(0, pet.Hapiness - 10);
    if(pet.Hapiness<=30)
    {
        dialog.innerHTML="I'm Bored";
    }
    update();
}
function rename()
{
    if(!gameActive) return;
    let newName=prompt("Enter a new name for your pet:");
    if(newName)    {
        pet.name=newName;
        dialog.innerHTML="Hello, I'm"+pet.name;
        update();
    }
}

GameInterval=setInterval(function(){
    pet.Hunger=Math.min(100, pet.Hunger + 10);
    pet.Energy=Math.max(0, pet.Energy - 10); 
    pet.Hapiness=Math.max(0, pet.Hapiness - 10); 
    update();
},5000);

const md=['Happy','Sad','Bored','Tired','Hungry','lazy','Excited','Angry','Sleepy','Playful'];
function rmood(){
    let randomIndex=Math.floor(Math.random()*md.length);
    mood.innerHTML=md[randomIndex];
}

moodinterval=setInterval(rmood,5000);

function checkGameOver(){
    if(pet.Hunger>=100)
    {
        gameOver();
        

    }
}

function gameOver()
{
    if(!gameActive) return;

    gameActive = false;

    clearInterval(GameInterval);
    clearInterval(moodinterval);

    let buttons = document.querySelectorAll(".btn, .btntxt");

    buttons.forEach(button => {
        button.style.pointerEvents = "none";
        button.style.opacity = "0.5";
    });

    dialog.innerHTML = "I'm Dead <br> Farewell";
    mood.innerHTML = "RIP";

    alert("Game Over! Your pet has passed away.");
}
update();

