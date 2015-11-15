var modules = [
  
  {
    "name" : "Unit Converter",
    "method" : "unitConv"
  },
  {
    "name" : "Character Counter",
    "method" : "charCount"
  },
  {
    "name" : "BMI Calculator",
    "method" : "bmiCalc"
  },
  {
    "name" : "Base 64 Encoder",
    "method" : "base64"
  },
  {
    "name" : "XML - JSON",
    "method" : "xmljson"
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
	jQuery.get('templates/charCount.html', function(data) {
        $('#content-body').append(hideDiv('charCount', data));
    });
	jQuery.get('templates/base64.html', function(data) {
        $('#content-body').append(hideDiv('base64', data));
    });
	jQuery.get('templates/xmljson.html', function(data) {
        $('#content-body').append(hideDiv('xmljson', data));
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
			["cent",      40.4685642],
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
  showModule('#unitConv','Unit Converter');
  
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

// CHAR COUNT

function charCount(){
	showModule('#charCount','Character Counter');

	$( "#charCntTA" ).keyup(function() {
		var tAVal = $("#charCntTA").val().trim();
		if(tAVal==='') {
			$('#noOfChars').html('');
			$('#noOfWords').html('');
			$('#noOfLines').html('');
			$('#noOfOccur').html('');
		} else {
			$('#noOfChars').html(tAVal.length);
			$('#noOfWords').html(tAVal.split(' ').length);
			$('#noOfLines').html(tAVal.split('\n').length);	
			if($( "#wordOccur" ).val().trim() !== ''){
				calculateOccurences(tAVal);
			}
		}
	});
	$( "#wordOccur" ).keyup(function() {
		var tAVal = $("#charCntTA").val().trim();
		calculateOccurences(tAVal);
	});
}

function calculateOccurences(){
	var tAVal = $("#charCntTA").val().trim();
	if(tAVal==='') {
		$('#noOfOccur').html('');	
	} else {
		$('#noOfOccur').html(occurrences(tAVal,$( "#wordOccur" ).val()));					
	}
}

function occurrences(string, subString) {
    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);
    var n = 0,
        pos = 0,
        step = subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

// BASE 64
function base64(){
	showModule('#base64','Base 64 Encoder/Decorder');
	
	$( "#normalStr" ).keyup(function() {
		$('#encStr').parent().removeClass('has-error');
		console.log('up');
		var encodedData = btoa($( "#normalStr" ).val());

		$('#encStr').val(encodedData);
	});	
	$( "#encStr" ).keyup(function() {
		try {
			var encodedData = atob($( "#encStr" ).val());
			$('#encStr').parent().removeClass('has-error');
			$('#normalStr').val(encodedData);
		} catch(e) {
			$('#encStr').parent().addClass('has-error');
		}
	});
}

// XML JSON
function xmljson(){
	showModule('#xmljson','XML - JSON Converter');
	
	$( "#ip" ).keyup(function() {
		
		$( "#ip" ).parent().removeClass('has-error');
		$('#inputErr').html('');
		
		if($( "#ip" ).val().startsWith('<')){
			$('#convBtn').html('XML to JSON');
		} else {
			$('#convBtn').html('JSON to XML');

		}
	});	
	$( "#convBtn" ).click(function() {
		var encodedData;
		try{
			if($( "#ip" ).val().startsWith('<')){
				encodedData = xml2json(parseXml($( "#ip" ).val()),' ');
			} else {
				encodedData = json2xml(JSON.parse($( "#ip" ).val()),' ');
			}
		} catch (err) {
			console.log(err.message);
			$( "#ip" ).parent().addClass('has-error');
			$('#inputErr').html(err.message);
		}
		$('#op').val(encodedData);
	});	
}

function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..

            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("cannot parse xml string!");
   return dom;
}

/*	This work is licensed under Creative Commons GNU LGPL License.

	License: http://creativecommons.org/licenses/LGPL/2.1/
   Version: 0.9
	Author:  Stefan Goessner/2006
	Web:     http://goessner.net/ 
*/
function json2xml(o, tab) {
   var toXml = function(v, name, ind) {
      var xml = "";
      if (v instanceof Array) {
         for (var i=0, n=v.length; i<n; i++)
            xml += ind + toXml(v[i], name, ind+"\t") + "\n";
      }
      else if (typeof(v) == "object") {
         var hasChild = false;
         xml += ind + "<" + name;
         for (var m in v) {
            if (m.charAt(0) == "@")
               xml += " " + m.substr(1) + "=\"" + v[m].toString() + "\"";
            else
               hasChild = true;
         }
         xml += hasChild ? ">" : "/>";
         if (hasChild) {
            for (var m in v) {
               if (m == "#text")
                  xml += v[m];
               else if (m == "#cdata")
                  xml += "<![CDATA[" + v[m] + "]]>";
               else if (m.charAt(0) != "@")
                  xml += toXml(v[m], m, ind+"\t");
            }
            xml += (xml.charAt(xml.length-1)=="\n"?ind:"") + "</" + name + ">";
         }
      }
      else {
         xml += ind + "<" + name + ">" + v.toString() +  "</" + name + ">";
      }
      return xml;
   }, xml="";
   for (var m in o)
      xml += toXml(o[m], m, "");
   return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
}

/*	This work is licensed under Creative Commons GNU LGPL License.

	License: http://creativecommons.org/licenses/LGPL/2.1/
   Version: 0.9
	Author:  Stefan Goessner/2006
	Web:     http://goessner.net/ 
*/
function xml2json(xml, tab) {
   var X = {
      toObj: function(xml) {
         var o = {};
         if (xml.nodeType==1) {   // element node ..
            if (xml.attributes.length)   // element with attributes  ..
               for (var i=0; i<xml.attributes.length; i++)
                  o["@"+xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue||"").toString();
            if (xml.firstChild) { // element has child nodes ..
               var textChild=0, cdataChild=0, hasElementChild=false;
               for (var n=xml.firstChild; n; n=n.nextSibling) {
                  if (n.nodeType==1) hasElementChild = true;
                  else if (n.nodeType==3 && n.nodeValue.match(/[^ \f\n\r\t\v]/)) textChild++; // non-whitespace text
                  else if (n.nodeType==4) cdataChild++; // cdata section node
               }
               if (hasElementChild) {
                  if (textChild < 2 && cdataChild < 2) { // structured element with evtl. a single text or/and cdata node ..
                     X.removeWhite(xml);
                     for (var n=xml.firstChild; n; n=n.nextSibling) {
                        if (n.nodeType == 3)  // text node
                           o["#text"] = X.escape(n.nodeValue);
                        else if (n.nodeType == 4)  // cdata node
                           o["#cdata"] = X.escape(n.nodeValue);
                        else if (o[n.nodeName]) {  // multiple occurence of element ..
                           if (o[n.nodeName] instanceof Array)
                              o[n.nodeName][o[n.nodeName].length] = X.toObj(n);
                           else
                              o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                        }
                        else  // first occurence of element..
                           o[n.nodeName] = X.toObj(n);
                     }
                  }
                  else { // mixed content
                     if (!xml.attributes.length)
                        o = X.escape(X.innerXml(xml));
                     else
                        o["#text"] = X.escape(X.innerXml(xml));
                  }
               }
               else if (textChild) { // pure text
                  if (!xml.attributes.length)
                     o = X.escape(X.innerXml(xml));
                  else
                     o["#text"] = X.escape(X.innerXml(xml));
               }
               else if (cdataChild) { // cdata
                  if (cdataChild > 1)
                     o = X.escape(X.innerXml(xml));
                  else
                     for (var n=xml.firstChild; n; n=n.nextSibling)
                        o["#cdata"] = X.escape(n.nodeValue);
               }
            }
            if (!xml.attributes.length && !xml.firstChild) o = null;
         }
         else if (xml.nodeType==9) { // document.node
            o = X.toObj(xml.documentElement);
         }
         else
            alert("unhandled node type: " + xml.nodeType);
         return o;
      },
      toJson: function(o, name, ind) {
         var json = name ? ("\""+name+"\"") : "";
         if (o instanceof Array) {
            for (var i=0,n=o.length; i<n; i++)
               o[i] = X.toJson(o[i], "", ind+"\t");
            json += (name?":[":"[") + (o.length > 1 ? ("\n"+ind+"\t"+o.join(",\n"+ind+"\t")+"\n"+ind) : o.join("")) + "]";
         }
         else if (o == null)
            json += (name&&":") + "null";
         else if (typeof(o) == "object") {
            var arr = [];
            for (var m in o)
               arr[arr.length] = X.toJson(o[m], m, ind+"\t");
            json += (name?":{":"{") + (arr.length > 1 ? ("\n"+ind+"\t"+arr.join(",\n"+ind+"\t")+"\n"+ind) : arr.join("")) + "}";
         }
         else if (typeof(o) == "string")
            json += (name&&":") + "\"" + o.toString() + "\"";
         else
            json += (name&&":") + o.toString();
         return json;
      },
      innerXml: function(node) {
         var s = ""
         if ("innerHTML" in node)
            s = node.innerHTML;
         else {
            var asXml = function(n) {
               var s = "";
               if (n.nodeType == 1) {
                  s += "<" + n.nodeName;
                  for (var i=0; i<n.attributes.length;i++)
                     s += " " + n.attributes[i].nodeName + "=\"" + (n.attributes[i].nodeValue||"").toString() + "\"";
                  if (n.firstChild) {
                     s += ">";
                     for (var c=n.firstChild; c; c=c.nextSibling)
                        s += asXml(c);
                     s += "</"+n.nodeName+">";
                  }
                  else
                     s += "/>";
               }
               else if (n.nodeType == 3)
                  s += n.nodeValue;
               else if (n.nodeType == 4)
                  s += "<![CDATA[" + n.nodeValue + "]]>";
               return s;
            };
            for (var c=node.firstChild; c; c=c.nextSibling)
               s += asXml(c);
         }
         return s;
      },
      escape: function(txt) {
         return txt.replace(/[\\]/g, "\\\\")
                   .replace(/[\"]/g, '\\"')
                   .replace(/[\n]/g, '\\n')
                   .replace(/[\r]/g, '\\r');
      },
      removeWhite: function(e) {
         e.normalize();
         for (var n = e.firstChild; n; ) {
            if (n.nodeType == 3) {  // text node
               if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) { // pure whitespace text node
                  var nxt = n.nextSibling;
                  e.removeChild(n);
                  n = nxt;
               }
               else
                  n = n.nextSibling;
            }
            else if (n.nodeType == 1) {  // element node
               X.removeWhite(n);
               n = n.nextSibling;
            }
            else                      // any other node
               n = n.nextSibling;
         }
         return e;
      }
   };
   if (xml.nodeType == 9) // document node
      xml = xml.documentElement;
   var json = X.toJson(X.toObj(X.removeWhite(xml)), xml.nodeName, "\t");
   return "{\n" + tab + (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) + "\n}";
}
// Commmon

function showModule(className,moduleName) {
	//clear all current tab
	$('.sidebar-nav>li').removeClass('curSubtab');
    var module;
    for	(index = 0; index < modules.length; index++) {
      	module = modules[index];
		$('#'+module.method).addClass('hidden');
		if(module.method===className.substring(1))
			$('.sidebar-nav .'+module.method).addClass('curSubtab');
    }
  
	$('#heading').html(moduleName);
	$(className).removeClass('hidden');
}