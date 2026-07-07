/* ==========================================
   EY LIVE V2
   GAMES ENGINE
========================================== */

const Games={

bet:100,

user:null,

init(){

this.loadUser();

this.events();

console.log("Games Ready");

},

loadUser(){

this.user=Storage.load("eylive_user");

if(!this.user){

this.user={

coin:1000,

diamond:100

};

Storage.save("eylive_user",this.user);

}

},

save(){

Storage.save("eylive_user",this.user);

},

events(){

document.querySelectorAll(".gameCard").forEach(card=>{

card.onclick=()=>{

const game=card.dataset.game;

this.play(game);

};

});

},

play(game){

switch(game){

case "wheel":

this.luckyWheel();

break;

case "slot":

this.slot();

break;

case "dice":

this.dice();

break;

case "box":

this.luckyBox();

break;

case "jackpot":

this.jackpot();

break;

default:

alert("Yakında");

}

},

checkCoin(){

if(this.user.coin<this.bet){

alert("Yetersiz Coin");

return false;

}

return true;

},

reward(min,max){

const win=Math.floor(Math.random()*(max-min+1))+min;

this.user.coin+=win;

this.save();

alert("Kazandın : "+win+" Coin");

},

lose(){

this.user.coin-=this.bet;

if(this.user.coin<0){

this.user.coin=0;

}

this.save();

alert("Kaybettin : "+this.bet+" Coin");

},

slot(){

if(!this.checkCoin()) return;

Math.random()>0.55 ?

this.reward(150,600):

this.lose();

},

dice(){

if(!this.checkCoin()) return;

const dice=Math.floor(Math.random()*6)+1;

if(dice>=4){

this.reward(100,400);

}else{

this.lose();

}

},

luckyWheel(){

if(!this.checkCoin()) return;

Math.random()>0.50 ?

this.reward(200,1200):

this.lose();

},

luckyBox(){

if(!this.checkCoin()) return;

Math.random()>0.60 ?

this.reward(300,1500):

this.lose();

},

jackpot(){

if(!this.checkCoin()) return;

Math.random()>0.90 ?

this.reward(5000,20000):

this.lose();

}

};

document.addEventListener("DOMContentLoaded",()=>{

Games.init();

});
