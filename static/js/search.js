// 변수 선언

// search 선언
const $search = $('#search');
// form 선언
const $sform = $("#sform");
// input 선언
const $input = $("input#query");

// kwd_lst 선언 (최근 검색어 ul)
const $recent_lst = $('.recent_list');
// autoFrame 선언(최근검색어 창)
const $autoFrame = $('#autoFrame');

// kwd_info 선언
const $no_data = $('.no_data');

let recentSearchData = [
  // { search: "스파르타 코딩클럽 웹 퍼블리싱"},
];


// 최근 검색어 리스트(li)를 만드는 함수
const createRecentItem = () => {
  // 초기화
  $recent_lst.empty();
  console.log($recent_lst)
  recentSearchData.forEach((item, index) => {
    // li 만들기
    $recent_lst.append(
      `
      <li class="item recent_item" data-rank="${index + 1}" data-template-type="history" data-keyword="${item.search}">
        <a href="#" class="kwd">
          <span class="fix">
            <span>${item.search}</span>
          </span>
        </a>
      </li>
      `
    )
  })
}

const showOlnyRecentItem = () => {
  $no_data.hide();
}
// 검색창 초기화 함수
const cleanInput = () => {
  $input.val('');
}