<?php
$user_name = $_POST["user_name"];
$user_phone = $_POST["user_phone"];


$to = "andriytsvil@gmail.com";
$subject = "Сообщение от SEO-STUDIO (Заказать звонок)";

$message .= "Имя: ".$_POST["user_name"]."\n";
$message .= "Телефон: ".$_POST["user_phone"]."\n";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: krasavchik@andrii-tsvil.adr.com.ua' . "\r\n";

mail($to, $subject, $message, $headers) or die ("Failure");
?>