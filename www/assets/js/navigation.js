var backPressed=new Date().getTime();
var backButton=false;
var isApp = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;

//######### Monitora modifições na url
window.addEventListener("hashchange", function () {
    document.querySelector("body").removeAttribute("style");
    transicao();
}, false);
//######### Redirecionamento das ações do menu lateral
function getActionMenu(target) {
    block = target.split('#').length > 1 ? target.split('#')[0] : target;
    if (localStorage.getItem("token") == null || localStorage.getItem("token") == "null") {
        switch (block) {
            case 'auth-page':
                if (localStorage.getItem("token") == null || localStorage.getItem("token") == "null") {
                    login.requestLogin();
                }
                break;
            default:
                location.hash = "#/" + target;
                break;
        }
    } else {
        location.hash = "#/" + target;
    }
}

//######### trancição entre paginas
function transicao() {
    var str = location.hash;
    setStyleNavbarTop(str);

    //Segunda alteração do Anezio
    var locHash = str.split("#/") == "" ? "home.html" : str.split("#/")[1];
    paginaAtual = locHash;
    if (locHash == "home.html") {
        $('#myContent').addClass('out');
        $("#myContent").load("view/" + locHash, function () {
            $('#myContent').removeClass('out');

        });
    } else {
        $('#myContent').addClass('out');
        $('#myContent').one("otransitionend oTransitionEnd msTransitionEnd transitionend",
            function (event) {
                $('#myContent').addClass('in');
                $("#myContent").load("view/" + locHash, function () {
                    $('#myContent').removeClass('out');

                });
            });
    }

}

//######### Modifica o estilo da navbar
function setStyleNavbarTop(str) {
    switch (str.split("#")[1]) {
        case "":
        case undefined:
        case "/home.html":
            $("main").attr("class", "main home");
            // $("header").attr("class", "header header-home");
            break;
        default:
            $("header").attr("class", "header");
            $("main").attr("class", "main");
            break;
    }
}