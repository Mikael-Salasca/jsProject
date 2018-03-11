<?php
/**
 * Created by PhpStorm.
 * User: MIKSS
 * Date: 10/03/2018
 * Time: 15:29
 */

//$db = mysqli_connect('mysql-mikaelsalasca.alwaysdata.net', '130266', '123456789')
//or die('Erreur de connexion au serveur : ' . mysqli_connect_error());
//mysqli_select_db($db , 'mikaelsalasca_post-it')
//or die('Erreur dans la sélection de la base : ' . mysqli_error($db)
//);

try {
// Connexion à la base de données.
    $dsn = 'mysql:host=mysql-mikaelsalasca.alwaysdata.net;dbname=mikaelsalasca_post-it';
    $db = new PDO($dsn, '130266', '123456789');
// Codage de caractères.
    $db->exec('SET CHARACTER SET utf8');
// Gestion des erreurs sous forme d'exceptions.
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
// Affichage de l'erreur.
    die('Erreur : ' . $e->getMessage());
}


?>