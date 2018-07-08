//初始化图表
	var P1L1 = echarts.init(document.getElementById('P1L1'));//信源单位接入饼图
	var P1L2 = echarts.init(document.getElementById('P1L2'));
	var P1L3 = echarts.init(document.getElementById('P1L3'));
	var P1R1 = echarts.init(document.getElementById('P1R1'));
	var P1R2 = echarts.init(document.getElementById('P1R2'));
	var P1R3 = echarts.init(document.getElementById('P1R3'));
	var P1R4 = echarts.init(document.getElementById('P1R4'));
	var P1C1 = echarts.init(document.getElementById('P1C1'));
	
	//载入本页面初始数据
	$(document).ready(function(){
		loadDataByYear('2018');
		}
	);
	
    //选择统计年度
	function selectYear(){
		var objS = document.getElementById("SelectYear");
		var select_year = objS.options[objS.selectedIndex].value;
		loadDataByYear(select_year);
	}
	
	//按照统计年度载入数据
	function loadDataByYear(year){
		load_SingleValues(singleValueDataSourceId,year);
		load_XYDT_Values(table_AQSC_DataSourceId,year);
		load_XYDW_Values(year);
		load_XYSJZL_Values(year);
		load_SGS_XZXK_Values(year);//行政许可
		load_SGS_XZCF_Values(year);//行政处罚
		load_YYCL_Values(year);
		load_QYXYPJ_Values(year);
		load_XYSJZL_ZLFX_Values(year);
		load_LHCJ_Values(year);//联合惩戒
	}
	

	
	//首页地图动画
        var z2dh = document.querySelectorAll('.z2dh');
        var xdh = document.querySelectorAll('.xdh');
        var kdh = document.querySelectorAll('.kdh');
        var zcontent = document.querySelectorAll('.zcontent');
        adddonghua();
        removeClassName();
        var t1, t2;

        function adddonghua() {

            z2dh[0].onmouseover = function () {
                z2dh[0].classList.add('z2');
                t1 = setTimeout(function () {
                    xdh[0].classList.add('x');
                }, 300);
                t2 = setTimeout(function () {
                    kdh[0].classList.add('k');
                    kdh[0].classList.remove('initk');
                }, 1100);
            }
            z2dh[1].onmouseover = function () {
                z2dh[1].classList.add('z2');
                t1 = setTimeout(function () {
                    xdh[1].classList.add('x');
                }, 300);
                t2 = setTimeout(function () {
                    kdh[1].classList.add('k');
                    kdh[1].classList.remove('initk');
                }, 1100);
            }
            z2dh[2].onmouseover = function () {
                z2dh[2].classList.add('z2');
                t1 = setTimeout(function () {
                    xdh[2].classList.add('x');
                }, 300);
                t2 = setTimeout(function () {
                    kdh[2].classList.add('k');
                    kdh[2].classList.remove('initk');
                }, 1100);
            }
            z2dh[3].onmouseover = function () {
                z2dh[3].classList.add('z2');
                t1 = setTimeout(function () {
                    xdh[3].classList.add('x');
                }, 300);
                t2 = setTimeout(function () {
                    kdh[3].classList.add('k');
                    kdh[3].classList.remove('initk');
                }, 1100);
            }
        }

        function removeClassName() {
            for (var i = 0; i < zcontent.length; i++) {
                zcontent[i].onmouseleave = function () {
                    for (var k = 0; k < zcontent.length; k++) {
                        z2dh[k].classList.remove('z2');
                        xdh[k].classList.remove('x');
                        kdh[k].classList.remove('k');
                        kdh[k].classList.add('initk');
                        clearTimeout(t2)
                    }
                }
            }
        }

	//生成信用地图中克拉玛依市整体数据
	function XYDT_SetData(data){
		var aTitle = ['企业总数','社会组织','事业单位','个体工商户','自然人'];
		
		judgeStr(aTitle, data,  5, 'first');//入口函数

		function judgeStr(aTitle, data,  blockNum, parentClassName) {
            var oFragment = document.createDocumentFragment();
            var oFirst = document.querySelector('.' + parentClassName);
            var aBlock = [];
            var aspan = [];
           
			var a = document.querySelector('.first .block');
			
			if(!a){
				createBlock(blockNum, aBlock);
				createTitle(blockNum, aTitle, aBlock);
				crateNumber(blockNum, data, aBlock, aspan);
				addBlockTofirst(blockNum, oFragment, oFirst, aBlock);
			}else {
				var oSpan = document.querySelectorAll('.block .number span');
				//formatData(data,numMaxLength);
				var count = 0;
				for (var h = 0; h < blockNum; h++) {
					for (var j = 0; j < numMaxLength; j++) {
						var aSpan = document.createElement('span');
						oSpan[count].innerHTML = data[h][j];
						count++;
					}
				}
			}  
        }
		
		// function formatData(data,numMaxLength){
		// 	 for (var k = 0; k < data.length; k++) {
         //        if (data[k].length < numMaxLength) {
         //            for (var j = 0, len = (numMaxLength - data[k].length); j < len; j++) {
         //                data[k] = '0' + data[k];
         //            }
         //        }
         //    }
		// }

        function createTitle(blockNum, aTitle, aBlock) {
		
            for (var i = 0; i < blockNum; i++) {
                var borderDiv = document.createElement('div');
                var describe = document.createElement('span');
                borderDiv.classList.add('border-div');
                describe.classList.add('describe');
                describe.innerHTML = aTitle[i];
                borderDiv.appendChild(describe);
                aBlock[i].appendChild(borderDiv);
            }
        }

        function crateNumber(blockNum, data, aBlock, aspan) {
			//formatData(data,numMaxLength);
            for (var h = 0; h < blockNum; h++) {
                var oNumber = document.createElement('p');
                for (var j = 0; j < data[h].length; j++) {
                    var oSpan = document.createElement('span');

                    oSpan.innerHTML = data[h][j];
                    aspan.push(oSpan);
                    oNumber.classList.add('number');
                    oNumber.appendChild(oSpan);
                }
                aBlock[h].appendChild(oNumber);
            }
        }

        function createBlock(blockNum, aBlock) {
            for (var i = 0; i < blockNum; i++) {
                var block = document.createElement('div');
                block.classList.add('block');
                aBlock.push(block);
            }
        }

        function addBlockTofirst(blockNum, oFragment, oFirst, aBlock) {
            for (var k = 0; k < blockNum; k++) {
                oFragment.appendChild(aBlock[k]);
                oFirst.appendChild(oFragment);
            }
        }		
	}		
			
	//载入数据，生成信用地图
	function load_XYDT_Values(datasourceId,year){
		$.get(getJsonUrl(datasourceId,year)).done(function (data) {		
		var dataSet={};
		for (var i=0;i<data.rows.length;i++){
			var areaid=data.rows[i]["AREA_ID"];											   
			dataSet[areaid]=data.rows[i];				
		} 		
		//信用地图中克拉玛依市整体数据		
		var n=[String(dataSet['klmyshi']['QYZS_NUM']),String(dataSet['klmyshi']['SHZY_NUM']),String(dataSet['klmyshi']['SYDW_NUM']),String(dataSet['klmyshi']['GTGSH_NUM']),String(dataSet['klmyshi']['ZRR_NUM'])];
		XYDT_SetData(n);
		//克拉玛依区信用地图数据
		$("#KLMYQ_QYZS").text(dataSet['klmyqu']['QYZS_NUM']);
		$("#KLMYQ_SHZZ").text(dataSet['klmyqu']['SHZY_NUM']);
		$("#KLMYQ_SYDW").text(dataSet['klmyqu']['SYDW_NUM']);
		$("#KLMYQ_GTGSH").text(dataSet['klmyqu']['GTGSH_NUM']);
		$("#KLMYQ_ZRR").text(dataSet['klmyqu']['ZRR_NUM']);
		//独山子区信用地图数据
		$("#DSZ_QYZS").text(dataSet['dszqu']['QYZS_NUM']);
		$("#DSZ_SHZZ").text(dataSet['dszqu']['SHZY_NUM']);
		$("#DSZ_SYDW").text(dataSet['dszqu']['SYDW_NUM']);
		$("#DSZ_GTGSH").text(dataSet['dszqu']['GTGSH_NUM']);
		$("#DSZ_ZRR").text(dataSet['dszqu']['ZRR_NUM']);
		//白碱滩区信用地图数据
		$("#BJT_QYZS").text(dataSet['bjtqu']['QYZS_NUM']);
		$("#BJT_SHZZ").text(dataSet['bjtqu']['SHZY_NUM']);
		$("#BJT_SYDW").text(dataSet['bjtqu']['SYDW_NUM']);
		$("#BJT_GTGSH").text(dataSet['bjtqu']['GTGSH_NUM']);
		$("#BJT_ZRR").text(dataSet['bjtqu']['ZRR_NUM']);
		//乌尔禾区信用地图数据
		$("#WEH_QYZS").text(dataSet['wehqu']['QYZS_NUM']);
		$("#WEH_SHZZ").text(dataSet['wehqu']['SHZY_NUM']);
		$("#WEH_SYDW").text(dataSet['wehqu']['SYDW_NUM']);
		$("#WEH_GTGSH").text(dataSet['wehqu']['GTGSH_NUM']);
		$("#WEH_ZRR").text(dataSet['wehqu']['ZRR_NUM']);
						
	});
	}
	
	//载入本页面单值数据
	function load_SingleValues(datasourceId,year){		
		$.get(getJsonUrl(datasourceId,year)).done(function (data) {		
			for (var i=0;i<data.rows.length;i++){
				var id=data.rows[i]["LABELNAME"];								
				$("#"+id).text(data.rows[i]["VALUE"]);//将页面中指定ID控件的值，设置为JSON中指定LabelName的value值，要求json的LabelName与ID相同
			}        
		});
	}
	
	//载入数据，生成信源单位接入饼图
	function load_XYDW_Values(year){
        var chartID="ZTGK_XYDW";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var DataSet=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			Labels[i]=data.rows[i]['LABEL'];
			var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			var obj=eval(objstr);
			DataSet[i]=obj;			
		} 
		P1L1.setOption({//信源单位接入饼图
			tooltip: {
				trigger: 'item',

			},
			
			legend: {
				textStyle: {
					fontSize:'9',          // 图例文字大小
					color:'#ffffff'
				},
				itemWidth:10,    //图例图标宽度
				itemHeight:8,   //图例图标高度
				orient: 'vertical',
				x: '0.1',
				top:'73%',
				data:Labels

			},
			color:['#27c37b', '#37adca','#bb3e7b','#f7941d'],
			series: [
				{

					type:'pie',
					radius: ['40%', '65%'],
					center: ['45%', '40%'],
					label: {
						normal: {
							formatter: '{c}条',
							position: 'inner'
						}
					},
					data:DataSet
				}
			]
		});				
	});
	}
	//载入数据，生成信用数据质量折线图
	function load_XYSJZL_Values(year){
		var chartID="ZTGK_XYSJZL";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=rotateStr(label);
			Values[i]=data.rows[i]['VALUE1'];
		} 
		P1L3.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#FFFFFF'
					}
				}
			},

			grid: {
				top:'5%',
				right:'3%',
				left:'10%',
				bottom: '1%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				axisLabel: {        
                    show: true,
                    textStyle: {
                    color: '#fff',
                        fontSize:'12'
                    }
                },

				
				data:Labels
			}],
			yAxis: [{
				type: 'value',
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				axisLabel: {
					formatter: '{value}%',
					margin: 10,
					textStyle: {
						fontSize: 14
					}
				},
				splitLine: {
					lineStyle: {
						color: '#57617B'
					}
				}
			}],
			series: [ {
				type: 'line',
				smooth: true,
				lineStyle: {
					normal: {
						width: 1
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#ff1212'
						}, {
							offset: 0.8,
							color: 'rgba(219, 50, 51, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(219,50,51)'
					}
				},
				data: Values
			}, ]
		});
	});
	}
	//载入数据，生成双公示的行政许可柱状图
	function load_SGS_XZXK_Values(year){
		var chartID="ZTGK_SGS_XZXK";	
		var url=getChartJsonUrl(chartID,year);	
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=rotateStr(label);
			//Labels[i]=label;
			Values[i]=data.rows[i]['VALUE1'];
		} 
		P1R1.setOption({
			grid: {
				top:'15%',
				left:'15%',
				bottom: '50%',
			},

            legend: {
                textStyle:{
                    color:'#ffffff'
                },
                orient: 'horizontal',
                x: 'center',
                y:'0%',

            },
            label: {
                show: true,
                position: 'top',
                color:'#fff',

            },
			tooltip : {
				trigger: 'axis'
			},
			xAxis: [{
				type: 'category',
				data: Labels,
				axisLine: {
					show: true,
					lineStyle: {
						color: "#FFFFFF",
						width: 1,
						type: "solid"
					},

				},
				axisTick: {
					show: false
				},
				axisLabel: {
					interval:0,
                    //rotate:135,
					show: true,
					textStyle: {
						color: "FFFFFF",
						fontSize:10
					}
				},
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} '
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: "#FFFFFF",
						width: 1,
						type: "solid"
					},
				},
				axisTick: {
					show: false
				},
				splitLine: {
					lineStyle: {
						color: "#063374",
					}
				}
			}],
			series: [{						
				type: 'bar',
				data: Values,
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#080090'
						}, {
							offset: 1,
							color: '#00baf3'
						}]),
						opacity: 1,
					}
				}
			}]
		});
	});
	}
	//载入数据，生成双公示的行政触发柱状图
	function load_SGS_XZCF_Values(year){
		var chartID="ZTGK_SGS_XZCF";	
		var url=getChartJsonUrl(chartID,year);
	    $.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values1=new Array();//存放数据对象的数组
		var Values2=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=rotateStr(label);
			//Labels[i]=label;
			Values1[i]=data.rows[i]['VALUE1'];
			Values2[i]=data.rows[i]['VALUE2'];
		} 
		P1R2.setOption({
			grid:{
				top:'15%',
				bottom:'50%',
				left:'18%'
			},
			tooltip : {
				trigger: 'axis'
			},
            legend: {
                textStyle:{
                    color:'#ffffff'
                },
                orient: 'horizontal',
                x: 'center',
                y:'0%',

            },
			color:['#00009d', '#f0954c'],
			xAxis:  {
				axisLabel: {
					textStyle:{
						color:'#FFFFFF',
						fontSize:10
					},
					interval:0,
					//rotate:90
				},
				type: 'category',
				data:Labels
			},
			yAxis: {
				axisLine: {
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				type: 'value'
			},
			series: [
				{
					name: '已处罚',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'inside',

						},

					},
					data: Values1
				},
				{
					name: '未处罚',
					type: 'bar',
					stack: '总量',
					label: {

						normal: {
							show: true,
							position: 'inside',
							textSize:3
						}
					},
					data: Values2
				},

			]
		});
	});
	}
	//载入数据，生成异议处理图柱状图
	function load_YYCL_Values(year){
		var chartID="ZTGK_YYCL";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values1=new Array();//存放数据对象的数组
		var Values2=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=label;
			//Labels[i]=label;
			Values1[i]=data.rows[i]['VALUE1'];
			Values2[i]=data.rows[i]['VALUE2'];
		} 
		
		P1C1.setOption({
			tooltip : {
				trigger: 'axis'
			},
			grid: {
				x:'5',
				y:'5',
				x2:'25',
				y2:'0',
				bottom: '15%',
				containLabel: true
			},
			legend: {
				textStyle:{
					color:'#FFFFFF'
				},
				x: 'center',
				y: '88%',
				data:["申请","办结"],
			},
			xAxis : [{
				axisLine: {
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				type : 'category',
				data : Labels,
			},

			],
			yAxis : [
				{
					axisLine: {
						lineStyle: {
							color: '#FFFFFF'
						}
					},

					type : 'value'
				}
			],
			series : [ {
				label: {
					normal: {
						show: true,
						position: 'top'
					}
				},
				name:'申请',
				type:'bar',
				data:Values1,
				barWidth : 40,
			},
				{
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					name:'办结',
					type:'bar',
					data:Values2,
					barWidth :40,
				}

			]
		});	
	});
	
	}
	//载入数据，生成企业信用评级饼状图
	function load_QYXYPJ_Values(year){
		var chartID="ZTGK_QYXYPJ";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values1=new Array();//存放数据对象的数组
		var Values2=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=label;
			var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			var obj=eval(objstr);
			Values1[i]=obj;
		} 
		
	P1R4.setOption({
	tooltip : {
		trigger: 'item',
		formatter: "{b} : {c} ({d}%)"
	},
	calculable : true,
	legend: {
		textStyle:{
			color:'#FFFFFF'
		},
		orient: 'vertical',
		x: 'right',
		y: 'center',
		data:Labels
	},
	series : [
		{
			type:'pie',
			roseType : 'radius',
			center:['42%','50%'],
			label: {
				normal: {
					formatter: ' {per|  {d}%}{b|{b}} \n      {c}家      ',

					borderWidth: 1,
					borderRadius: 2,

					rich: {

						b: {
							fontSize: 10,
							lineHeight: 10
						},

					}
				}
			},
			data:Values1
		}
	],
    color: ['rgb(251,114,147)','rgb(255,159,127)','rgb(255,219,92)','rgb(159,230,184)','rgb(103,224,227)','rgb(50,197,233)','rgb(55,162,218)']
});
	});
		
	}
	//载入数据，生成信用数据质量质量分析饼状图
	function load_XYSJZL_ZLFX_Values(year){
		var chartID="ZTGK_XYSJZL_ZLFX";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values1=new Array();//存放数据对象的数组
		var numbers=0;
		for (var i=0;i<data.rows.length;i++){
			numbers=numbers+data.rows[i]['VALUE1'];
			var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			var obj=eval(objstr);
			Values1[i]=obj;
		} 
		P1L2.setOption({
			title:{
				text : "总计\n"+numbers+"\n条",
				x: 'center',
				y: 'center',
				textStyle: {
					fontWeight: 'normal',
					color: '#0580f2',
					fontSize: '15'
				}
			},
			tooltip: {
				trigger: 'item',

			},
			legend: {
				textStyle:{
					color:'#ffffff'
				},
				orient: 'vertical',
				x: 'center',
				y:'85%',
				data:['合格','不合格']
			},
			color:['#18ffb0','#16364e'],
			series: [

				{
					name:'访问来源',
					type:'pie',
					radius: ['55%', '75%'],
					label: {
						normal: {
							position: 'inner',
							formatter: '{c}条',
						}
					},
					data:Values1
				}
			]
		});
	});
		
	}
	//载入数据，生成联合惩戒图表柱状图
	function load_LHCJ_Values(year){
		var chartID="ZTGK_LHCJ";	
		var url=getChartJsonUrl(chartID,year);
		$.get(url).done(function (data) {		
		var Labels=new Array(); //存放标签的数组
		var Values1=new Array();//存放数据对象的数组
		var Values2=new Array();//存放数据对象的数组
		for (var i=0;i<data.rows.length;i++){
			var label=data.rows[i]['LABEL'];
			Labels[i]=label;
			//Labels[i]=label;
			Values1[i]=data.rows[i]['VALUE1'];
			Values2[i]=data.rows[i]['VALUE2'];
		} 
			
		P1R3.setOption({


		grid:{
			top:'15%',
			bottom:'33%'
		},

		tooltip : {
				trigger: 'axis'
			},
            legend: {
                textStyle:{
                    color:'#ffffff'
                },
                orient: 'horizontal',
                x: 'center',
                y:'0%',

            },
		color:['#00009d', '#f0954c'],
		xAxis:  {

			axisLabel: {
				textStyle:{
					color:'#FFFFFF',
					fontSize:'10'
				},


				interval:0,

				rotate:45

			},
			type: 'category',
			data: Labels
		},
		yAxis: {
			axisLabel: {
				textStyle: {
					color: '#FFFFFF'
				}
			},

			type: 'value'
		},
		series: [

			{
				name: '已处罚',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				data: Values1
			},
			{
				name: '未处罚',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'inside'
					}
				},
				data: Values2
			},

		]
	});
		});
		
	
			
	}
	  var data = ['11', '12', '13', '14', '15', '11', '12', '13', '14', '15', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14',
            '21', '22', '23', '24', '25', '21', '22', '23', '24', '25', '11', '12', '13', '14'];
        var data2 = ['21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23',
                    '21', '22', '23', '24', '25', '21', '22', '23'];
	
    //创建td
        createTable(14, 10, 'table.permission', data);
        createTable(8, 9, 'table.punish', data2);
        function createTable(tdNum, trNum, parentNodeName, data) {
            var aTd = [];
            var count = 0;
            var parentNode = document.querySelector(parentNodeName + ' tbody');
            for (var j = 0; j < trNum; j++) {
                var tr = document.createElement('tr');
                tr.className = (j % 2 == 0) ? 'double' : 'single';
                for (var k = 0; k < tdNum; k++) {
                    var td = document.createElement('td');

                    tr.appendChild(td);
                    aTd.push(td);
                    aTd[count].innerHTML = data[count];
                    count++;
                }
                parentNode.appendChild(tr);
            }
        }
        //按钮切换
        var permission = document.querySelector('button.permission');
        var punish = document.querySelector('button.punish');
        var perMode = document.querySelector('.mode-permission');
        var punMode = document.querySelector('.mode-punish');
        permission.onclick = function () {
            perMode.style.display = 'block';
            punMode.style.display = 'none';
            this.className = 'active';
            punish.className = '';
        };
        punish.onclick = function () {
            perMode.style.display = 'none';
            punMode.style.display = 'block';
            this.className = 'active';
            permission.className = '';
        };