$(function () {
    // 검색창 클릭시 최근검색어창 토글
    // ico_arr 이미지 변경
    $(".input_text").click(function () {
        // 검색기록창 토글
        if (recentSearchData.length === 0) {
            $no_data.show()
        }
        $autoFrame.toggle();

    });

    // search 바깥쪽 클릭시( body 영역에서 search 영역 을 제외한 부분 )
    // 최근검색어 영역 닫기

    // ------------ 아래 부분 기존 naver랑 다르게 변경되었습니다 --------//

    $(document).on('mouseup', function (e) {
        if ($(".autoFrame").has(e.target).length === 0) {
            $(".autoFrame").hide()
        }
    })
    // form 기본 동작 막기
    // form submit시 검색어와 날짜 저장하기
    $("#sform").on("submit", function (e) {

        // form 태그의 기본 이벤트를 막아서
        // 다른 페이지로 리다이렉션 되는 것을 막는다.
        // preventDefault MDN
        // https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault
        e.preventDefault();

        // 최근 검색어를 저장한다
        // 현재 input 에 있는 검색어 가져오기
        const query = $("input#query").val();

        // 검색창에 아무것도 입력하지 않고 검색할 경우 조기리턴
        if (!query) {
            alert('검색어를 입력하세요!')
            return;
        }
        // recentSearchData 배열에 넣을 객체 만들기
        const recentSearchItem = {};
        recentSearchItem.search = query;

        // recentSearchData 배열에 앞에서 부터 recentSearchItem 삽입
        const recentSearch = recentSearchItem;

        recentSearchData.unshift(recentSearch);

        // 최근검색어 li 만들기
        createRecentItem();

        // 검색창 초기화
        cleanInput();
        // 최근 검색 기록 화면만 보여주기
        showOlnyRecentItem();
        // 최근 검색창 항상 보여주기
        $autoFrame.show();
    });
})