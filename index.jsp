<%@ page language="java" import="java.util.*" pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<!--
	<meta http-equiv="refresh" content="3">
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script src="js/echarts.common.min.js"></script>
	<style>
        span, p {
            font-size: 14px;
        }

        p {
            margin: 0;
            padding: 0;
        }

        .content {
            display: flex;
            justify-content: space-around;
        }

        .left, .right, .center {
            text-align: center;
        }

        .content .left,
        .content .right,
        .content .center {
            flex: 1 1 300px;
        }

        nav {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        nav span:hover {
            color: #ed7d31;
        }

        body {
            margin: 0;
            padding: 0;
            color: white;
            font-size: 10px;
            background-image: url("images/bg.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;
            -moz-background-size: 100% 100%;
            -o-background-size: 100% 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .body-div {
            width: 100%;
        }

        nav {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            background-color: rgba(12, 56, 73, .5);
            position: relative;
            top: 10px;
            border: 1px solid #2f528f;
            margin-bottom: 10px;
            height: 25px;
        }

        nav .topMenu {
            color: white;
            opacity: 1;
            font-weight: bold;
            font-size: 16px;
            padding: 5px;
        }

        nav .active {
            background-color: #ed7d31;
        }

        #topTitle {
            font-size: 22px;
            color: #63d0ff;
            background-image: url("images/title_bg.png");
            background-size: 100% 100%;
            padding: 5px 50px 5px 50px;
            position: relative;
            top: -3px;

        }

        .blue {
            color: #00abdd;
            font-size: 16px;
            display: block;
            text-align: left;
            height: 25px;
        }

        .select {
            margin: 10px 30px 5px 30px;
            display: inline-block;
        }

        .select #yearTex {
            font-size: 18px;
            position: relative;
            top: 3px;
            color: #00abdd;
        }

        .select select {
            height: 30px;
            width: 170px;
            margin-left: 20px;
        }

        .content {
            position: relative;
        }

        .content .left {
            height: 100%;
            margin-left: 10px;
        }

        .content .left .block-div,
        .content .right .block-div {
            position: relative;
            min-width: 370px;
            width: 90%;
            background-color: rgba(12, 56, 73, .3);
            border: 1px solid #2f528f;
            display: inline-block;
            padding: 5px;
            margin-bottom: 10px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .content .left .block-div:nth-of-type(3){
            height: 240px;
        }
        .content .left .block-div:nth-of-type(4){
            height: 200px;
        }

        .content .right {
            display: inline-block;
            width: 490px;
            height: 100%;
        }

        .content .right .block-div {
            height: 33.5%;
        }

        .content .center {
            height: 100%;
        }

        .content .center .block-div {
            background-color: rgba(12, 56, 73, .3);
            padding: 5px;
            border: 1px solid #2f528f;
        }

        .blue:before {
            content: '.';
            display: inline-block;
            height: 14px;
            position: relative;
            top: -13px;
            width: 3px;
            margin-right: 3px;
            font-size: 0;
            background-color: #ffff00;
        }





        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }

        /*信用数据归集*/
        .left .creditCatalog {
            padding: 5px;
            display: inline-block;
            background-color: #05385a;
            margin-bottom: 5px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        .left .creditCatalog p {
            display: inline-block;
            margin: 0;
        }
        .left .creditCatalog p,
        .left .creditCatalog span {
            text-align: left;
            font-size: 12px !important;
        }
        .left .creditCatalog .widthSeven {
            display: inline-block;
            width: 60px;
        }
        .left .creditCatalog img.icon {
            float: left;
            width: 40px;
            height: 40px;
        }





        /*信源单位收入*/
        span.cityGrade {
            float: left;
            font-size: 12px;
        }

        .block-div .insert {
            width: 100px;
            font-size: 12px;
            display: block;
            color: #c3cfb2;
        }

        .blue-div,
        .mapIndicate {
            background-color: rgba(12, 56, 73, .7);
            padding: 5px;
        }

        .citydiv {
            float: left;
            margin-right: 5px;
        }

        #leftChart1 {
            margin: 10px 0 0 0;
            display: inline-block;
            height: 60%;
            width: 85%;
        }

        /*信用数据质量*/
        .left .block-div #leftChart2 {
            width: 35%;
        }

        .left .block-div #leftChart3 {
            margin-left: 20px;
            width: 60%;
        }

        .left .block-div #leftChart2,
        .left .block-div #leftChart3 {
            height: 80%;
            display: inline-block;
        }

        .left .block-div #leftChart2:after {
            content: '质量分析';
        }

        .left .block-div #leftChart3:after {
            content: '入库率';
        }

        .left .block-div #leftChart2:after,
        .left .block-div #leftChart3:after {
            font-size: 12px;
            color: #00abdd;
            position: relative;
            top: 0;
        }

        /*信用地图*/
        .content .center .map-div {
            height: 67%;
            margin-top: 10px;
            position: relative;
            /*min-width: 500px;*/
        }

        .mapDesc {
            height: 90%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            margin-left: 30px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .mapDesc p {
            width: 140px;
            margin-top: 20px;
        }

        .map-div .mapImg {
            position: absolute;
            top: 20px;
            width: 300px;
            height: 80%;
            right: 130px;
        }

        .map-div .mapIndicate {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }

        .map-div .mapIndicate p {
            margin-top: 10px;
        }

        .map-div .mapIndicate p:nth-of-type(1) {
            color: #01a5e3;
        }

        .mapIndicate .yellow {
            color: #d7b691;
        }

        /*信用服务*/
        .server-div {
            height: 31%;
            margin-top: 10px;
        }

        .server-div .child-div span {
            padding: 5px;
        }

        .server-div table {
            width: 100%;
            text-align: center;
        }

        .server-div table tr td {
            background-color: rgba(12, 56, 73, .7);
            padding: 5px;
            width: 40%;
            margin: 0 5px 5px 5px;
            display: inline-block;
        }

        .server-div table tr #bottom-div {
            width: calc(80% + 30px);
            height: 100%;
            display: flex;
            margin-left: calc(100% - 92.5%);
        }

        #bottom-div .blue {
            width: 45px;
            margin-left: 30px;
        }

        .people-div span {
            display: block;
            text-align: left;
        }

        .people-div {
            margin-left: 20%;
        }

        .right {
            margin-top: 10px;
        }

        .right .block-div {
            text-align: center;
        }

        .right .block-div .blue {
            text-align: left;
        }

        .right .block-div .yellow {
            display: inline-block;
            color: #e3e9bf;
            background-color: rgba(12, 56, 73, .7);
            padding: 5px 0;
            width: 40%;
            margin: 0 10px;
        }


        .right .block-div:nth-of-type(1) {
            height: 25%;
        }

        .right .block-div:nth-of-type(2) {
            height: 43%;
        }

        .right .block-div:nth-of-type(2) div.smallChart {
            height: 35%;
            display: inline-block;
            width: 40%;
            margin: 5px 5px;
        }

        .right .block-div:nth-of-type(2) div.bigChart {
            width: 100%;
            height: 40%;
            display: inline-block;
        }



        /* rightChart */
        .right .block-div .chartType {
            margin-top: 5px;
            width: 40%;
            height: calc(100% - 60px);
            display: inline-block;
        }

        #rightChart46 {
            width: 50%;
            height: calc(100% - 35px);
            float: left;
        }
        .desc {
            text-align: right;
            margin-right: 15%;
            margin-top: 5%;
        }
        .desc p span{
            margin-left: 20px;
        }
    </style>
  </head>
  
  <body>
   <div class="body-div">
    <nav>
        <span class="active topMenu">总体概况</span>
        <span class="topMenu">平台服务</span>
        <span class="topMenu">行业信用</span>
        <span class="topMenu" id="topTitle">克拉玛依信用大数据平台</span>
        <span class="topMenu">企业信用</span>
        <span class="topMenu">个人信用</span>
        <span class="topMenu">资源目录</span>
    </nav>

    <div class="content">

        <div class="left">

            <div class="select">
                <span id="yearTex">统计年度</span>
                <select class="year">
                    <option>2018年度</option>
                    <option>2017年度</option>
                </select>
            </div>

            <div class="block-div">
                <span class="blue">信用数据归集</span>

                <span class="creditCatalog">
                    <img src="images/catelog.png" alt="" class="icon">
                    <p class="desc widthSeven">信用目录 <span id="mulu">30000</span>条</p>
                </span>

                <span class="creditCatalog">
                    <img src="images/dataNum.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven">信用数据<span id="xinyongshuju">890089</span>条</span>
                        <span>
                            <img class="arrawTop" src="images/arrawTop.png" alt="" style="height: 30px;">
                            <span class="widthSeven">本月增量<span class="monthPlus" id="zengliang">11</span>条</span>
                        </span>

                    </span>
                </span>

                <div class="creditCatalog">
                    <img src="images/lawPeople.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven">法人主体<span class="lawPersonNum" id="farenzhuti">3000</span>条</span>
                        <span class="widthSeven">覆盖率<span class="lawPersonNum" id="fugailv">95</span></span>
                    </span>
                </div>

                <div class="creditCatalog">
                    <img src="images/catelog.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven naturalNum">自然人主体<span class="" id="value1">46</span></span>
                        <span class="widthSeven">覆盖率<span id="value2">4695</span></span>
                    </span>
                </div>

            </div>

            <div class="block-div">
                <span class="blue">信源单位收入</span>
                <div class="blue-div citydiv">
                    <span class="cityGrade">市<br>级</span>
                    <p class="insert">已接入<span class="insertedNum" id="yijieru_1">53</span>家</p>
                    <p class="insert">未接入<span class="insertingNum" id="weijieru_1">3</span>家</p>
                </div>

                <div class="blue-div citydiv">
                    <span class="cityGrade">市<br>级</span>
                    <p class="insert">已接入<span class="insertedNum" id="yijieru_2">53</span>家</p>
                    <p class="insert">未接入<span class="insertingNum" id="weijieru_2">3</span>家</p>
                </div>
                <div class="blue-div citydiv">
                    <span class="cityGrade">市<br>级</span>
                    <p class="insert">已接入<span class="insertedNum" id="yijieru_3">53</span>家</p>
                    <p class="insert">未接入<span class="insertingNum" id="weijieru_3">3</span>家</p>
                </div>
                <div id="leftChart1"></div>
            </div>

            <div class="block-div">
                <span class="blue">信用数据质量</span>
                <div id="leftChart2"></div>
                <div id="leftChart3"></div>
            </div>
        </div>

        <div class="center">
            <div class="block-div map-div">
                <span class="blue">信用地图</span>
                <div class="mapDesc">
                    <p class="blue-div">企业总数: <span id="enterpriseNum">3200</span>家</p>
                    <p class="blue-div">社会组织: <span id="societyNum">300</span>家</p>
                    <p class="blue-div">事业单位: <span id="careerNum">52</span>家</p>
                    <p class="blue-div">个体工商户: <span id="individualNum">5</span>万</p>
                    <p class="blue-div">自然人: <span class="naturalNum">46</span>万人</p>
                </div>
                <img class="mapImg" src="images/map.png"/>
                <div class="mapIndicate">
                    <p>克拉玛依区</p>
                    <p class="yellow">企业总数: <span id="enterpriseNumNow">1200</span>家</p>
                    <p class="yellow">社会组织: <span id="societyNumNow">100</span>家</p>
                    <p class="yellow">事业单位: <span id="careerNumNow">22</span>家</p>
                    <p class="yellow">个体工商户: <span id="individualNumNow">3</span>万</p>
                    <p class="yellow">自然人: <span class="naturalNumNow">13</span>万人</p>
                </div>
            </div>

            <div class="block-div server-div">
                <span class="blue">信用服务</span>
                <table>
                    <tr>
                        <td><span>信用档案查询累计：</span><span id="xinyongdangan">38000</span><span>次</span></td>
                        <td><span>信用报告打印累计：</span><span id="xinyongbaogao">38000</span><span>次</span></td>
                    </tr>
                    <tr>
                        <td><span>平台注册企业量：</span><span id="zhuce">500</span><span>家</span></td>
                        <td><span>门户访问次数累计：</span><span id="fangweng">11000</span><span>次</span></td>
                    </tr>
                    <tr>
                        <td id="bottom-div">
                            <span class="blue">异议处理</span>
                            <div class="people-div">
                                <span>法人</span>
                                <span id="shengqing_1">申请: 200次</span>
                                <span id="banjie_1">办结: 198次</span>
                            </div>
                            <div class="people-div">
                                <span>自然人</span>
                                <span id="shengqing_2">申请: 200次</span>
                                <span id="banjie_2">办结: 198次</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="right">
            <div class="block-div">
                <span class="blue">双公示</span>
                <span class="yellow">行政许可: <span id="permitNum">500</span>项</span>
                <span class="yellow">行政处罚: <span id="punishNum">300</span>项</span>
                <div id="rightChart1" class="chartType"></div>
                <div id="rightChart2" class="chartType"></div>
            </div>

            <div class="block-div">
                <span class="blue">联合奖惩</span>
                <span class="yellow">失信企业: <span id="discreditEnterpriseNum">500</span>项</span>
                <span class="yellow">失信个人: <span id="dishonestPersonNum">300</span>项</span>
                <div class="smallChart" id="rightChart3"></div>
                <div class="smallChart" id="rightChart4"></div>
                <div class="bigChart" id="rightChart5"></div>
            </div>

            <div class="block-div">
                <span class="blue">企业信用评级</span>
                <div id="rightChart46"></div>
                <div class="desc">
                    <p>AAA: <span>50</span>家</p>
                    <p>AA: <span>50</span>家</p>
                    <p>A: <span>50</span>家</p>
                    <p>BB: <span>50</span>家</p>
                    <p>B: <span>50</span>家</p>
                    <p>C: <span>50</span>家</p>
                    <p>D: <span>50</span>家</p>
                </div>
            </div>
        </div>


    </div>

</div>


<script>
    (function () {
        //设置高度
        var bodyDiv = document.querySelector('.body-div');
        var content = document.querySelector('.content');
        setHeight();
        window.onresize = function () {
            setHeight();
        };

        function setHeight() {
            bodyDiv.style.height = document.documentElement.clientHeight + 'px';
            content.style.height = document.documentElement.clientHeight - 105 + 'px';
        }

        //leftChart
        var chartP1L1 = echarts.init(document.getElementById('leftChart1'));
        var chartP1L2 = echarts.init(document.getElementById('leftChart2'));
        var chartP1L3 = echarts.init(document.getElementById('leftChart3'));

        var chartP1R1 = echarts.init(document.getElementById('rightChart1'));
        var chartP1R2 = echarts.init(document.getElementById('rightChart2'));
        var chartP1R3 = echarts.init(document.getElementById('rightChart3'));
        var chartP1R4 = echarts.init(document.getElementById('rightChart4'));
        var chartP1R5 = echarts.init(document.getElementById('rightChart5'));
        var chartP1R6 = echarts.init(document.getElementById('rightChart46'));
        // grid: {
        //     x: 10,
        //         y: 10,
        //         x2: 10,
        //         y2: 10,
        //         left: 50,
        //         bottom: 43
        // },
        chartP1L1.setOption({
            xAxis: [{
                axisLabel: {
                    rotate: 40
                },
                axisLine: {
                    show: false
                },
                splitLine: {show: false},//去除网格线
                data: ["市公安局", "市场监督", "市住房", "其他单位"]
            }],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {show: false},//去除网格线
            }],
            itemStyle: {
                borderWidth: 3,
                borderColor: '#ed7d31',
                color: 'rgba(2,2,2,0)',
            },

            textStyle: {
                color: '#fafafc'
            },
            grid: {
                x: 10,
                y: 10,
                x2: 10,
                y2: 10,
                left: 50,
                bottom: 43,
                top: 15
            },
            series: [{
                name: '信源单位',
                type: 'bar',
                label: {
                    show: true,
                    color: '#FF8C69',
                    position: 'top'
                },
                data: [38000, 25000, 15000, 10000],
            }]

        });
        chartP1L2.setOption({
            title: {
                text: '80%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#0580f2',
                    fontSize: '14'
                }
            },
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['30%', '50%'],
                hoverAnimation: true,
                data: [{
                    value: 11836,
                    name: '不合格',
                    itemStyle: {
                        normal: {
                            color: '#efa589'
                        }
                    }
                }, {
                    value: 86795,
                    name: '合格',
                    itemStyle: {
                        normal: {
                            color: '#d16e2a'
                        }
                    }
                }]
            }]
        });
        chartP1L3.setOption({
            xAxis: {
                axisLabel: {
                    show: true,
                    rotate: 40,
                    interval: 0,
                    textStyle: {
                        color: '#fff',
                        fontSize: '7'
                    }
                },
                type: 'category',
                data: ['市公安局', '市场监督管理局', '第三方信用服务机构',
                    '市城乡规划管理局', '市交通运输局', '市环保局', '市卫生和计划生育委员会',
                    '市安全生产监督管理局', '市无线电管理局', '民族宗教事务委员会',
                    '市人才资源和社会保障局', '市财政局', '市住房公积金管理中心', '市国土资源执法监察支队',
                    '市地税局', '市气象局', '市地震局']
            },
            grid: {
                x: 10,
                y: 10,
                x2: 10,
                y2: 10,
                left: 50,
                bottom: 43
            },
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        interval: 'auto',
                        formatter: '{value} %',
                        color: '#fff'
                    },
                    show: true
                }
            ],
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1425, 900, 964,
                    955, 1025, 997, 789, 889, 994, 1024, 987],
                type: 'line',
                itemStyle: {
                    color: '#406dbd'
                }

            }]
        });

        chartP1R1.setOption({
            xAxis: {
                splitLine: {show: false},//去除网格线
                type: 'category',
                data: ['市公安', '市场监', '第三方信用服务机构', '市城乡规划管理局', '市交通运输局', '市环保局'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 8
                    },
                    rotate: 40
                },
            },
            yAxis: {
                type: 'value',
                splitLine: {show: false},//去除网格线
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            grid: {
                x: 0,
                y: 10,
                x2: 10,
                y2: 10,
                left: 40,
                bottom: 43,
                top: 20
            },
            series: [{
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#FF8C69',
                    color: 'rgba(0,0,0,0)',
                },
                label: {
                    show: true,
                    color: '#FF8C69',
                    position: 'top'
                },
                data: [120, 200, 150, 80, 50, 45],
                type: 'bar'
            }]
        });
        chartP1R2.setOption({
            xAxis: {
                splitLine: {show: false},//去除网格线
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 90
                },
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月'],
            },
            yAxis: {
                splitLine: {show: false},//去除网格线
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                }

            },
            grid: {
                x: 10,
                y: 10,
                x2: 10,
                y2: 10,
                left: 30,
                bottom: 43,
                top: 20
            },
            series: [
                {
                    data: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55],
                    type: 'bar',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#FF8C69',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                {
                    data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
                    type: 'bar',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#8DEEEE',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                {
                    data: [80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
                    type: 'line',
                    itemStyle: {
                        color: '#8DEEEE',

                    },
                    label: {
                        show: true
                    }
                },
                {
                    data: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55],
                    type: 'line',
                    label: {
                        show: true
                    },
                    itemStyle: {
                        color: '#FF8C69',

                    }
                },
            ]
        });
        chartP1R3.setOption({
            xAxis: {
                type: 'category',
                data: ['食品', '药品', '化妆品', '保健品'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize:8,

                    },
                    interval:0,
                    rotate:45
                },
            },
            yAxis: {
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            grid: {
                x: 10,
                y: 10,
                x2: 10,
                y2: 10,
                left: 40,
                bottom:28
            },
            backgroundColor: '#404040',
            series: [{
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#426eba',
                    color: 'rgba(0,0,0,0)'
                },
                data: [1000, 500, 400, 200],
                type: 'bar',
                barWidth:7
            }]
        });
        chartP1R4.setOption({
            backgroundColor: '#404040',
            xAxis: {
                type: 'category',
                data: ['欠款', '交通违法', '制售假冒', '无证经营','虚假广告'],
                axisLabel: {
                    show: true,
                    rotate:40,
                    interval:0,
                    textStyle: {
                        color: '#fff',
                        fontSize:8
                    }
                },

            },
            yAxis: {
                axisLabel : {
                    formatter: '{value}',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            grid: {
                x: 10,
                    y: 10,
                    x2: 10,
                    y2: 10,
                    left: 30,
                    bottom: 33
            },
            series: [{
                itemStyle:{
                    borderWidth:3,
                    borderColor:'#426eba',
                    color: 'rgba(0,0,0,0)'
                },
                data: [30, 40, 10, 4, 8],
                type: 'bar',
                barWidth:7
            }]
        });
        chartP1R5.setOption({

            xAxis: [{
                axisLabel: {
                    rotate: 40,
                    textStyle: {
                        color: '#fff',
                        fontSize: 8
                    }
                },
                axisLine: {
                    show: false
                },
                //去除网格线
                splitLine: {
                    show: false
                },
                data: ["市公安局", "市场监督管理局", "第三方", "市城厢镇管理局", "市交通运输局", "市环保局"]
            }],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },//去除网格线
            }],

            itemStyle: {
                borderWidth: 3,
                //borderColor: '#ed7d31',
                color: 'rgba(2,2,2,0)',
            },
            textStyle: {
                color: '#fafafc'
            },
            grid: {
                x: 10,
                y: 10,
                x2: 10,
                y2: 10,
                left: 50,
                bottom: 43
            },
            series: [
                {
                    name: '措施数量',
                    type: 'bar',
                    label: {
                        show: true,
                        color: '#4472c4',
                        position: 'top'
                    },
                    data: [23, 20, 15, 13, 10, 7],
                    itemStyle: {
                        borderColor: '#4472c4'
                    },
                },
                {
                    name: '违反次数',
                    type: 'bar',
                    label: {
                        show: true,
                        color: '#FF8C69',
                        position: 'top'
                    },
                    data: [45, 31, 33, 13, 25, 9],
                    itemStyle: {
                        borderColor: '#ed7d31'
                    }
                }
            ]

        });
        chartP1R6.setOption({
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable : true,
            series : [

                {
                    name:'企业占比',
                    type:'pie',
                    radius : [25, '55%'],

                    roseType : 'radius',
                    data:[
                        {value:35, name:'AAA'},
                        {value:36, name:'AA'},
                        {value:38, name:'A'},
                        {value:40, name:'BB'},
                        {value:45, name:'B'},
                        {value:47, name:'C'},
                        {value:55, name:'D'},
                    ]
                }
            ]
        });

$.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata').done(function (data) {//2
    var parsedJson = jQuery.parseJSON(data);
   chartP1L1.setOption({
            xAxis: [{
                axisLabel: {
                    rotate: 40
                },
                axisLine: {
                    show: false
                },
                splitLine: {show: false},//去除网格线
                data: parsedJson.danwei
            }],
           
            series: [{
                name: '信源单位',
                type: 'bar',
                label: {
                    show: true,
                    color: '#FF8C69',
                    position: 'top'
                },
                data: parsedJson.xinyuan
            }]

        });
        
       chartP1L2.setOption({
            series: [{
                data: [{
                    value: parsedJson.buhegevalue,
                    name: '不合格',
                    itemStyle: {
                        normal: {
                            color: '#efa589'
                        }
                    }
                }, {
                    value: parsedJson.hegevalue,
                    name: '合格',
                    itemStyle: {
                        normal: {
                            color: '#d16e2a'
                        }
                    }
                }]
            }]
        });
        
        chartP1L3.setOption({
            series: [{
                data:parsedJson.rukulv ,
                type: 'line',
                itemStyle: {
                    color: '#406dbd'
                }

            }]
        });
    });	//1
    
    
    $.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata_3').done(function (data) {//1
    var parsedJson = jQuery.parseJSON(data);
   chartP1R1.setOption({
            series: [{
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#FF8C69',
                    color: 'rgba(0,0,0,0)',
                },
                label: {
                    show: true,
                    color: '#FF8C69',
                    position: 'top'
                },
                data: parsedJson.value_1,
                type: 'bar'
            }]
        });
        chartP1R2.setOption({
            series: [
                {
                    data: parsedJson.value_2,
                    type: 'bar',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#FF8C69',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                {
                    data: parsedJson.value_3,
                    type: 'bar',
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#8DEEEE',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                {
                    data: parsedJson.value_3,
                    type: 'line',
                    itemStyle: {
                        color: '#8DEEEE',

                    },
                    label: {
                        show: true
                    }
                },
                {
                    data: parsedJson.value_2,
                    type: 'line',
                    label: {
                        show: true
                    },
                    itemStyle: {
                        color: '#FF8C69',

                    }
                },
            ]
        });
    });	//2
    $.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata_4').done(function (data) {//3
    var parsedJson = jQuery.parseJSON(data);
   chartP1R3.setOption({
            series: [{
                itemStyle: {
                    borderWidth: 3,
                    borderColor: '#426eba',
                    color: 'rgba(0,0,0,0)'
                },
                data: parsedJson.value_1,
                type: 'bar',
                barWidth:7
            }]
        });
        chartP1R4.setOption({
            series: [{
                itemStyle:{
                    borderWidth:3,
                    borderColor:'#426eba',
                    color: 'rgba(0,0,0,0)'
                },
                data: parsedJson.value_2,
                type: 'bar',
                barWidth:7
            }]
        });
    });	//3
    
    $.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata_5').done(function (data) {//4
    var parsedJson = jQuery.parseJSON(data);
   chartP1R5.setOption({
           series: [
                {
                    name: '措施数量',
                    type: 'bar',
                    label: {
                        show: true,
                        color: '#4472c4',
                        position: 'top'
                    },
                    data: parsedJson.cuoshishuliang,
                    itemStyle: {
                        borderColor: '#4472c4'
                    },
                },
                {
                    name: '违反次数',
                    type: 'bar',
                    label: {
                        show: true,
                        color: '#FF8C69',
                        position: 'top'
                    },
                    data: parsedJson.weifancishu,
                    itemStyle: {
                        borderColor: '#ed7d31'
                    }
                }
            ]

        });
        chartP1R6.setOption({
           series : [

                {
                    name:'企业占比',
                    type:'pie',
                    radius : [25, '55%'],

                    roseType : 'radius',
                    data:[
                        {value:parsedJson.value_1, name:'AAA'},
                        {value:parsedJson.value_2, name:'AA'},
                        {value:parsedJson.value_3, name:'A'},
                        {value:parsedJson.value_4, name:'BB'},
                        {value:parsedJson.value_5, name:'B'},
                        {value:parsedJson.value_6, name:'C'},
                        {value:parsedJson.value_7, name:'D'},
                    ]
                }
            ]
        });
    });	//4
    
    $(document).ready(function(){
    $.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata_1').done(function (data) {
       var parsedJson = jQuery.parseJSON(data);
    //   $("#mulu").text(parsedJson.xinyongmulu);
      // $("#xinyongshuju").text(parsedJson.xinyongshuju);
       //$("#zengliang").text(parsedJson.zengliang);
       //$("#farenzhuti").text(parsedJson.farenzhuti);
       //$("#fugailv").text(parsedJson.fugailv);
       //$("#value1").text(parsedJson.value1);
       //$("#value2").text(parsedJson.value2);
       
       $("#yijieru_1").text(parsedJson.yijieru_1);
       $("#yijieru_2").text(parsedJson.yijieru_2);
       $("#yijieru_3").text(parsedJson.yijieru_3);
       $("#weijieru_1").text(parsedJson.weijieru_1);
       $("#weijieru_2").text(parsedJson.weijieru_2);
       $("#weijieru_3").text(parsedJson.weijieru_3);
      
	});
});
$(document).ready(function(){
    $.get('http://172.30.107.208:8080/jsonweb/JsonServlet?type=selectdata_2').done(function (data) {
       var parsedJson = jQuery.parseJSON(data);
       $("#xinyongdangan").text(parsedJson.xinyongdangan);
        $("#xinyongbaogao").text(parsedJson.xinyongbaogao);
        $("#zhuce").text(parsedJson.zhuce);
        $("#fangweng").text(parsedJson.fangweng);
        $("#shengqing_1").text("申请："+parsedJson.shengqing_1+"次");
        $("#shengqing_2").text("申请："+parsedJson.shengqing_2);
        $("#banjie_1").text("办结："+parsedJson.banjie_1+"次");
        $("#banjie_2").text( "办结："+parsedJson.banjie_2+"次");
      
	});
});

    $(document).ready(function(){
        $.get('http://172.30.107.208:8080/basicservice/DataAccess/execute?datasourceId=2c9eeb506407c8f301640831974e0000').done(function (data) {
      	   for (var i=0;i<data.rows.length;i++){
            if(data.rows[i]["LABEL"]=="XYML_NUM"){
                   $("#mulu").text(data.rows[i]["VALUE"]);
            }
		   }
       
		   
		
     
         
          
    	});
    });



    })();

</script>
  </body>
</html>
