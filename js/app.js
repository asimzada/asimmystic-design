document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
});

async function loadPosts() {
  const container = document.getElementById("blog-posts");

  if (!container) {
    console.error("❌ blog-posts container not found in HTML");
    return;
  }

  try {
    const response = await fetch("https://www.asimmystic.xyz/feeds/posts/default?alt=json");
    const data = await response.json();

    const posts = data.feed.entry;

    let html = "";

    posts.forEach((post, index) => {

      const title = post.title?.$t || "No Title";

      // clean snippet
      let content = post.content?.$t || "";
      let snippet = content.replace(/<[^>]*>/g, "").substring(0, 120);

      // image handling
      let image = "https://picsum.photos/400/250?random=" + index;

      if (post.media$thumbnail) {
        image = post.media$thumbnail.url.replace("s72-c", "s400");
      }

      html += `
        <div class="card" data-index="${index}">
          <div class="card-img">
            <img src="${image}" alt="${title}">
          </div>

          <div class="card-content">
            <h3>${title}</h3>
            <p>${snippet}...</p>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

  } catch (error) {
    console.error("❌ Error fetching Blogger feed:", error);
  }
}