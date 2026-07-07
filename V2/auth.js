/* ===========================================
        EY LIVE V2
        AUTH CORE
=========================================== */

const Auth={

currentUser:null,

login(user){

this.currentUser=user;

Storage.save("eylive_user",user);

return true;

},

logout(){

Storage.remove("eylive_user");

location.href="../index.html";

},

check(){

const user=Storage.load("eylive_user");

if(user){

this.currentUser=user;

return true;

}

return false;

},

user(){

return this.currentUser;

},

isAdmin(){

if(!this.currentUser) return false;

return this.currentUser.role==="admin";

},

isHost(){

if(!this.currentUser) return false;

return this.currentUser.role==="host";

},

isModerator(){

if(!this.currentUser) return false;

return this.currentUser.role==="moderator";

}

};

window.Auth=Auth;

document.addEventListener("DOMContentLoaded",()=>{

Auth.check();

});
