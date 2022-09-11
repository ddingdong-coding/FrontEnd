function isEmptyPost(content) {
  if (content === '') {
    return true;
  }
  return false;
}
function refresh() {
  location.reload();

}
//uploading post 
function posting() {
  let url = `/main`
  let content = $("#inputModal").val()
  if (isEmptyPost(content)) {
    alert("please write posts")
    $("#inputModal").focus();
    return;
  }
  const formData = new FormData();
  formData.append('content', content)
  fetch(url, {
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

//getting post and comment 
$(document).ready(function () {
  let url = `/main/post`
  fetch(url)
    .then(res => res.json()).then((data) => {
      for (let i = 0; i < data['listing'].length; i++) {
        let postId = data['listing'][i]['_id']
        let year = data['listing'][i]['today'].substring(0, 4)
        let month = data['listing'][i]['today'].substring(5, 7)
        let date = data['listing'][i]['today'].substring(8, 10)
        let time = year + " " + month + " " + date
        let content = data['listing'][i]['content']
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
          <span class="postId" id="postId${i}">
            ${postId}
          </span>
          <div class="postContent">
            <h2>${content}</h2>
          </div>
          <div class="postIcons">
            <div>
              <i class="bi bi-hand-thumbs-up"></i> Likes
            </div>
            <div>
              <i class="bi bi-chat-dots"></i> Comments
            </div>
          </div>
          <div class="commentWrapper" id="commentWrapper">
          <ul class="commentlist${i}"></ul>
          </div>
          <div class="postComment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OtxRlwMFosn4vODbl1kLg6fsrbTXqo3Fig&usqp=CAU" />
            <input placeholder="Wrtie a comment..." id="comment${i}" class="comment" onclick="reply_click(this.id)" onKeyPress="if( event.keyCode==13 )commentPosting(); refresh()">
          </div>
        </div>`
        $('#postBox').append(temp_html);
      }

    })
})
let num;
function reply_click(clicked_id) {
  num = clicked_id.charAt(clicked_id.length - 1)
  return num, clicked_id
}

//uploding comment
function commentPosting() {
  let url = `/main/comment/`
  let comment = $(`#comment${num}`).val()
  let postId = $(`#postId${num}`).text().trim(); //공백제거
  const formData = new FormData();
  formData.append('comment', comment)
  formData.append('postId', postId)
  fetch(url, {
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


//getting comments
$(document).ready(function () {
  let url = `/main/post`
  fetch(url)
    .then(res => res.json()).then((data) => {
      for (let i = 0; i < data['listing'].length; i++) {
        if (data['listing'][i]['comment']) {
          let post = data['listing'][i]['comment']
          for (let j = 0; j < post.length; j++) {
            let commentMonth = post[j]['today'].substring(5, 7)
            let commentDate = post[j]['today'].substring(8, 10)
            let commentTime = commentMonth + " " + commentDate
            let comment = post[j]['comment']
            let temp_html = `
            <li>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OtxRlwMFosn4vODbl1kLg6fsrbTXqo3Fig&usqp=CAU" />
            ellie <div> ${comment}</div>
            </li> `
            $(`.commentlist${i}`).append(temp_html);
          }
        }
      }

    })
})