

// スクロール
let scroll = function(){
  $(".js_scroll").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    let targetId = $(this).attr("href");
    let targetElement = $(targetId);
    if (targetElement.length){
      let pos = targetElement.offset().top;
      window.scrollTo({
        top: pos,
        behavior: "smooth"
      });
    }
  });
  
}

// モーダル
let openModal = function(){
  $("._modal_open").on("click", function(){
    // modal open
    $("._modal").fadeIn();
  });

  $("._modal_close").on("click", function(){
    // close modal
    $("._modal").fadeOut();
  });
}

$(function(){
  scroll();
  openModal();
});