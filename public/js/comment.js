const newCommentHandler = async (event, id) => {
    event.preventDefault();
    const content = document.querySelector(`#comment_edit_${id}`).value;
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content, postId: id }),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.log(err));
  
    document.location.replace("/dashboard");
  };
  Array.from(document.querySelectorAll("#makeComment")).forEach((el) =>
    el.addEventListener("click", (e) => newCommentHandler(e, el.dataset.id))
  );
  