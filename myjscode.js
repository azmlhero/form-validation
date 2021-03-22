$(function(){
  $(function(){
    $("#name").val("");
    $("#email").val("");
    $("#password").val("");
    $("#password").val("");
  
  });

  $("#myForm").submit(function(){
     
    var submit_form=true;
    if($("#name").val().length<5)
    {
      $("#name").css({"border":"2px solid red"});
     
      alert("Name should be atleast 5 characters long ");
       return false;
    }
    else{
      $("#name").css({"border":"2px solid black"});
    }
    if($("#email").val()=="")
    {
      $("#email").css({"border":"2px solid red"});

      alert("invalid form please enter email");
            return false;

    }
    else{

      $("#email").css({"border":"2px solid black"});
    }
    if($("#password").val().length<8){
      alert("Password must be 8 charcters long");
      $("#password").css({"border":"2px solid red"});
      return false;
    }
    else{
      $("#password").css({"border":"2px solid black"})
    }
    if($("#confirm_password").val()!=("#password").val()){
      alert("password doesn't match");
      $("#confirm_password").css({"border":"2px sold red"});
      return false;

    }
    else{
      $("#confirm_password").css({border:"2px solid black"});
    }
  });
  
  alert("Your form response is submitted")
  return true;

});









//   $(function () {
//     $("#myForm").submit(handleFormSubmit);
//   });

//   // function {
//   //   

    
//   // }

// $(function(){
//   $("#name_error_message").hide();
//   $("#email_error_message").hide();
//   $("#password_error_message").hide();
//   $("#confirm_password_error_message").hide();

//   var error_name=false;
//   var error_email=false;
//   var error_password=false;

//   var error_confirm_password=false;

//   $("#name").focusout(function(){
//       chek_name();
//   });
  
//   $("#email").focusout(function(){
//       chek_email();
//   });
//   // name shi type karo form nai hay id    aaaaaaaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhh
//   $("#password").focusout(function(){
//       chek_password();
//   });
  
//   $("#confirm_password").focusout(function(){
//       chek_confirm_password();
//   });
  
//   function chek_name(){

//       var name_length= $("#name").val().length;

//       if(name_length<5)
//       {
//           $("#name_error_message").html("Name should contain atleast 5 characters!!!");
//           $("#name").css("border", "2px solid red");
//           $("#name_error_message").show();
         
//           error_name = true;
//       }
    
//       else
//       {
//           $("#name_error_message").hide();
//       }

//   }

//   function chek_password(){

//       var password_length= $("#password").val().length;

//       if(password_length<8)
//       {
//           $("#password_error_message").html("Password should contain atleast 8 characters!!!");
//           $("#password").css("border", "2px solid red");
//           $("#password_error_message").show();
         
//           error_password = true;
//       }
    
//       else
//       {
//           $("#password_error_message").hide();
//       }

//   }
  
  
//   function chek_confirm_password(){

//       var password= $("#password").val();
//       var confirm_password= $("#confirm_password").val();

//       if(password != confirm_password)
//       {
//           $("#confirm_password_error_message").html("Password doesn't match");
//           $("#confirm_password").css("border", "2px solid red");
//           $("#confirm_password_error_message").show();
         
//           error_confirm_password = true;
//       }
    
//       else
//       {
//           $("#confirm_password_error_message").hide();
//       }

//   }

//   $("#myform").submit(function handleFormSubmit(e) {
//       error_name=false;
//       error_password=false;
//       error_confirm_password=false;

//       chek_name();
//       chek_password();
//       chek_confirm_password();
      
//       e.preventDefault();
//       if(error_name==false && error_password== false && error_confirm_password==false)
//       {
//         console.log("HOgya submit ");
//         alert("Form is being submitted");
//           return true;
//       }
//       else{
//           return false;
//       }
     
//   });


// });







