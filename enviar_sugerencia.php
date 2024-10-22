<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Asegúrate de incluir la ruta correcta a los archivos de PHPMailer
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP para Outlook
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com'; // Servidor SMTP de Outlook
    $mail->SMTPAuth   = true;
    $mail->Username   = 'carlos.criollo@unach.edu.ec'; // Reemplaza con tu correo de Outlook
    $mail->Password   = 'CarlosEduardo13Uni';        // Reemplaza con tu contraseña de Outlook
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Remitente y destinatario
    $mail->setFrom('carlos.criollo@unach.edu.ec', 'Carlos'); // Reemplaza con tu correo y nombre
    $mail->addAddress('carlos.criollo@unach.edu.ec'); // Reemplaza con el correo destinatario

    // Recoge datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $sugerencia = htmlspecialchars($_POST['sugerencia']);

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = "Nueva sugerencia de $nombre";
    $mail->Body    = "Nombre: $nombre<br>Correo: $email<br><br>Sugerencia:<br>$sugerencia";

    // Enviar correo
    $mail->send();
    echo 'Sugerencia enviada correctamente.';
} catch (Exception $e) {
    echo "El correo no se pudo enviar. Error: {$mail->ErrorInfo}";
}
?>
