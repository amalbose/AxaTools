var modules = [
  
  {
    "name" : "Axa Utilities",
    "method" : "home"
  },
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
  },
  {
    "name" : "QR Code",
    "method" : "qrCode"
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

	$('#content-body').load('templates/home.html', function(){
		$('.modDiv').click(function(){
			window[$(this).attr('id').replace('OnClick','')]();
		});
	});

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
	jQuery.get('templates/qrCode.html', function(data) {
        $('#content-body').append(hideDiv('qrCode', data));
    });

}

//HOME

function home(){
	$('.sidebar-nav>li').removeClass('curSubtab');
	$('.sidebar-nav .home').addClass('curSubtab');
	$('.mod').addClass('hidden');
  	$('#home').removeClass('hidden');
	$('#heading').html('AxaTools');
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
		if($('#dataStr').val()!=='' && $('#regexStr').val()!=='') {
			var re = new RegExp($('#regexStr').val(), 'g');
			var match = $('#dataStr').val().match(re);
			if(match != null){
				var l = match.length;
				var str = '';
				for(var i = 0; i < l; i++) {
					str+=match[i]+', ';
				}
				$('#words').html(str.substring(0,str.length-2));
				$('#noOfMatch').html(l);	
			} else {
				$('#words').html('');
				$('#noOfMatch').html('');
			}
			
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

// QR Code

function qrCode(){
	showModule('#qrCode','QR Code Generator');
	
	$('#qrStr').keyup(function () {
		$('#qrcode').html("");
		new QRCode(document.getElementById("qrcode"), $('#qrStr').val());
	});

}

/* 
http://davidshimjs.github.io/qrcodejs/ 
*/
var QRCode;!function(){
	function a(a){
	this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

		
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
		
function hideDiv(idVal, htmlVal) {
  return '<div id='+idVal+' class="hidden mod">' + htmlVal + "</div>";
}
		
function showDiv(idVal, htmlVal) {
  return '<div id='+idVal+' class="mod">' + htmlVal + "</div>";
}