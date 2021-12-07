//importing ID objects
let card1=document.getElementById("card1");
let card2=document.getElementById("card2");
let card3=document.getElementById("card3");
let sum=document.getElementById("sum");
let cards=document.getElementById("cardHeading");
let stat=document.getElementById("status");

//declaring JS Local variables
let img1=document.createElement("img");
let img2=document.createElement("img");
let img3=document.createElement("img");
let flag=false;
let flag2=false;
let firstCard=Math.floor(Math.random()*10+1);
let secondCard=Math.floor(Math.random()*10+1);
let latestCard=Math.floor(Math.random()*10+1);
let suit;       
let total=firstCard+secondCard+latestCard;
//functions
function drawCards(){
    if(flag2)
    {
        stat.innerText="ERROR!❌Please Click on 'RESTART' Button";
    }
    else{
    
    let faceCard=0;
    latestCard=Math.floor(Math.random()*10+1);
    total+=latestCard;
    if(latestCard==1){
        suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img3.src=`resources/ace_of_hearts.png`;
            if(suit==2)
            img3.src=`resources/ace_of_spades.png`;
            if(suit==3)
            img3.src=`resources/ace_of_diamonds.png`;
            if(suit==4)
            img3.src=`resources/ace_of_clubs.png`;
            img3.width=100;
            card3.appendChild(img3);
    }
    for(let i=2;i<=10;i++){
        if(latestCard==i)
        {
            if(i==10)
            {
                faceCard=Math.floor(Math.random()*4)
            }
            suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img3.src=`resources/${i+faceCard}_of_hearts.png`;
            if(suit==2)
            img3.src=`resources/${i+faceCard}_of_spades.png`;
            if(suit==3)
            img3.src=`resources/${i+faceCard}_of_diamonds.png`;
            if(suit==4)
            img3.src=`resources/${i+faceCard}_of_clubs.png`;
            img3.width=100;
            card3.appendChild(img3);
            faceCard=0;
        }}

    
    sum.innerText=sum.innerText+" "+total;
    stat.innerText="";
    if(total==21)
    stat.innerText=stat.innerText+"BLACKJACK!! YOU WON!🎉🎉"
    else if(total>21)
    {stat.innerText=stat.innerText+"YOU LOST!! 😔"
    flag2=true;}
    else
    stat.innerText=stat.innerText+"DRAW AGAIN? 🤩"
    
}}

function restartGame(){
    card1.innerText="";
    card2.innerText="";
    card3.innerText="";
    total=0;
    cards.innerText="Cards: ";
    sum.innerText="Sum: ";
    stat.innerText="";
    flag=false;
    flag2=false;
}

function startGame(){
    if(flag)
    {
        stat.innerText="ERROR!❌Please Click on 'DRAW AGAIN' or 'RESTART' Button"
    }
    else{
        firstCard=Math.floor(Math.random()*10+1);
        secondCard=Math.floor(Math.random()*10+1);
        latestCard=Math.floor(Math.random()*10+1);
        let faceCard=0;
        total=firstCard+secondCard+latestCard;
        if(firstCard==1){
            suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img1.src=`resources/ace_of_hearts.png`;
            if(suit==2)
            img1.src=`resources/ace_of_spades.png`;
            if(suit==3)
            img1.src=`resources/ace_of_diamonds.png`;
            if(suit==4)
            img1.src=`resources/ace_of_clubs.png`;
            img1.width=100;
            card1.appendChild(img1);
        }
        if(secondCard==1){
            suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img2.src=`resources/ace_of_hearts.png`;
            if(suit==2)
            img2.src=`resources/ace_of_spades.png`;
            if(suit==3)
            img2.src=`resources/ace_of_diamonds.png`;
            if(suit==4)
            img2.src=`resources/ace_of_clubs.png`;
            img2.width=100;
            card2.appendChild(img2);
        }
        if(latestCard==1){
            suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img3.src=`resources/ace_of_hearts.png`;
            if(suit==2)
            img3.src=`resources/ace_of_spades.png`;
            if(suit==3)
            img3.src=`resources/ace_of_diamonds.png`;
            if(suit==4)
            img3.src=`resources/ace_of_clubs.png`;
            img3.width=100;
            card3.appendChild(img3);
        }
    
        
        for(let i=2;i<=10;i++){
        if(firstCard==i)
        {
            if(i==10)
            {
                faceCard=Math.floor(Math.random()*4);
            }
            suit=Math.floor(Math.random()*4+1);
            if(suit==1)
            img1.src=`resources/${i+faceCard}_of_hearts.png`;
            if(suit==2)
            img1.src=`resources/${i+faceCard}_of_spades.png`;
            if(suit==3)
            img1.src=`resources/${i+faceCard}_of_diamonds.png`;
            if(suit==4)
            img1.src=`resources/${i+faceCard}_of_clubs.png`;
            img1.width=100;
            card1.appendChild(img1);
            faceCard=0;
        }}
        for(let i=2;i<=10;i++){
            if(secondCard==i)
            {
                if(i==10){
                    faceCard=Math.floor(Math.random()*4);
                }
                suit=Math.floor(Math.random()*4+1);
                if(suit==1)
                img2.src=`resources/${i+faceCard}_of_hearts.png`;
                if(suit==2)
                img2.src=`resources/${i+faceCard}_of_spades.png`;
                if(suit==3)
                img2.src=`resources/${i+faceCard}_of_diamonds.png`;
                if(suit==4)
                img2.src=`resources/${i+faceCard}_of_clubs.png`;
                img2.width=100;
                card2.appendChild(img2);
                faceCard=0;
            }}
        for(let i=2;i<=10;i++){
                if(latestCard==i)
                {
                    if(i==10){
                    faceCard=Math.floor(Math.random()*4);
                    }
                    suit=Math.floor(Math.random()*4+1);
                    if(suit==1)
                    img3.src=`resources/${i+faceCard}_of_hearts.png`;
                    if(suit==2)
                    img3.src=`resources/${i+faceCard}_of_spades.png`;
                    if(suit==3)
                    img3.src=`resources/${i+faceCard}_of_diamonds.png`;
                    if(suit==4)
                    img3.src=`resources/${i+faceCard}_of_clubs.png`;
                    img3.width=100;
                    card3.appendChild(img3);
                    faceCard=0;
                }}
    
    sum.innerText=sum.innerText+" "+total;
    if(total==21)
    stat.innerText=stat.innerText+"NATURAL!🎉🎉"
    else if(total>21){
    stat.innerText=stat.innerText+"YOU LOST!😔"
    flag2=true;}
    else
    stat.innerText=stat.innerText+"DRAW AGAIN? 🤩"
    flag=true;
}}