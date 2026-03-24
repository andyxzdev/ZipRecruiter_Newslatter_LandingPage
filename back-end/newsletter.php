<?php
header("Access-Control-Allow-Origin: http://localhost:5173"); //dominio real aqui dps
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$body = json_decode(file_get_contents("php://input"), true);

$name  = isset($body['name'])  ? htmlspecialchars(trim($body['name']))  : "";
$email = isset($body['email']) ? htmlspecialchars(trim($body['email'])) : "";

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["error" => "Name and email are required."]);
    exit();
}

$ULTRAMSG_TOKEN    = "ibxfxyvi4tj1j6s7";
$ULTRAMSG_INSTANCE = "instance166945";
$WHATSAPP_NUMBER   = "5524993215864";

$message  = "📬 *New Newsletter Signup!*\n\n";
$message .= "👤 *Name:* {$name}\n";
$message .= "📧 *Email:* {$email}\n";
$message .= "🕐 *Time:* " . date("d/m/Y H:i:s");

$url = "https://api.ultramsg.com/{$ULTRAMSG_INSTANCE}/messages/chat";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    "token" => $ULTRAMSG_TOKEN,
    "to"    => $WHATSAPP_NUMBER,
    "body"  => $message,
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// ✅ Adicione estas duas linhas
// curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 200) {
    echo json_encode(["success" => true, "message" => "Sent!"]);
} else {
    http_response_code(500);
    echo json_encode([
        "error"    => "Failed",
        "httpCode" => $httpCode,
        "details"  => $response
    ]);
}