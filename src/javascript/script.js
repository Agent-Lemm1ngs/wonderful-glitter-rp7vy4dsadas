function register(){
    error = document.getElementById("error-register")
    btn = document.getElementById("registerbutton")
    error.style.display="none"
    email = document.getElementById("register-email").value
    password = document.getElementById("register-password").value
    password2 = document.getElementById("register-password2").value
    if (email=="" && password=="" && password2==""){
      error.innerHTML="Please fill in all inputs."
      error.style.display="flex"
    }else if (password!=password2){
      error.innerHTML="Please make sure the passwords are matching."
      error.style.display="flex"
    } else{
      btn.className="uppercase font-bold px-3 py-2 hover:bg-gray-200 rounded-lg text-xl duration-200 cursor-pointer active:scale-105 hover:scale-110 inline-block bg-transparent select-none hover:bg-primary text-primary hover:text-white border-2 border-primary hover:border-primary text-center"
      btn.innerHTML="loading..."
      const payload = {
        email:email,
        password:password,
        password2:password2
      }
      fetch("/api/register",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(payload)
      })
      .then(response=>response.json())
      .then(data=>{
        console.log(data)
        if (data.success){
          window.location.href="/dashboard"
        }
      })
      .catch (error=>{
        console.log(error)
      })
      
    }
    
    
  }
  function login(){
    error = document.getElementById("error-login")
    error.style.display="flex"
  }
  
  
  function close_register(){
    btn = document.getElementById("registerbutton")
    btn.innerHTML="register"
    error = document.getElementById("error-register")
    error.style.display="none"
   
    div = document.getElementById("register-modal")
    div.style.display="none"
  }
  function open_register(){
    div = document.getElementById("register-modal")
    div.style.display="flex"
  }
  
  function close_login(){
    error = document.getElementById("error-login")
    error.style.display="none"
    div = document.getElementById("login-modal")
    div.style.display="none"
  }
  function open_login(){
    div = document.getElementById("login-modal")
    div.style.display="flex"
  }
  
  function swap(type){
    if (type=="login"){
      close_register()
      open_login()
    } else{
      close_login()
      open_register()
    }
  }
  
  function togglenavbar() {
    mob = document.getElementById("navbarmobile")
    burger = document.getElementById("hamburger")
    if (mob.style.display==="flex"){
      burger.className="uppercase font-bold px-3 py-2 hover:bg-gray-200 rounded-lg text-2xl duration-200 cursor-pointer active:scale-105 hover:scale-110 inline-block bg-transparent border-transparent border-2 hover:border-transparent select-none bi bi-list sm:hidden"
      mob.style.display="none"
    } else{
      burger.className="uppercase font-bold px-3 py-2 hover:bg-gray-200 rounded-lg text-2xl duration-200 cursor-pointer active:scale-105 hover:scale-110 inline-block bg-transparent border-transparent border-2 hover:border-transparent select-none bi bi-x-lg sm:hidden"
      mob.style.display="flex"
    }
    
  }
  
  function check_mobile(){
    if(window.innerWidth > 640){
      mob = document.getElementById("navbarmobile")
      mob.style.display="none"
      burger = document.getElementById("hamburger")
      burger.className="uppercase font-bold px-3 py-2 hover:bg-gray-200 rounded-lg text-2xl duration-200 cursor-pointer active:scale-105 hover:scale-110 inline-block bg-transparent border-transparent border-2 hover:border-transparent select-none bi bi-list sm:hidden"
    }
  }
  window.addEventListener("resize", check_mobile);