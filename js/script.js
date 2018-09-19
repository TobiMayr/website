$(document).ready(function () {
    var backendCtx = $("#backend-chart")[0].getContext('2d');
    var backendChart = new Chart(backendCtx, {
        type: 'doughnut',
        data: backendData,
        options: {legend: {display: true, position: 'top', labels: {fontColor: '#c0cdcf', boxWidth: 20}}}
    });
});

var backendData = {
    datasets: [{
        data: [40, 35, 25, 10],
        backgroundColor: [
            '#e76556',
            '#34d293',
            '#3ab0e2',
            '#e7ac44'
        ],
        borderColor: '#202728'
    }],
    labels: [
        'Java/Groovy',
        'C#',
        'Python',
        'VB.NET'
    ]
};