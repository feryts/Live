/* ===================================
        EY LIVE STORAGE
=================================== */

function getUser(){

    let user = localStorage.getItem(APP.STORAGE);

    if(!user){

        localStorage.setItem(

            APP.STORAGE,

            JSON.stringify(DEFAULT_USER)

        );

        return DEFAULT_USER;

    }

    return JSON.parse(user);

}

function saveUser(user){

    localStorage.setItem(

        APP.STORAGE,

        JSON.stringify(user)

    );

}

function addCoin(amount){

    let user=getUser();

    user.coin+=amount;

    saveUser(user);

}

function removeCoin(amount){

    let user=getUser();

    user.coin-=amount;

    if(user.coin<0){

        user.coin=0;

    }

    saveUser(user);

}
