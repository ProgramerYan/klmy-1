//chart
        var P4L1 = echarts.init(document.querySelector('#P4L1'));
        var P4R1 = echarts.init(document.querySelector('#P4R1'));
		var P4L2 = echarts.init(document.querySelector('#P4L2'));
        var P4C1 = echarts.init(document.querySelector('#P4C1'));
        var P4C2 = echarts.init(document.querySelector('#P4C2'));
        var P4C3 = echarts.init(document.querySelector('#P4C3'));
        var P4C4 = echarts.init(document.querySelector('#P4C4'));
		
		//载入本页面初始数据
		$(document).ready(function(){
		    initChart();
			loadDataByYear('2018');
			load_SingleValues(singleValueDataSourceId,'2018');	
			}
		);
		//初始化所有图表
		function initChart(){
		   //init_QYYJ();
		   initChart_JYZTFX();
		   initChart_QYYJ();
		   init_HYFL();
		   init_ZZZS();
		   init_ZLZS();
		   init_SBZS();
		   init_ZZQZS();
		}
		//按照统计年度载入数据
		function loadDataByYear(year){
           		
			load_JYZTFX_Data(year);
			load_QYYJ_Data(year);
			load_HYFL_DATA(year);
			load_ZLZS_DATA(year);
			load_SBZS_DATA(year);
			load_ZZQZS_DATA(year);
			load_ZZZS(year);
			loadTable_SXQY();
			loadTable_PJXX();
			loadTable_XZXK();
			loadTable_XZCF();
			loadTable_QYYJ();
		}
	
		
		//初始化企业预警
		function init_QYYJ(valueObj)
		{
			var data = [valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL];
			var aTitle = ['企业总数','信用等级下降','发生失信行为'];

			judgeStr(data,7,3,aTitle,'first');
			judgeStr(aTitle, data, 7, 3, 'first');//入口函数
			function judgeStr(aTitle, data, numMaxLength, blockNum, parentClassName) {
				var oFragment = document.createDocumentFragment();
				var oFirst = document.querySelector('.' + parentClassName);
				var aBlock = [];
				var aspan = [];

				var a = document.querySelector('.first .block');

				if(!a){
					createBlock(blockNum, aBlock);
					createTitle(blockNum, aTitle, aBlock);
					crateNumber(blockNum, numMaxLength, data, aBlock, aspan);
					addBlockTofirst(blockNum, oFragment, oFirst, aBlock);
				}else {
					var oSpan = document.querySelectorAll('.block .number span');
					formatData(data,numMaxLength);
					var count = 0;
					for (var h = 0; h < blockNum; h++) {
						for (var j = 0; j < numMaxLength; j++) {
							oSpan[count].innerHTML = data[h][j];
							count++;
						}
					}
				}
			}
				function formatData(data,numMaxLength){
				for (var k = 0; k < data.length; k++) {
					if (data[k].length < numMaxLength) {
						for (var j = 0, len = (numMaxLength - data[k].length); j < len; j++) {
							data[k] = '0' + data[k];
						}
					}
				}
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
				formatData(data,numMaxLength);
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
        
        //载入经营状态分析饼图数据
        function load_JYZTFX_Data(year)
		{
			var chartID="QYXY_JYZTFX";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var DataSet=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
					var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
					var obj=eval(objstr);
					DataSet[i]=obj;
					} 
					//载入图表数据
					P4L1.setOption({
					series: [{
						data: DataSet
					}]
					});
				});
		}
		//初始化经营状态分析饼图
        function initChart_JYZTFX()
		{
			 P4L1.setOption({
				tooltip : {
					trigger: 'item',
					formatter: "{c} ({d}%)"
				},
				legend: {
					textStyle: {
						color:'white'
					},
					orient: 'vertical',
					x: 'right',
					y: 'center',
					data:['开业','吊销','存续']
				},
				series: [{
					name:'',
					type:'pie',
					center:['45%','50%'],
					label: {
						normal: {
							color:'white',
							formatter: '{c}家\n  {b}  ',
						}
					},
					itemStyle: {
						normal: {
							borderWidth: 3,
							borderColor: '#ffffff',
						}
					},
					//data:[
					//	{value:55, name:'开业'},
					//	{value:23, name:'吊销'},
					//	{value:11, name:'存续'},
					//]
				}
				]
			});
		}
        
		//载入企业预警饼图数据
        function load_QYYJ_Data(year)
		{
			var chartID="QYXY_QYYJ";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var DataSet=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
					var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
					var obj=eval(objstr);
					DataSet[i]=obj;
					} 
					//载入图表数据
					P4R1.setOption({
					series: [{
						data: DataSet
					}]
					});
				});
		}
		//初始化企业预警饼状图
		function initChart_QYYJ()
		{
			P4R1.setOption({
				tooltip : {
					trigger: 'item',
					formatter: "{b} : {c} ({d}%)"
				},
				legend: {
					textStyle:{
						color:'white'
					},
					orient: 'vertical',
					x: 'right',
					y: 'center',
					data:['失信等级1','失信等级2','失信等级3','失信等级4','失信等级5','失信等级6']
				},
				calculable : true,
				series : [
					{
						center:['37%','50%'],
						radius:['0%','57%'],
						type:'pie',
						roseType : 'radius',
						label: {
							normal: {
								color:'white',
								formatter: '{d}%\n   {c}   ',
								rich: {
									hr: {
										borderColor: '#aaa',
										width: '100%',
										borderWidth: 1,
										height: 0.1
									},
								}
							}
						},
						//data:[
						//	{value:35, name:'失信等级1'},
						//	{value:36, name:'失信等级2'},
						//	{value:38, name:'失信等级3'},
						//	{value:40, name:'失信等级4'},
						//	{value:45, name:'失信等级5'},
						//	{value:47, name:'失信等级6'},
						//]
					}
				],
                color: ['rgb(251,114,147)','rgb(255,159,127)','rgb(255,219,92)','rgb(159,230,184)','rgb(103,224,227)','rgb(50,197,233)']
			});
		}
        //加载行业分类柱状图数据
		function load_HYFL_DATA(year)
		{
			var chartID="QYXY_HYFL";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var Labels=new Array(); //存放标签的数组
					var Values=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
						var label=data.rows[i]['LABEL'];
						Labels[i]=rotateStr(label);
						Values[i]=data.rows[i]['VALUE1'];
					} 
					//载入图表数据
					P4L2.setOption({
					xAxis: {
						data: Labels
					},
					series: [{
						data: Values
					}]
					});
				});
		}
		//初始化行业分类柱状图
		function init_HYFL()
		{
			P4L2.setOption({
			tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},
				grid:{
				    top:'5%'
				},

				xAxis: {
					type: 'category',
					//data: ['建筑建材', '冶金矿业', '石油化工', '水利水电', '交通运输', '信息产业', '机械机电', '轻工食品'],
					axisLine: {
						lineStyle: {
							color: '#115372',
							width: 1.5,
						}
					},
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff'
						}
					},
				},
				yAxis: {
					axisLine: {
						lineStyle: {
							color: '#115372',
							width: 1,
						}
					},
					axisLabel: {
						formatter: '{value}',
						textStyle: {
							color: '#fff'
						}
					}
				},
				series: [{
					itemStyle: {
						normal: {

							color: function (params) {
								var colorList = ['#00669f', '#539132', '#2137b5', '#238b95', '#4b409f', '#0eb72f', '#0eb72f', '#0eb72f', '#0eb72f'];
								return colorList[params.dataIndex];
							}
						},
					},
					label: {
						show: true
					},
					//data: [375, 100, 412, 389, 96, 87, 254, 88],
					type: 'bar'
				}]
			});
		}
		//加载资质总数折线图数据
		function load_ZZZS(year)
		{
		  var chartID="QYXY_ZZZS";
		$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
			var Labels=new Array(); //存放标签的数组
			var Values=new Array();//存放数据对象的数组
			for (var i=0;i<data.rows.length;i++){
				var label=data.rows[i]['LABEL'];
				Labels[i]=label;
				Values[i]=data.rows[i]['VALUE1'];
			} 
			//载入图表数据
			P4C1.setOption({
			xAxis: {
				data: Labels
			},
			series: [{
				data: Values
			}]
			});
		});
		}
		//初始化资质总数折线图
		function init_ZZZS()
		{
			P4C1.setOption({
				grid: {
					x: 40,
					y: '10%',
					x2: '2%',
					y2: '10%',
					bottom: 30
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},
				label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
				xAxis: {
					axisLabel: {
						color: "#6cc5ce"
					},
					type: 'category',
					//data: ['企业1', '企业2', '企业3', '企业4', '企业5']
				},
				yAxis: {
					axisLabel: {
						color: "#fff"
					},
					type: 'value'
				},
				series: [{
					itemStyle: {
						normal: {
							color: '#fff',
							lineStyle: {
								color: '#8ee15f'
							},
						}
					},
					//data: [233, 200, 198, 156, 147],
					type: 'line'
				}]
			});
		}
		
		//加载专利总数折线图数据
		function load_ZLZS_DATA(year)
		{
			 var chartID="QYXY_ZLZS";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var Labels=new Array(); //存放标签的数组
				var Values=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
					var label=data.rows[i]['LABEL'];
					Labels[i]=label;
					Values[i]=data.rows[i]['VALUE1'];
				} 
				//载入图表数据
				P4C2.setOption({
				xAxis: {
					data: Labels
				},
				series: [{
					data: Values
				}]
				});
			});
		}
		//初始化专利总数折线图
		function init_ZLZS()
		{
			P4C2.setOption({
				grid: {
					x: 40,
					y: '10%',
					x2: '2%',
					y2: '10%',
					bottom: 30
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},
				label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
				xAxis: {
					axisLabel: {
						color: "#6cc5ce"
					},
					type: 'category',
					//data: ['企业1', '企业2', '企业3', '企业4', '企业5']
				},
				yAxis: {
					axisLabel: {
						color: "#fff"
					},
					type: 'value'
				},
				series: [{
					itemStyle: {
						normal: {
							color: '#fff',
							lineStyle: {
								color: '#8ee15f'
							},
						}
					},
					//data: [233, 200, 198, 156, 147],
					type: 'line'
				}]
			});
		}
		//加载商标总数折线图数据
		function load_SBZS_DATA(year)
		{
			var chartID="QYXY_SBZS";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var Labels=new Array(); //存放标签的数组
					var Values=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
						var label=data.rows[i]['LABEL'];
						Labels[i]=label;
						Values[i]=data.rows[i]['VALUE1'];
					} 
					//载入图表数据
					P4C3.setOption({
					xAxis: {
						data: Labels
					},
					series: [{
						data: Values
					}]
					});
				});
		}
		//初始化商标总数折线图
		function init_SBZS()
		{
			P4C3.setOption({
				grid: {
					x: 40,
					y: '10%',
					x2: '2%',
					y2: '10%',
					bottom: 30
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},
				label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
				xAxis: {
					axisLabel: {
						color: "#6cc5ce"
					},
					type: 'category',
					//data: ['企业1', '企业2', '企业3', '企业4', '企业5']
				},
				yAxis: {
					axisLabel: {
						color: "#fff"
					},
					type: 'value'
				},
				series: [{
					itemStyle: {
						normal: {
							color: '#fff',
							lineStyle: {
								color: '#8ee15f'
							},
						}
					},
					//data: [233, 200, 198, 156, 147],
					type: 'line'
				}]
			});
		}
       //加载著作权总数折线图数据
        function load_ZZQZS_DATA(year)
        {
			var chartID="QYXY_ZZQZS";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var Labels=new Array(); //存放标签的数组
					var Values=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
						var label=data.rows[i]['LABEL'];
						Labels[i]=label;
						Values[i]=data.rows[i]['VALUE1'];
					} 
					//载入图表数据
					P4C4.setOption({
					xAxis: {
						data: Labels
					},
					series: [{
						data: Values
					}]
					});
				});
        }		
	   //初始化著作权总数
		function init_ZZQZS()
		{
			P4C4.setOption({
				grid: {
					x: 40,
					y: '10%',
					x2: '2%',
					y2: '10%',
					bottom: 30
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},
				label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
				xAxis: {
					axisLabel: {
						color: "#6cc5ce"
					},
					type: 'category',
					//data: ['企业1', '企业2', '企业3', '企业4', '企业5']
				},
				yAxis: {
					axisLabel: {
						color: "#fff"
					},
					type: 'value'
				},
				series: [{
					itemStyle: {
						normal: {
							color: '#fff',
							lineStyle: {
								color: '#8ee15f'
							},
						}
					},
					//data: [233, 200, 198, 156, 147],
					type: 'line'
				}]
			});
		}
        
        
        
		
		//加载双失信企业表数据
		function loadTable_SXQY()
		{
			var tableDataSourceID=table_SXQY_DataSourceId;
			var title=['企业名称','失信行为','失信次数'];
			var titleid=['NAME','ACTION','DEGREE'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#SXQY_TABLE").append("<thead><tr class=\"title\">" + th + "</tr></thead>");
			$("#SXQY_TABLE").append("<tbody id='tbd'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd").append('<tr>'+tr+'</tr>');			
				} 
			}); 
		}
		//加载评级信息表数据
		function loadTable_PJXX()
		{
			var tableDataSourceID=table_PJXX_DataSourceId;
			var title=['企业名称','失信次数'];
			var titleid=['NAME','DEGREE'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#PJXX_TABLE").append("<thead><tr class=\"title\">" + th + "</tr></thead>");
			$("#PJXX_TABLE").append("<tbody id='tbd_1'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd_1").append('<tr>'+tr+'</tr>');			
				} 
			}); 
		}
		//加载行政许可表数据
		function loadTable_XZXK()
		{
			var tableDataSourceID=table_XZXK_DataSourceId;
			var title=['企业名称','许可日期'];
			var titleid=['NAME','XKRQ'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#XZXK_TABLE").append("<thead><tr class=\"title\">" + th + "</tr></thead>");
			$("#XZXK_TABLE").append("<tbody id='tbd_sgs'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd_sgs").append('<tr>'+tr+'</tr>');			
				} 
			}); 
		}
		//加载行政处罚表数据
		function loadTable_XZCF()
		{
			var tableDataSourceID=table_XZCF_DataSourceId;
			var title=['企业名称','许可日期'];
			var titleid=['NAME','XKRQ'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#XZCF_TABLE").append("<thead><tr class=\"title\">" + th + "</tr></thead>");
			$("#XZCF_TABLE").append("<tbody id='tbd_sgs_xzcf'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd_sgs_xzcf").append('<tr>'+tr+'</tr>');			
				} 
			}); 
		}
        
		//加载企业预警表数据
		function loadTable_QYYJ()
		{
			var tableDataSourceID=table_QYYJ_DataSourceId;
			var title=['企业名称','失信次数'];
			var titleid=['NAME','DEGREE'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#QYYJ_TABLE").append("<thead><tr class=\"title\">" + th + "</tr></thead>");
			$("#QYYJ_TABLE").append("<tbody id='tbd_qyyj'></tbody>");
			$.get(getJsonUrl(tableDataSourceID)).done(function (data) {	
				for (var i=0;i<data.rows.length;i++){
					var tr='';
					for(var j=0;j<title.length;j++){
						var columnID=titleid[j];
						var value=data.rows[i][columnID];
						tr+='<td>'+value+'</td>'
					}
					 $("#tbd_qyyj").append('<tr>'+tr+'</tr>');			
				} 
			}); 
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
				init_QYYJ(valueObj);
			});
		}