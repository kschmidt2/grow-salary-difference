// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartId = document.getElementById("chart-container");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if (!chartId) {
        console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        console.log('yesId')
    }
}, 1500);

document.addEventListener('DOMContentLoaded', function () {


    const myChart = setTimeout(function() {

        Highcharts.chart(chartId, {
            chart: {
                type: 'bar',
                styledMode: true,
                spacingBottom: 25,
                spacingRight: 100,
            }, 
            title: {
                text: null
            },
            data: {
                googleSpreadsheetKey: '1MjbFTX_9S8aWOG1ZT7kT5wFS3iy0ODsy9bwBl8WhWK4'
            },
            // for bar charts only
            plotOptions: {
                series: {
                    groupPadding: 0.1
                } 
            },
            legend: {
                enabled: false
            },
            xAxis: {
                labels: {
                    style: {
                        whiteSpace: 'nowrap'
                    }
                },
                tickLength: 5
            },
            yAxis: {
                title: false,
                labels: {
                    useHTML: true,
                    overflow: 'allow'
                },
                max: 30000,
                min: -20000,
                tickAmount: 6
            },
            credits: {
                enabled: false
            },
            tooltip: {
                shadow: false,
                padding: 10,
                formatter: function () {
                    if (this.y < 0) {
                        let positiveValue = (this.y)*-1;
                        return '-$' + (positiveValue).toLocaleString();
                    } else {
                        return '$'+(this.y).toLocaleString();
                    }
                }
            },
            responsive: {
                rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                    spacingRight: 10
                    },
                    legend: {
                        align: 'left',
                        x: -18
                    },
                    tooltip: {
                        enabled: false
                    }
                }
                }]
            }
        });
    }, 1000);
});