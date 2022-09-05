let postsId = []

function isEmptyComment(content) {
  if (content === '') {
    return 1;
  }
  return 0;
}

function posting() {
  let url = `/main`
  let content = $("#inputModal").val()
  if (isEmptyComment(content)) {
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
//게시글
$(document).ready(function () {
  let url = `/main/post`
  fetch(url)
    .then(res => res.json()).then((data) => {
      for (let i = 0; i < data['listing'].length; i++) {
        let postId = data['listing'][i]['_id']
        postsId.push[postId]
        console.log("allinfo", allinfo)
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
        <div class="postComment">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OtxRlwMFosn4vODbl1kLg6fsrbTXqo3Fig&usqp=CAU" />
          <input placeholder="Wrtie a comment...">
        </div>
      </div>`
        $('#postBox').append(temp_html);
      }

    })
  console.log("1", postsId)
})
console.log("2", postsId)

// 댓글
function commentPosting(postId) {
  let url = `/main/${postId}/comment/`
  let comment = $(`#comment${postId}`).val()
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