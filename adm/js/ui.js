$(document).ready(function () {
  mypageSelect();
  tab();
  modal();
  
});

function mypageSelect() {
  const $langWrap = $(".mypage-hd");
  $langWrap.children("button").on("click", function () {
    $(this).parent().toggleClass("active");
  });
  $langWrap.on("mouseleave", function () {
    $(this).removeClass("active");
  });
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

function modal(){
  const $modalBtn = $('.modal-btn');
  const $modalClose = $('.modal-close');
  $modalBtn.click(function(){
    const $openModal = $(this).data('modal');
    $('body').addClass('open');
    $($openModal).addClass('open');
  });
  $modalClose.click(function(){
    $('body').removeClass('open');
    $(this).parents('.modal').removeClass('open');
  })  
}