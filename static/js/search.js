
// search variable declaration
const $search = $('#search');
// form variable declaration
const $sform = $("#sform");
// input variable declaration
const $input = $("input#query");

// kwd_lst variable declaration (recent search ul)
const $recent_list = $('.recent_list');
// autoFrame variable declaration (recent search input)
const $autoFrame = $('.recent_wrapper');

// kwd_info variable declaration
const $no_data = $('.no_data');

let recentSearchData = [
  // { search: "sparta web search" },
];


// funtion for making list of recent history 
const createRecentItem = () => {
  // initialization
  $recent_list.empty();
  recentSearchData.forEach((item, index) => {
    // making li
    $recent_list.append(
      `
      <li class="item recent_item" data-rank="${index + 1}" data-template-type="history" data-keyword="${item.search}">
          <div class="fix">
            <div>${item.search}</div>
          </div>
      </li>
      `
    )
  })
}

const showOlnyRecentItem = () => {
  $no_data.hide();
}
// function for initialization input content
const cleanInput = () => {
  $input.val('');
}
