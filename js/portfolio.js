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
  openModal();
});