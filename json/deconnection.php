<?php
/**
 * Created by PhpStorm.
 * User: s16008030
 * Date: 22/02/18
 * Time: 09:07
 */

session_start();
$retour = new stdClass();






session_destroy();
$retour->est_connecte =false;
$retour->message ='disconnected';



header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($retour);