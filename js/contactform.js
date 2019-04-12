/*
--------------------------------
Ajax Contact Form
--------------------------------
+ https://github.com/mehedidb/Ajax_Contact_Form
+ A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
+ Has a fallback in jQuery for browsers that do not support HTML5 form validation.
+ version 1.0.1
+ Copyright 2016 Mehedi Hasan Nahid
+ Licensed under the MIT license
+ https://github.com/mehedidb/Ajax_Contact_Form
*/

(function ($, window, document, undefined) {
    'use strict';


    var $form = $('#contact-form');
    $form.submit(function (e) {
        // remove the error class
        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        // get the form data
        var formData = {
            'Name' : $('input[name="Name"]').val(),
            'Email' : $('input[name="Email"]').val(),
            'Telephone' : $('input[name="Telephone"]').val(),
            'Message' : $('textarea[name="Message"]').val()
        };

        // process the form
        $.ajax({
            type : 'POST',
            url  : 'mail.php',
            data : formData,
            dataType : 'json',
            encode : true
        }).done(function (data) {
            // handle errors
            if (!data.success) {
                if (data.errors.name) {
                    $('#Name').addClass('has-error');
                    $('#Name').find('.form-input').append('<span class="help-block">' + data.errors.Name + '</span>');
                }

                if (data.errors.email) {
                    $('#Email').addClass('has-error');
                    $('#Email').find('.form-input').append('<span class="help-block">' + data.errors.Email + '</span>');
                }

                if (data.errors.phone) {
                    $('#Telephone').addClass('has-error');
                    $('#Telephone').find('.form-input').append('<span class="help-block">' + data.errors.Telephone + '</span>');
                }

                if (data.errors.message) {
                    $('#Message').addClass('has-error');
                    $('#Message').find('.form-input').append('<span class="help-block">' + data.errors.Message
                    . + '</span>');
                }
            } else {
                // display success message
                $form.html('<div class="alert alert-success">' + data.message + '</div>');
            }
        }).fail(function (data) {
            // for debug
            console.log(data);
            console.log(formData)
        });

        e.preventDefault();
    });
}
(jQuery, window, document);
