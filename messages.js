/* ==========================================
        EY LIVE MESSAGES
========================================== */

const chats=document.querySelectorAll(".chatItem");

chats.forEach(chat=>{

chat.onclick=function(){

let name=this.querySelector("h3").innerText;

alert(name+" ile sohbet ekranı sonraki sürümde açılacak.");

}

});

document.querySelector(".newChat").onclick=function(){

alert("Yeni sohbet oluşturma yakında.");

}

console.log("MESSAGES READY");
