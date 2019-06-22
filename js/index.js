window.addEventListener('load',function () {
    let main = document.querySelectorAll('.echarts');

    // let bar = echarts.init(main[0]);
    // let barOption ={
    //     title: {
    //         text: 'ECharts 入门示例'
    //     },
    //     tooltip: {},
    //     legend: {
    //         data:['销量']
    //     },
    //     xAxis: {
    //         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //     },
    //     yAxis: {},
    //     series: [{
    //         name: '销量',
    //         type: 'bar',
    //         data: [5, 20, 36, 10, 10, 20]
    //     }]
    // };
    // bar.setOption(barOption);
    //
    // let line = echarts.init(main[1]);
    // let lineOption =  {
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         data: [820, 932, 901, 934, 1290, 1330, 1320],
    //         type: 'line'
    //     }],
    //     tooltip : {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'cross',
    //             label: {
    //                 backgroundColor: '#6a7985'
    //             }
    //         }
    //     }
    // };
    // line.setOption(lineOption);
    //
    // let line2 =  echarts.init(main[2]);
    // let line2Option = {
    //     xAxis: {
    //         type: 'category',
    //         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //     },
    //     yAxis: {
    //         type: 'value'
    //     },
    //     series: [{
    //         data: [820, 932, 901, 934, 1290, 1330, 1320],
    //         type: 'line',
    //         smooth: true
    //     }],
    //     tooltip : {
    //         trigger: 'axis',
    //         axisPointer: {
    //             type: 'cross',
    //             label: {
    //                 backgroundColor: '#6a7985'
    //             }
    //         }
    //     }
    // };
    // line2.setOption(line2Option);


    let pie = echarts.init(main[0]);
    let pieOption ={
        title : {
            text: '统计',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男','女','1','2','3']
        },
        series : [
            {
                name: '统计',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'男'},
                    {value:310, name:'女'},
                    {value:234, name:'1'},
                    {value:135, name:'2'},
                    {value:1548, name:'3'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    pie.setOption(pieOption);
},false);