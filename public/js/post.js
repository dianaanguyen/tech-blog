// creating a new post
const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    // const email = document.querySelector("#email").value;
    const content = document.querySelector("#body").value;
    console.log(title, content);
    const response = await fetch("/api/post/", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        // email: email,
        body: content,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.log(err));
  
    document.location.replace("/dashboard");
  };
  document.querySelector("#submit")?.addEventListener("click", newPostHandler);
  
  // deleting a post
  const deletePostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector("#title");
    const content = document.querySelector("#body");
    const id = event.target.dataset.id;
    console.log(title, content, id);
    const response = await fetch(`/api/post/delete/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        title: title,
        body: content,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.log(err));
  
    document.location.replace("/dashboard/profile");
  };
  
  const deleteButtons = document.querySelectorAll(".delete");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i]?.addEventListener("click", deletePostHandler);
  }
  
  // leaving a comment
  Array.from(document.querySelectorAll("#hideButton")).forEach((comButton) => {
    comButton.onclick = function () {
      console.log("I GOT CLICKED");
      var div = comButton.parentElement.nextElementSibling;
      if (div.style.display !== "none") {
        div.style.display = "none";
      } else {
        div.style.display = "block";
      }
    };
  });
  
  
  // editing a post
  const editPostHandler = async (event, id) => {
    event.preventDefault();
    const title = document.querySelector(".title-"+id).innerHTML;;
    const content = document.querySelector(".body-"+id).value.trim();
    console.log(title, content, );
    console.log(`/api/post/update/${id}`)
  
    fetch(`/api/post/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: content,
        postID: id,
      }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.log(err));
  
    document.location.replace("/dashboard/profile");
  };
  Array.from(document.querySelectorAll(".saveEdit")).forEach((el)=>
    el.addEventListener('click', (e) => editPostHandler(e, el.dataset.id))
  );