define(function () {
 
    var revenue = [80000, 120000, 'rgb(44, 110, 0)', 'rgb(148, 219, 101)'];
    var impressions = [30000000, 20000000, 'rgb(8, 62, 120)', 'rgb(90, 195, 237)'];
    var visits = [120000000, 480000000, 'rgb(158, 82, 16)', 'rgb(232, 198, 49)'];

    var getRevenue = function () {
      return revenue;
    }

    var getImpressions = function() {
      return impressions;
    };

    var getVisits = function() {
      return visits;
    };

    return {
      getRevenue: getRevenue,
      getImpressions: getImpressions,
      getVisits: getVisits
    }
});