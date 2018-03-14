<?php
/**
 * Created by PhpStorm.
 * User: s16008030
 * Date: 26/02/18
 * Time: 15:08
 **/
phpinfo(); ?>

session_start();
$retour = new stdClass();
$retour->taskname ='';
$retour->taskdate = null;
$retour->tasktime = null;


require_once 'base.php';

if( isset($_POST['taskname']) && isset($_POST['taskdate']) && isset($_POST['tasktime']) ) {
    if( !empty($_POST['taskname']) && !empty($_POST['taskdate']) && !empty($_POST['tasktime']) ) {

        $retour->taskname = $_POST['taskname'];
        $retour->taskdate = $_POST['taskdate'];
        $retour->tasktime = $_POST['tasktime'];



        $query = "INSERT INTO task (NAME, DATE,TIME) VALUES ('$retour->taskname','$retour->taskdate','$retour->tasktime')";
        $taskcreation= $db->prepare($query);
        $taskcreation->execute();
    }
}






header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($retour);