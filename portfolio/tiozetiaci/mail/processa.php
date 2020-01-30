<?php
    
  $assunto = $_POST['assunto'];

  $corpo = "
    Nome: "     .$_POST['nome']."
    Assunto:"   .$_POST['assunto']."
    E-mail: "   .$_POST['email']."
    Mensagem: " .$_POST['mensagem']."
";

mail('tiozeetiaci@outlook.com', $assunto, $corpo, 'From: contato@contato.com.br');

echo "Dados enviados com sucesso!";
  
?>