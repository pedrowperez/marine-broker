<?php
// Importar as classes 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// Carregar o autoloader do composer
require 'vendor/autoload.php';
// Instância da classe

$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$estado = $_POST['estado'];
$motor = $_POST['motor'];
$corCasco = $_POST['corCasco'];
$corEstofado = $_POST['corEstofado'];
$valorTotal = $_POST['final'];
$acessorio = array();

if (!empty($_POST['acessorios']) && is_array($_POST['acessorios'])) {
    foreach ($_POST['acessorios'] as $check) {           
        $acessorio[] = $check;
    }
}

$Body = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" lang="en">

<head>
    <title>Marine Broker - Proposta NHD</title>
    <meta property="og:title" content="Open Banking e Crédito Digital - Já é realidade na a55! ">
    <meta name="twitter:title" content="Open Banking e Crédito Digital - Já é realidade na a55! ">

    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  
  <style>
    ul > li {
      text-indent: -1em;
    }
  </style>
<![endif]-->
    <!--[if mso]>
<style type="text/css">
 body, td {font-family: Arial, Helvetica, sans-serif;}
</style>
<![endif]-->

    <meta name="robots" content="noindex,follow">
    <!--[if !((mso)|(IE))]><!-- -->
    <style type="text/css">
        [owa] .hse-column-container {
            max-width: 600px !important;
            width: 600px !important
        }
        
        [owa] .hse-section-full-width .hse-column-container {
            max-width: 100% !important;
            width: 100% !important
        }
        
        [owa] .hse-column {
            display: table-cell;
            vertical-align: top
        }
        
        [owa] .hse-section-1-col .hse-column {
            max-width: 600px !important;
            width: 600px !important
        }
        
        [owa] .hse-section-full-width.hse-section .hse-column {
            max-width: 100% !important;
            width: 100% !important;
            display: block !important
        }
        
        [owa] .hse-section-2-col .hse-wide {
            max-width: 400px !important;
            width: 400px !important
        }
        
        [owa] .hse-section-2-col .hse-narrow {
            max-width: 200px !important;
            width: 200px !important
        }
        
        [owa] .hse-section-2-col .hse-column {
            max-width: 300px;
            width: 300px
        }
        
        [owa] .hse-section-3-col .hse-column {
            max-width: 200px !important;
            width: 200px !important
        }
        
        [owa] .hse-section-4-col .hse-column {
            max-width: 150px !important;
            width: 150px !important
        }
        
        @media only screen and (min-width:640px) {
            .hse-section-full-width.hse-section .hse-column-container {
                max-width: 100% !important;
                width: 100% !important
            }
            .hse-section-full-width.hse-section .hse-column {
                max-width: 100% !important;
                width: 100% !important;
                display: block !important
            }
            .hse-column-container {
                max-width: 600px !important;
                width: 600px !important
            }
            .hse-column {
                display: table-cell;
                vertical-align: top
            }
            .hse-section-1-col .hse-column {
                max-width: 600px !important;
                width: 600px !important
            }
            .hse-section-2-col .hse-column {
                max-width: 300px !important;
                width: 300px !important
            }
            .hse-section-2-col .hse-wide {
                max-width: 400px !important;
                width: 400px !important
            }
            .hse-section-2-col .hse-narrow {
                max-width: 200px !important;
                width: 200px !important
            }
            .hse-section-3-col .hse-column {
                max-width: 200px !important;
                width: 200px !important
            }
            .hse-section-4-col .hse-column {
                max-width: 150px !important;
                width: 150px !important
            }
        }
        
        @media only screen and (max-width:639px) {
            img.stretch-on-mobile,
            .hs_rss_email_entries_table img {
                height: auto !important;
                width: 100% !important
            }
            .display_block_on_small_screens {
                display: block
            }
        }
    </style>
    <!--<![endif]-->
    <style type="text/css">
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important
        }
        
        #outlook a {
            padding: 0
        }
        
        .yshortcuts a {
            border-bottom: none !important
        }
        
        a {
            text-decoration: underline
        }
        
        .ExternalClass {
            width: 100%
        }
        
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass td,
        .ExternalClass div,
        .ExternalClass span,
        .ExternalClass font {
            line-height: 100%
        }
        
        p {
            margin: 0
        }
        
        body {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            -webkit-font-smoothing: antialiased;
            moz-osx-font-smoothing: grayscale/
        }
    </style>
</head>

<body bgcolor="#ffffff" style="margin:0 !important; padding:0 !important; font-family:Helvetica, Arial, sans-serif; font-size:15px; color:#23496d; word-break:break-word">



    <!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
  
    <v:fill type="tile" size="100%,100%" src="" color="#ffffff"/>
  
</v:background>
<![endif]-->


    <div class="hse-body-background" style="background-color:#ffffff" bgcolor="#ffffff">
        <table role="presentation" class="hse-body-wrapper-table" cellpadding="0" cellspacing="0" style="border-spacing:0 !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; margin:0; padding:0; width:100% !important; min-width:320px !important; height:100% !important"
            width="100%" height="100%">
            <tbody>
                <tr>
                    <td class="hse-body-wrapper-td" valign="top" style="border-collapse:collapse; mso-line-height-rule:exactly; font-family:Helvetica, Arial, sans-serif; font-size:15px; color:#23496d; word-break:break-word">
                        <div id="hs_cos_wrapper_main" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_email_flex_area" style="color: inherit; font-size: inherit; line-height: inherit;" data-hs-cos-general-type="widget" data-hs-cos-type="email_flex_area">
                            <div id="builtin_section-1" class="hse-section hse-section-1-col hse-section-first" style="padding-left:10px; padding-right:10px; padding-top:20px">



                                <!--[if !((mso)|(IE))]><!-- -->
                                <div class="hse-column-container" style="min-width:280px; max-width:600px; width:100%; Margin-left:auto; Margin-right:auto; border-collapse:collapse; border-spacing:0">
                                    <!--<![endif]-->

                                    <!--[if (mso)|(IE)]>
      <div class="hse-column-container" style="min-width:280px;max-width:600px;width:100%;Margin-left:auto;Margin-right:auto;border-collapse:collapse;border-spacing:0;">
      <table align="center" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px;" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
    <![endif]-->

                                    <!--[if (mso)|(IE)]>
  <td valign="top" style="width:600px;">
<![endif]-->
                                    <!--[if gte mso 9]>
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;width:600px">
<![endif]-->
                                    <div id="builtin_column_1-0" class="hse-column">
                                        <div id="hs_cos_wrapper_module_15828203863532" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="color: inherit; font-size: inherit; line-height: inherit;" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                            <table class="hse-image-wrapper" bgcolor="#153e4d" role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-spacing:0 !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt">
                                                <tbody>
                                                    <tr>
                                                        <td class="hs_padded" align="center" valign="top" style="border-collapse:collapse; mso-line-height-rule:exactly; font-family:Helvetica, Arial, sans-serif; color:#23496d; word-break:break-word; text-align:center; padding:10px 20px; font-size:0px">

                                                            <a href="https://marinebroker.com.br/" target="_blank" style="color:#153e4d; mso-line-height-rule:exactly" data-hs-link-id="0">

                                                                <img alt="marinebroker_header" src="https://marinebroker.com.br/boatshow/assets/img/logo.png" style="outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; border:none; font-size:16px"
                                                                     align="middle">

                                                            </a>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-spacing:0 !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt">
                                            <tbody>
                                                <tr>
                                                    <td style="border-collapse:collapse; mso-line-height-rule:exactly; font-family:Helvetica, Arial, sans-serif; font-size:15px; color:#23496d; word-break:break-word; padding:10px 20px">
                                                        <div id="hs_cos_wrapper_module_15751741057813" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="color: inherit; font-size: inherit; line-height: inherit;" data-hs-cos-general-type="widget" data-hs-cos-type="module">
                                                            <div id="hs_cos_wrapper_module_15751741057813_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_rich_text" style="color: inherit; font-size: inherit; line-height: inherit;" data-hs-cos-general-type="widget" data-hs-cos-type="rich_text">
                                                                
                                                                <div style="mso-line-height-rule:exactly; line-height:175%">
                                                                    <br>
                                                                    <h1 style="margin:0; mso-line-height-rule:exactly; line-height:125%; font-size:20px">
                                                                        <span style="font-family: Arial, sans-serif; color: #153e4d; font-size:24px">
                                                                            Olá '.$nome.', tudo bem?</span><br><br>
                                                                            Segue proposta da NHD:
                                                                    </h1><br>
                                                                </div>
                                                                <div style="mso-line-height-rule:exactly; line-height:175%">
                                                                    <span style="font-family: Arial, sans-serif;"> 
                                                                        Nome: <b> '.$nome.' </b><br> 
                                                                        Email: <b> '.$email.'<br></b>
                                                                        Telefone: <b> '.$telefone.'<br></b>
                                                                        Estado: <b> '.$estado.'<br></b>
                                                                        Motor: <b> '.$motor.'<br></b>
                                                                        Cor de Casco: <b> '.$corCasco.'<br></b>
                                                                        Cor de Estofado: <b>'.$corEstofado.'<br></b> 
                                                                        Acessorios: <b> '. implode('<br>', $acessorio).'<br></b>
                                                                        Valor Total: <b> '. $valorTotal .' </b>
                                                                    </span><br><br>
 <span style="font-family: Arial, sans-serif;"> 
                                                                    Se houver dúvida, entre em contato pelo telefone/whatsapp, email ou estaremos no São Paulo Boat Show do dia 19 a 24 de novembro na Raia Olímpica da USP:
<br><br>
Dias de semana: das 15h às 22h.<br> 
Final de semana: das 13h às 22h.<br><br>

Esperamos ansiosamente seu contato!<br>
</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table role="presentation" bgcolor="#153e4d" class="hse-footer hse-secondary" width="100%" cellpadding="0" cellspacing="0" style="border-spacing:0 !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; text-align:center; font-family:Arial, sans-serif; font-size:12px; line-height:135%; color:#23496d; margin-top: 20px; margin-bottom:0; padding:0"
                                            align="center">
                                            <tbody>
                                                <tr>
                                                    <td align="center" valign="top" style="border-collapse:collapse; mso-line-height-rule:exactly; font-family:Helvetica, Arial, sans-serif; font-size:18px; color:#23496d; word-break:break-word; text-align:center; margin-bottom:0; line-height:135%; padding:10px 20px">
                                                        <p style="mso-line-height-rule:exactly; font-family:Arial, sans-serif; font-size:12px; font-weight:normal; text-decoration:none; font-style:normal; color:#FFFFFF">
                                                            Marine Broker | 2020
                                                        </p>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </td>
                </tr>
            </tbody>
        </table>
</body>

</html>';

$mail = new PHPMailer(true);
try
{
    // Configurações do servidor
    $mail->isSMTP();        //Devine o uso de SMTP no envio
    $mail->SMTPAuth = true; //Habilita a autenticação SMTP
    $mail->Username   = 'contato.marinebroker@gmail.com';
    $mail->Password   = 'schumi53';
    // Criptografia do envio SSL também é aceito
    $mail->SMTPSecure = 'tls';
    // Informações específicadas pelo Google
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    // Define o remetente
    $mail->setFrom('contato.marinebroker@gmail.com', 'Marine Broker');
    // Define o destinatário
    $mail->addAddress($email, 'Propostas NHD [Marine Broker]');
    $mail->AddBCC('contato@marinebroker.com', 'Propostas NHD');
    $mail->AddBCC('contato.marinebroker@gmail.com', 'Propostas NHD');
    // Conteúdo da mensagem
    $mail->isHTML(true);  // Seta o formato do e-mail para aceitar conteúdo HTML

    $mail->Subject = '[MARINE BROKER] PROPOSTA NHD ('.$nome.')';
    $mail->Body    = $Body;
    $mail->AltBody = 'Este é o cortpo da mensagem para clientes de e-mail que não reconhecem HTML';
    // Enviar
    $mail->send();
    echo 'PROPOSTA CRIADA COM SUCESSO!';
}
catch (Exception $e)
{
    echo "(ERROR : {$mail->ErrorInfo})";
}