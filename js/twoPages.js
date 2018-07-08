var P2R1 = echarts.init(document.getElementById('P2R1'));
	//载入本页面初始数据
		$(document).ready(function(){
		    
			initChart();
			loadDataByYear('2018');
			}
		);
		
		//初始化所有图表
		function initChart(){

		   initHeiDong();
		   initChart_1();

		}
		
		//按照统计年度载入数据
		function loadDataByYear(year){		
			load_SingleValues(singleValueDataSourceId,year);
			loadChart_1(year);
			loadTable_XYSJZL();
		}
		//初始化黑洞动画效果
		function initHeiDong()
		{
				var img = document.getElementById('img');
				var flag = true;
				var t1 = setInterval(function(){
					var imgWidth = img.style.width;
					var imgHeight = img.style.height;
					var tempWidth = imgWidth.substring(0,imgWidth.length-2);
					var tempHeight = imgWidth.substring(0,imgHeight.length-2);
					if((flag && tempWidth < 1500) || parseInt(tempWidth) == 0 ){
						img.style.width = (tempWidth != 0 ? parseInt(tempWidth) : 0) + Math.random()*100 + 'px';
						img.style.height = (tempHeight != 0 ? parseInt(tempHeight) : 0) + Math.random()*100 + 'px';
						flag = true;
					}else{
						img.style.width = parseInt(tempWidth) - Math.random()*10+ 'px';
						img.style.height = parseInt(tempHeight) - Math.random()*10+ 'px';
						flag = false;
					}
					img.style.left = Math.random()*img.style.width - Math.random()*img.style.width/2 + 'px';
					img.style.top = Math.random()*img.style.height - Math.random()*img.style.height/2+ 'px';
				},9);
				var t2 = setTimeout(function () {
					clearInterval(t1);
				},3450)
		}
		//加载曲线图数据
		function loadChart_1(year)
		{
		  var chartID="HYFW_QXT";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var Labels=new Array(); //存放标签的数组
					var Values=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
						var label=data.rows[i]['LABEL'];
						Labels[i]=label;
						Values[i]=data.rows[i]['VALUE1'];
					} 
					//载入图表数据
					P2R1.setOption({
					xAxis: {
						data: Labels
					},
					series: [{
						data: Values
					}]
					});
				});
		}
		//初始化曲线图
		function initChart_1()
		{
		
		P2R1.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#57617B'
					}
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLine: {
					lineStyle: {
						color: '#ffffff'
					}
				},
				//data: ['三月','四月','五月','六月']
			}],
			yAxis: [{
				type: 'value',
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#ffffff'
					}
				},
				axisLabel: {
					formatter: '{value}',
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
						label : {show: true},
						color: 'rgb(219,50,51)'
					}
				},
				//data: [49,58,35,66]
			}, ]

		});
		}
		
		//初始化门户网站系统
		function initChart_MHWZXT(valueObj)
		{
		  var aTitle = ['信息发布量', '个人注册量', '企业注册量', '累计访问量', '档案查询量', '法人异议处理', '个人异议处理'];
			
			//
			var data = [valueObj.PTFW_XXFBL, valueObj.PTFW_GRZCL, valueObj.PTFW_QYZCL, valueObj.PTFW_LJFWL, valueObj.PTFW_DACXL,  valueObj.PTFW_FRYYCL, valueObj.PTFW_GRYYCL];
			judgeStr(aTitle, data, 7, 7, 'left-2');

			function judgeStr(aTitle,data, numMaxLength, blockNum,parentClassName) {
				var oFragment = document.createDocumentFragment();
				var oFirst = document.querySelector('.' + parentClassName);
				var aBlock = [];
				var aspan = [];
				for (var k = 0; k < data.length; k++) {
					if (data[k].length < numMaxLength) {
						for (var j = 0, len = (numMaxLength - data[k].length); j < len; j++) {
							data[k] = '0' + data[k];
						}
					}
				}
				createBlock(blockNum, aBlock);
				createTitle(blockNum, aTitle, aBlock);
				crateNumber(blockNum, numMaxLength, data, aBlock, aspan);
				addBlockTofirst(blockNum, oFragment, oFirst, aBlock);
			}

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

			function crateNumber(blockNum, numMaxLength, data, aBlock, aspan) {
				for (var h = 0; h < blockNum; h++) {
					var oNumber = document.createElement('p');
					for (var j = 0; j < numMaxLength; j++) {
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
    
	   
	    
		//载入本页面单值数据
		function load_SingleValues(datasourceId,year){		
			$.get(getJsonUrl(datasourceId,year)).done(function (data) {	
						
				var valueObj={};		
				for (var i=0;i<data.rows.length;i++){								
					var id=data.rows[i]["LABELNAME"];	
					var	value=	data.rows[i]["VALUE"];			
					$("#"+id).text(value);//将页面中指定ID控件的值，设置为JSON中指定LabelName的value值，要求json的LabelName与ID相同
					valueObj[id]=value.toString();
				}  
				initChart_MHWZXT(valueObj);
			});
		}
		//加载信用数据质量表数据
		function loadTable_XYSJZL()
		{
			var tableDataSourceID=table_XYSJZL_DataSourceId;
			var title=['接入单位','累计报送量(条)','月新增量(条)','更新频率','质量问题数(个)','共享方式','数据类型','预警提示'];
			var titleid=['NAME','LJBSL','YXZL','GXPL','ZLWTS','GXFS','SJLX','YJTS'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#XYSJZL_TABLE").append("<thead><tr class=\"text\">" + th + "</tr></thead>");
			$("#XYSJZL_TABLE").append("<tbody id='tbd_xysjzl'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd_xysjzl").append('<tr class=\"text1\">'+tr+'</tr>');			
				} 
			}); 
		}