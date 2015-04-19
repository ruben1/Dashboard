define(function () {
    return {
      prepareData: prepareData
    }

    var data = [];

    function prepareData(data) {
      var sum = data[0] + data[1];

      var pctTablet = data[0] / sum * 100;
      var pctSmartphone = data[1] / sum * 100;

      var result = [[0, pctTablet, data[2], data[0]], [100 - pctSmartphone, 100, data[3], data[1]]];
      return result;
    }
});