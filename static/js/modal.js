function openModal(modalname) {
  document.get
  // $("#modal").fadeIn(300);
  $("." + modalname).fadeIn(300);
}

$(".main, .wrap, post").on('click', function () {
  // $("#modal").fadeOut(300);
  $(".modal-con").fadeOut(300);
});



// working on button of all and unread 
// var bnts = document.getElementsByClassName("bnts");
// function handleClick(event) {
//   if (event.target.classList[1] === "clicked") {
//     event.target.classList.remove("clicked");
//   } else {
//     for (var i = 0; i < bnts.length; i++) {
//       bnts[i].classList.remove("clicked");
//     }

//     event.target.classList.add("clicked");
//   }
// }

// function init() {
//   for (var i = 0; i < bnts.length; i++) {
//     bnts[i].addEventListener("click", handleClick);
//   }
// }

// init();

// function test() {
//   document.getElementById("inputModal").value = '';
// }


$(function () {
  $(".inputPost").click(function () {
    $("#postModal").fadeIn();
  })
  $("#exit, #postBnt").click(function () {
    $("#postModal").fadeOut();

  })
})

