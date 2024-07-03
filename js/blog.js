const blogsList = document.querySelector(".blogs-list");

blogsList.innerHTML = "";

const blogs = JSON.parse(localStorage.getItem("blogs"));

for (let i = 0; i < blogs.length; i++) {
  const blog = blogs[i];

  const userName = blog.username;
  const title = blog.title;
  const content = blog.content;

  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  div.setAttribute("class", "blog-card");
  h2.textContent = title;
  p.textContent = content;

  blogsList.append(div);
  div.append(h2);
  div.append(p);
}
console.log(blogs);
