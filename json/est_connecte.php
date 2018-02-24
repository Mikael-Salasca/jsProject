<?php
/**
 * Created by PhpStorm.
 * User: s16008030
 * Date: 22/02/18
 * Time: 09:00
 */
session_start();

$retour = new stdClass();
$retour->est_connecte = false;

if( isset($_SESSION['log']) && isset($_SESSION['pass']) ) {
    $retour->est_connecte = true;
}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


echo json_encode($retour);