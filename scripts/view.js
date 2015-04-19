define( function (require) {

    var width;
    var height;

    var innerRadius;
    var outerRadius;

    var alreadyRendered = 0;

    var set = function(boardOptions, pieOptions) {
      width = boardOptions.width;
      height = boardOptions.height;

      innerRadius = pieOptions.innerRadius;
      outerRadius = pieOptions.outerRadius;
    }

    var render = function(data) {
      renderPie(data);
      renderBlock(data);
    }
    
    var renderPie = function(data) {
      
      var div = d3.select('.board').append('div').attr('class', 'widget').style('width', '24%').style('height', '161');
      var board = div.append('svg').attr('id', 'svg_board').attr('width', '111').attr('height', '111');

      var myScale = d3.scale.linear().domain([0, 100]).range([0, 2 * Math.PI]); 

      var arc = d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius)
                .startAngle(function(d){return myScale(d[0]);}).endAngle(function(d){return myScale(d[1]);});

      board.selectAll("path").data(data).enter().append("path").attr("d", arc)
      .style("fill", function(d){return d[2];}).attr("transform", "translate(55.5,55.5)");   
    }

    var renderBlock = function(data) {

      var tabletData = data[1];
      var block = document.createElement('div');
      block.setAttribute('class', 'block_text');

      var tabletDiv = document.createElement('div');
      tabletDiv.setAttribute('class', 'block_tablet');
      var tabletText = document.createElement('p');
      tabletText.setAttribute('class', 'figure name');
      tabletText.innerHTML = 'Tablet';
      tabletText.style.color = tabletData[2];
      var tabletPer = document.createElement('span');
      tabletPer.setAttribute('class', 'figure percentage');
      tabletPer.innerHTML = tabletData[1] - tabletData[0] + '%';
      var tabletFig = document.createElement('span');
      tabletFig.setAttribute('class', 'figure number');
      tabletFig.innerHTML = tabletData[3];

      tabletDiv.appendChild(tabletText);
      tabletDiv.appendChild(tabletPer);
      tabletDiv.appendChild(tabletFig);
      block.appendChild(tabletDiv);

      var smartPhoneData = data[0];

      var smartPhoneDiv = document.createElement('div');
      smartPhoneDiv.setAttribute('class', 'block_smartphone');
      var smartPhoneText = document.createElement('p');
      smartPhoneText.setAttribute('class', 'figure name smartphone_position');
      smartPhoneText.innerHTML = 'Smartphone';
      smartPhoneText.style.color = smartPhoneData[2];
      var smartPhoneNumbers = document.createElement('div');
      var smartPhonePer = document.createElement('span');
      smartPhonePer.setAttribute('class', 'figure percentage');
      smartPhonePer.innerHTML = smartPhoneData[1] - smartPhoneData[0] + '%';
      var smartPhoneFig = document.createElement('span');
      smartPhoneFig.setAttribute('class', 'figure number smartphone_position');
      smartPhoneFig.innerHTML = smartPhoneData[3];

      smartPhoneDiv.appendChild(smartPhoneText);
      smartPhoneNumbers.appendChild(smartPhonePer);
      smartPhoneNumbers.appendChild(smartPhoneFig);
      smartPhoneDiv.appendChild(smartPhoneNumbers);
      block.appendChild(smartPhoneDiv);
      
      document.getElementsByClassName('widget')[alreadyRendered].appendChild(block);

      alreadyRendered += 1;
    };

    return {
      render: render,
      set: set
    };

});


