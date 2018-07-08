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

        /*�������ݹ鼯*/
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





        /*��Դ��λ����*/
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

        /*������������*/
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
            content: '��������';
        }

        .left .block-div #leftChart3:after {
            content: '�����';
        }

        .left .block-div #leftChart2:after,
        .left .block-div #leftChart3:after {
            font-size: 12px;
            color: #00abdd;
            position: relative;
            top: 0;
        }

        /*���õ�ͼ*/
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

        /*���÷���*/
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
        <span class="active topMenu">����ſ�</span>
        <span class="topMenu">ƽ̨����</span>
        <span class="topMenu">��ҵ����</span>
        <span class="topMenu" id="topTitle">�����������ô�����ƽ̨</span>
        <span class="topMenu">��ҵ����</span>
        <span class="topMenu">��������</span>
        <span class="topMenu">��ԴĿ¼</span>
    </nav>

    <div class="content">

        <div class="left">

            <div class="select">
                <span id="yearTex">ͳ�����</span>
                <select class="year">
                    <option>2018���</option>
                    <option>2017���</option>
                </select>
            </div>

            <div class="block-div">
                <span class="blue">�������ݹ鼯</span>

                <span class="creditCatalog">
                    <img src="images/catelog.png" alt="" class="icon">
                    <p class="desc widthSeven">����Ŀ¼ <span id="mulu">30000</span>��</p>
                </span>

                <span class="creditCatalog">
                    <img src="images/dataNum.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven">��������<span id="xinyongshuju">890089</span>��</span>
                        <span>
                            <img class="arrawTop" src="images/arrawTop.png" alt="" style="height: 30px;">
                            <span class="widthSeven">��������<span class="monthPlus" id="zengliang">11</span>��</span>
                        </span>

                    </span>
                </span>

                <div class="creditCatalog">
                    <img src="images/lawPeople.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven">��������<span class="lawPersonNum" id="farenzhuti">3000</span>��</span>
                        <span class="widthSeven">������<span class="lawPersonNum" id="fugailv">95</span></span>
                    </span>
                </div>

                <div class="creditCatalog">
                    <img src="images/catelog.png" alt="" class="icon">
                    <span class="desc">
                        <span class="widthSeven naturalNum">��Ȼ������<span class="" id="value1">46</span></span>
                        <span class="widthSeven">������<span id="value2">4695</span></span>
                    </span>
                </div>

            </div>

            <div class="block-div">
                <span class="blue">��Դ��λ����</span>
                <div class="blue-div citydiv">
                    <span class="cityGrade">��<br>��</span>
                    <p class="insert">�ѽ���<span class="insertedNum" id="yijieru_1">53</span>��</p>
                    <p class="insert">δ����<span class="insertingNum" id="weijieru_1">3</span>��</p>
                </div>

                <div class="blue-div citydiv">
                    <span class="cityGrade">��<br>��</span>
                    <p class="insert">�ѽ���<span class="insertedNum" id="yijieru_2">53</span>��</p>
                    <p class="insert">δ����<span class="insertingNum" id="weijieru_2">3</span>��</p>
                </div>
                <div class="blue-div citydiv">
                    <span class="cityGrade">��<br>��</span>
                    <p class="insert">�ѽ���<span class="insertedNum" id="yijieru_3">53</span>��</p>
                    <p class="insert">δ����<span class="insertingNum" id="weijieru_3">3</span>��</p>
                </div>
                <div id="leftChart1"></div>
            </div>

            <div class="block-div">
                <span class="blue">������������</span>
                <div id="leftChart2"></div>
                <div id="leftChart3"></div>
            </div>
        </div>

        <div class="center">
            <div class="block-div map-div">
                <span class="blue">���õ�ͼ</span>
                <div class="mapDesc">
                    <p class="blue-div">��ҵ����: <span id="enterpriseNum">3200</span>��</p>
                    <p class="blue-div">�����֯: <span id="societyNum">300</span>��</p>
                    <p class="blue-div">��ҵ��λ: <span id="careerNum">52</span>��</p>
                    <p class="blue-div">���幤�̻�: <span id="individualNum">5</span>��</p>
                    <p class="blue-div">��Ȼ��: <span class="naturalNum">46</span>����</p>
                </div>
                <img class="mapImg" src="images/map.png"/>
                <div class="mapIndicate">
                    <p>����������</p>
                    <p class="yellow">��ҵ����: <span id="enterpriseNumNow">1200</span>��</p>
                    <p class="yellow">�����֯: <span id="societyNumNow">100</span>��</p>
                    <p class="yellow">��ҵ��λ: <span id="careerNumNow">22</span>��</p>
                    <p class="yellow">���幤�̻�: <span id="individualNumNow">3</span>��</p>
                    <p class="yellow">��Ȼ��: <span class="naturalNumNow">13</span>����</p>
                </div>
            </div>

            <div class="block-div server-div">
                <span class="blue">���÷���</span>
                <table>
                    <tr>
                        <td><span>���õ�����ѯ�ۼƣ�</span><span id="xinyongdangan">38000</span><span>��</span></td>
                        <td><span>���ñ����ӡ�ۼƣ�</span><span id="xinyongbaogao">38000</span><span>��</span></td>
                    </tr>
                    <tr>
                        <td><span>ƽ̨ע����ҵ����</span><span id="zhuce">500</span><span>��</span></td>
                        <td><span>�Ż����ʴ����ۼƣ�</span><span id="fangweng">11000</span><span>��</span></td>
                    </tr>
                    <tr>
                        <td id="bottom-div">
                            <span class="blue">���鴦��</span>
                            <div class="people-div">
                                <span>����</span>
                                <span id="shengqing_1">����: 200��</span>
                                <span id="banjie_1">���: 198��</span>
                            </div>
                            <div class="people-div">
                                <span>��Ȼ��</span>
                                <span id="shengqing_2">����: 200��</span>
                                <span id="banjie_2">���: 198��</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="right">
            <div class="block-div">
                <span class="blue">˫��ʾ</span>
                <span class="yellow">�������: <span id="permitNum">500</span>��</span>
                <span class="yellow">��������: <span id="punishNum">300</span>��</span>
                <div id="rightChart1" class="chartType"></div>
                <div id="rightChart2" class="chartType"></div>
            </div>

            <div class="block-div">
                <span class="blue">���Ͻ���</span>
                <span class="yellow">ʧ����ҵ: <span id="discreditEnterpriseNum">500</span>��</span>
                <span class="yellow">ʧ�Ÿ���: <span id="dishonestPersonNum">300</span>��</span>
                <div class="smallChart" id="rightChart3"></div>
                <div class="smallChart" id="rightChart4"></div>
                <div class="bigChart" id="rightChart5"></div>
            </div>

            <div class="block-div">
                <span class="blue">��ҵ��������</span>
                <div id="rightChart46"></div>
                <div class="desc">
                    <p>AAA: <span>50</span>��</p>
                    <p>AA: <span>50</span>��</p>
                    <p>A: <span>50</span>��</p>
                    <p>BB: <span>50</span>��</p>
                    <p>B: <span>50</span>��</p>
                    <p>C: <span>50</span>��</p>
                    <p>D: <span>50</span>��</p>
                </div>
            </div>
        </div>


    </div>

</div>


<script>
    (function () {
        //���ø߶�
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
                splitLine: {show: false},//ȥ��������
                data: ["�й�����", "�г��ල", "��ס��", "������λ"]
            }],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {show: false},//ȥ��������
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
                name: '��Դ��λ',
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
                    name: '���ϸ�',
                    itemStyle: {
                        normal: {
                            color: '#efa589'
                        }
                    }
                }, {
                    value: 86795,
                    name: '�ϸ�',
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
                data: ['�й�����', '�г��ල�����', '���������÷������',
                    '�г���滮�����', '�н�ͨ�����', '�л�����', '�������ͼƻ�����ίԱ��',
                    '�а�ȫ�����ල�����', '�����ߵ�����', '�����ڽ�����ίԱ��',
                    '���˲���Դ����ᱣ�Ͼ�', '�в�����', '��ס���������������', '�й�����Դִ�����֧��',
                    '�е�˰��', '�������', '�е����']
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
                splitLine: {show: false},//ȥ��������
                type: 'category',
                data: ['�й���', '�г���', '���������÷������', '�г���滮�����', '�н�ͨ�����', '�л�����'],
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
                splitLine: {show: false},//ȥ��������
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
                splitLine: {show: false},//ȥ��������
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                    rotate: 90
                },
                data: ['һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��'],
            },
            yAxis: {
                splitLine: {show: false},//ȥ��������
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
                data: ['ʳƷ', 'ҩƷ', '��ױƷ', '����Ʒ'],
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
                data: ['Ƿ��', '��ͨΥ��', '���ۼ�ð', '��֤��Ӫ','��ٹ��'],
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
                //ȥ��������
                splitLine: {
                    show: false
                },
                data: ["�й�����", "�г��ල�����", "������", "�г���������", "�н�ͨ�����", "�л�����"]
            }],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },//ȥ��������
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
                    name: '��ʩ����',
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
                    name: 'Υ������',
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
                    name:'��ҵռ��',
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
                splitLine: {show: false},//ȥ��������
                data: parsedJson.danwei
            }],
           
            series: [{
                name: '��Դ��λ',
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
                    name: '���ϸ�',
                    itemStyle: {
                        normal: {
                            color: '#efa589'
                        }
                    }
                }, {
                    value: parsedJson.hegevalue,
                    name: '�ϸ�',
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
                    name: '��ʩ����',
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
                    name: 'Υ������',
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
                    name:'��ҵռ��',
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
        $("#shengqing_1").text("���룺"+parsedJson.shengqing_1+"��");
        $("#shengqing_2").text("���룺"+parsedJson.shengqing_2);
        $("#banjie_1").text("��᣺"+parsedJson.banjie_1+"��");
        $("#banjie_2").text( "��᣺"+parsedJson.banjie_2+"��");
      
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
