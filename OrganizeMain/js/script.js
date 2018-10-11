$(document).ready(function() {
  $('#completed').droppable({
    append: ".taskItem",
    revert:"invalid",
    drop: function(event, ui) {
      var $item = ui.draggable;
      $item.fadeOut(function() {
        $item.css({
          "left": "",
          "top": "",
          "bottom": "10px",
          "right": "",
          "margin": "20px",
          "padding": "20px"
        }).fadeIn();
      });
      $item.appendTo(this);
      ui.draggable.draggable({disabled: true});
      alert("dropped");
    },
  });

});
var count = 1;

$(document).on("click", "#add", function() {
  console.log('clicked');
  var list = '<li class="list-group-item taskItem">' + 'Task# ' + count + '<button type="button" class="btn btn-danger btn-sm remove" >' +
    '<span class="glyphicon glyphicon-remove"></span>' + 'Remove' + '</button>' + '</li>';
  count++;
  $('#task').append(list);
  $('.taskItem').draggable({
    activeclass: 'dropactive',
    tolerance: 'intersect',
    hoverClass: 'drophover',
    revert:'invalid',
    stack:'#task',
    opacity: 1
  });
});
$(document).on("click", ".remove", function() {
  console.log('removed');
  $(this).closest("li").remove();
});
