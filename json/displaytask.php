<?php


session_start();
$retour = new stdClass();

require_once 'base.php';

$query = "SELECT * FROM  task";
$result= $db->query($query);
$myTasks = $result->fetchAll();
var_dump($myTasks);





header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($retour);