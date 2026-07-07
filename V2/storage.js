/* ===========================================
        EY LIVE V2
        STORAGE CORE
=========================================== */

const Storage={

save(key,value){

localStorage.setItem(

key,

JSON.stringify(value)

);

},

load(key){

const data=localStorage.getItem(key);

if(!data) return null;

return JSON.parse(data);

},

remove(key){

localStorage.removeItem(key);

},

clear(){

localStorage.clear();

}

};

window.Storage=Storage;
