// ---- accordion_0A ----
$('#pAcc_0A div').slideToggle();

$(function(){
	$('#pAcc_0A h3').click(function(){
		$('#pAcc_0A div').stop().slideToggle();

		let agcy_class = $(this).attr('class');
		if(agcy_class == 'close'){
			$(this).removeClass('close');
			$(this).addClass('open');
			} else {
			$(this).removeClass('open');
			$(this).addClass('close');
		} /*/if(agcy_class == 'close')*/

	}); /*/$().click(function(){*/
}); /*/$(function()*/

// ---- accordion_bgcolor ----
$(function(){
	$('#pAcc_bgcolor dt').click(function(){
		$('#pAcc_bgcolor dd').stop().slideToggle();

		let agcy_class = $(this).attr('class');
		if(agcy_class == 'close'){
			$(this).removeClass('close');
			$(this).addClass('open');
			} else {
			$(this).removeClass('open');
			$(this).addClass('close');
		} /*/if(agcy_class == 'close')*/

	}); /*/$().click(function(){*/
}); /*/$(function()*/

// ---- accordion_emcolor ----
$(function(){
	$('#pAcc_emcolor dt').click(function(){
		$('#pAcc_emcolor dd').stop().slideToggle();

		let agcy_class = $(this).attr('class');
		if(agcy_class == 'close'){
			$(this).removeClass('close');
			$(this).addClass('open');
			} else {
			$(this).removeClass('open');
			$(this).addClass('close');
		} /*/if(agcy_class == 'close')*/

	}); /*/$().click(function(){*/
}); /*/$(function()*/

// ---- accordion_bcolor ----
$(function(){
	$('#pAcc_bcolor dt').click(function(){
		$('#pAcc_bcolor dd').stop().slideToggle();

		let agcy_class = $(this).attr('class');
		if(agcy_class == 'close'){
			$(this).removeClass('close');
			$(this).addClass('open');
			} else {
			$(this).removeClass('open');
			$(this).addClass('close');
		} /*/if(agcy_class == 'close')*/

	}); /*/$().click(function(){*/
}); /*/$(function()*/

// ---- accordion_icolor ----
$(function(){
	$('#pAcc_icolor dt').click(function(){
		$('#pAcc_icolor dd').stop().slideToggle();

		let agcy_class = $(this).attr('class');
		if(agcy_class == 'close'){
			$(this).removeClass('close');
			$(this).addClass('open');
			} else {
			$(this).removeClass('open');
			$(this).addClass('close');
		} /*/if(agcy_class == 'close')*/
		
	}); /*/$().click(function(){*/
}); /*/$(function()*/