// ボタンを押すごとに
function String__btn() {
  const $ = el => document.querySelector(el)

  let agcy__btn_classname = document.getElementById('ordr__btn_classname').value;
  $(':root').style.setProperty('--btn_classname', agcy__btn_classname);
  let agcy__btn_width = document.getElementById('ordr__btn_width').value;
  $(':root').style.setProperty('--btn_width', agcy__btn_width);
  let agcy__btn_height = document.getElementById('ordr__btn_height').value;
  $(':root').style.setProperty('--btn_height', agcy__btn_height);
  let agcy__btn_padding = document.getElementById('ordr__btn_padding').value;
  $(':root').style.setProperty('--btn_padding', agcy__btn_padding);
  let agcy__btn_radius = document.getElementById('ordr__btn_radius').value;
  $(':root').style.setProperty('--btn_radius', agcy__btn_radius);
  let agcy__btn_bgcolor = document.getElementById('ordr__btn_bgcolor').value;
  $(':root').style.setProperty('--btn_bgcolor', agcy__btn_bgcolor);
  let agcy__btn_bground = document.getElementById('ordr__btn_bground').value;
  $(':root').style.setProperty('--btn_bground', agcy__btn_bground);  
  let agcy__btn_emcolor = document.getElementById('ordr__btn_emcolor').value;
  $(':root').style.setProperty('--btn_emcolor', agcy__btn_emcolor);
  let agcy__btn_spancolor = agcy__btn_emcolor;
  $(':root').style.setProperty('--btn_spancolor', agcy__btn_spancolor);
  let agcy__btn_bcolor = document.getElementById('ordr__btn_bcolor').value;
  $(':root').style.setProperty('--btn_bcolor', agcy__btn_bcolor);
  let agcy__btn_icolor = document.getElementById('ordr__btn_icolor').value;
  $(':root').style.setProperty('--btn_icolor', agcy__btn_icolor);

  let agcy__btn_iunicode = document.getElementById('ordr__btn_iunicode').value;
  var edtr__btn_iunicode = '"\\' + document.getElementById('ordr__btn_iunicode').value + '"';
  $(':root').style.setProperty('--btn_iunicode', edtr__btn_iunicode);

  let agcy__btn_isize = document.getElementById('ordr__btn_isize').value;
  $(':root').style.setProperty('--btn_isize', agcy__btn_isize);

  let agcy__btn_btxt = document.getElementById('ordr__btn_btxt').value;
  $(':root').style.setProperty('--btn_btxt', agcy__btn_btxt);
  let agcy__btn_emtxt = document.getElementById('ordr__btn_emtxt').value;
  $(':root').style.setProperty('--btn_emtxt', agcy__btn_emtxt);
  let agcy__btn_spantxt = agcy__btn_emtxt;

// btn_iflex
  let agcy__btn_iflex = '';
  const ordr__btn_iflex = document.getElementsByName('ordr__btn_iflex');
  for (let i = 0; i < ordr__btn_iflex.length; i++){
    if(ordr__btn_iflex[i].checked){ //(ordr__btn_iflex[i].checked === true)と同じ
      agcy__btn_iflex = ordr__btn_iflex[i].value;
      break;
    }
  }
  if(agcy__btn_iflex == 'column'){
    var edtr__btn_iflex = 'column';
    $(':root').style.setProperty('--btn_iflex', edtr__btn_iflex);
  } else {
    if(agcy__btn_iflex == 'row-reverse'){
      var edtr__btn_iflex = 'row-reverse';
      $(':root').style.setProperty('--btn_iflex', edtr__btn_iflex);
    } else {
      if(agcy__btn_iflex == 'column-reverse'){
        var edtr__btn_iflex = 'column-reverse';
        $(':root').style.setProperty('--btn_iflex', edtr__btn_iflex);  
      } else { /*それ以外*/
        var edtr__btn_iflex = 'row';
        $(':root').style.setProperty('--btn_iflex', edtr__btn_iflex);
      } /*/if(agcy__btn_iflex == 'column-reverse')*/         
    } /*/if(agcy__btn_iflex == 'row-reverse')*/
  } /*/if(agcy__btn_iflex == 'column')*/

// btn_ipseudo
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

// btn_hover
  let agcy__btn_hover = '';
  const ordr__btn_hover = document.getElementsByName('ordr__btn_hover');
  for (let i = 0; i < ordr__btn_hover.length; i++){
    if(ordr__btn_hover[i].checked){ //(ordr__btn_hover[i].checked === true)と同じ
      agcy__btn_hover = ordr__btn_hover[i].value;
      break;
    }
  }
  if(agcy__btn_hover == 'bright'){
      var wrtr__btn_hover = '0px 0px 0px var(--btn_height) rgba(255,255,255,0.2) inset';
      var wrtr02__btn_hover = '0px 0px 0px var(--btn_' + agcy__btn_classname + '_height) rgba(255,255,255,0.2) inset';
      $(':root').style.setProperty('--btn_hover', wrtr__btn_hover);
  } else {
      if(agcy__btn_hover == 'dark'){
      var wrtr__btn_hover = '0px 0px 0px var(--btn_height) rgba(0,0,0,0.2) inset';        
      var wrtr02__btn_hover = '0px 0px 0px var(--btn_' + agcy__btn_classname + '_height) rgba(0,0,0,0.2) inset';
      $(':root').style.setProperty('--btn_hover', wrtr__btn_hover);
  } else { /*それ以外*/
      var wrtr__btn_hover = '0px 0px 0px 0px rgba(0,0,0,0)';    
      var wrtr02__btn_hover = '0px 0px 0px 0px rgba(0,0,0,0)';
      $(':root').style.setProperty('--btn_hover', wrtr__btn_hover);
    } /*/if(agcy__btn_hover == 'dark')*/
  } /*/if(agcy__btn_hover == 'bright')*/

// btn_shadow
  let agcy__btn_shadow = '';
  const ordr__btn_shadow = document.getElementsByName('ordr__btn_shadow');
  for (let i = 0; i < ordr__btn_shadow.length; i++){
    if(ordr__btn_shadow[i].checked){ //(ordr__btn_shadow[i].checked === true)と同じ
      agcy__btn_shadow = ordr__btn_shadow[i].value;
      break;
    }
  }
  if(agcy__btn_shadow == '01'){
      var wrtr__btn_shadow = '0px 2px 2px rgba(0,0,0,0.3)';
      var wrtr02__btn_shadow = '0px 2px 2px rgba(0,0,0,0.3)';
      var wrtr__btn_shadowH = '0px 3px 2px rgba(0,0,0,0.3)';
      var wrtr02__btn_shadowH = '0px 3px 2px rgba(0,0,0,0.3)';
      var wrtr__btn_shadowA = '0px 0px 1px rgba(0,0,0,0.15)';
      var wrtr02__btn_shadowA = '0px 0px 1px rgba(0,0,0,0.15)';
      $(':root').style.setProperty('--btn_shadow', wrtr__btn_shadow);
      $(':root').style.setProperty('--btn_shadowH', wrtr__btn_shadowH);
      $(':root').style.setProperty('--btn_shadowA', wrtr__btn_shadowA);
  } else {
      if(agcy__btn_shadow == '02'){
      var wrtr__btn_shadow = '0px 2px 0px rgba(90,90,90,0.5), 0px 2px 0px var(--btn_bgcolor), 0px 3px 2px rgba(0,0,0,0.3)';
      var wrtr02__btn_shadow = '0px 2px 0px rgba(90,90,90,0.5), 0px 2px 0px var(--btn_' + agcy__btn_classname + '_bgcolor), 0px 3px 2px rgba(0,0,0,0.3)';
      var wrtr__btn_shadowH = '0px 3px 0px rgba(90,90,90,0.5), 0px 3px 0px var(--btn_bgcolor), 0px 4px 2px rgba(0,0,0,0.3)';
      var wrtr02__btn_shadowH = '0px 3px 0px rgba(90,90,90,0.5), 0px 3px 0px var(--btn_' + agcy__btn_classname + '_bgcolor), 0px 4px 2px rgba(0,0,0,0.3)';
      var wrtr__btn_shadowA = '0px 0px 1px rgba(0,0,0,0.15)';
      var wrtr02__btn_shadowA = '0px 0px 1px rgba(0,0,0,0.15)';
      $(':root').style.setProperty('--btn_shadow', wrtr__btn_shadow);
      $(':root').style.setProperty('--btn_shadowH', wrtr__btn_shadowH);
      $(':root').style.setProperty('--btn_shadowA', wrtr__btn_shadowA);
  } else { /*それ以外*/
      var wrtr__btn_shadow = '0px 0px 0px rgba(0,0,0,0)';
      var wrtr02__btn_shadow = '0px 0px 0px rgba(0,0,0,0)';
      var wrtr__btn_shadowH = '0px 0px 0px rgba(0,0,0,0)';
      var wrtr02__btn_shadowH = '0px 0px 0px rgba(0,0,0,0)';
      var wrtr__btn_shadowA = '0px 0px 0px rgba(0,0,0,0)';
      var wrtr02__btn_shadowA = '0px 0px 0px rgba(0,0,0,0)';
      $(':root').style.setProperty('--btn_shadow', wrtr__btn_shadow);
      $(':root').style.setProperty('--btn_shadowH', wrtr__btn_shadowH);
      $(':root').style.setProperty('--btn_shadowA', wrtr__btn_shadowA);   
    } /*if(agcy__btn_shadow = '02')*/
  } /*/if(agcy__btn_shadow = '01')*/

// btn_translate
  let agcy__btn_translate = '';
  const ordr__btn_translate = document.getElementsByName('ordr__btn_translate');
  for (let i = 0; i < ordr__btn_translate.length; i++){
    if(ordr__btn_translate[i].checked){ //(ordr__btn_translate[i].checked === true)と同じ
      agcy__btn_translate = ordr__btn_translate[i].value;
      break;
    }
  }
  if(agcy__btn_translate == 'on'){
      var edtr__btn_translateH = 'translateY(-1px)';
      var edtr__btn_translateA = 'translateY(2px)';
      $(':root').style.setProperty('--btn_translateH', edtr__btn_translateH);
      $(':root').style.setProperty('--btn_translateA', edtr__btn_translateA);
  } else {
      var edtr__btn_translateH = 'translateY(0px)';
      var edtr__btn_translateA = 'translateY(0px)';
      $(':root').style.setProperty('--btn_translateH', edtr__btn_translateH);
      $(':root').style.setProperty('--btn_translateA', edtr__btn_translateA);
  } /*/if(agcy__btn_translate == 'on')*/

// btn_pointerEve
  let agcy__btn_pointerEve = '';
  const ordr__btn_pointerEve = document.getElementsByName('ordr__btn_pointerEve');
  for (let i = 0; i < ordr__btn_pointerEve.length; i++){
    if(ordr__btn_pointerEve[i].checked){ //(ordr__btn_pointerEve[i].checked === true)と同じ
      agcy__btn_pointerEve = ordr__btn_pointerEve[i].value;
      break;
    }
  }
  if(agcy__btn_pointerEve == 'on'){
      var edtr__btn_pointerEve = 'auto';
      $(':root').style.setProperty('--btn_pointerEve', edtr__btn_pointerEve);
      var wrtr__btn_N = '';
  } else {
      var edtr__btn_pointerEve = 'none';
      $(':root').style.setProperty('--btn_pointerEve', edtr__btn_pointerEve);
      var wrtr__btn_N = 'N';
  } /*/if(agcy__btn_pointerEve == 'on')*/

  document.querySelector('#retail__btn_width').textContent = agcy__btn_width;
  document.querySelector('#retail__btn_height').textContent = agcy__btn_height;
  document.querySelector('#retail__btn_padding').textContent = agcy__btn_padding;
  document.querySelector('#retail__btn_radius').textContent = agcy__btn_radius;
  document.querySelector('#retail__btn_bgcolor').textContent = agcy__btn_bgcolor;
  document.querySelector('#retail__btn_bground').textContent = agcy__btn_bground;
  document.querySelector('#retail__btn_spancolor').textContent = agcy__btn_spancolor;
  document.querySelector('#retail__btn_emcolor').textContent = agcy__btn_emcolor;
  document.querySelector('#retail__btn_bcolor').textContent = agcy__btn_bcolor;
  document.querySelector('#retail__btn_icolor').textContent = agcy__btn_icolor;
  document.querySelector('#retail__btn_iunicode').textContent = edtr__btn_iunicode;
  document.querySelector('#retail__btn_isize').textContent = agcy__btn_isize;
  document.querySelector('#retail__btn_iflex').textContent = edtr__btn_iflex;
  document.querySelector('#retail__btn_btxt').textContent = agcy__btn_btxt;
  document.querySelector('#retail__btn_emtxt').textContent = agcy__btn_emtxt;
  document.querySelector('#retail__btn_spantxt').textContent = agcy__btn_spantxt;

  document.querySelector('#retailHTM__btn_classname_01').textContent = agcy__btn_classname;
  document.querySelector('#retailHTM__btn_classname_02').textContent = agcy__btn_classname;
  document.querySelector('#retailHTM__btn_classname_03').textContent = agcy__btn_classname;
  document.querySelector('#retailHTM__btn_classname_04').textContent = agcy__btn_classname;

  document.querySelector('#retailHTM__btn_btxt_01').textContent = agcy__btn_btxt;
  document.querySelector('#retailHTM__btn_emtxt_01').textContent = agcy__btn_emtxt;
  document.querySelector('#retailHTM__btn_spantxt_01').textContent = agcy__btn_spantxt;

  document.querySelector('#retailHTM__btn_ipseudo_01').textContent = edtr__btn_ipseudo;
  document.querySelector('#retailHTM__btn_ipseudo_02').textContent = edtr__btn_ipseudo;
  document.querySelector('#retailHTM__btn_ipseudo_03').textContent = edtr__btn_ipseudo;

  document.querySelector('#retailCSS__btn_classname_01').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_02').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_03').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_04').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_05').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_06').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_07').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_08').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_09').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_10').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_11').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_12').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_13').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_14').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_15').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_16').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_17').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_18').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_19').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_20').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_21').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_22').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_23').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_24').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_25').textContent = agcy__btn_classname;
  document.querySelector('#retailCSS__btn_classname_26').textContent = agcy__btn_classname;

  document.querySelector('#retailvarM__btn_classname_01').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_02').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_03').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_04').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_05').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_06').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_07').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_08').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_09').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_10').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_11').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_12').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_13').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_14').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_15').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_16').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_17').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_18').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_19').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_20').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_21').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_22').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_23').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_24').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_25').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_26').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_27').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_28').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_29').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_30').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_31').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_32').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_33').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_34').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_35').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_36').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_37').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_38').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_39').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_40').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_41').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_42').textContent = agcy__btn_classname;
  document.querySelector('#retailvarM__btn_classname_43').textContent = agcy__btn_classname;

  document.querySelector('#retailCSS__btn_hover_01').textContent = wrtr02__btn_hover;
  document.querySelector('#retailCSS__btn_hover_02').textContent = wrtr02__btn_hover;

  document.querySelector('#retailCSS__btn_shadow_01').textContent = wrtr02__btn_shadow;
  document.querySelector('#retailCSS__btn_shadow_02').textContent = wrtr02__btn_shadow;
  document.querySelector('#retailCSS__btn_shadow_03').textContent = wrtr02__btn_shadow;

  document.querySelector('#retailCSS__btn_shadowH_01').textContent = wrtr02__btn_shadowH;
  document.querySelector('#retailCSS__btn_shadowH_02').textContent = wrtr02__btn_shadowH;
  document.querySelector('#retailCSS__btn_shadowH_03').textContent = wrtr02__btn_shadowH;

  document.querySelector('#retailCSS__btn_shadowA_01').textContent = wrtr02__btn_shadowA;
  document.querySelector('#retailCSS__btn_shadowA_02').textContent = wrtr02__btn_shadowA;
  document.querySelector('#retailCSS__btn_shadowA_03').textContent = wrtr02__btn_shadowA;

  document.querySelector('#retailCSS__btn_translateH_01').textContent = edtr__btn_translateH;
  document.querySelector('#retailCSS__btn_translateH_02').textContent = edtr__btn_translateH;
  document.querySelector('#retailCSS__btn_translateH_03').textContent = edtr__btn_translateH;

  document.querySelector('#retailCSS__btn_translateA_01').textContent = edtr__btn_translateA;
  document.querySelector('#retailCSS__btn_translateA_02').textContent = edtr__btn_translateA;
  document.querySelector('#retailCSS__btn_translateA_03').textContent = edtr__btn_translateA;

  document.querySelector('#retailCSS__btn_pointerEve_01').textContent = edtr__btn_pointerEve;
  document.querySelector('#retailCSS__btn_pointerEve_02').textContent = edtr__btn_pointerEve;
  document.querySelector('#retailCSS__btn_pointerEve_03').textContent = edtr__btn_pointerEve;

  document.querySelector('#retailCSS__btn_N_01').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_02').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_03').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_04').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_05').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_06').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_07').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_08').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_09').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_10').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_11').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_12').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_13').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_14').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_15').textContent = wrtr__btn_N;
  document.querySelector('#retailCSS__btn_N_16').textContent = wrtr__btn_N;
}
