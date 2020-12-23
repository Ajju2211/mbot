    /*
    SCROLL CHART TEST
    */




    // function  drawScrollChart(charts_data, axis_id, chart_id) {
    //     let chartData;
    //     // let xAxes;
    //     if(charts_data.title2){
    //         chartData = {
    //             labels: [],
    //             datasets: [{
    //                 type: "bar",
    //                 backgroundColor: "red",
    //                 id: "y-axis-0",
    //                 fill: false,
    //                 label: charts_data.title1,
    //                 data: []
    //             },
    //             {
    //                 type: "bar",
    //                 backgroundColor: "blue",
    //                 id: "y-axis-0",
    //                 fill: false,
    //                 label: charts_data.title2,
    //                 data: []
    //             }]
    //         };
    //     }
    //     else{
    //         chartData = {
    //             labels: [],
    //             datasets: [{
    //                 type: "bar",
    //                 backgroundColor: "red",
    //                 id: "y-axis-0",
    //                 fill: false,
    //                 label: charts_data.title1,
    //                 data: []
    //             }]
    //         };
    //     }

    //     let rectangleSet = false;

    //     let canvasTest = $(chart_id);
    //     let chartTest = new Chart(canvasTest, {
    //         type: 'bar',
    //         data: chartData,
    //         maintainAspectRatio: false,
    //         // responsive: true,
    //         options: {
    //             tooltips: {
    //                 titleFontSize: 0,
    //                 titleMarginBottom: 0,
    //                 bodyFontSize: 12
    //             },
    //             legend: {
    //                 display: true
    //             },
    //             scales: {
    //                 xAxes: [{
    //                     stacked: false,
    //                     ticks: {
    //                         fontSize: 12,
    //                         display: true
    //                     }
    //                 }],
    //                 yAxes: [{
    //                     stacked: false,
    //                     position: "left",
    //                     id: "y-axis-0",
    //                     ticks: {
    //                         fontSize: 12,
    //                         beginAtZero: true
    //                     }
    //                 }]
    //             },
    //             animation: {
    //                 onComplete: function () {
    //                     if (!rectangleSet) {
    //                         let scale = window.devicePixelRatio;                       

    //                         let sourceCanvas = chartTest.chart.canvas;
    //                         let copyWidth = chartTest.scales['y-axis-0'].width - 10;
    //                         let copyHeight = chartTest.scales['y-axis-0'].height + chartTest.scales['y-axis-0'].top + 10;

    //                         let targetCtx = document.getElementById(axis_id).getContext("2d");

    //                         targetCtx.scale(scale, scale);
    //                         targetCtx.canvas.width = copyWidth * scale;
    //                         targetCtx.canvas.height = copyHeight * scale;

    //                         targetCtx.canvas.style.width = `${copyWidth}px`;
    //                         targetCtx.canvas.style.height = `${copyHeight}px`;
    //                         targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth * scale, copyHeight * scale, 0, 0, copyWidth * scale, copyHeight * scale);

    //                         let sourceCtx = sourceCanvas.getContext('2d');

    //                         // Normalize coordinate system to use css pixels.

    //                         sourceCtx.clearRect(0, 0, copyWidth * scale, copyHeight * scale);
    //                         rectangleSet = true;
    //                     }
    //                 },
    //                 onProgress: function () {
    //                     if (rectangleSet === true) {
    //                         let copyWidth = chartTest.scales['y-axis-0'].width;
    //                         let copyHeight = chartTest.scales['y-axis-0'].height + chartTest.scales['y-axis-0'].top + 10;

    //                         let sourceCtx = chartTest.chart.canvas.getContext('2d');
    //                         sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
    //                     }
    //                 }
    //             }
    //         }
    //     });
    //     function addData(chart_data, chart) {
    //         chart.data.labels = [];
    //         for (let i = 0; i < chart_data.labels.length; i++) {
    //             chart.data.datasets[0].data.push(chart_data.data1[i]);
    //             if(chart_data.data2){
    //                 chart.data.datasets[1].data.push(chart_data.data2[i]);
    //             }

    //             chart.data.labels.push(chart_data.labels[i]);
    //             let newwidth = $('.chartAreaWrapper2').width() + 60;
    //             $('.chartAreaWrapper2').width(newwidth);
    //         }
    //         console.log(chart.data);
    //     }

    //     addData(charts_data, chartTest);
    // };
    // drawScrollChart(
    //     {
    //     title1:"Test Data Set1",
    //     // title2:"Test Data Set2",
    //     data1: [12,23,43,23,54,67,87],
    //     // data2:[14,33,63,13,34,77,37],
    //     labels: ["a","b","c","d","e","f","g"],
    // },'axis-Test','#chart-Test');
    /*ENDS HERE*/