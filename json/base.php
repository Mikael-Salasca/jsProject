<?php
/**
 * Created by PhpStorm.
 * User: MIKSS
 * Date: 10/03/2018
 * Time: 15:29
 */

$user = '130266';
$pass = '123456789';
$dsn = 'mysql:host= mysql-mikaelsalasca.alwaysdata.net;dbname=mikaelsalasca_post-it';

try {
    echo $user, $pass, $dsn;
    $db = new PDO($dsn, $user, $pass);
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
?>