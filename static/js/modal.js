function openModal(modalname){
    document.get
    // $("#modal").fadeIn(300);
    $("."+modalname).fadeIn(300);
  }
  
  $(".main, .wrap, .gnb, post, body").on('click',function(){
    $("#modal").fadeOut(300);
    $(".modal-con").fadeOut(300);
  });


  $(function () {
    $(".inputPost").click(function () {
      console.log("클릭")
        $("#postModal").fadeIn();
        console.log("click open");
    })
    $(".gnb, .wrap-tab").click(function () {
        $("#postModal").fadeOut();
    })
})

// $(function () {
//   $(document).on('click', ".post", function () {
//     console.log("클릭")
//       $(".postModal").modal('show');
//       console.log("click open");
//   })
//   $(".main, .wrap, .gnb, post, body").on('click',function () {
//       $(".postModal").modal('hide');
//       console.log("click close");
//   })
// })