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
  
  // Time converter
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
        $('#content-body').html(hideDiv('bmiCalc', data));
    });
}


//BMI CALC

function bmiCalc() {
  $('#heading').html('BMI Calculator');
  $('#bmiCalc').removeClass('hidden');
  
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



function unitConv(){
  console.log('Inside Unit Converter');
}