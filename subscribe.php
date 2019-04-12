<?php
$to = "austinwise1993@gmail.com";
$from = "no-reply@gxrailcommodities.com";

$headers = "From: " . $from . "\r\n";

$subject = "New subscription";
$body = "New user subscription: " . $_POST['Email'];


if( filter_var ($_POST['Email'], FILTER_VALIDATE_EMAIL) )
{ 
    if (mail($to, $subject, $body, $headers, "-f" . $from))
    {
        echo 'Your e-mail (' . $_POST['Email'] . ') has been added to our mailing list!';
    }
    else
    {
       echo 'There was a problem with your e-mail (' . $_POST['Email'] . ')';   
    }
}
else
{
   echo 'There was a problem with your e-mail (' . $_POST['Email'] . ')';   
}