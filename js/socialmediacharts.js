window.onload = function () {
            var chart = new CanvasJS.Chart("vhGraph", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Women : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {

                    labelFontSize: 16,

                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {


                    labelFontSize: 16,
                    labelFontColor: "#999",
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                        },

                    ]
                }]
            });
            chart.render();
			
            var chart1 = new CanvasJS.Chart("vhGraph1", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                                                        },

                        ]
                    }]
            });
            chart1.render();
            var chart2 = new CanvasJS.Chart("vhGraph2", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                        },

                    ]
                }]
            });
            chart2.render();
            var chart3 = new CanvasJS.Chart("vhGraph3", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                                                        },

                                                ]
                                                }]
            });
            chart3.render();

            var chart4 = new CanvasJS.Chart("vhGraph4", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                                                        },

                                                ]
                                                }]
            });
            chart4.render();


            var chart5 = new CanvasJS.Chart("vhGraph5", {
               
                animationEnabled: true,
                axisY: {
                    title: "Times",
                    valueFormatString: "#0,,.",
                    suffix: " m"
                },
                data: [
                    {
                        toolTipContent: "{y} units",
                        type: "splineArea",
                        markerSize: 5,
                        color: "rgba(54,158,173,.7)",
                        dataPoints: [
                            {
                                x: new Date(1993, 0),
                                y: 2506000
                            },
                            {
                                x: new Date(1993, 0),
                                y: 2798000
                            },
                            {
                                x: new Date(1994, 0),
                                y: 3386000
                            },
                            {
                                x: new Date(1995, 0),
                                y: 6944000
                            },
                            {
                                x: new Date(1996, 0),
                                y: 6026000
                            },
                            {
                                x: new Date(1997, 0),
                                y: 2394000
                            },
                            {
                                x: new Date(1998, 0),
                                y: 1872000
                            },
                            {
                                x: new Date(1999, 0),
                                y: 2140000
                            },
                            {
                                x: new Date(2000, 0),
                                y: 7289000
                            },
                            {
                                x: new Date(2001, 0),
                                y: 4830000
                            },
                            {
                                x: new Date(2002, 0),
                                y: 2009000
                            },
                            {
                                x: new Date(2003, 0),
                                y: 2840000
                            },
                            {
                                x: new Date(2004, 0),
                                y: 2396000
                            },
                            {
                                x: new Date(2005, 0),
                                y: 1613000
                            },
                            {
                                x: new Date(2006, 0),
                                y: 2821000
                            },
                            {
                                x: new Date(2007, 0),
                                y: 2000000
                            },
                            {
                                x: new Date(2008, 0),
                                y: 1397000
                            }
				]
			}
			]
            });

            chart5.render();
            
            
            
            var chart6 = new CanvasJS.Chart("vhGraph6", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                                                        },

                                                ]
                                                }]
            });
            chart6.render();
            
            
            
            
            
            var chart7 = new CanvasJS.Chart("vhGraph7", {
                zoomEnabled: true,
                backgroundColor: "#FAFAFA",
                toolTip: {
                    enabled: true, //disable here
                    animationEnabled: false //disable here
                },
                title: {
                    text: "Men : 44% Your Fan",
                    fontColor: "#fff",
                    fontSize: 18,
                    padding: 5,
                    margin: 10,
                    backgroundColor: "#004EA8",
                    borderThickness: 1,
                    borderColor: "#fff",
                    cornerRadius: 3,
                    verticalAlign: "top",
                    horizontalAlign: "center"

                },
                axisX: {
                    labelFontSize: 16,
                    labelFontColor: "#363636",
                    titleFontColor: "#FF7F33 ",
                    titleFontSize: 18,
                    tickLength: 7,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#8698BD"
                },
                axisY: {
                    labelFontSize: 16,
                    labelFontColor: "#999",
                    titleFontColor: "steelBlue", //#004EA8
                    titleFontSize: 12,
                    interlacedColor: "#f5f5f5",
                    tickLength: 0,
                    tickColor: "#004EA8",
                    tickThickness: 2,
                    gridColor: "#fff",
                    gridThickness: 2,
                    interval: 20,
                    gridColor: "#8698BD",
                    interlacedColor: "rgb(255,250,250)",
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
                    indexLabel: "{y}",
                    valueFormatString: "##",
                    indexLabelFontSize: 10,
                    indexLabelFontFamily: "Lucida Console",
                    indexLabelFontColor: "#004EA8",
                    color: "#8698BD",
                    indexLabelPlacement: "outside", //inside, outside
                    dataPoints: [
                        {
                            label: "0-60 days",
                            y: 0
                                                        },
                        {
                            label: "60-90 days",
                            y: 81
                                                        },
                        {
                            label: "90+ days",
                            y: 10,
                                                        },

                           ]
                                                }]
            });
            chart7.render();
            
            
            




        }
        
        $(document).ready(function(){
            $(".dropdown").hover(            
                function() {
                    $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
                    $(this).toggleClass('open');        
                },
                function() {
                    $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
                    $(this).toggleClass('open');       
                }
            );
        });
