$(document).ready(function () {
  
  tab();

  
});



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

