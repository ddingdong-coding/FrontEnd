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