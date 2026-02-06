const main = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      const card = document.createElement("div");
      card.classList.add("card");

      const title = document.createElement("h3");
      title.textContent = post.title;

      card.appendChild(title);
      main.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar posts:", error);
  });

async function showPosts() {
  const main = document.querySelector('main');
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

      card.onclick = () => openPostModal(post);

      postsContainer.appendChild(card);
    });
  } catch (err) {
    postsContainer.innerHTML = "Erro ao carregar posts";
    console.error(err);
  }
}

