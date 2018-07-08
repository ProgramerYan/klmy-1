var chartP5L1 = echarts.init(document.getElementById('chartP5L1'));
    var chartP5B1 = echarts.init(document.getElementById('chartP5B1'));
    var chartP5B2 = echarts.init(document.getElementById('chartP5B2'));
    var chartP5B3 = echarts.init(document.getElementById('chartP5B3'));

	//载入本页面初始数据
	$(document).ready(function(){
		initChart();
		loadDataByYear('2018');
		}
	);
	
	//初始化所有图表
	function initChart(){
	   initChart_ZDRQLXTJ();
	   initChart_SXRK();
	   initChart_SXRK_BL();
	   initChart_SXRK_BR();
	}
	
	//按照统计年度载入数据
	function loadDataByYear(year){		
		load_ZDRQLXTJ_Data(year);
		load_SXRK_Data(year);
		load_SXRK_BL_Data(year);
		load_SXRK_BR_Data(year);
	}
	
	//创建重点人群类型统计图表
	function initChart_ZDRQLXTJ(){
		chartP5L1.setOption({
		xAxis: {
			axisTick: {show: false},
			axisLine:{
				lineStyle:{
					color:'#FFFFFF',
					width:1,
				}	
			} ,
			type: 'category',
			//data: Labels
		},
		label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
		yAxis: {
			axisLine: {
				lineStyle:{
					show: false,
					color:'#FFFFFF',
				},
			},
			axisTick: {show: false},
			type: 'value'
		},
		series: [{
			itemStyle : {
				normal : {
					lineStyle:{
						color:'#1b5b72'
					}
				}
			},
			//data: Values,
			type: 'line'
		}]
		});
	}

	//
    $(document).ready(function () {
        var tableDataSourceID="2c9eeb50641df0b1016449cfdbd90009";
		var title=['姓名','资格证号','资格证书状态'];
		var titleid=['NAME','ZGZH','ZGZSZT'];
		var th;
	    $.each(title, function (index, value){
            th+="<th>" +value+ "</th>";
		 });
        $("#myTb").append("<thead><tr>" + th + "</tr></thead>");
        $("#myTb").append("<tbody id='tbd'></tbody>");
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
         
    });
	
	//载入数据，生成重点人群类型类型统计图
    function load_ZDRQLXTJ_Data(year){
	    var chartID="GRXY_ZDRQLXTJ";
		$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
			var Labels=new Array(); //存放标签的数组
			var Values=new Array();//存放数据对象的数组
			for (var i=0;i<data.rows.length;i++){
				var label=data.rows[i]['LABEL'];
				Labels[i]=rotateStr(label);
				Values[i]=data.rows[i]['VALUE1'];
			} 
			//载入图表数据
			chartP5L1.setOption({
			xAxis: {
				data: Labels
			},
			series: [{
				data: Values
			}]
			});
		});
	}
	
		//载入数据，生成失信人口折线图
    function load_SXRK_Data(year){
	    var chartID="GRXY_SXRK";
		$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
			var Labels=new Array(); //存放标签的数组
			var Values=new Array();//存放数据对象的数组
			for (var i=0;i<data.rows.length;i++){
				var label=data.rows[i]['LABEL'];
				Labels[i]=rotateStr(label);
				Values[i]=data.rows[i]['VALUE1'];
			} 
			//载入图表数据
			chartP5B1.setOption({
			xAxis: {
				data: Labels
				
			},
			series: [{
				data: Values
			}]
			});
		});
	}
	
	
    //初始化失信人口图表
	function initChart_SXRK(){
		chartP5B1.setOption({
			xAxis: {
				axisTick: {show: false},
				axisLine:{
					lineStyle:{
						color:'#FFFFFF',
						width:1,
					}
				} ,
				type: 'category',
				//data: ['交通违章','欠费','法院裁判','其他']
			},
			label: {
                    show: true,
                    position: 'top',
                    color:'#fff',

                },
			yAxis: {
				axisLine: {
					show: false,
					lineStyle:{
						color:'#FFFFFF'
						}
						  },
				axisTick: {show: false},
				type: 'value'
			},
			series: [{
				itemStyle : {
					normal : {
						lineStyle:{
							color:'#FFFFFF'
						}
					}
				},
				//data: [19,29,59,100],
				type: 'line'
			}]
		});
	}
	//BL:左边饼图
	function load_SXRK_BL_Data(year)
	{
		 var chartID="GRXY_SXRK_BL";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var DataSet=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
				var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			    var obj=eval(objstr);
				DataSet[i]=obj;	
				} 
				//载入图表数据
				chartP5B2.setOption({
				series: [{
					data: DataSet
				}]
				});
			});
	}
	//载入失信人口左1饼图
	function initChart_SXRK_BL()
	{
		  chartP5B2.setOption({
              legend: {
                  orient: 'vertical',
                  x: 'right',
                  y: 'center',
                  textStyle:{
                      fontSize:8,
                      color:'#eaeaea'
                  }
              },
			color:['#84df56', '#f58345'],
			series : [{
				name: '惩戒情况',
				type: 'pie',
				radius: ['35%', '70%'],
				center: ['45%', '50%'],
				//data:[{value:1959, name:'已惩戒'
				//},
				//	{value:1239, name:'未惩戒'
				//	},
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
							formatter: '{d}%',

						},

						labelLine :{show:true}
					}
				}
			}
			]
		});
	}
	//BR:右边饼图
	function load_SXRK_BR_Data(year)
	{
		 var chartID="GRXY_SXRK_BR";
			$.get(getChartJsonUrl(chartID,year)).done(function (data) {		
				var DataSet=new Array();//存放数据对象的数组
				for (var i=0;i<data.rows.length;i++){
				var objstr="({name:'"+data.rows[i]['LABEL']+"',value:"+data.rows[i]['VALUE1']+"})";
			    var obj=eval(objstr);
				DataSet[i]=obj;	
				} 
				//载入图表数据
				chartP5B3.setOption({
				series: [{
					data: DataSet
				}]
				});
			});
	}
	
	//载入失信人口右1饼图
	function initChart_SXRK_BR()
	{
		 chartP5B3.setOption({
             legend: {
                 orient: 'vertical',
                 x: 'right',
                 y: 'center',
                 textStyle:{
                     fontSize:8,
                     color:'#eaeaea'
                 }
             },
			calculable : true,
			label:{
				show:true,
				formatter: "    {c}    \n({d}%)"
			},
			series : [

				{
					name:'失信人口',
					type:'pie',
					radius : [0, '70%'],

					roseType : 'radius',
					//data:[
					//	{value:35, name:'8-10分'},
					//	{value:36, name:'2-4分'},
					//	{value:38, name:'0-2分'},
					//	{value:40, name:'0分以下'},
					//]
				},

			]
		});
	}