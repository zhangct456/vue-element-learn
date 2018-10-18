<template>
  <div>
    <div class="contBox">
      <div class="card flex">
        <dl>
          <dt>今日订单总数</dt>
          <dd>2000</dd>
        </dl>
        <dl>
          <dt>今日销售总额(￥)</dt>
          <dd>50000.00</dd>
        </dl>
        <dl>
          <dt>昨日销售总额(￥)</dt>
          <dd>50000.00</dd>
        </dl>
        <dl>
          <dt>近7天销售总额(￥)</dt>
          <dd>150000.00</dd>
        </dl>
      </div>
      <!-- 待处理 -->
      <div class="box">
        <h3 class="tit"><span>待处理事务</span></h3>
        <ul class="pending flex">
          <li><i>待付款订单</i><span>（<em>10</em>）</span></li>
          <li><i>已完成订单</i><span>（<em>10</em>）</span></li>
          <li><i>待处理退款申请</i><span>（<em>10</em>）</span></li>
          <li><i>已发货订单</i><span>（<em>10</em>）</span></li>
          <li><i>待发货订单</i><span>（<em>10</em>）</span></li>
          <li><i>待处理退货订单</i><span>（<em>10</em>）</span></li>
          <li><i>广告位即将到期</i><span>（<em>10</em>）</span></li>
          <li><i>待确认退货订单</i><span>（<em>10</em>）</span></li>
        </ul>
      </div>
      <!-- 待处理end -->
      <!-- 快捷入口 -->
      <div class="box">
        <h3 class="tit"><span>运营快捷入口</span></h3>
        <ul class="fast flex">
          <li><img src="@/assets/images/icon-fast1.svg">
            <p>添加商品</p>
          </li>
          <li><img src="@/assets/images/icon-fast2.svg">
            <p>订单列表</p>
          </li>
          <li><img src="@/assets/images/icon-fast3.svg">
            <p>用户管理</p>
          </li>
          <li><img src="@/assets/images/icon-fast4.svg">
            <p>交易统计</p>
          </li>
          <li><img src="@/assets/images/icon-fast5.svg">
            <p>短信营销</p>
          </li>
          <li><img src="@/assets/images/icon-fast6.svg">
            <p>广告管理</p>
          </li>
          <li><img src="@/assets/images/icon-fast7.svg">
            <p>推荐管理</p>
          </li>
          <li><img src="@/assets/images/icon-fast8.svg">
            <p>抢购管理</p>
          </li>
          <li><img src="@/assets/images/icon-fast9.svg">
            <p>积分管理</p>
          </li>
        </ul>
      </div>
      <!-- 快捷入口end -->
      <!-- 总览 -->
      <div class="total-view flex">
        <div class="box">
          <h3 class="tit"><span>商品总览</span></h3>
          <ul class="flex">
            <li><span>100</span>
              <p>已下架</p>
            </li>
            <li><span>100</span>
              <p>已上架</p>
            </li>
            <li><span>100</span>
              <p>库存紧张</p>
            </li>
            <li><span>100</span>
              <p>全部商品</p>
            </li>
          </ul>
        </div>
        <div class="box">
          <h3 class="tit"><span>用户总览</span></h3>
          <ul class="flex">
            <li><span>100</span>
              <p>今日新增</p>
            </li>
            <li><span>100</span>
              <p>昨日新增</p>
            </li>
            <li><span>100</span>
              <p>本月新增</p>
            </li>
            <li><span>100</span>
              <p>会员总数</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 总览end -->
      <!-- 订单统计 -->
      <div class="box">
        <h3 class="tit"><span>订单统计</span></h3>
        <div class="tabS">
          <div class="date">
            <input type="date" value="2018-09-16"> - <input type="date" value="2018-09-30">
          </div>
          <ul class="tab1 clear">
            <li class="on">本日</li>
            <li>本周</li>
            <li>本月</li>
          </ul>
        </div>
        <div class="chartBox flex">
          <div class="total-order fx1">
            <dl>
              <dt>本月订单总数</dt>
              <dd>
                <em>1000000</em>
                <p class="down"><span>10%</span>同比上周</p>
              </dd>
            </dl>
            <dl>
              <dt>本月订单总数</dt>
              <dd>
                <em>10000</em>
                <p class="up"><span>10%</span>同比上周</p>
              </dd>
            </dl>
          </div>
          <div id="chart1" class="charts fx4"></div>
        </div>
      </div>
      <!-- 订单统计end -->
      <!-- 销售统计 -->
      <div class="box">
        <h3 class="tit"><span>销售统计</span></h3>
        <div class="tabS">
          <div class="date">
            <input type="date" value="2018-09-16"> - <input type="date" value="2018-09-30">
          </div>
          <ul class="tab2 clear">
            <li class="on">本日</li>
            <li>本周</li>
            <li>本月</li>
          </ul>
        </div>
        <div class="chartBox flex">
          <div class="total-order fx1">
            <dl>
              <dt>本月订单总数</dt>
              <dd>
                <em>1000000</em>
                <p class="down"><span>10%</span>同比上周</p>
              </dd>
            </dl>
            <dl>
              <dt>本月订单总数</dt>
              <dd>
                <em>10000</em>
                <p class="up"><span>10%</span>同比上周</p>
              </dd>
            </dl>
          </div>
          <div id="chart2" class="charts fx4"></div>
        </div>
      </div>
      <!-- 销售统计end -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "SystemMain",
    components: {},
    props: {},
    data() {
      return {
      	date1: {
		        v0 : ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '23:59'],
		        v1 : ['09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16'],
		        v2 : ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13', '09-14', '09-15', '09-16', '09-17', '09-18', '09-19', '09-20', '09-21', '09-22', '09-23', '09-24', '09-25', '09-26', '09-27', '09-28', '09-29', '09-30',]
		    },
		    data1: {
		        v0 : [150, 200, 140, 120, 110, 170, 90, 120, 110, 170, 150, 200, 140],
		        v1 : [220, 310, 270, 450, 200, 340, 90],
		        v2 : [800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200, 800, 400, 500, 650, 420, 302, 407, 280, 603, 702, 100, 306, 698, 901, 1200]
	    	}
      };
    },
    watch: {},
    computed: {},
    methods: {
			
    },
    created() {
    	
    },
    mounted() {
    	var chart1 = this.$echarts.init(document.getElementById('chart1'));
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
					data: this.date1["v0"]
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
						data: this.data1["v0"],
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
								color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                            offset: 0, color: '#74E1FF'
		  						}, {
		                            offset: 1, color: '#fff'
								}], false)
							}
						}
					}
				]
			}
    	chart1.setOption(option1);
    }
  };
</script>
<style>

</style>