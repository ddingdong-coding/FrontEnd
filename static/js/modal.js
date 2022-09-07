function openModal(modalname) {
  document.get
  $("." + modalname).fadeIn(300);
}

$(".main, .wrap, post").on('click', function () {
  $(".modal-con").fadeOut(300);
});



$(function () {
  $(".inputPost").click(function () {
    $("#postModal").fadeIn();
  })
  $("#exit, #postBnt").click(function () {
    $("#postModal").fadeOut();

  })
})

