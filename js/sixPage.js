
        $(document).ready(function(){
			init_left_view(table_BMZT_DataSourceId);
	        init_rigth_view(table_GXFS_DataSourceId,'');
		 }
		);
		//清除共享方式内容
		function delete_all_gxnr()
		{
			var right = document.querySelector('div.right');
	        var childs = right.childNodes; 
			//console.log(childs.length);
			for(var i = childs.length-1; i>=0 ; i--) { 
			  console.log(childs.length);
			  right.removeChild(childs[i]); 
			}
		}
		// 非条件共享按钮的点击事件
	　　$("#FTJGX_BTN").click(function(){
	　　    delete_all_gxnr();
			init_rigth_view(table_GXFS_DataSourceId,'FTJGX');
	    });
	   // 条件共享按钮的点击事件
	　　$("#TJGX_BTN").click(function(){
		    delete_all_gxnr();
	        init_rigth_view(table_GXFS_DataSourceId,'TJGX');
	　　});
	   // 不共享按钮的点击事件
	　　$("#BGX_BTN").click(function(){
		    delete_all_gxnr();
	        init_rigth_view(table_GXFS_DataSourceId,'BGX');
	　　});
		//载入本页面单值数据
		
		//加载页面右边数据
		function init_rigth_view(datasourceId,select_fl)
		{
			$.get(getSelectJsonUrl(datasourceId,select_fl)).done(function (data) {		
				for (var i=0;i<data.rows.length;i++){
					var Values=new Array();//存放数据对象的数组
					var Name=data.rows[i]['NAME'];;//存放数据对象的数组
					for(var j=0;j<4;j++)
				    {
						Values[j]=data.rows[i]['VALUE1'];
					    Values[j]=data.rows[i]['VALUE2'];
					    Values[j]=data.rows[i]['VALUE3'];
					    Values[j]=data.rows[i]['VALUE4'];	
					}
                    createRightBlock(Values,Name);					
				}        
			});
		}
		//页面右边  共享方式数据模块打印方法
		function createRightBlock(values,name) {
			var Names=['非条件共享','每季度更新','记录数','字段数'];
            var right = document.querySelector('div.right');
            var rightBlock = document.createElement('div');
            rightBlock.className = 'rightBlock';
            var h4 = document.createElement('h4');
            h4.innerHTML = name;
            rightBlock.appendChild(h4);
            for(var k = 0; k < 4; k++) {
                var span = document.createElement('span');
                var p = document.createElement('p');
                p.innerHTML = Names[k];
                span.innerHTML = values[k];
                p.appendChild(span);
                rightBlock.appendChild(p);
            }
            right.appendChild(rightBlock);
        }
		//加载页面左边数据
		function init_left_view(datasourceId)
		{
			$.get(getAllJsonUrl(datasourceId)).done(function (data) {		
				for (var i=0;i<data.rows.length;i++){
					var Name=data.rows[i]['NAME'];//存放数据对象的数组
					var Value=data.rows[i]['VALUE'];
                    createLeftBlock(Value,Name);					
				}        
			});
		}
		//页面左边 部门、主题数据模块打印方法
		function createLeftBlock(value,name)
		{
			var leftbottom = document.querySelector('.leftbottom');
			var leftBlock = document.createElement('div');
            var leftTitle = document.createElement('p');
			var leftNumber = document.createElement('p');
			var num = document.createElement('span');
			var danwei = document.createElement('span');

            leftBlock.classList.add('leftBlock');
            leftTitle.classList.add('leftTitle');
            leftNumber.classList.add('leftNumber');

			leftNumber.appendChild(num);
			leftNumber.appendChild(danwei);
			leftBlock.appendChild(leftTitle);
			leftBlock.appendChild(leftNumber);
			leftbottom.appendChild(leftBlock);

            leftTitle.innerHTML = name;
            danwei.innerHTML = '种资源';
            num.innerHTML = value;
		}
        //左边数据栏信息点击事件
		addEventListener('click',function (ev) {
			var name;
			if (ev.target.classList[0] === 'leftTitle') {
               name = ev.target.innerHTML;
			   update_Right_Table_Info(name);
			}
        })
		//更新页面右侧数据及视图
		function update_Right_Table_Info(name)
		{
			var num=Math.floor(Math.random()*10+1);
			$("#DANWEI_NAME").text(name);
			$("#DANWEI_ZIYUANBIAO_NUM").text(num);
			$("#ZIDUANXIANG_NUM").text(num*4);
			delete_all_gxnr();
			$.get(getSelectJsonUrl(table_GXFS_DataSourceId,'')).done(function (data) {		
				for (var i=0;i<num;i++){
					var Values=new Array();//存放数据对象的数组
					var Name=data.rows[i]['NAME'];;//存放数据对象的数组
					for(var j=0;j<4;j++)
				    {
						Values[j]=data.rows[i]['VALUE1'];
					    Values[j]=data.rows[i]['VALUE2'];
					    Values[j]=data.rows[i]['VALUE3'];
					    Values[j]=data.rows[i]['VALUE4'];	
					}
                    createRightBlock(Values,Name);					
				}        
			});
		}



