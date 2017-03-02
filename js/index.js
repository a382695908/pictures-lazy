window.onload = function() {
    var aDate = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg'];
    var oPage = document.getElementById("page");
    var oDialog = document.getElementById("dialog");
    var oClos = document.getElementById("clos");
    var oMask = document.getElementById("mask");
    var obj = document.getElementById("wrap");
    var aLi = obj.getElementsByTagName("li");
    var oScorll = new MScroll(obj, "y", true);
    loadImg();
    for (var i = 0; i < aLi.length; i++) {
        $(aLi[i]).tap(function() {
            oPage.style.WebkitFilter = oPage.style.filter = "blur(8px)";
            oDialog.style.backgroundImage = "url(" + aDate[this.index] + ")";
            oDialog.style.transform = "translateY(0)";
            oMask.style.display = "block";
        });
    }
    $(oClos).tap(function() {
        oPage.style.WebkitFilter = oPage.style.filter = "blur(0px)";
        oDialog.style.transform = "translateY(-200%)";
        oMask.style.display = "none";
    });
    oScorll.onscroll = function() {
        loadImg();
    };

    function loadImg() {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            var oImg = aLi[i].children[0].children[0];
            if ((aLi[i].offsetTop < Math.abs(oScorll.iScroll) + obj.clientHeight) && oImg.getAttribute("src") == "") {
                fn(oImg, i);

            }
        }
    }

    function fn(obj, nub) {
        var oImg = new Image();
        oImg.src = aDate[nub];
        oImg.onload = function() {
            obj.src = aDate[nub];
            setTimeout(function() {
                obj.style.opacity = 1;
            }, 30);
        }
    }
};
