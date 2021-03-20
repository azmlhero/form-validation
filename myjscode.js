$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  alert("Form is being submitted");

  e.preventDefault();
}

$(function(){
  $("#name_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#confirm_password_error_message").hide();

  var error_name=false;
  var error_email=false;
  var error_password=false;

  var error_confirm_password=false;

  $("#name").focusout(function(){
      chek_name();
  });
  
  $("#email").focusout(function(){
      chek_email();
  });
  // name shi type karo form nai hay id    aaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhh
  $("#password").focusout(function(){
      chek_password();
  });
  
  $("#confirm_password").focusout(function(){
      chek_confirm_password();
  });
  
  function chek_name(){

      var name_length= $("#name").val().length;

      if(name_length<5)
      {
          $("#name_error_message").html("Name should contain atleast 5 characters!!!");
         
          $("#name_error_message").show();
         
          error_name = true;
      }
    
      else
      {
          $("name_error_message").hide();
      }

  }

  function chek_password(){

      var password_length= $("#password").val().length;

      if(password_length<8)
      {
          $("#password_error_message").html("Password should contain atleast 8 characters!!!");
         
          $("#password_error_message").show();
         
          error_password = true;
      }
    
      else
      {
          $("password_error_message").hide();
      }

  }
  
  
  function chek_confirm_password(){

      var password= $("#password").val();
      var confirm_password= $("#confirm_password").val();

      if(password != confirm_password)
      {
          $("#confirm_password_error_message").html("Password doesn't match");
         
          $("#confirm_password_error_message").show();
         
          error_password = true;
      }
    
      else
      {
          $("password_error_message").hide();
      }

  }

  $("#myform").submit(function(){
      error_name=false;
      error_password=false;
      error_confirm_password=false;

      chek_name();
      chek_password();
      chek_confirm_password();

      if(error_name==false && error_password== false && error_confirm_password==false)
      {
          return true;
      }
      else{
          return false;
      }
  });


});







