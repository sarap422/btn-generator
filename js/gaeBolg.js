$(function(){

// $だらけでわかりにくくなるので一旦代入
	var agcy_gaeBolg = $('#gaeBolg')
	agcy_gaeBolg.hide(); /*隠す*/

// スクロールが500に達したらボタン表示
	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
		agcy_gaeBolg.fadeIn();
		} else {
		agcy_gaeBolg.fadeOut();
		} /*/if($(this).scrollTop() > 500)*/
	}); /*/$(window).scroll(function()*/


// スルスルとスクロールさせてトップに戻る
	agcy_gaeBolg.click(function(){
			$('html,body').animate({scrollTop:0}, 500);
			/*/$('html,body').animate*/

	}); /*/agcy_gaeBolg.click(function()*/

}); /*/$(function()*/