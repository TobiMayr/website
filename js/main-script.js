$(document).ready(function () {
    var softwareCtx = $("#software-chart")[0].getContext('2d');
    var softwareChart = new Chart(softwareCtx, {
        type: 'doughnut',
        data: softwareData,
        options: {legend: {display: true, position: 'top', labels: {fontColor: '#c0cdcf', boxWidth: 20}}}
    });
    var workCtx = $("#work-chart")[0].getContext('2d');
    var workChart = new Chart(workCtx, {
        type: 'bar',
        data: workData,
        options: {
            scaleShowValues: true,
            scales: {
                yAxes: [{ticks: {beginAtZero: true}}],
                xAxes: [{ticks: {autoSkip: false}}],
                legend: {display: true, position: 'top', labels: {fontColor: '#c0cdcf', boxWidth: 20}}
            }
        }
    });
});

var softwareData = {
    datasets: [{
        data: [40, 30, 20, 10],
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

var workData = {
    datasets: [{
        data: [30, 25, 20, 10, 10, 5],
        backgroundColor: [
            '#e76556',
            '#34d293',
            '#3ab0e2',
            '#e7ac44',
            '#e28ee7',
            '#6ee7d8'
        ],
        borderColor: '#202728',
        label: 'Main fields'
    }],
    labels: [
        'Web Scraping',
        'Backend Dev.',
        'Server Admin.',
        'Database',
        'Frontend',
        'Image Analysis'
    ]
};