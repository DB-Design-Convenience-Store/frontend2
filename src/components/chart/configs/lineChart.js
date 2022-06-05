const lineChart = {
  series: [
    {
      name: '입고',
      data: [350, 340, 500, 450, 490, 350],
      offsetY: 0,
    },
    {
      name: '판매',
      data: [230, 240, 490, 310, 400, 240],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: '100%',
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 600,
          colors: ['#8c8c8c'],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 600,
          colors: ['#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c', '#8c8c8c'],
        },
      },
      categories: ['5/1 - 5/7', '5/8 - 5/15', '5/16 - 5/22', '5/23 - 5/29', '5/30 - 6/5', '6/6 - 6/12'],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
};

export default lineChart;
