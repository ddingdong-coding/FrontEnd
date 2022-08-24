    //좋아요 북마크
    var i = 0;
    $('.bi-suit-heart').on('click', function () {
        if (i == 0) {
            $(this).removeClass('bi-suit-heart');
            $(this).addClass('bi-suit-heart-fill');
            i++;
        } else if (i == 1) {
            $(this).removeClass('bi-suit-heart-fill');
            $(this).addClass(' bi-suit-heart');
            i--;
        }

    });
    $('.bi-bookmark').on('click', function () {
        if (i == 0) {
            $(this).removeClass('bi-bookmark');
            $(this).addClass('bi-bookmark-fill');
            i++;
        } else if (i == 1) {
            $(this).removeClass('bi-bookmark-fill');
            $(this).addClass('bi-bookmark');
            i--;
        }

    });

//send the link
// $(document).ready(function() {
//     $('.bi-send').click(function() {
//        alert("link copied")
//     })
// });

function clip() {

    var url = '';    // <a>태그에서 호출한 함수인 clip 생성
    var textarea = document.createElement("textarea");
    //url 변수 생성 후, textarea라는 변수에 textarea의 요소를 생성

    document.body.appendChild(textarea); //</body> 바로 위에 textarea를 추가(임시 공간이라 위치는 상관 없음)
    url = window.document.location.href;  //url에는 현재 주소값을 넣어줌
    textarea.value = url;  // textarea 값에 url를 넣어줌
    textarea.select();  //textarea를 설정
    document.execCommand("copy");   // 복사
    document.body.removeChild(textarea); //extarea 요소를 없애줌

    alert("link copied")  // 알림창
}