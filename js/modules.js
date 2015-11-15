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
  },
  {
    "name" : "Regex Tester",
    "method" : "regex"
  },
  {
    "name" : "MD2 & MD5 Hash",
    "method" : "md2hash"
  }
  
  
  // Resistor Color code
  // xml json validator

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
	jQuery.get('templates/regex.html', function(data) {
        $('#content-body').append(hideDiv('regex', data));
    });
	jQuery.get('templates/md2hash.html', function(data) {
        $('#content-body').append(hideDiv('md2hash', data));
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

//REGEX

function regex(){
	showModule('#regex','Regular Expression Tester');
	
	$('.regIn').keyup(function () {
		if($('#dataStr').val()!=='') {
			var re = new RegExp($('#regexStr').val(), 'g');
			var match = $('#dataStr').val().match(re);
			console.log(match);
			var l = match.length;
			var str = '';
			for(var i = 0; i < l; i++) {
				str+=match[i]+', ';
			}
			$('#words').html(str.substring(0,str.length-2));
		}
	});
}

// MD2 hash

function md2hash(){
	showModule('#md2hash','MD2 & MD5 Hash');
	
	$('#hashStr').keyup(function () {
		$('#md2HashOp').val(md2($('#hashStr').val()));		
		$('#md5HashOp').val(md5($('#hashStr').val()));		
	});
	 $(".hash").focus(function() {
		 $(this).select(); 
	 } );
}

/*
 * js-md5 v0.2.1
 * https://github.com/emn178/js-md2
 *
 * Copyright 2014-2015, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(h,v){"object"==typeof process&&process.versions&&process.versions.node&&(h=global);var u="function"==typeof define&&define.amd,q="0123456789abcdef".split(""),r=[41,46,67,201,162,216,124,1,61,54,84,161,236,240,6,19,98,167,5,243,192,199,115,140,152,147,43,217,188,76,130,202,30,155,87,60,253,212,224,22,103,66,111,24,138,23,229,18,190,78,196,214,218,158,222,73,160,251,245,142,187,47,238,122,169,104,121,145,21,178,7,63,148,194,16,137,11,34,95,33,128,127,93,154,90,144,50,39,53,62,204,231,191,
247,151,3,255,25,48,179,72,165,181,209,215,94,146,42,172,86,170,198,79,184,56,210,150,164,125,182,118,252,107,226,156,116,4,241,69,157,112,89,100,113,135,32,134,91,207,101,230,45,168,2,27,96,37,173,174,176,185,246,28,70,97,105,52,64,126,15,85,71,163,35,221,81,175,58,195,92,249,206,186,197,234,38,44,83,13,110,133,40,132,9,211,223,205,244,65,129,77,82,106,220,55,200,108,193,171,250,36,225,123,8,12,189,177,74,120,136,149,139,227,99,232,109,233,203,213,254,59,0,29,57,242,239,183,14,102,88,208,228,166,
119,114,248,235,117,75,10,49,68,80,180,143,237,31,26,219,153,141,51,159,17,131,20],c=[],a=[],k=[],g=function(e){var d,b,l,f,h=0,g=1,m=0,n=0,p=0,t=e.length;for(b=0;16>b;++b)a[b]=k[b]=0;c[16]=c[17]=c[18]=0;do{c[0]=c[16];c[1]=c[17];c[2]=c[18];c[16]=c[17]=c[18]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0;for(b=n;m<t&&16>b;++m)d=e.charCodeAt(m),128>d?c[b++]=d:(2048>d?c[b++]=192|d>>6:(55296>d||57344<=d?c[b++]=224|d>>12:(d=65536+((d&1023)<<10|e.charCodeAt(++m)&1023),c[b++]=240|
d>>18,c[b++]=128|d>>12&63),c[b++]=128|d>>6&63),c[b++]=128|d&63);p+=b-n;n=b-16;if(m==t&&16>b)for(g=2,f=16-(p&15);16>b;++b)c[b]=f;for(b=0;16>b;++b)k[b]^=r[c[b]^h],h=k[b];for(b=0;b<g;++b)for(d=0===b?c:k,a[16]=d[0],a[32]=a[16]^a[0],a[17]=d[1],a[33]=a[17]^a[1],a[18]=d[2],a[34]=a[18]^a[2],a[19]=d[3],a[35]=a[19]^a[3],a[20]=d[4],a[36]=a[20]^a[4],a[21]=d[5],a[37]=a[21]^a[5],a[22]=d[6],a[38]=a[22]^a[6],a[23]=d[7],a[39]=a[23]^a[7],a[24]=d[8],a[40]=a[24]^a[8],a[25]=d[9],a[41]=a[25]^a[9],a[26]=d[10],a[42]=a[26]^
a[10],a[27]=d[11],a[43]=a[27]^a[11],a[28]=d[12],a[44]=a[28]^a[12],a[29]=d[13],a[45]=a[29]^a[13],a[30]=d[14],a[46]=a[30]^a[14],a[31]=d[15],a[47]=a[31]^a[15],d=f=0;18>d;++d){for(l=0;48>l;++l)a[l]=f=a[l]^r[f];f=f+d&255}}while(1==g);e="";for(b=0;16>b;++b)e+=q[a[b]>>4&15]+q[a[b]&15];return e};!h.JS_MD2_TEST&&"object"==typeof module&&module.exports?module.exports=g:(u&&define(function(){return g}),h.md2=g)})(this);

/*
 * js-md5 v0.3.0
 * https://github.com/emn178/js-md5
 *
 * Copyright 2014-2015, emn178@gmail.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(q,F){
	var u="undefined"!=typeof module;u&&(q=global,q.JS_MD5_TEST&&(q.navigator={userAgent:"Firefox"}));var C=(q.JS_MD5_TEST||!u)&&-1!=navigator.userAgent.indexOf("Firefox"),y=!q.JS_MD5_TEST&&"undefined"!=typeof ArrayBuffer,f="0123456789abcdef".split(""),D=[128,32768,8388608,-2147483648],t=[0,8,16,24],e=[],r;if(y){var A=new ArrayBuffer(68);r=new Uint8Array(A);e=new Uint32Array(A)}var x=function(g){var q="string"!=typeof g;q&&g.constructor==ArrayBuffer&&(g=new Uint8Array(g));var k,l,m,n,b,
a,d,c,h,u=!0,x=!1,p=0,v=0,z=0,w=g.length;e[16]=0;do{e[0]=e[16];e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0;if(q)if(y)for(a=v;p<w&&64>a;++p)r[a++]=g[p];else for(a=v;p<w&&64>a;++p)e[a>>2]|=g[p]<<t[a++&3];else if(y)for(a=v;p<w&&64>a;++p)b=g.charCodeAt(p),128>b?r[a++]=b:(2048>b?r[a++]=192|b>>6:(55296>b||57344<=b?r[a++]=224|b>>12:(b=65536+((b&1023)<<10|g.charCodeAt(++p)&1023),r[a++]=240|b>>18,r[a++]=128|b>>12&63),r[a++]=128|b>>6&63),r[a++]=128|b&63);else for(a=
v;p<w&&64>a;++p)b=g.charCodeAt(p),128>b?e[a>>2]|=b<<t[a++&3]:(2048>b?e[a>>2]|=(192|b>>6)<<t[a++&3]:(55296>b||57344<=b?e[a>>2]|=(224|b>>12)<<t[a++&3]:(b=65536+((b&1023)<<10|g.charCodeAt(++p)&1023),e[a>>2]|=(240|b>>18)<<t[a++&3],e[a>>2]|=(128|b>>12&63)<<t[a++&3]),e[a>>2]|=(128|b>>6&63)<<t[a++&3]),e[a>>2]|=(128|b&63)<<t[a++&3]);z+=a-v;v=a-64;p==w&&(e[a>>2]|=D[a&3],++p);p>w&&56>a&&(e[14]=z<<3,x=!0);u?(b=e[0]-680876937,b=(b<<7|b>>>25)-271733879<<0,c=(-1732584194^b&2004318071)+e[1]-117830708,c=(c<<12|c>>>
20)+b<<0,d=(-271733879^c&(b^-271733879))+e[2]-1126478375,d=(d<<17|d>>>15)+c<<0,a=(b^d&(c^b))+e[3]-1316259209):(b=k,a=l,d=m,c=n,b+=(c^a&(d^c))+e[0]-680876936,b=(b<<7|b>>>25)+a<<0,c+=(d^b&(a^d))+e[1]-389564586,c=(c<<12|c>>>20)+b<<0,d+=(a^c&(b^a))+e[2]+606105819,d=(d<<17|d>>>15)+c<<0,a+=(b^d&(c^b))+e[3]-1044525330);a=(a<<22|a>>>10)+d<<0;b+=(c^a&(d^c))+e[4]-176418897;b=(b<<7|b>>>25)+a<<0;c+=(d^b&(a^d))+e[5]+1200080426;c=(c<<12|c>>>20)+b<<0;d+=(a^c&(b^a))+e[6]-1473231341;d=(d<<17|d>>>15)+c<<0;a+=(b^d&
(c^b))+e[7]-45705983;a=(a<<22|a>>>10)+d<<0;b+=(c^a&(d^c))+e[8]+1770035416;b=(b<<7|b>>>25)+a<<0;c+=(d^b&(a^d))+e[9]-1958414417;c=(c<<12|c>>>20)+b<<0;d+=(a^c&(b^a))+e[10]-42063;d=(d<<17|d>>>15)+c<<0;a+=(b^d&(c^b))+e[11]-1990404162;a=(a<<22|a>>>10)+d<<0;b+=(c^a&(d^c))+e[12]+1804603682;b=(b<<7|b>>>25)+a<<0;c+=(d^b&(a^d))+e[13]-40341101;c=(c<<12|c>>>20)+b<<0;d+=(a^c&(b^a))+e[14]-1502002290;d=(d<<17|d>>>15)+c<<0;a+=(b^d&(c^b))+e[15]+1236535329;a=(a<<22|a>>>10)+d<<0;b+=(d^c&(a^d))+e[1]-165796510;b=(b<<5|
b>>>27)+a<<0;c+=(a^d&(b^a))+e[6]-1069501632;c=(c<<9|c>>>23)+b<<0;d+=(b^a&(c^b))+e[11]+643717713;d=(d<<14|d>>>18)+c<<0;a+=(c^b&(d^c))+e[0]-373897302;a=(a<<20|a>>>12)+d<<0;b+=(d^c&(a^d))+e[5]-701558691;b=(b<<5|b>>>27)+a<<0;c+=(a^d&(b^a))+e[10]+38016083;c=(c<<9|c>>>23)+b<<0;d+=(b^a&(c^b))+e[15]-660478335;d=(d<<14|d>>>18)+c<<0;a+=(c^b&(d^c))+e[4]-405537848;a=(a<<20|a>>>12)+d<<0;b+=(d^c&(a^d))+e[9]+568446438;b=(b<<5|b>>>27)+a<<0;c+=(a^d&(b^a))+e[14]-1019803690;c=(c<<9|c>>>23)+b<<0;d+=(b^a&(c^b))+e[3]-
187363961;d=(d<<14|d>>>18)+c<<0;a+=(c^b&(d^c))+e[8]+1163531501;a=(a<<20|a>>>12)+d<<0;b+=(d^c&(a^d))+e[13]-1444681467;b=(b<<5|b>>>27)+a<<0;c+=(a^d&(b^a))+e[2]-51403784;c=(c<<9|c>>>23)+b<<0;d+=(b^a&(c^b))+e[7]+1735328473;d=(d<<14|d>>>18)+c<<0;a+=(c^b&(d^c))+e[12]-1926607734;a=(a<<20|a>>>12)+d<<0;h=a^d;b+=(h^c)+e[5]-378558;b=(b<<4|b>>>28)+a<<0;c+=(h^b)+e[8]-2022574463;c=(c<<11|c>>>21)+b<<0;h=c^b;d+=(h^a)+e[11]+1839030562;d=(d<<16|d>>>16)+c<<0;a+=(h^d)+e[14]-35309556;a=(a<<23|a>>>9)+d<<0;h=a^d;b+=(h^
c)+e[1]-1530992060;b=(b<<4|b>>>28)+a<<0;c+=(h^b)+e[4]+1272893353;c=(c<<11|c>>>21)+b<<0;h=c^b;d+=(h^a)+e[7]-155497632;d=(d<<16|d>>>16)+c<<0;a+=(h^d)+e[10]-1094730640;a=(a<<23|a>>>9)+d<<0;h=a^d;b+=(h^c)+e[13]+681279174;b=(b<<4|b>>>28)+a<<0;c+=(h^b)+e[0]-358537222;c=(c<<11|c>>>21)+b<<0;h=c^b;d+=(h^a)+e[3]-722521979;d=(d<<16|d>>>16)+c<<0;a+=(h^d)+e[6]+76029189;a=(a<<23|a>>>9)+d<<0;h=a^d;b+=(h^c)+e[9]-640364487;b=(b<<4|b>>>28)+a<<0;c+=(h^b)+e[12]-421815835;c=(c<<11|c>>>21)+b<<0;h=c^b;d+=(h^a)+e[15]+530742520;
d=(d<<16|d>>>16)+c<<0;a+=(h^d)+e[2]-995338651;a=(a<<23|a>>>9)+d<<0;b+=(d^(a|~c))+e[0]-198630844;b=(b<<6|b>>>26)+a<<0;c+=(a^(b|~d))+e[7]+1126891415;c=(c<<10|c>>>22)+b<<0;d+=(b^(c|~a))+e[14]-1416354905;d=(d<<15|d>>>17)+c<<0;a+=(c^(d|~b))+e[5]-57434055;a=(a<<21|a>>>11)+d<<0;b+=(d^(a|~c))+e[12]+1700485571;b=(b<<6|b>>>26)+a<<0;c+=(a^(b|~d))+e[3]-1894986606;c=(c<<10|c>>>22)+b<<0;d+=(b^(c|~a))+e[10]-1051523;d=(d<<15|d>>>17)+c<<0;a+=(c^(d|~b))+e[1]-2054922799;a=(a<<21|a>>>11)+d<<0;b+=(d^(a|~c))+e[8]+1873313359;
b=(b<<6|b>>>26)+a<<0;c+=(a^(b|~d))+e[15]-30611744;c=(c<<10|c>>>22)+b<<0;d+=(b^(c|~a))+e[6]-1560198380;d=(d<<15|d>>>17)+c<<0;a+=(c^(d|~b))+e[13]+1309151649;a=(a<<21|a>>>11)+d<<0;b+=(d^(a|~c))+e[4]-145523070;b=(b<<6|b>>>26)+a<<0;c+=(a^(b|~d))+e[11]-1120210379;c=(c<<10|c>>>22)+b<<0;d+=(b^(c|~a))+e[2]+718787259;d=(d<<15|d>>>17)+c<<0;a+=(c^(d|~b))+e[9]-343485551;a=(a<<21|a>>>11)+d<<0;u?(k=b+1732584193<<0,l=a-271733879<<0,m=d-1732584194<<0,n=c+271733878<<0,u=!1):(k=k+b<<0,l=l+a<<0,m=m+d<<0,n=n+c<<0)}while(!x);
return C?(g=f[k>>4&15]+f[k&15],g+=f[k>>12&15]+f[k>>8&15],g+=f[k>>20&15]+f[k>>16&15],g+=f[k>>28&15]+f[k>>24&15],g+=f[l>>4&15]+f[l&15],g+=f[l>>12&15]+f[l>>8&15],g+=f[l>>20&15]+f[l>>16&15],g+=f[l>>28&15]+f[l>>24&15],g+=f[m>>4&15]+f[m&15],g+=f[m>>12&15]+f[m>>8&15],g+=f[m>>20&15]+f[m>>16&15],g+=f[m>>28&15]+f[m>>24&15],g+=f[n>>4&15]+f[n&15],g+=f[n>>12&15]+f[n>>8&15],g+=f[n>>20&15]+f[n>>16&15],g+=f[n>>28&15]+f[n>>24&15]):f[k>>4&15]+f[k&15]+f[k>>12&15]+f[k>>8&15]+f[k>>20&15]+f[k>>16&15]+f[k>>28&15]+f[k>>
24&15]+f[l>>4&15]+f[l&15]+f[l>>12&15]+f[l>>8&15]+f[l>>20&15]+f[l>>16&15]+f[l>>28&15]+f[l>>24&15]+f[m>>4&15]+f[m&15]+f[m>>12&15]+f[m>>8&15]+f[m>>20&15]+f[m>>16&15]+f[m>>28&15]+f[m>>24&15]+f[n>>4&15]+f[n&15]+f[n>>12&15]+f[n>>8&15]+f[n>>20&15]+f[n>>16&15]+f[n>>28&15]+f[n>>24&15]};if(!q.JS_MD5_TEST&&u){var B=require("crypto"),E=require("buffer").Buffer;module.exports=function(e){if("string"==typeof e)return 80>=e.length||183>=e.length&&!/[^\x00-\x7F]/.test(e)?x(e):B.createHash("md5").update(e,"utf8").digest("hex");
e.constructor==ArrayBuffer&&(e=new Uint8Array(e));return 370>=e.length?x(e):B.createHash("md5").update(new E(e)).digest("hex")}}else q&&(q.md5=x)})(this);

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