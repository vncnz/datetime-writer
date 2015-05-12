
angular.module('vm-material-angular-datetime-input', []).directive('vmValidDatetime', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      ngModel: '='
    },
    link: function(scope, elm, attrs, ctrl) {
      var invalidIndexes = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];

      scope.errorAt = -1000;
      scope.formats = attrs.formats ? attrs.formats.split(";") : [ "D-M-YYYY [at] H:mm",
                                                    "D-M-YYYY[@]H:mm",
                                                    "D-M-YYYY H:mm",
                                                    "D/M/YYYY [at] H:mm",
                                                    "D/M/YYYY[@]H:mm",
                                                    "D/M/YYYY H:mm"];
      console.log(scope.formats);

      ctrl.$formatters.push(function(value) {
        //console.log("Formatting");
        //ctrl.$setPristine();
        var dt = moment(scope.ngModel);
        return dt.isValid() ? dt.format(scope.formats[0]) : null;
      });

      ctrl.$parsers.push(function(newValue) {
        //console.log(newValue);

        var mom = moment(newValue, 
          scope.formats,
          true);
        if(mom.isValid()) {
          //scope.dateModel = mom.toDate();
          scope.errorAt = -1000;
          return mom.toDate();
        }
        else {
          //scope.dateModel = null;
          var inv = mom.invalidAt();

          if(inv>-1)
            console.warn("Date invalid at "+invalidIndexes[mom.invalidAt()]);
          else
            console.warn("Invalid at unknown index");

          scope.errorAt = inv;
          return null;
        }
        return newValue;
      });

      ctrl.$validators.invalidYear = function(modelValue, viewValue) {
        return scope.errorAt!=0;
      };
      ctrl.$validators.invalidMonth = function(modelValue, viewValue) {
        return scope.errorAt!=1;
      };
      ctrl.$validators.invalidDay = function(modelValue, viewValue) {
        return scope.errorAt!=2;
      };
      ctrl.$validators.invalidHour = function(modelValue, viewValue) {
        return scope.errorAt!=3;
      };
      ctrl.$validators.invalidMinute = function(modelValue, viewValue) {
        return scope.errorAt!=4;
      };
      ctrl.$validators.unknownError = function(modelValue, viewValue) {
        console.log(viewValue);
        return (!viewValue) || scope.errorAt==-1000;
      };
    }
  }
});