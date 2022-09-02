function posting(){
    let content =$("#post").val()
    // let form_data = new FormData()
    // form_data.append("content_give",content)
    fetch('http://127.0.0.1:5000/main', {
        method: 'post',
        body: JSON.stringify({
          content: "content",
        })
      })
      console.log(content)
      .then( res => res.json())
      .then( res => {
        if (res.success) {
            alert("저장완료");
        } else if (res.status===403){
            return res.json();
        }
      })
      .then(res => {
        console.log("에러메세지", res.message)
      })
}