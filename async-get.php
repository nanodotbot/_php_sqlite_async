<?php
header('Content-Type: application/json');
require 'connect.php';

$statement = $pdo->prepare('SELECT * FROM posts');
$statement->execute();
$posts = $statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($posts);
?>
