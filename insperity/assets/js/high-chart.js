Highcharts.chart('container', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie',
		height: '200px',
	},
	title: {
		text: '',
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
	},
	accessibility: {
		point: {
			valueSuffix: '%',
		},
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: false,
			},
			showInLegend: false,
		},
	},
	exporting: {enabled: false},
	series: [
		{
			name: 'Expenses',
			colorByPoint: true,
			data: [
				{
					name: 'Net pay',
					y: 78,
					sliced: true,
					selected: true,
				},
				{
					name: 'Current deductions',
					y: 12,
				},
				{
					name: 'Current Taxes',
					y: 10,
				},
			],
		},
	],
})
