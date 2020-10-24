$(function () {

  // タブをクリックしたとき
  $('#invisibleTAB a').click(function () {

    // id下の全てのdivコンテンツを非表示にする
    $('#viewTAB_0A div').hide();
    $('#viewTAB_0B div').hide();
    $('#viewTAB_0C div').hide();
    $('#viewTAB_0D div').hide();

    // 'href'の属性値を取得＞変数に代入
    let agcy_href = $(this).attr('href');

    // 'href'の属性値ごとに表示処理
    if (agcy_href == 'TAB_All') {

// btn_ipseudo（疑似要素処理をさせる）
let agcy__btn_ipseudo = '';
const ordr__btn_ipseudo = document.getElementsByName('ordr__btn_ipseudo');
for (let i = 0; i < ordr__btn_ipseudo.length; i++){
    if(ordr__btn_ipseudo[i].checked){ //(ordr__btn_ipseudo[i].checked === true)と同じ
      agcy__btn_ipseudo = ordr__btn_ipseudo[i].value;
      break;
    }
  }
  if(agcy__btn_ipseudo == 'psdo_Awes'){
    var edtr__btn_ipseudo = 'psdo_Awes';
    document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_01').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_02').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_03').classList.add('psdo_Awes');

  } else {
    if(agcy__btn_ipseudo == 'psdo_Moon'){
      var edtr__btn_ipseudo = 'psdo_Moon';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_01').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.add('psdo_Moon');

    } else { /*それ以外*/
      var edtr__btn_ipseudo = '';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    } /*if(agcy__btn_ipseudo == 'psdo_Moon')*/
  } /*/if(agcy__btn_ipseudo == 'psdo_Awes')*/

      /*タブの表示処理*/
      $('#viewTAB_0A #viewTAB_0A_IconBtn').show();
      $('#viewTAB_0A #viewTAB_0A_Icon').show();
      $('#viewTAB_0B #viewTAB_0B_IconBtn').show();
      $('#viewTAB_0B #viewTAB_0B_Icon').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn01').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn02').show();
      $('#viewTAB_0C #viewTAB_0C_Icon').show();
      $('#viewTAB_0C #viewTAB_0C_IconBtn').show();
      $('#viewTAB_0D #viewTAB_0D_TextBtn').show();
      $('#viewTAB_0D #viewTAB_0D_IconBtn').show();
      $('#viewTAB_0D #viewTAB_0D_Icon').show();
      } else {
      } /*/if(agcy_href == 'TAB_01')*/

    if (agcy_href == 'TAB_IconBtn') {

// btn_ipseudo（疑似要素処理をさせる）
let agcy__btn_ipseudo = '';
const ordr__btn_ipseudo = document.getElementsByName('ordr__btn_ipseudo');
for (let i = 0; i < ordr__btn_ipseudo.length; i++){
    if(ordr__btn_ipseudo[i].checked){ //(ordr__btn_ipseudo[i].checked === true)と同じ
      agcy__btn_ipseudo = ordr__btn_ipseudo[i].value;
      break;
    }
  }
  if(agcy__btn_ipseudo == 'psdo_Awes'){
    var edtr__btn_ipseudo = 'psdo_Awes';
    document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_01').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_02').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_03').classList.add('psdo_Awes');

  } else {
    if(agcy__btn_ipseudo == 'psdo_Moon'){
      var edtr__btn_ipseudo = 'psdo_Moon';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_01').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.add('psdo_Moon');

    } else { /*それ以外*/
      var edtr__btn_ipseudo = '';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    } /*if(agcy__btn_ipseudo == 'psdo_Moon')*/
  } /*/if(agcy__btn_ipseudo == 'psdo_Awes')*/

      /*タブの表示処理*/
      $('#viewTAB_0A #viewTAB_0A_IconBtn').show();
      $('#viewTAB_0B #viewTAB_0B_IconBtn').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn01').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn02').show();
      $('#viewTAB_0C #viewTAB_0C_Icon').show();
      $('#viewTAB_0C #viewTAB_0C_IconBtn').show();
      $('#viewTAB_0D #viewTAB_0D_TextBtn').show();
      $('#viewTAB_0D #viewTAB_0D_IconBtn').show();     
    } else {
    } /*/if(agcy_href == 'TAB_02')*/

    if (agcy_href == 'TAB_TextBtn') {

/*疑似要素クラスを消去*/
var edtr__btn_ipseudo = '';
document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');

      /*タブの表示処理*/
      $('#viewTAB_0A #viewTAB_0A_IconBtn').show();
      $('#viewTAB_0B #viewTAB_0B_IconBtn').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn01').show();
      $('#viewTAB_0C #viewTAB_0C_TextBtn02').show();
      $('#viewTAB_0D #viewTAB_0D_TextBtn').show();

    } else {
    } /*/if(agcy_href == 'TAB_03')*/

    if (agcy_href == 'TAB_Icon') {

// btn_ipseudo（疑似要素処理をさせる）
let agcy__btn_ipseudo = '';
const ordr__btn_ipseudo = document.getElementsByName('ordr__btn_ipseudo');
for (let i = 0; i < ordr__btn_ipseudo.length; i++){
    if(ordr__btn_ipseudo[i].checked){ //(ordr__btn_ipseudo[i].checked === true)と同じ
      agcy__btn_ipseudo = ordr__btn_ipseudo[i].value;
      break;
    }
  }
  if(agcy__btn_ipseudo == 'psdo_Awes'){
    var edtr__btn_ipseudo = 'psdo_Awes';
    document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_01').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_02').classList.add('psdo_Awes');
    document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    document.getElementById('retail_cbtn_03').classList.add('psdo_Awes');

  } else {
    if(agcy__btn_ipseudo == 'psdo_Moon'){
      var edtr__btn_ipseudo = 'psdo_Moon';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_01').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.add('psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.add('psdo_Moon');

    } else { /*それ以外*/
      var edtr__btn_ipseudo = '';
      document.getElementById('retail_cbtn_01').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_02').classList.remove('psdo_Awes','psdo_Moon');
      document.getElementById('retail_cbtn_03').classList.remove('psdo_Awes','psdo_Moon');
    } /*if(agcy__btn_ipseudo == 'psdo_Moon')*/
  } /*/if(agcy__btn_ipseudo == 'psdo_Awes')*/

      /*タブの表示処理*/
      $('#viewTAB_0A #viewTAB_0A_Icon').show();
      $('#viewTAB_0B #viewTAB_0B_Icon').show();
      $('#viewTAB_0C #viewTAB_0C_Icon').show();
      $('#viewTAB_0D #viewTAB_0D_Icon').show();
    } else {
    } /*/if(agcy_href == 'TAB_04')*/

    // 現在のclass="current"を削除する
    $('.curTAB').removeClass(' curTAB');

    // クリックしたタブにclass=" current"を追加する
    $(this).addClass(' curTAB');

    return false; /*クリックしたときにアンカー本来の動きをさせない*/

  }); /*/$('a').click(function()*/
}); /*/$(function()*/
