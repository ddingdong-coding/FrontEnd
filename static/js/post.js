function posting(){
    let content =$("#inputModal").val()
    const formData = new FormData();
    formData.append('content',content)
    fetch('/main', {
        method: 'POST',
        body: formData,
      }).then((res) => {
        if(res.status ===200 || res.status ===201) {
          res.json().then(json => console.log(json));
        }else {
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
        for (let i=0; i<posting.length;i++) {
          let time = data['all_posts'][i]['today'].substring(7,22)
          let content = data['all_posts'][i]['content']
          let temp_html = `<p>Time: ${time}</p>
          <p> Message: ${content}</p>`
          $('#postList').append(temp_html);
        }

      })
})