// login form auth
document.querySelector('.form').addEventListener("submit", logged);

    var submits = document.querySelector('.loginform');
    var loginemail = document.querySelector('#loginemail');
    var loginpass = document.querySelector('#loginpass');
    var NavContent =  document.querySelector(".navContent");
    var secondNavContent =  document.querySelector(".secondnavContent");

    
     
    function logged (event) {
        event.preventDefault();
        if (loginemail.value !== "" && loginpass.value !== "") {
            console.log("It holds values")
            var user = {    
                loginemail: loginemail.value,
                loginpass: loginpass.value
            }
           
    
            if(localStorage.getItem(user.loginemail) !== null){
                const userInfo = JSON.parse(localStorage.getItem(user.loginemail));
               console.log(userInfo);
               if((user.loginemail === userInfo.email) && (user.loginpass === userInfo.password)){
                    localStorage.setItem('status', 'loggedIn');
                    // document.querySelector(".names").innerHTML=`${userInfo.name}`;
                        console.log(userInfo.name);
                        toggleModal(loginForm);
                        removeEle();

            } else {
                document.querySelector("#text").innerHTML = "Password is incorrect."
            }
            }else{
                document.querySelector("#text").innerHTML = "Email is incorrect."
            } 
        }else{
            console.log("Awwwn!")
            document.querySelector("#work").style.display = "block"; 
        }
    };

    function toggleModal(element) {
        element.classList.toggle('show-modal');
    }  

    function removeEle(){
     loginBtn.style.display ="none"
     registerBtn.style.display ="none"
    //  document.querySelector(".nav-name").innerHTML= "Hi"  + userInfo.name
    }
    

 
    



  