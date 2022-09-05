function openModal(modalname) {
  document.get
  // $("#modal").fadeIn(300);
  $("." + modalname).fadeIn(300);
}

$(".main, .wrap, post").on('click', function () {
  $("#modal").fadeOut(300);
  $(".modal-con").fadeOut(300);
});

var bnts = document.getElementsByClassName("bnts");

function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < bnts.length; i++) {
      bnts[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < bnts.length; i++) {
    bnts[i].addEventListener("click", handleClick);
  }
}

init();

function test() {
  document.getElementById("inputModal").value = '';
}


$(function () {
  $(".inputPost").click(function () {
    console.log("클릭")
    $("#postModal").fadeIn();
    console.log("click open");
  })
  $("#exit, #postBnt").click(function () {
    $("#postModal").fadeOut();

  })
})

