var client = new Keen({
    projectId: "5507341146f9a73ceebaf4c8", // String (required always)
    writeKey: "773674cd22bef114c008a3ee6b79cb75d3d6b81bb07f5f40806033a161d56d63255c039cf2d6ed337a6fd96e4f1fa45b5606567c4e342b46439ce6f50c2855b6ce13e1e995f1303cef65cb57faa1089e9c944c69110257477f237eb86fc1cb8ec5230b80a82b5ccfd7522594b39cd6cb",   // String (required for sending data)
    readKey: "a281d068b4774dfe797d5ac3ef72875d2ae2d60864e349196f0392d2d560226e3da7ec91f2e3e37657451aef5ef969510e645bbbe9466eea24905247422094db13fbbbc15c8646876b4912341fa71410daee759a5a8d32ff74756e3fd3951d974e032d4f121fafa2a6204ed46d9a5e3b"
})

$(function(){

  $('a.trigger-event').on('click', function(e){
    e.preventDefault();

    var eventName = 'page_views'
    var properties = { client: 'web page js' }

    client.addEvent(eventName, properties)
    console.log("Published Event: " + eventName + ' Properties: ')
    console.log(properties)
  });
});

Keen.ready(function(){
  var timeFrame = 'this_1_day'

  // Basic line chart
  var viewCountTimeQuery = new Keen.Query("count", {
    eventCollection: "page_views",
    groupBy: 'client',
    interval: 'hourly',
    timeframe: timeFrame
  })

  client.draw(viewCountTimeQuery, document.getElementById('count-basic-line-chart'), {
    title: "Page Views",
    chartType: 'linechart'
  });

  // Basic pie chart
  var viewCountGroupedQuery = new Keen.Query("count", {
    eventCollection: "page_views",
    timeframe: timeFrame,
    groupBy: 'client'
  });

  client.draw(viewCountGroupedQuery, document.getElementById('count-basic-pie-chart'), {
    title: "Page Views",
    chartType: 'piechart'
  });

  // Basic metric
  var viewCountQuery = new Keen.Query("count", {
    eventCollection: "page_views",
    timeframe: 'this_1_hour'
  })

  client.draw(viewCountQuery, document.getElementById('count-metric'), {
    title: "Page Views",
    chartType: 'metric'
  });
});