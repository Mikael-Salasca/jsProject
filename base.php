<?php
/**
 * Created by PhpStorm.
 * User: MIKSS
 * Date: 10/03/2018
 * Time: 15:29
 */
$user = '130266';
$pass = '123456789';
try {
    $db = new PDO('mysql:host= mysql-mikaelsalasca.alwaysdata.net;dbname=mikaelsalasca_post-it', $user, $pass);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>