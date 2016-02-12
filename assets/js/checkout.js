$(document).ready(function(){
      $('.order-form').on('submit', function(event){
        event.preventDefault();
        $('.error-message').hide();
        $('.has-error').removeClass('has-error');
        var requiredInForm = $('input[required]','.order-form');
        console.log(requiredInForm);

        var isValid = true;
        $(requiredInForm).each(function(){
          if($(this).val().length === 0){
            console.log($(this).val());
            $(this).parent().addClass('has-error');
            $('.error-message').show();
            isValid = false;
          }
        })
        if(isValid){
          alert("Congrats on filling out this form!");
        }
      });
});
