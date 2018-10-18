$(document).ready(function(){
    //订单统计
    var chart1 = echarts.init(document.getElementById('chart1'));
    var date1={
        v0 : ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '23:59'],
        v1 : ['09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16'],
        v2 : ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16', '09-17', '09-18', '09-19', '09-20', '09-21', '09-22', '09-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-29', '09-30',]
    };
    var data1={
        v0 : [150, 200, 140, 120, 110, 170, 90, 120, 110, 170, 150, 200, 140],
        v1 : [220, 310, 270, 450, 200, 340, 90],
        v2 : [800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200, 800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200]
    };
	var option1={
		textStyle:{ fontSize:14},
        tooltip: {
            trigger: 'axis',
            confine: true
        },
		grid: {
			left: '1%',
			right: '3%',
			top: '10%',
			bottom: '1%',
			containLabel: true
		},
		xAxis: {
			name: '',
			type: 'category',
			boundaryGap: false,
			data: date1["v0"]
		},
		yAxis: {
			name: '订单统计',
			type: 'value'
		},
		series: [
			{
                name:'订单数量',
				type:'line',
                smooth:true,
				showSymbol: false,
				data: data1["v0"],
                itemStyle: {
                    normal: {
                        color: '#74E1FF'
                    }
                },
				lineStyle: {
					normal: {
						color: '#74E1FF'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#74E1FF'
  						}, {
                            offset: 1, color: '#fff'
						}], false)
					}
				}
			}
		]
	};
    chart1.setOption(option1);
    $('.tab1').children('li').click(function(){
        var index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        option1.series[0].data=data1['v'+index];
        option1.xAxis.data=date1['v'+index];
        chart1.setOption(option1, true);
        return num=index;
    });
    //销售统计
    var chart2 = echarts.init(document.getElementById('chart2'));
    var date2={
        v0 : ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '23:59'],
        v1 : ['09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16'],
        v2 : ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16', '09-17', '09-18', '09-19', '09-20', '09-21', '09-22', '09-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-29', '09-30',]
    };
    var data2={
        v0 : [150, 200, 140, 120, 110, 170, 90, 120, 110, 170, 150, 200, 140],
        v1 : [220, 310, 270, 450, 200, 340, 90],
        v2 : [800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200, 800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200]
    };
	var option2={
		textStyle:{ fontSize:14},
        tooltip: {
            trigger: 'axis',
            confine: true
        },
		grid: {
			left: '1%',
			right: '3%',
			top: '10%',
			bottom: '1%',
			containLabel: true
		},
		xAxis: {
			name: '',
			type: 'category',
			boundaryGap: false,
			data: date2["v0"]
		},
		yAxis: {
			name: '销售统计',
			type: 'value'
		},
		series: [
			{
                name:'销售额',
				type:'line',
                smooth:true,
				showSymbol: false,
				data: data2["v0"],
                itemStyle: {
                    normal: {
                        color: '#74E1FF'
                    }
                },
				lineStyle: {
					normal: {
						color: '#74E1FF'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: '#74E1FF'
  						}, {
                            offset: 1, color: '#fff'
						}], false)
					}
				}
			}
		]
	};
    chart2.setOption(option2);
    $('.tab2').children('li').click(function(){
        var index=$(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        option2.series[0].data=data2['v'+index];
        option2.xAxis.data=date2['v'+index];
        chart2.setOption(option2, true);
        return num=index;
    });

	window.onresize = function(){
        chart1.resize();
		chart2.resize();
	}
});