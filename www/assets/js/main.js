//
// Environment
//

var isApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
var paginaAtual = '';
//
// Eventos
//

//######### After reading the document
$(document).ready(function () {
    transicao();
});


function elementExist(name) {
    return document.createElement(name).constructor !== HTMLElement;
}
// Ajax
function getService(url, objData, el = '', typeMethod = 'post') {
    objData.token = localStorage.getItem("token");
    objData.langApp = localStorage.getItem("deviceLang");
    objData.origemLangVideo = localStorage.getItem("origemLangVideo");
    if (el != '') {
        $(el).html("");
    }
    return $.ajax({
        url: localStorage.getItem("serverService") + url,
        type: typeMethod,
        data: objData
    }).done(function (data) {
        // console.log(data);
    }).fail(function (e) {
        console.log(e);
    });
}

function reload() {
    location.reload();
}
