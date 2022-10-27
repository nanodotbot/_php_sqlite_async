<?php
header('Content-Type: application/json');

$file_name = $_FILES["file"]["name"];
$text = $_POST["text"];

move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $file_name);

require 'connect.php';

$statement = $pdo->prepare('INSERT INTO posts (text, image) VALUES (:text, :image)');
$statement->execute([
    ':text' => $text,
    ':image' => $file_name
]);
echo json_encode(['success' => true]);
?>