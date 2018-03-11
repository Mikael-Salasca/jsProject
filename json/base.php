<?php
/**
 * Created by PhpStorm.
 * User: MIKSS
 * Date: 10/03/2018
 * Time: 15:29
 */

//$user = '130266';
//$pass = '123456789';
//$dsn = 'mysql:host= mysql-mikaelsalasca.alwaysdata.net;dbname=mikaelsalasca_post-it';
//
////try {
//    echo $user, $pass, $dsn;
//    $db = new PDO($dsn, $user, $pass);
//} catch (PDOException $e) {
//    print "Erreur !: " . $e->getMessage() . "<br/>";
//    die();
//}


$dbLink = mysqli_connect('mysql-mikaelsalasca.alwaysdata.net', '130266', '123456789')
or die('Erreur de connexion au serveur : ' . mysqli_connect_error());
mysqli_select_db($dbLink , 'mikaelsalasca_post-it')
or die('Erreur dans la sélection de la base : ' . mysqli_error($dbLink)
);