<?php
require_once('chat.class.php');

$mode 	= $_POST['mode'];
$id 	= 0;

//bring in the Chat functions from the chat.class.php file
$chat = new Chat();

if($mode=='SendAndRetrieveNew'){
	$name 		= $_POST['name'];
	$message 	= $_POST['message'];
	$color		= $_POST['color'];
	$id			= $_POST['id'];

	if($name != '' || $message != '' || $color !=''){
		//using the function from chat and passing in the correct params
		$chat->postNewMessage($name, $message, $color);
	}
}elseif($mode=='DeleteAndRetrieveNew'){
	//deletes all messages
	$chat->deleteAllMessages();
}elseif($mode=='RetrieveNew'){
	//last message you are looking at
	$id = $_POST['id'];
}

if(ob_get_length()) ob_clean();

//Headers are sent to prevent browsers from caching
header('Cache-Control: no-cache, must-revalidate');
header('Pragma: no-cache');
header('Content-Type: text/xml');

echo $chat->getNewMessage($id);
?>