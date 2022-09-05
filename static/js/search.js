// search variable declaration
const $search = $('#search');
// form variable declaration
const $sform = $("#sform");
// input variable declaration
const $input = $("input#query");

// kwd_lst variable declaration (recent search ul)
const $recent_lst = $('.recent_list');
// autoFrame variable declaration (recent search input)
const $autoFrame = $('#autoFrame');

// kwd_info variable declaration
const $no_data = $('.no_data');

let recentSearchData = [
  // { search: "sparta web search"},
];


// funtion for making list of recent history 
const createRecentItem = () => {
  // initialization
  $recent_lst.empty();
  console.log($recent_lst)
  recentSearchData.forEach((item, index) => {
    // making li
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
// function for initialization input content
const cleanInput = () => {
  $input.val('');
}