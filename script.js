$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:9
            },
            sname:{
                required:true,
                minlength:3
            },
            femail:{
                required:true,
                email:true
            },
            fpassword:{
                required:true,
                minlength:8,
                maxlength :15
            },
            bday:{
                required:true,
            },
            bmonth:{
                required:true,
            },
            byear:{
                required:true,
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Minimum 4 characters required",
                maxlength:"Maximum 9 characters allowed"
            },
            sname:"Enter last name",
            femail:{
                required:"Email address required",
                email:"Enter a vaild email address"
            }
            
        }
    })
})