$(document).ready(function() {
    $('#email').attr("disabled", true);
    $('#subject').attr("disabled", true);
    $('#message').attr("disabled", true);
    $('#submit').attr("disabled", true);
});         

function save(){
    var sender_email = document.getElementById('sender_email').value;
    var sender_pass = document.getElementById('sender_pass').value;

    if(sender_email!=null && sender_pass.length >=8 ){
        $('#email').attr("disabled", false);
        $('#subject').attr("disabled", false);
        $('#message').attr("disabled", false);
        $('#submit').attr("disabled", false);

        $('#sender_email').attr("disabled", true);
        $('#sender_pass').attr("disabled", true);
    }
    
}

function clears() {
    // alert('clear');
    $('#myform')[0].reset();
    $('#email').attr("disabled", true);
    $('#subject').attr("disabled", true);
    $('#message').attr("disabled", true);
    $('#submit').attr("disabled", true);

    $('#sender_email').attr("disabled", false);
    $('#sender_pass').attr("disabled", false);
}