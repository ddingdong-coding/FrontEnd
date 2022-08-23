//focused input
$(document).ready(function() {
    $('#smail-1').click(function() {
        $("#commentFirstInput").focus();
    })
    $('#smail-2').click(function() {
        $("#commentSecondInput").focus();
    })
    $('#smail-3').click(function() {
        $("#commentThirdInput").focus();
    })
});

// 입력한 댓글 보여주는 함수 
//첫번째 피드 
function postFirstComment() {
    let comment = $("#commentFirstInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#firstComment').append(temp_html)
        //인풋창 초기화
        document.getElementById('commentFirstInput').value = null
    }


}
//두번째 피드 
function postSecondComment() {
    let comment = $("#commentSecondInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#secondComment').append(temp_html)
        //인풋창 초기화
        document.getElementById('commentSecondInput').value = null
    }

}
//세번째 피드 
function postThirdComment() {
    let comment = $("#commentThirdInput").val();
    if (!comment) {
        alert("There are no texts to display.")
    } else {
        let temp_html = `<li> <span style="font-weight:460;"> happyMe </span>  ${comment}</li>`
        $('#thirdComment').append(temp_html)
        //인풋창 초기화
        document.getElementById('commentThirdInput').value = null
    }


}