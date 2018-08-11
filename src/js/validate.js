$("#myform").validate({
    rules: {
      user: {
          required: true
      },
      password: {
        required: true
      }
    },
    messages:{
        user:{
            required: 'Favor de llenar este campo'
        },
        password:{
            required: 'Favor de llenar este campo'
        }
    }
  });