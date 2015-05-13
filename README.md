# datetime-writer

Try the [DEMO](http://codepen.io/vncnz/pen/EjKWOo)!

A simple AngularJS module with a directive for creating a text input with human-friendly datetime validation.
In the example you can see the directive used with material.angularjs (tested with v0.9) and ngMessages but you can use it with bootstrap or what you want to use.

Moment.js is required, it is used for parsing, formatting and validating the datetime.

If you want, you can set an attribute, called "data-formats", that contains dot comma separated values representing your valid datetime formats, i.e.
```html
<input type="text" ng-model="date" datetime-writer datetime-formats="D-M-YYYY [at] H:mm;D-M-YYYY[@]H:mm"/>
```

By default, valid formats are the follows: "D-M-YYYY [at] H:mm", "D-M-YYYY[@]H:mm", "D-M-YYYY H:mm", "D/M/YYYY [at] H:mm", "D/M/YYYY[@]H:mm", "D/M/YYYY H:mm".

You can see parsing tokens [here](http://momentjs.com/docs/#/parsing/string-format/).


![valid](/screenshots/valid.png?raw=true)
![invalid-empty](/screenshots/invalid-empty.png?raw=true)
![invalid-hour](/screenshots/invalid-hour.png?raw=true)

### USAGE

The module requires Moment.js and, obviously, AngularJS (tested v1.3.14). Also bootstrap css is required (tested 3.3.4).
Import in your project Moment.js (with or without locales), AngularJS, your favorite style framework/library and vm-material-angular-datetime-input.js
When you're done, your setup should look similar to the following:

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel='stylesheet prefetch' href='http://rawgit.com/angular/bower-material/master/angular-material.min.css'>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
		<script src='http://rawgit.com/angular/bower-material/master/angular-material.min.js'></script>
		<script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-messages.min.js'></script>
		<script src="http://momentjs.com/downloads/moment-with-locales.min.js"></script>
		...
		<script src="datetime-writer.js"></script>
		...
	</head>

	<body ng-app="TestApp">

		...

		<input type="text" ng-model="date" name="vmdate" required datetime-writer/>
		<div ng-messages="formDate.vmdate.$error">
			<!--<div ng-message="parsing">Invalid date</div>-->
			<div ng-message="invalidYear">Invalid year</div>
			<div ng-message="invalidMonth">Invalid month</div>
			<div ng-message="invalidDay">Invalid day</div>
			<div ng-message="invalidHour">Invalid hour</div>
			<div ng-message="invalidMinute">Invalid minute</div>
			<div ng-message="unknownError">Invalid date</div>
			<div ng-message="required">Date is required</div>
		</div>
		
		<script>
			var testApp = angular.module('TestApp', ['ngMaterial', 'ngMessages', 'vm-datetime-writer']);
		</script>
	</body>
</html>
```

To create a datetime input validator:
* Add the module vm-datetime-writer as a dependency to your app module.
* Add the vm-valid-datetime directive to your element. A model is required.

I hope this can be a useful starting point for datetime inputs of your projects ;)
