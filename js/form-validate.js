$(document).ready (function () {
    $("#confirm").click (function () {
        var name = $("#first_name").val ();
        var email = $("#email").val ();
        var telephone = $("#telephone").val ();
        var subject = $("#subject").val ();
        var comments = $("#comments").val ();
        var fail = "";
        if (name.length < 3) fail = "name must be more than 3 characters";
        else if (email.split ('@').length -1 == 0 || email.split ('.').length -1 == 0)
        fail = "incorrect mail";
        else if (telephone.length < 6) fail = "phone number must be more than 6 characters";
        else if (subject.length < 6) fail = "subject must be more than 6 characters";
        else if (comments.length < 10) fail = "message must be more than 10 characters";
        if (fail != "") {
            $('#messageShow').html (fail + "<div class='clear'</br></div>");
            $('#messageShow').show();
            return false;
        }
        $.ajax ({
            url: '../feedback.php',
            type: 'POST',
            cache: false,
            data: {'first_name': name, 'email': email, 'telephone': telephone, 'subject': subject, 'comments': comments},
            dataType: 'html',
            success: function (data) {
                $('#messageShow').html (fail + "<div class='clear'</br></div>");
                $('#messageShow').show();
            }
        });
    });
});