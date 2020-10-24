function bladeWorks_HTML() {

//選択IDの文字列を取得
var agcy_cArea_HTML = document.getElementById('cArea_HTML').innerText;

//textareaを生成
var area_MoonCell = document.createElement('textarea');

//選択IDの内容をtextareaに記述
area_MoonCell.textContent = agcy_cArea_HTML;

//生成したものをdocumentに追加
document.body.appendChild(area_MoonCell);

//選択/コピーして・・
area_MoonCell.select();
document.execCommand("copy");

//すぐに消す。
document.body.removeChild(area_MoonCell);
}

function bladeWorks_CSS() {

//選択IDの文字列を取得
var agcy_cArea_CSS = document.getElementById('cArea_CSS').innerText;
var area_cArea_CSS = document.createElement('textarea');
area_cArea_CSS.textContent = agcy_cArea_CSS;
document.body.appendChild(area_cArea_CSS);
area_cArea_CSS.select();
document.execCommand("copy");
document.body.removeChild(area_cArea_CSS);
}
