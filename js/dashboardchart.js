
        window.onload = function () {
            var chart= new CanvasJS.Chart("vhGraph", {
                zoomEnabled: true,
                toolTip: {
                    enabled: false, //disable here
                    animationEnabled: true //disable here
                },
                axisX: {
                    labelFontSize: 14,
                    labelFontColor: "#363636",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2
                },
                axisY: {
                    labelFontSize: 14,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 5,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 200
                },
                legend: {
                    horizontalAlign: "right",
                    verticalAlign: "top",
                    fontSize: 14
                },
                data: [{
                    type: "column",
                    showInLegend: false,
                    legendMarkerType: "none",
                    indexLabel: "{y} ",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [{
                            label: "0-60 days",
                            y: 0
                    },
                        {
                            label: "60-90 days ",
                            y: 810
                    },
                        {
                            label: "90+ days ",
                            y: 10,
                    },
                    ]
                }]
            });
            chart.render();
            
            
            
            
            
            
        var pie = new CanvasJS.Chart("pie",{
            gridColor: "#fff",
		title:{
			fontFamily: "arial black"
		},
                animationEnabled: true,
		legend: {
			verticalAlign: "top",
			horizontalAlign: "right"
		},
		theme: "theme1",
		data: [
		{        
			type: "pie",
           
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 20,
			indexLabelFontWeight: "bold",
			startAngle:0,
			indexLabelFontColor: "#000",       
			indexLabelLineColor: "darkgrey", 
			indexLabelPlacement: "inside", 
			toolTipContent: "{name}: {y}hrs",
			showInLegend: true,
			indexLabel: "#percent%", 
			dataPoints: [
				{  y: 52, name: "Google",indexLabel:"google", legendMarkerType: "square", color:"#18D018"},
				{  y: 44, name: "Twitter",indexLabel:"twitter",legendMarkerType: "square",color:"#18A2D0"},
				{  y: 12, name: "Kijiji",indexLabel:"kijiji",indexLabelFontColor: "#eee",  legendMarkerType: "square", color: "#2C2C2C"}
			]
		}
		]
	});
	pie.render();
        }