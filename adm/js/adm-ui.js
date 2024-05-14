$(document).ready(function () {
  
  tab();
  checkboxInput();
  if($('.colresiable').length > 0){colResiable();}

  
});
function colResiable(){
  $('.colresiable').colResizable({
    resizeMode:'overflow',
    minWidth: 50
  })
}
function checkboxInput(){
  $('.onclick-input').click(function(){
    if($(this).is(':checked')){
      $(this).parents('label').next('.input-text').prop('disabled', false);
    }else {
      $(this).parents('label').next('.input-text').prop('disabled', true);
    }
  })
}


function popup(url, name, width, height){
  var width = width;
  var height = height;
  var option = "width = "+width+", height = "+height+", top = 100, left = 200, location = no"
  window.open(url, name, option);
}

function tab(){
  $('.js-tabgroup > div').hide();
	$('.js-tabgroup > div:first-of-type').show();
	$('.js-tabs a').click(function(e){
	  e.preventDefault();
		var $this = $(this),
        tabgroup = '#'+$this.parents('.js-tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');

		others.removeClass('active');
		$this.addClass('active');
		$(tabgroup).children('div').hide();
		$(target).show();  
	})
}

