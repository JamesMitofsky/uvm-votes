
Highcharts.chart('container', {
    credits: {
        enabled: false
    },
    chart: {
        type: 'column',
        backgroundColor: "rgb(230, 243, 230)"
    },
    title: {
        text: ' Voting Rate in 2016 General Election'
    },
    xAxis: {
        categories: [
            'Voter Registered Students', 'Undergrad Students',
        ],
        crosshair: true,
        labels: {
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '% of Students',
            style: {
                fontSize: '16px'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        itemStyle: {
            fontSize: '14px'
        }
    },
    series: [
        {
            name: 'National',
            data: [
                68, 47.2
            ],
            color: "gold"

        }, {
            name: 'UVM',
            data: [
                62.7, 42.8
            ],
            color: "#007155"
        }
    ]
});