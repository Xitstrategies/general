<?php
set_error_handler('chatErrorHandler', E_ALL);

function chatErrorHandler($number, $text, $theFile, $theLine){
	if(ob_get_length()) ob_clean();
	$errorMessage = 'Error: '	.$number.chr(10).
					'Message: '	.$text.chr(10).
					'File: '	.$theFile.chr(10).
					'Line: '	.$theLine;
	echo $errorMessage;
	exit;

}

?>

//JS function does same thing.
//function chatErrorHandler(number, text, theFile, theLine){
// This part, the ? I need to figure out. I am not sure what function gets this and will clean/clear it out
// if(?.length()) ?clean();
//  	var errorMessage = 'Error: '	+number+
// 					'/nMessage: '	+text+
//  					'/nFile: '	+theFile+
//  					'/nLine: '	+theLine;
//  	 return errorMessage;
//}