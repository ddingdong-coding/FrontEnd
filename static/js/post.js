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