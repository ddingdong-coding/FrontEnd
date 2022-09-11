$(function () {
    // toggle for clicking the input box
    $(".input_text").click(function () {
        // inpub box toggle
        if (recentSearchData.length === 0) {
            $no_data.show()
        }
        $autoFrame.toggle();

    });

    // clicking the outside of search box
    // close the area of recent research 

    $(document).on('mouseup', function (e) {
        if ($(".autoFrame").has(e.target).length === 0) {
            $(".autoFrame").hide()
        }
    })
    // blocking the basic action of form
    // saving the research word and date when clickng the form submit (to prevent redirecting to the different page)
    $("#sform").on("submit", function (e) {

        // preventDefault MDN
        // https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault
        e.preventDefault();

        // saving the recent research words
        // getting the word in the input box
        const query = $("input#query").val();

        // when nothing in the input box
        if (!query) {
            alert('검색어를 입력하세요!')
            return;
        }
        // making object to insert arrays
        const recentSearchItem = {};
        recentSearchItem.search = query;

        const recentSearch = recentSearchItem;

        recentSearchData.unshift(recentSearch);

        // making li of recent research words 
        createRecentItem();

        // initialization 
        cleanInput();
        // showing only the record of recent research words 
        showOlnyRecentItem();
        // showing the record of recent research word all the time
        $autoFrame.show();
    });
})