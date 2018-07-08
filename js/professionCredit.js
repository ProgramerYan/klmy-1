setHeight();
			//init_GCJS();
			
			//init_AQSC_TABLE();
		   var chartP3L1 = echarts.init(document.getElementById('chartP3L1'));
           var chartP3L2 = echarts.init(document.getElementById('chartP3L2'));
           var chartP3L3 = echarts.init(document.getElementById('chartP3L3'));
           var chartP3L4 = echarts.init(document.getElementById('chartP3L4'));
           var chartP3B1 = echarts.init(document.getElementById('chartP3B1'));
           var chartP3B2 = echarts.init(document.getElementById('chartP3B2'));
           var chartP3B3 = echarts.init(document.getElementById('chartP3B3'));
		   init_SCJD();
		   init_QYSC();
		   init_SPQY();
		   init_YPQY();
		   init_QYPJXY();
		   init_GQDF();
		   init_QYNSQK()
		//载入本页面初始数据
		$(document).ready(function(){
			loadDataByYear('2018');
			}
		);
		
		//按照统计年度载入数据
		function loadDataByYear(year){
         load_SingleValues(singleValueDataSourceId,year);		
		 loadChart_SCJD_DATA(year);
		 loadChart_QYSC_DATA(year);
		 loadChart_SPQY_DATA(year);
		 loadChart_YPQY_DATA(year);
		 loadChart_QYPJXY_DATA(year);
		 loadChart_GQDF_DATA(year);
		 loadChart_QYNSQK_DATA(year);
		 loadTable_AQSC();
		}
        
        
        window.onresize = function () {
            setHeight();
        };
		//设置高度和宽度
        function setHeight() {
            var bodyDiv = document.querySelector('body');
            bodyDiv.style.height = document.documentElement.clientHeight+17 + 'px';
            var whdef = 50 / 2560;// 表示750的设计图,使用50PX的默认值
            var wH = window.innerHeight;// 浏览器窗口的高度
            var wW = window.innerWidth;// 浏览器窗口的宽度
            var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
            var oHtml = document.querySelector('html');
            oHtml.style.fontSize = (rem - 0.05) + 'px';
        }

		//初始化工程建设
		function init_GCJS(valueObj)
		{
			var aTitle = ['施工企业','设计企业','监理单位','造价咨询企业','园林绿化企业','检测机构','勘察企业','施工企业'];
			var data = [valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL,valueObj.PTFW_XXFBL];
			judgeStr(data,7,8,aTitle,'first');
			function judgeStr(data,numMaxLength,blockNum,aTitle,parentClassName) {
				var oFragment = document.createDocumentFragment();
				var oFirst = document.querySelector('.' + parentClassName);
				var aBlock = [];
				var aspan = [];
				for(var k = 0; k < data.length; k++) {
					if (data[k].length < numMaxLength){
						for(var j = 0,len = (numMaxLength-data[k].length); j < len; j++) {
							data[k] = '0' + data[k];
						}
					}
				}
				createBlock(blockNum,aBlock);
				createTitle(blockNum,aTitle,aBlock);
				crateNumber(blockNum,numMaxLength,data,aBlock,aspan);
				addBlockTofirst(blockNum,oFragment,oFirst,aBlock);
			}
			function createTitle(blockNum,aTitle,aBlock) {
				for(var i = 0; i < blockNum; i++) {
					var borderDiv = document.createElement('div');
					var describe = document.createElement('span');
					borderDiv.classList.add('border-div');
					describe.classList.add('describe');
					describe.innerHTML = aTitle[i];
					borderDiv.appendChild(describe);
					aBlock[i].appendChild(borderDiv);
				}
			}
			function crateNumber(blockNum,numMaxLength,data,aBlock,aspan) {
				for(var h = 0; h < blockNum; h++) {
					var oNumber = document.createElement('p');
					for(var j = 0; j < numMaxLength; j++) {
						var oSpan = document.createElement('span');

						oSpan.innerHTML = data[h][j];
						aspan.push(oSpan);
						oNumber.classList.add('number');
						oNumber.appendChild(oSpan);
					}
					aBlock[h].appendChild(oNumber);
				}
			}
			function createBlock(blockNum,aBlock) {
				for(var i = 0; i < blockNum; i++) {
					var block = document.createElement('div');
					block.classList.add('block');
					aBlock.push(block);
				}
			}
			function addBlockTofirst(blockNum,oFragment,oFirst,aBlock) {
				for(var k = 0; k < blockNum; k++) {
					oFragment.appendChild(aBlock[k]);
					oFirst.appendChild(oFragment);
				}
			}
		}
      
        
		//---------------------------------------------------//
		
		
		//加载市场监督饼图数据
		function loadChart_SCJD_DATA(year)
		{
		  var chartID="HYXY_SCJD";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var DataSet=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
				var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			    var obj=eval(objstr);
				DataSet[i]=obj;	
				} 
				//载入图表数据
				chartP3L1.setOption({
				series: [{
					data: DataSet
				}]
				});
			});
		}
		//初始化市场监督饼图
        function init_SCJD()
		{
			chartP3L1.setOption({
                legend: {
                    orient: 'vertical',
                    x: '80%',
                    y: 'center',
                    //data:['二级','三级'],
                    textStyle:{
                        fontSize:8,
                        color:'#eaeaea'
                    }
                },
				color:['#84df56', '#f58345'],
				series : [{
					name: '',
					type: 'pie',
					radius: ['45%', '75%'],
					center: ['40%', '50%'],
					//data:[{value:1959, name:'二级',
					//},
					//{value:1239, name:'三级',
					//	}
					//],
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						},
						normal:{
							label:{
								show: true,
								fontSize: 16,
								formatter: "  {d}%",
								position:'inside'

							},

							labelLine :{show:true}
						}
					}
				}
				]
			});
		}
		  
        //加载企业市场柱状图数据
        function loadChart_QYSC_DATA(year)
		{
			var chartID="HYXY_QYSC";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var Labels=new Array(); //存放标签的数组
				var Values=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
					var label=data.rows[i]['LABEL'];
					Labels[i]=rotateStr(label);
					Values[i]=data.rows[i]['VALUE1'];
				} 
				//载入图表数据
				chartP3L2.setOption({
				xAxis: {
					data: Labels
				},
				series: [{
					data: Values
				}]
				});
			});
		}		
        //初始化企业市场柱状图
		function init_QYSC()
		{
			chartP3L2.setOption({
				xAxis: {
					type: 'category',
					//data: ['食品', '药品', '化妆品', '保健品','器械'],
					axisLine:{
						lineStyle:{
							color:'#115372',
							width:1.5,
						}
					} ,
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff'
						}
					},
				},
				tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#FFFFFF'
					}
				}
			},
				grid: {
					top:'10%',
					left: '3%',
					right: '4%',
					bottom: '5%',
					containLabel: true
				},
				yAxis: {
					axisLine:{
						lineStyle:{
							color:'#115372',
							width:1.5,
						}
					} ,
					axisLabel : {
						formatter: '{value}',
						textStyle: {
							color: '#fff'
						}
					}
				},
				series: [{
					itemStyle:{
						normal:{

							color: function (params){
								var colorList = ['#ff2c00','#ff3e00','#ffea00','#a3f20c','#0eb72f'];
								return colorList[params.dataIndex];
							}
						},
					},
					label:{
						show:true
					},
					//data: [900, 800, 900, 700,350],
					type: 'bar'
				}]
			});
		}
        
		//加载食品企业饼图数据
		function loadChart_SPQY_DATA(year)
		{
			var chartID="HYXY_SPQY";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {
                    var Labels=new Array(); //存放标签的数组				
					var DataSet=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
					var label=data.rows[i]['LABEL'];
					Labels[i]=rotateStr(label);
					var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
					var obj=eval(objstr);
					DataSet[i]=obj;	
					} 
					//载入图表数据
					chartP3L3.setOption({
					legend: {
					data:Labels
				},
					series: [{
						data: DataSet
					}]
					});
				});
		}
		//初始化食品饼图企业
		function init_SPQY()
		{
			chartP3L3.setOption({
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					//data:['优','良','中','差'],
					textStyle:{
						fontSize:8,
						color:'#eaeaea'
					}
				},
				series: [{
					name:'',
					type:'pie',
					center: ['41%', '50%'],
					label: {
						normal: {
							formatter: '{c}家\n',
						}
					},
					itemStyle: {
						normal: {
							borderWidth: 3,
							borderColor: '#ffffff',
						}
					},
					//data:[
					//	{value:55, name:'优'},
					//	{value:23, name:'良'},
					//	{value:11, name:'中'},
					//	{value:11, name:'差'}
					//]
				}
				]
			});
		}
        
		//加载药品企业环状图数据
		function loadChart_YPQY_DATA(year)
		{
			var chartID="HYXY_YPQY";
					$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
						var DataSet=new Array();//存放数据对象的数组
						for (var i=0;i<data.rows.length;i++){
						var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
						var obj=eval(objstr);
						DataSet[i]=obj;	
						} 
						//载入图表数据
						chartP3L4.setOption({
						series: [{
						data: DataSet
					}]
						});
					});
		}
		//初始化药品企业环状图
		function init_YPQY()
		{
			chartP3L4.setOption({
				legend: {
					orient: 'vertical',
					x: 'right',
					y: 'center',
					textStyle:{
						fontSize:8,
						color:'#eaeaea'
					}
				},
				series: [{

					color:['#ffff00','rgb(97,160,168)'],
					radius: ['55%', '75%'],
					center: ['43%', '50%'],
					type:'pie',
					label: {
						normal: {
							formatter: '{c}家',
							color:'#fff',
						}
					},
					itemStyle: {
						normal: {
							borderWidth: 3,
							borderColor: '#ffffff',
						}
					},
					//data:[
					//	{value:55, name:'守信'},
					//	{value:23, name:'失信'}
					//]
				}
				]
			});
		}
        
		//加载各类企业平均信用得分统计柱状图数据
		function loadChart_QYPJXY_DATA(year)
		{
		    var chartID="HYXY_QYPJXY";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
			var Labels=new Array(); //存放标签的数组
			var Values1=new Array();//存放数据对象的数组
			var Values2=new Array();//存放数据对象的数组
			var Values3=new Array();//存放数据对象的数组
			var Values4=new Array();//存放数据对象的数组
			for (var i=0;i<data.rows.length;i++){
				var label=data.rows[i]['LABEL'];
				Labels[i]=label;
				//Labels[i]=label;
				Values1[i]=data.rows[i]['VALUE1'];
				Values2[i]=data.rows[i]['VALUE2'];
				Values3[i]=data.rows[i]['VALUE3'];
				Values4[i]=data.rows[i]['VALUE4'];
			}
			chartP3B1.setOption({
		
			xAxis: {
					type: 'category',
					data: Labels,
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize:8,

						},
						rotate:40

					},
				},
			series: [
					{
						name:'克拉玛依',
						data:Values1 ,
						type: 'bar',
						itemStyle:{
							color:'#fb7290'
						}
					},
					{
						name:'独山子',
						data:Values2,
						type: 'bar',
						itemStyle:{
							color:'#ff9f7f'
						}
					},
					{
						name:'白碱滩',
						data:Values3,
						type: 'bar',
						itemStyle:{
							color:'#ffdb5c'
						}
					},
					{
						name:'乌尔禾',
						data:Values4,
						type: 'bar',
						itemStyle:{
							color:'#9fe6b8'
						}
					},

				]
			});
			
		 });
		}
		//初始化各类企业平均信用得分统计柱状图
		function init_QYPJXY()
		{
			chartP3B1.setOption({
				legend: {
					orient: 'horizontal',
					data:['克拉玛依','独山子','白碱滩','乌尔禾'],
					icon: 'circle',
					textStyle:{
						color:'#eaeaea',
					},
					itemGap: 1,
					bottom:10,
					itemHeight:10,
					itemWidth:10


				},

				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				xAxis: {
					type: 'category',
					//data: ['施工企业', '施工企业', '施工企业','施工企业','施工企业', '施工企业'],
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize:8,

						},
						rotate:40

					},
				},

				grid: {
					top:'5%',
					left: '3%',
					right: '4%',
					bottom: '15%',
					y:0,
					y2:0,
					x2:0,
					x:0,
					containLabel: true
				},
				yAxis: {
					type: 'value',

					axisLabel : {
						formatter: '{value}',
						textStyle: {
							color: '#fff'
						}
					}
				},
				series: [
					{
						name:'克拉玛依',
						//data: [120, 200, 150, 80,50,45],
						type: 'bar',
						itemStyle:{
							color:'#fb7290'
						}
					},
					{
						name:'独山子',
						//data: [115, 250, 110, 180,50,75],
						type: 'bar',
						itemStyle:{
							color:'#ff9f7f'
						}
					},
					{
						name:'白碱滩',
						//data: [170, 200, 169, 110,75,252],
						type: 'bar',
						itemStyle:{
							color:'#ffdb5c'
						}
					},
					{
						name:'乌尔禾',
						//data: [165, 175, 150, 90,100,45],
						type: 'bar',
						itemStyle:{
							color:'#9fe6b8'
						}
					},

				]
			});
		}
        
		//加载各区现场打分情况统计柱状图数据
		function loadChart_GQDF_DATA(year)
		{
			var chartID="HYXY_GQDF";
				$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var Labels=new Array(); //存放标签的数组
				var Values1=new Array();//存放数据对象的数组
				var Values2=new Array();//存放数据对象的数组
				var Values3=new Array();//存放数据对象的数组
				var Values4=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
					var label=data.rows[i]['LABEL'];
					Labels[i]=label;
					//Labels[i]=label;
					Values1[i]=data.rows[i]['VALUE1'];
					Values2[i]=data.rows[i]['VALUE2'];
					Values3[i]=data.rows[i]['VALUE3'];
					Values4[i]=data.rows[i]['VALUE4'];
				}
				chartP3B2.setOption({
				
				series: [
						{
							name:'克拉玛依',
							data:Values1 ,
							type: 'bar',
							itemStyle:{
								color:'#fb7290'
							}
						},
						{
							name:'独山子',
							data:Values2,
							type: 'bar',
							itemStyle:{
								color:'#ff9f7f'
							}
						},
						{
							name:'白碱滩',
							data:Values3,
							type: 'bar',
							itemStyle:{
								color:'#ffdb5c'
							}
						},
						{
							name:'乌尔禾',
							data:Values4,
							type: 'bar',
							itemStyle:{
								color:'#9fe6b8'
							}
						},

					]
				});
				
			 });
		}
		//初始化各区现场打分情况统计柱状图
		function init_GQDF()
		{
			chartP3B2.setOption({
				legend: {
					orient: 'horizontal',
					data:['克拉玛依','独山子','白碱滩','乌尔禾'],
					icon: 'circle',
					textStyle:{
						color:'#eaeaea',
					},
					itemGap: 1,
					bottom:10,
					itemHeight:10,
					itemWidth:10


				},
				grid: {
					top:'5%',
					left: '3%',
					right: '4%',
					bottom: '10%',
					containLabel: true
				},
				


				xAxis: {
					type: 'category',
					data: ['行为施工信用', '行监理信企业', '质施量工信项','质监量理信项','施施工工信项', '施监工理信项'],
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize:6,
						},
						rotate:45
						

					},
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					},
					
				},


				yAxis: {
					type: 'value',

					axisLabel : {
						formatter: '{value}',
						textStyle: {
							color: '#fff'
						}
					}
				},
				series: [
					{
						name:'克拉玛依',
						//data: [120, 200, 150, 80,50,45],
						type: 'bar',
						itemStyle:{
							color:'#fb7290'
						}
					},
					{
						name:'独山子',
						//data: [115, 250, 110, 180,50,75],
						type: 'bar',
						itemStyle:{
							color:'#ff9f7f'
						}
					},
					{
						name:'白碱滩',
						//data: [170, 200, 169, 110,75,252],
						type: 'bar',
						itemStyle:{
							color:'#ffdb5c'
						}
					},
					{
						name:'乌尔禾',
						//data: [165, 175, 150, 90,100,45],
						type: 'bar',
						itemStyle:{
							color:'#9fe6b8'
						}
					},

				]
			});
		}
        
		//加载企业纳税情况统计柱状图数据
		function loadChart_QYNSQK_DATA(year)
		{
			var chartID="HYXY_QYNSQK";
					$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
					var Labels=new Array(); //存放标签的数组
					var Values1=new Array();//存放数据对象的数组
					var Values2=new Array();//存放数据对象的数组
					var Values3=new Array();//存放数据对象的数组
					var Values4=new Array();//存放数据对象的数组
					for (var i=0;i<data.rows.length;i++){
						var label=data.rows[i]['LABEL'];
						Labels[i]=label;
						//Labels[i]=label;
						Values1[i]=data.rows[i]['VALUE1'];
						Values2[i]=data.rows[i]['VALUE2'];
						Values3[i]=data.rows[i]['VALUE3'];
						Values4[i]=data.rows[i]['VALUE4'];
					}
					chartP3B3.setOption({
					series: [
							{
								name:'克拉玛依',
								data:Values1 ,
								type: 'bar',
								itemStyle:{
									color:'#fb7290'
								}
							},
							{
								name:'独山子',
								data:Values2,
								type: 'bar',
								itemStyle:{
									color:'#ff9f7f'
								}
							},
							{
								name:'白碱滩',
								data:Values3,
								type: 'bar',
								itemStyle:{
									color:'#ffdb5c'
								}
							},
							{
								name:'乌尔禾',
								data:Values4,
								type: 'bar',
								itemStyle:{
									color:'#9fe6b8'
								}
							},

						]
					});
					
				 });
		}
		//初始化企业纳税情况统计柱状图
		function init_QYNSQK()
		{
			chartP3B3.setOption({
				legend: {
					orient: 'horizontal',
					data:['克拉玛依','独山子','白碱滩','乌尔禾'],
					icon: 'circle',
					textStyle:{
						color:'#eaeaea',
					},
					itemGap: 1,
					bottom:10,
					itemHeight:10,
					itemWidth:10
				},
				tooltip : {
					trigger: 'axis',
					axisPointer : {
						type : 'shadow'
					}
				},
				grid: {
					top:'5%',
					left: '3%',
					right: '4%',
					bottom: '15%',
					containLabel: true
				},


				xAxis: {
					type: 'category',
					data: ['施工企业', '监理企业'],
					axisLabel: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize:8,
						},
                        	rotate:45
					},
				},


				yAxis: {
					type: 'value',

					axisLabel : {
						formatter: '{value}',
						textStyle: {
							color: '#fff'
						}
					}
				},
				series: [
					{
						name:'克拉玛依',
						//data: [120, 200],
						type: 'bar',
						itemStyle:{
							color:'#fb7290'
						}
					},
					{
						name:'独山子',
						//data: [115, 250],
						type: 'bar',
						itemStyle:{
							color:'#ff9f7f'
						}
					},
					{
						name:'白碱滩',
						//data: [170, 200],
						type: 'bar',
						itemStyle:{
							color:'#ffdb5c'
						}
					},
					{
						name:'乌尔禾',
						//data: [165, 175],
						type: 'bar',
						itemStyle:{
							color:'#9fe6b8'
						}
					},

				]
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
                init_GCJS(valueObj);				
				
			});
		}
        
		//加载安全生产表数据
		function loadTable_AQSC()
		{
			var tableDataSourceID=table_AQSC_DataSourceId;
			var title=['','一级','二级','三级'];
			var titleid=['NAME','GRADE1','GRADE2','GRADE3'];
			var th;
			$.each(title, function (index, value){
				th+="<td>" +value+ "</td>";
			 });
			$("#AQSC_TABLE").append("<thead><tr>" + th + "</tr></thead>");
			$("#AQSC_TABLE").append("<tbody id='tbd'></tbody>");
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