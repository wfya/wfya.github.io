
$('.switch>input').on('click',function(){
  if(this.checked){
    $('.neon').addClass('on');
  }else{
    $('.neon').removeClass('on');
  }
}); 
