<?php
/**
 * Created by PhpStorm.
 * User: s16008030
 * Date: 26/02/18
 * Time: 15:08
**/

session_start();
$retour = new stdClass();
$retour->taskname ='';
$retour->taskdate = null;

require_once 'base.php';

if( isset($_POST['taskname']) && isset($_POST['taskdate']) ) {
    if( !empty($_POST['taskname']) && !empty($_POST['taskdate']) ) {
        $retour->taskname = $_POST['taskname'];
        $retour->taskdate = $_POST['taskdate'];
        $query = "INSERT INTO task (NAME, DATE) VALUES ('$retour->taskname','$retour->taskdate')";
        $taskcreation= $db->prepare($query);
        $taskcreation->execute();
    }

}







header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($retour);