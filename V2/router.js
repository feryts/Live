/* ===========================================
        EY LIVE V2
        ROUTER CORE
=========================================== */

const Router={

go(page){

location.href=page;

},

back(){

history.back();

},

home(){

location.href="../pages/home.html";

},

room(){

location.href="../pages/room.html";

},

games(){

location.href="../pages/games.html";

},

wallet(){

location.href="../pages/wallet.html";

},

profile(){

location.href="../pages/profile.html";

},

admin(){

location.href="../admin/index.html";

}

};

window.Router=Router;
