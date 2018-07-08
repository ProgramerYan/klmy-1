//获取JSON基本路径
var baseurl="http://172.30.107.208:8080/basicservice/DataAccess/execute?";
//图表数据源ID
var chartDataSourceId="2c9eeb50641df0b10164472ffb960000";
//单值数据源ID
var singleValueDataSourceId="2c9eeb506407c8f301640c086f980004";
//平台服务_信用数据质量数据源ID
var table_XYSJZL_DataSourceId="2c9eeb50641df0b10164555e5e440027";
//企业信用_行政许可数据源ID
var table_XZXK_DataSourceId="2c9eeb50641df0b10164696f598e0042";
//企业信用_行政处罚数据源ID
var table_XZCF_DataSourceId="2c9eeb50641df0b10164696fd9bb0046";
//企业信用_评级信息数据源ID
var table_PJXX_DataSourceId="2c9eeb50641df0b101645533f06e0019";
//企业信用_失信企业数据源ID
var table_SXQY_DataSourceId="2c9eeb50641df0b10164552ccbda0014";
//企业信用_企业预警数据源ID
var table_QYYJ_DataSourceId="2c9eeb50641df0b101645546ef0f0023";
//资源信用_部门主题数据源ID
var table_BMZT_DataSourceId="2c9eeb50641df0b10164645b62bd003e";
//资源信用_共享方式数据源ID
var table_GXFS_DataSourceId="2c9eeb50641df0b101645b16ea940031";
//行业信用_安全生产数据源ID
var table_AQSC_DataSourceId="2c9eeb50641df0b1016453b8ef32000e";
//总体概况_信用地图表数据源ID
var table_AQSC_DataSourceId="2c9eeb506407c8f3016410aa29c90009";

//按照数据源ID获得JSON路径
function getJsonUrl(datasourceId){
	return baseurl+"datasourceId="+datasourceId;
}

//按照数据源ID和年份获得JSON路径
function getJsonUrl(datasourceId,year){
	var yearparam='{\"YEAR\":\"'+year+'\"}';
	return baseurl+"datasourceId="+datasourceId+"&paramMap="+yearparam;
}
//按照数据源ID和分类获得JSON路径
function getSelectJsonUrl(datasourceId,select_fl){
	var fl='{\"FL\":\"'+select_fl+'\"}';
	//return baseurl+"datasourceId="+datasourceId+"&paramMap="+yearparam;
	return baseurl+"datasourceId="+datasourceId;
}

//按照图表ID和年份获得JSON路径
function getChartJsonUrl(chartID,year){
	var paramMap='{\"CHART_ID\":\"'+chartID+'\",\"YEAR\":\"'+year+'\"}';
	return baseurl+"datasourceId="+chartDataSourceId+"&paramMap="+paramMap;
}
//按照数据源ID获得JSON路径
function getAllJsonUrl(datasourceId){
	return baseurl+"datasourceId="+datasourceId;
}

//旋转字符串函数
function rotateStr(oldStr){
var newStr='';
for(var i=0;i<oldStr.length-1;i++){
	newStr+=oldStr.charAt(i)+"\n";
}
newStr+=oldStr.charAt(i);
return newStr;
}
//滚动表格
function scrollTable(tablename){
	var $this = $('#'+tablename); 
	var scrollTimer; 
	$this.hover(function() { 
	clearInterval(scrollTimer); 
	}, function() { 
	scrollTimer = setInterval(function() { 
	scrollup(); 
	}, 2000); 
	}).trigger("mouseleave"); 
	

	//从下往上滚
        function scrollup(){
            var table = document.getElementById(tablename);//$("#table1 > tbody").get(0)
            var row = table.firstChild;
            table.removeChild(row);
            table.appendChild(row);
			//if(index==5)index=0;
			// var newrow=$(rows[index]);
           // $("#tbd").append(rows[index++]);    //可以通过ajax去取后面的数据
        }   
	
}
