document.documentElement.onscroll = function() {

    var q = document.body.scrollTop;
    console.log(q);


    let btn = document.getElementById('btn');
    let page1 = document.getElementById('page1');
    let page2 = document.getElementById('page2');
    let page3 = document.getElementById('page3');
    let page4 = document.getElementById('page4');
    let page6 = document.getElementById('page6');
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    page5.style.display = 'none';
    page6.style.display = 'none';
    btn.onclick = function () {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page4.style.display = 'block';
        page5.style.display = 'block';
        page6.style.display = 'block';
    }


    let oghak1 = document.getElementById('oghak1');
    let oghak2 = document.getElementById('oghak2');
    let oghak3 = document.getElementById('oghak3');
    let oghak4 = document.getElementById('oghak4');
    let oghak5 = document.getElementById('oghak5');
    let oghak6 = document.getElementById('oghak6');
    let oghak7 = document.getElementById('oghak7');
    let oghak8 = document.getElementById('oghak8');
    let oghak9 = document.getElementById('oghak9');
    let oghak10 = document.getElementById('oghak10');
    let oghak11 = document.getElementById('oghak11');
    let oghak12 = document.getElementById('oghak12');
    let oghak13 = document.getElementById('oghak13');
    let oghak14 = document.getElementById('oghak14');
    let oghak15 = document.getElementById('oghak15');
    let oghak16 = document.getElementById('oghak16');
    let oghak17 = document.getElementById('oghak17');

    let im1 = document.getElementById('im1');
    let im2 = document.getElementById('im2');
    let im3 = document.getElementById('im3');
    let im4 = document.getElementById('im4');
    let im5 = document.getElementById('im5');
    oghak1.onclick = function () {
        im1.style.background = 'url(15.jpg)';
        im1.style.backgroundSize = 'cover';
    }

    oghak2.onclick = function () {
        im1.style.background = 'url(13.jpg)';
        im1.style.backgroundSize = 'cover';
    }

    oghak3.onclick = function () {
        im1.style.background = 'url(12.jpg)';
        im1.style.backgroundSize = 'cover';
    }

    oghak4.onclick = function () {
        im1.style.background = 'url(14.jpg)';
        im1.style.backgroundSize = 'cover';
    }

    oghak5.onclick = function () {
        im1.style.background = 'url(16.jpg)';
        im1.style.backgroundSize = 'cover';
    }


    oghak6.onclick = function () {
        im2.style.background = 'url(5.jpg)';
        im2.style.backgroundSize = 'cover';
    }

    oghak7.onclick = function () {
        im2.style.background = 'url(21.jpg)';
        im2.style.backgroundSize = 'cover';
    }


    oghak8.onclick = function () {
        im2.style.background = 'url(22.jpg)';
        im2.style.backgroundSize = 'cover';
    }

    oghak9.onclick = function () {
        im3.style.background = 'url(6.jpg)';
        im3.style.backgroundSize = 'cover';
    }

    oghak10.onclick = function () {
        im3.style.background = 'url(23.jpg)';
        im3.style.backgroundSize = 'cover';
    }


    oghak11.onclick = function () {
        im4.style.background = 'url(7.jpg)';
        im4.style.backgroundSize = 'cover';
    }


    oghak12.onclick = function () {
        im4.style.background = 'url(17.jpg)';
        im4.style.backgroundSize = 'cover';
    }

    oghak13.onclick = function () {
        im4.style.background = 'url(18.jpg)';
        im4.style.backgroundSize = 'cover';
    }

    oghak14.onclick = function () {
        im5.style.background = 'url(8.jpg)';
        im5.style.backgroundSize = 'cover';
    }

    oghak15.onclick = function () {
        im5.style.background = 'url(19.jpg)';
        im5.style.backgroundSize = 'cover';
    }

    oghak16.onclick = function () {
        im5.style.background = 'url(20.jpg)';
        im5.style.backgroundSize = 'cover';
    }

    oghak17.onclick = function () {
        im6.style.background = 'url(9.jpg)';
        im6.style.backgroundSize = 'cover';
    }



}