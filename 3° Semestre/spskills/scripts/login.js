const API = "https://dummyjson.com/auth";
const main = document.querySelector("main");

function logout() {
    localStorage.clear();
    location.reload();
}

function showLogin() {
    main.innerHTML = `
  <div class="login-container">
    <h2>Login</h2>
    <input id="user" placeholder="Usuário">
    <input id="pass" type="password" placeholder="Senha">
    <button id="btn">Entrar</button>
    <p id="msg"></p>
  </div>
`;

    document.getElementById("btn").onclick = async function () {
        const username = document.getElementById("user").value;
        const password = document.getElementById("pass").value;

        if (!username || !password) {
            document.getElementById("msg").innerText = "Digite usuário e senha";
            return;
        }

        try {
            const res = await fetch(API + "/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            if (!res.ok) throw new Error("Login inválido");

            const data = await res.json();

            localStorage.setItem("token", data.token || data.accessToken);
            localStorage.setItem("refresh", data.refreshToken || "");
            localStorage.setItem("exp", Date.now() + data.expiresIn * 1000);
            localStorage.setItem("username", username);

            showPosts();

        } catch (err) {
            document.getElementById("msg").innerText = "Login inválido";
            console.error(err);
        }
    };
}

async function showPosts() {
    main.innerHTML = `
    <h2>Posts</h2>
    <button onclick="logout()">Logout</button>
    <div id="posts" class="posts"></div>
  `;

    const postsContainer = document.getElementById("posts");

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();

        posts.forEach(post => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h3>${post.title}</h3>`;

            card.onclick = () => openModal(post);

            postsContainer.appendChild(card);
        });
    } catch (err) {
        postsContainer.innerHTML = "Erro ao carregar posts";
        console.error(err);
    }
}

function openModal(post) {
    let modal = document.getElementById("modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = `
            <div id="modal-content" style="background:white; padding:20px;">
                <h2 id="modal-title"></h2>
                <p id="modal-body"></p>
                <button onclick="closeModal()">Fechar</button>
            </div>
        `;
        document.body.appendChild(modal);
    }

    document.getElementById("modal-title").innerText = post.title;
    document.getElementById("modal-body").innerText = post.body;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) modal.style.display = "none";
}


showLogin();


