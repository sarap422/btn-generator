$('#plt_bgcolor input').click(function(){
	let agcy__btn_bgcolor = $(this).attr('title');
	let agcy__btn_bground = $(this).attr('title');
	var ordr__btn_bgcolor = document.getElementById('ordr__btn_bgcolor');
	ordr__btn_bgcolor.value = agcy__btn_bgcolor;
	var ordr__btn_bground = document.getElementById('ordr__btn_bground');
	ordr__btn_bground.value = agcy__btn_bground;
});

$('#plt_emcolor input').click(function(){
	let agcy__btn_emcolor = $(this).attr('title');
	var ordr__btn_emcolor = document.getElementById('ordr__btn_emcolor');
	ordr__btn_emcolor.value = agcy__btn_emcolor;
});

$('#plt_bcolor input').click(function(){
	let agcy__btn_bcolor = $(this).attr('title');
	var ordr__btn_bcolor = document.getElementById('ordr__btn_bcolor');
	ordr__btn_bcolor.value = agcy__btn_bcolor;
});

$('#plt_icolor input').click(function(){
	let agcy__btn_icolor = $(this).attr('title');
	var ordr__btn_icolor = document.getElementById('ordr__btn_icolor');
	ordr__btn_icolor.value = agcy__btn_icolor;
});
