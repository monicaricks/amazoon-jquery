$(document).ready(function(){
      $('.order-form').on('submit', function(event){
        event.preventDefault();
        $('.error-message').hide();
        $('.has-error').removeClass('has-error');
        var requiredInForm = $('input[required]');

        var isValid = true;
        requiredInForm.each(function(){
          if($(this).val().length === 0){
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
