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
      let posting = data['listing']

      console.log("성공", data['listing'])
      for (let i = 0; i < posting.length; i++) {
        let time = data['listing'][i]['today'].substring(2, 14)
        let content = data['listing'][i]['content']
        let postId = data['listing'][i]['_id']
        console.log(postId)
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
})
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