<?php
/**
 * Created by PhpStorm.
 * User: s16008030
 * Date: 22/02/18
 * Time: 09:07
 */

session_start();
$retour = new stdClass();
$retour->message ='';
$retour->est_connecte =false;




if( isset($_POST['log']) && isset($_POST['pass']) ) {
    //on suppose logs corrects
    $_SESSION['log'] = $_POST['log'];
    $_SESSION['pass'] = $_POST['pass'];
    $retour->est_connecte = true;
    $retour->message = "ok";
}
else {
    $retour->est_connecte = false;
    $retour->message = "Mauvais logs";

}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($retour);