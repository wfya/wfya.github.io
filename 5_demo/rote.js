jQuery(function($){

  $(".threeD").each(function(){
    TransformTo3D($(this));
  });

  function TransformTo3D($td){
    var i,
        $item,
        letters = $td.text().split("");
    $td.text("");
    for(i=0;i<letters.length;++i){
      $item = $('<span class="letter-box"></span>');
      $item.text(letters[i]);
      $item.attr('letter',letters[i]);
      $td.append($item);
    }
  }

});
