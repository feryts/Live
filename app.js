/* ===========================================
   EY LIVE V2 CORE
   app.js
=========================================== */

const APP = {
    name: "EY LIVE",
    version: "2.0.0",
    build: "002",
    theme: "dark",
    online: true
};

const DEFAULT_USER = {
    id: "",
    username: "",
    avatar: "assets/avatar/default.png",
    coin: 0,
    diamond: 0,
    level: 1,
    vip: 0,
    verified: false,
    role: "guest",
    language: "tr",
    theme: "dark"
};

class EyLive {

    constructor() {
        this.user = this.loadUser();
        this.init();
    }

    init() {
        console.log(APP.name, APP.version, APP.build);

        this.install();
        this.network();
        this.theme();
        this.loader();
    }

    loader() {

        const bar = document.querySelector(".bar");

        if (!bar) return;

        setTimeout(() => {

            const nextPage = "./pages/index.html";
            fetch(nextPage)
                .then(res => {

                    if (res.ok) {

                        window.location.replace(nextPage);

                    } else {

                        document.body.innerHTML = `
                            <div style="
                                background:#12061f;
                                color:#fff;
                                height:100vh;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                flex-direction:column;
                                font-family:Poppins,sans-serif;
                                text-align:center;
                                padding:20px;
                            ">
                                <h2>Sayfa bulunamadı</h2>
                                <p>${nextPage}</p>
                                <p>Status : ${res.status}</p>
                            </div>
                        `;

                    }

                })
                .catch(err => {

                    document.body.innerHTML = `
                        <div style="
                            background:#12061f;
                            color:#fff;
                            height:100vh;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                            font-family:Poppins,sans-serif;
                            text-align:center;
                            padding:20px;
                        ">
                            <h2>Yükleme Hatası</h2>
                            <p>${err}</p>
                        </div>
                    `;

                });

        }, 2200);

    }

    loadUser() {

        const data = localStorage.getItem("eylive_user");

        if (data) {
            return JSON.parse(data);
        }

        localStorage.setItem(
            "eylive_user",
            JSON.stringify(DEFAULT_USER)
        );

        return DEFAULT_USER;

    }

    saveUser() {

        localStorage.setItem(
            "eylive_user",
            JSON.stringify(this.user)
        );

    }

    network() {

        window.addEventListener("offline", () => {

            alert("İnternet bağlantısı kesildi.");

        });

    }

    theme() {

        document.body.dataset.theme = this.user.theme;

    }

    install() {

        window.addEventListener("beforeinstallprompt", e => {

            e.preventDefault();
            window.installPrompt = e;

        });

    }

}

const ey = new EyLive();

window.ey = ey;
