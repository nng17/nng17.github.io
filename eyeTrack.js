var chart = new CanvasJS.Chart("chartContainer", {
  theme: "theme2",
  title: {
    text: "Left Eye Gaze 2D"
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
  var strDps = reader.result;  
  var dps = [];
  
  strDps = strDps.split("\n");

  for(var i = 0; i < strDps.length; i++) {
    dps.push({x: parseInt(strDps[i].split(" ")[0]),
              y: parseInt(strDps[i].split(" ")[1])
             });
  }
  chart.options.data[0].dataPoints = dps;
  chart.render();
}
