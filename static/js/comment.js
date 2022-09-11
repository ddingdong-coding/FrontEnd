function comment() {
    let comment = $('#commenet').val()
    console.log(comment)
    if (comment === undefined) {
        alert("please write comments")
        location.reload
        console.log(2)
        return;
    }
}