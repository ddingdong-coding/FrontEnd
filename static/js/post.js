function posting() {
  let content = $("#inputModal").val()
  const formData = new FormData();
  formData.append('content', content)
  fetch('/main', {
    method: 'POST',
    body: formData,
  }).then((res) => {
    if (res.status === 200 || res.status === 201) {
      res.json().then(json => console.log(json));
    } else {
      console.error(res.statusText);
    }
  }).catch(err => console.error(err))
}

$(document).ready(function () {
  let url = `/main/post`
  fetch(url)
    .then(res => res.json()).then((data) => {
      let posting = data['all_posts']

      console.log(data['all_posts'].length)
      for (let i = 0; i < posting.length; i++) {
        let time = data['all_posts'][i]['today'].substring(2, 14)
        let content = data['all_posts'][i]['content']
        let temp_html = `
        <div class="postCard">
        <div class="postUser">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OtxRlwMFosn4vODbl1kLg6fsrbTXqo3Fig&usqp=CAU" />
          <div>
            Ellie
          </div>
          <div class="postTime">
            ${time}
          </div>
        </div>
        <div class="postContent">
          <h2>${content}</h2>
        </div>
        <div class="postIcons">
          <div>
            <i class="bi bi-hand-thumbs-up"></i> Likes
          </div>
          <div>
            <i class="bi bi-chat-dots"></i> Commentss
          </div>
        </div>
        <div class="postComment">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OtxRlwMFosn4vODbl1kLg6fsrbTXqo3Fig&usqp=CAU" />
          <input placeholder="Wrtie a comment...">
        </div>
      </div>`
        $('#postBox').append(temp_html);
      }

    })
})