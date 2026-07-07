/* ===========================================
        EY LIVE V2
        API CORE
=========================================== */

const API = {

    async get(url){

        try{

            const response = await fetch(url);

            return await response.json();

        }catch(error){

            console.error("GET ERROR :", error);

            return null;

        }

    },

    async post(url,data){

        try{

            const response = await fetch(url,{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)

            });

            return await response.json();

        }catch(error){

            console.error("POST ERROR :",error);

            return null;

        }

    },

    async loadUsers(){

        return await this.get("../data/users.json");

    },

    async loadRooms(){

        return await this.get("../data/rooms.json");

    },

    async loadGifts(){

        return await this.get("../data/gifts.json");

    },

    async loadVip(){

        return await this.get("../data/vip.json");

    },

    async loadGames(){

        return await this.get("../data/games.json");

    }

};

window.API = API;
