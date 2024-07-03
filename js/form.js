const userName = document.getElementById("name");
const blogTitle = document.getElementById("title");
const blogContent = document.getElementById("content");
const submitBtn = document.getElementById("submit-btn");
const msgDiv = document.querySelector("#msg");

let blogs = [];

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submitBtn.addEventListener("click", function (event) {
  if (userName.value === "") {
    displayMessage("error", "Username cannot be blank");
  } else if (blogTitle.value === "") {
    displayMessage("error", "Title cannot be blank");
  } else if (blogContent.value === "") {
    displayMessage("error", "Content cannot be blank");
  } else {
    const storedblogs = JSON.parse(localStorage.getItem("blogs"));
    console.log(storedblogs);
    if (storedblogs !== null) {
      blogs = storedblogs;
    }
  }

  const blogData = {
    username: userName.value,
    title: blogTitle.value,
    content: blogContent.value,
  };
  blogs.push(blogData);
  localStorage.setItem("blogs", JSON.stringify(blogs));
});
