<!-- resources/views/welcome.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenidx</title>
</head>
<body>
    <div style="background-color: #f8f9fa; padding: 20px;">
        <div style="background-color: #ffffff; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);">
            <h1 style="font-size: 24px; color: #333333; margin-bottom: 20px;">¡Bienvenidx a nuestro sistema!</h1>
            
            <p style="font-size: 16px; color: #555555;">Estimadx {{ $user->name }},</p>

            <p style="font-size: 16px; color: #555555;">Te damos la bienvenida a nuestro sistema. Esperamos que disfrutes de tu experiencia con nosotros.</p>

            <p style="font-size: 16px; color: #555555;">Para comenzar, puedes <a href="{{ url('/sing-up') }}" style="color: #007bff; text-decoration: none;">iniciar sesión en tu cuenta</a> y explorar todas las características que ofrecemos.</p>

            <p style="font-size: 16px; color: #555555;">Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>

            <p style="font-size: 16px; color: #555555;">¡Gracias por unirte a nosotrxs!</p>

            <p style="font-size: 16px; color: #555555;">Atentamente,<br>
                nutrilicious.
            </p>
        </div>
    </div>
</body>
</html>
