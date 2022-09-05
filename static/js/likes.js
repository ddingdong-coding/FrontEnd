var i = 0;
$('.bi-hand-thumbs-up').on('click', function () {
    if (i == 0) {
        $(this).removeClass('bi-hand-thumbs-up');
        $(this).addClass('bi-hand-thumbs-up-fill');
        i++;
    } else if (i == 1) {
        $(this).removeClass('bi-hand-thumbs-up-fill');
        $(this).addClass('bi-hand-thumbs-up');
        i--;
    }

});