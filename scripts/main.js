define( function (require) {

    var model = require('./model');
    var view = require('./view');
    var utils = require('./utils');

    var revenue = utils.prepareData( model.getRevenue() );
    var impressions = utils.prepareData( model.getImpressions() );
    var visits = utils.prepareData( model.getVisits() );
    
    var container = {
      width: 700,
      height: 200,
    };

    var pieData = {
      innerRadius: 50,
      outerRadius: 55.5
    }

    view.set(container, pieData);
    view.render(revenue);
    view.render(impressions);
    view.render(visits)
});