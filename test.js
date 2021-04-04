console.log('foo');

jQuery(function () {
  console.log('hi guy');
  //console.log('hello');
  jQuery('.test_button').click(function(e){
    console.log('BUTTON CLICK 1');
  });
  jQuery(document).on('click','.test_button',function(e){
    console.log('BUTTON CLICK 2');
  });
  jQuery(document).on('mousedown','.test_button',function(e){
    console.log('BUTTON DOWN');
  });
  
});
