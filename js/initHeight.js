(function () {
    //设置高度和宽度
    setHeight();
    window.onresize = function () {
        setHeight();
    };

    function setHeight() {
        var bodyDiv = document.querySelector('body');
        bodyDiv.style.height = document.documentElement.clientHeight + 'px';
        var whdef = 50 / 2560;// 表示750的设计图,使用50PX的默认值
        var wH = window.innerHeight;// 浏览器窗口的高度
        var wW = window.innerWidth;// 浏览器窗口的宽度
        var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
        var oHtml = document.querySelector('html');
        oHtml.style.fontSize = (rem - 0.05) + 'px';
    }


})();