<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
	$food = $_GET['food'];
	$foodArray = array('tuna','bacon',beef');
	if(in_array($food,$foodArray))
		echo 'We do have '.$food.'!';
	elseif($food=='')
	echo 'Enter a food you dumbo';
	else
		echo 'Sorry no '.$food.' for you';


echo '</response>';
?>