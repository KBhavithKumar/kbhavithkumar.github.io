$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        let id = $("#id").val();
        let name = $("#name").val();
        let mobile = $("#mobile").val();
        
        if (!/^B\d{4}$/.test(id)) {
            alert("Invalid ID format! Example: B0001");
            return;
        }

        if (!/^\d{10}$/.test(mobile)) {
            alert("Invalid Mobile Number!");
            return;
        }

        let formData = {
            id: id,
            name: name,
            year: $("#year").val(),
            department: $("#department").val(),
            class: $("#class").val(),
            mobile: mobile
        };

        $.ajax({
url : "https://script.google.com/macros/s/AKfycbxSraJuSbZTeHtaVnUjAhQ9TlZn9Xgtv3EG6hRDNaMEwxhGSd4WH0OMVUUiWtfWLMYeTg/exec",
            type: "POST",
            data: formData,
            success: function(response) {
                $("#alertBox").text("Registration Successful!").fadeIn().delay(2000).fadeOut();
            }
        });
    });
});
