var chart = new CanvasJS.Chart("chartContainer", {
  theme: "theme2",
  title: {
    text: "Left Eye Gaze Data 2D"
  },
  data: [
    {
      type: "line",
      dataPoints: []
    }
  ]
}); 

//-- Event handler for the input tag
var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  var fileList = this.files;
  var reader = new FileReader();

  setInterval(function() {
    reader.readAsText(fileList[0]);
    reader.onload = function() {
      renderChart(reader);
    }
  }, 1000);
}

function renderChart(reader) {
  var dpsList = reader.result;  
  var dps = [], dataPoint;
  
  dpsList = dpsList.split("\n");
  
  for(var i = 0; i < dpsList.length; i++) {
  	dataPoint = parseFloat(dpsList[i].split(" ")[1]);
    if(dpsList[i].split(" ")[0] === "neg") {
    	dataPoint *= -1;
    }
    dps.push({ y: dataPoint });
  }
  chart.options.data[0].dataPoints = dps;
  chart.render();
}
