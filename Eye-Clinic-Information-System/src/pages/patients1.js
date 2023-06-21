const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

const form = document.querySelector('form')
const firstname=document.getElementById("firstName")
const lastname=document.getElementById("lastName")
const gender=document.getElementById("gender")
const medicalhistory=document.getElementById("medicalHistory")
const phonenumber=document.getElementById("phoneNumber")
const address=document.getElementById("address")



form.addEventListener('submit',(e)=>{

    e.preventDefault()
    let FirstName = firstname.value
    let LastName = lastname.value
    let Gender = gender.value
    let MedicalHistory = medicalhistory.value
    let PhoneNumber = phonenumber.value
    let Address = address.value

    async function insertPatient(){
    const { data, error } = await _supabase
    .from('Patients')
    .insert([
      { First_Name: FirstName,
       Last_Name: LastName ,
       Gender: Gender,
       Medical_History: MedicalHistory,
       Phone: PhoneNumber,
       Address: Address }
    ])
    console.log("Patient added")
    redirect()
}
    
insertPatient()


})



function redirect(){
    location.href='patients.html'
}
