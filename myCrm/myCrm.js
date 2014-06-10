/**
 * Created by Morgan on 3/10/14.
 */
// can.fixture({
//     "/start": function () { return {}; },
//     "/addCompany": function () { return {}; },
//     "/addContact": function () { return {}; },
//     "/moreCompany": function () { return {}; },
//     "/moreContact": function () { return {}; }
// });

// CRM = can.Map.extend({
// state: can.compute(function(){
//     //
//     //if they choose an option, go to the next state.
//     //Start at the Start
//     return "start";
// })

// });

// Start = can.Map.extend({
//    state: can.compute(function() {
//        return $.post("/start");
//    })
// });

// can.Component.extend({
//     tag: "my-crm",
//     scope: CRM.extend({}),
//     helpers: {
//         isState: function (stateName, options) {
//             if (this.attr("state") == stateName) {
//                 return options.fn(options.scope, options.options)
//             } else {
//                 return options.inverse(options.scope, options.options)
//             }
//         }
//     }

// });

//var xmlHttp = new XMLHttpRequest();
//
//function Process() {
//    if(xmlHttp.readyState == (0||4)){
//        var food = encodeURIComponent(document.getElementById("userInput").value);
//        xmlHttp.open("GET","foodstore.php?food="+food,true);
//        xmlHttp.onreadystatechange=handleServerResponse;
//        xmlHttp.send(null);
//    }else{
//        setTimeout('Process()',1000);
//    }
//// need to watch this video to continue. http://youtu.be/0YyTrxAMC34
//}
//
//function handleServerResponse(){
//	if(xmlHttp.readyState==4){
//		if(xmlHttp.status==200){
//			//Means it was okay
//			var xmlResponse = xmlHttp.responseXML;
//			var xmlDocumentElement = xmlResponse.documentElement;
//			var message = xmlDocumentElement.firstChild.data;
//			document.getElementById("underInput").innerHTML = '<span style='color:blue;'>'+message+'</span>';
//			setTimeout('Process()',1000);
//		}else{
//			alert('something went wrong in handleServerResponse');
//		}
//	}
//
//}

steal('can/control/plugin',
    'can/observe/observe.js',
    'can/map/validations',
    './models/models.js',
    function(){

    });

