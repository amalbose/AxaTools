var modules = [
  
  {
    "name" : "BMI Calculator",
    "method" : "bmiCalc",
    "loadmethod" : "loadBmiCalc"
  },
  
  {
    "name" : "Unit Converter",
    "method" : "unitConv",
    "loadmethod" : "loadUnitConv"

  },
  
  {
    "name" : "Character Counter",
    "method" : "charCount",
    "loadmethod" : "loadCharCount",
  }
  
  // Resistor Color code
  // xml json validator
  // JSON to xml convertor
  // base 64 encode
  // Regex checker

  // Graph plotter
  // Crypoto text - encode based on a randomly generated key. Send text and regenerate message based on the key
  
  // ASCII
  // ascii image generator
  
  
  //BANKING
  // Interest calculator
  
  //Web Service
  // Rest and SOAP
];


function loadAllModuleTemplates(){
    jQuery.get('templates/bmiCalc.html', function(data) {
        $('#content-body').append(hideDiv('bmiCalc', data));
    });
    jQuery.get('templates/unitConv.html', function(data) {
        $('#content-body').append(hideDiv('unitConv', data));
    });
}


//BMI CALC

function bmiCalc() {
  showModule('#bmiCalc','BMI Calculator');

  
  $( ".bmiInput" ).keyup(function() {

      if(!$.isNumeric(  $(this).val() )){
        $(this).parent().addClass('has-error');
         $('#response').html("");
      } else {
        $(this).parent().removeClass('has-error');
      }
    if($.isNumeric($('input[name="weight"]').val()) && $.isNumeric($('input[name="height"]').val()) )
      calculateBMI();
  });
  
   $( ".bmiUnit" ).change(function() {
     if($.isNumeric($('input[name="weight"]').val()) && $.isNumeric($('input[name="height"]').val()) )
      calculateBMI();
  });
}

function hideDiv(idVal, htmlVal) {
  return '<div id='+idVal+' class="hidden">' + htmlVal + "</div>";
}

function calculateBMI(){
  var weight = $('input[name="weight"]').val();
  var height = $('input[name="height"]').val();
  
  var heightUnit = $('#heightUnit option:selected').val();
  var weightUnit = $('#weightUnit option:selected').val();
  
  var bmiVal = "";
  
    if(height!=="" && height !== "0" ) {
        
        if(heightUnit === "cm") {
          height = height * 0.01;
        } else if(heightUnit === "ft") {
          height = height * 0.3048;
        }
        
        if(weightUnit === "lbs") {
          weight = weight * 0.453592;
        }
        
      bmiVal = getBMI(weight,height);
    }
  
  if(bmiVal!== "") {
    $('#response').html("BMI is " + bmiVal);
    $('.l').removeClass('success');
    $('#l_'+ getBMIRange(bmiVal)).addClass('success');
  }
}

function getBMI(weight, height){
  return (weight/(height*height)).toFixed(2);
}

function getBMIRange(bmiIndex){
  var level;
  if(bmiIndex < 15) {
    level = 1;
  } else if (bmiIndex >= 15 && bmiIndex < 16) {
    level = 2;
  } else if (bmiIndex >= 16 && bmiIndex < 18.5) {
    level = 3;
  } else if (bmiIndex >= 18.5 && bmiIndex < 25) {
    level = 4;
  } else if (bmiIndex >= 25 && bmiIndex < 30) {
    level = 5;
  } else if (bmiIndex >= 30 && bmiIndex < 35) {
    level = 6;
  } else if (bmiIndex >= 35 && bmiIndex < 40) {
    level = 7;
  } else {
    level = 8;
  }
  
  return level;
}

// UNIT CONV

var conQuantities = [
    {
        'name' : 'angle',
        'units' : [
            ["arcminute",   1/(360*60)],
            ["arcsecond",   1/(360*3600)],
            ["circle",      1],
            ["degree",      1/360],
            ["gon",         1/400],
            ["grad",        1/400],
            ["milN",        1/6400],
            ["milSU",       1/6000],
            ["milS",        1/6300],
            ["octant",      0.125],
            ["quadrant",    0.25],
            ["radian",      1 / (2 * 3.14)],
            ["revolution",  1],
            ["sextant",     1/6],
            ["sign",        1/12],
            ["turn",        1]
        ]
    },
	{
        'name' : 'area',
        'units' : [
			["acre",     4046.8564224],
			["are",      100],
			["hectares",  1e4],
			["sqcm",      1e-4],
			["sqft",      0.09290304],
			["sqkm",      1e6],
			["sqm",       1],
			["sqml",      2589988.110336],
			["sqy",       0.83612736]
        ]
    },
	{
        'name' : 'length',
        'units' : [
			["centimeter",   0.01],
			["fathom",       1.8288],
			["feet",         0.3048],
			["furlongs",     201.168],
			["inch",         0.0254],
			["kilometer",    1000],
			["lightyears",   9.460528405e15],
			["meters",       1],
			["micrometer",   1e-6],
			["nanometer",    1e-6],
			["mile",         1609.344],
			["millimeter",   0.001],
			["parsecs",      3.0856776e16],
			["yard",         0.9144]
        ]
    },
	{
        'name' : 'data',
        'units' : [
		  ["bit",  0.125],
		  ["byte", 1],
		  ["kbit", 128],
		  ["kb",   1024],
		  ["mBit", 131072],
		  ["mb",   1048576],
		  ["gBit", 134217728],
		  ["gb",   1073741824],
		  ["nibble",0.5]
        ]
    },
	{
        'name' : 'energy',
        'units' : [
		  ["calories",    4.1868],
		  ["ev",          1.60219e-19],
		  ["joules",      1],
		  ["kilocalories",4186.8],
		  ["nm",          1],
		  ["wh",          3600]
        ]
    },
	{
        'name' : 'temp',
        'units' : [
		  ["c",    1],
		  ["f",    1],
		  ["k",    1]
        ]
    },
	{
        'name' : 'mass',
        'units' : [
			["carats",     0.0002],
			["grains",      0.00006479891],
			["grams",      1e-3],
			["kg",         1],
			["ounces",     0.0311034768],
			["pounds",     0.45359237],
			["tonnes",     1000]
        ]
    },
	{
        'name' : 'speed',
        'units' : [
			["fs", 		0.3048],
			["kmh", 	0.2777777777777778],
			["kms",     1000],
			["mh",  	0.0002777777777777778],
			["ms",      1],
			["mis",     1609.344],
			["mih",  	0.44704],
			["k",     	0.5144444444444444444],
			["l",     	2.9979e8],
			["s",     	343]
        ]
    },
	{
        'name' : 'time',
        'units' : [
			["centuries",    3153600000],
			["days",         86400],
			["decades",      315360000],
			["fortnights",   1209600],
			["hours",        3600],
			["microseconds", 1e-6],
			["millenia",     31536000000],
			["milliseconds", 1e-3],
			["minutes",      60],
			["months",       2628000],
			["nanoseconds",  1e-9],
			["seconds",      1],
			["weeks",        604800],
			["years",        31536000]
        ]
    },
	{
        'name' : 'volume',
        'units' : [
			["ug",    	3.785411784],
			["uq",     	0.946352946],
			["up",    	0.473176473],
			["l",     	1],
			["ig",    	4.54609],
			["iq",     	1.1365225],
			["ip",     	0.56826125]
        ]
    }
    
];


function unitConv(){
  showModule('#unitConv','Unit Convertor');
  
  //default select
  $('#unitSelector option[value="length"]').attr("selected",true);
  
  $( '.convIn' ).width( 150 );
  
	// inital conversion
	performConversion();
	
  $( "#unitSelector" ).change(function() {
     var selVal = $('#unitSelector option:selected').val();
      $('.selectors').addClass('hidden');
      $('.'+selVal).removeClass('hidden');
	  $('input[name=inputIn]').val('1');
	  performConversion();
  });

    $( "input[name=inputIn]" ).keyup(function() {
      performConversion();
  });
	$( "input[name=inputOut]" ).keyup(function() {
      performBackConversion();
  });

   $( ".convIn" ).change(function() {
	   console.log('conv');
	   performConversion();
  });
}

function performBackConversion(){
	$('input[name=inputIn]').parent().removeClass('has-error');
   var selVal = $('#unitSelector option:selected').val();
	if($.isNumeric($('input[name=inputIn]').val()) ) {
   		var res = convertQuantity(selVal,
				   $('input[name=inputOut]').val(),
				   $('.'+selVal+' #selectOut option:selected').val(),
				   $('.'+selVal+' #selectIn option:selected').val());   
   		$('input[name=inputIn]').val(res.toString());
	} else {
		$('input[name=inputIn]').parent().addClass('has-error');
	}
}

function performConversion(){
	$('input[name=inputIn]').parent().removeClass('has-error');
	var selVal = $('#unitSelector option:selected').val();
	if($.isNumeric($('input[name=inputIn]').val()) ) {
		var res = convertQuantity(selVal,
		   $('input[name=inputIn]').val(),
		   $('.'+selVal+' #selectIn option:selected').val(),
		   $('.'+selVal+' #selectOut option:selected').val());   
		$('input[name=inputOut]').val(res.toString());
	} else {
		$('input[name=inputIn]').parent().addClass('has-error');
	}
}

function convertQuantity(unitType, val, fromQ, toQ) {
	var qIndex = getQuantityIndex(unitType);
	var selQuantity = conQuantities[qIndex];
	var fromF = selQuantity.units[findIndexByText(selQuantity,fromQ)][1];
	var toF = selQuantity.units[findIndexByText(selQuantity,toQ)][1];
	console.log(val);
	if(unitType === 'temp') {
		var fromK,toK;
		val = parseInt(val);
		if(fromQ === 'c'){
			fromK = val +  273.15;
			console.log(fromK);
		} else if(fromQ === 'f') {
			fromK = 5/9 * (val + 459.67);
		} else {
			fromK = val;
		}
		console.log(fromK);
		if(toQ === 'c') {
			toK = fromK - 273.15;
		} else if(toQ === 'f') {
			toK = 9/5 * fromK - 459.67;
		} else {
			toK = fromK;
		}
		return Number((toK).toFixed(2));
		
	} else {
		return Number((val * fromF / toF).toFixed(8));
	}
}

function getQuantityIndex(name) {
  for (var i=0; i<conQuantities.length; i++) {
    if (name == conQuantities[i].name) return i;
  }
}

function findIndexByText(qArr, aText) {
  for (var i=0; i<qArr.units.length; i++) {
    if (qArr.units[i][0] == aText) return i;
  }
  return -1;
}


// Commmon

function showModule(className,moduleName) {
    var module;
    for	(index = 0; index < modules.length; index++) {
      module = modules[index];
      $('#'+module.method).addClass('hidden');
      console.log(module.method);
    }
  
  $('#heading').html(moduleName);
  $(className).removeClass('hidden');
    
}