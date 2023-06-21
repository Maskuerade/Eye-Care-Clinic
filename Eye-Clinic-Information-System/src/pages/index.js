// const { createClient } = supabase
// const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

// let AdminPromise = new Promise(async (resolve, reject) => {
//     let { data: retrievedAdmin } = await _supabase
//       .from("Admin")
//       .select("*");
//     resolve(retrievedAdmin);
//   });



//   let form = document.querySelector("form-box")
//   let username= document.getElementById("username")
//   let password = document.getElementById("password")
//   let signinbtn = document.getElementById("submit-btn")
  
//   form.addEventListener("submit", (e)=>{
//     AdminPromise.then((Admin)=>{  
//     console.log(Admin[1].Username)
//     e.preventDefault();
//     let usernameValue=username.value;
//     let passwordValue=password.value;
    
//     for(let i=0;i<Admin.length;i++){
//         if((usernameValue==Admin[i].Username) &&(passwordValue==Admin[i].Password) ){

//             sessionStorage.setItem("Adminusername", usernameValue);
//             Redirect()
//             return
//         }
        
//     }


//     showError(username,"Incorrect Credentials")
//     showError(password,"Incorrect Credentials")
//     checkRequired([username,password])


//   })
// })

// function Redirect(){
//     location.href='dashboard.html'

// }