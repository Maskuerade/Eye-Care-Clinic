const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")


const form = document.querySelector('form')
const firstname=document.getElementById("Firstname")
const lastname=document.getElementById("Lastname")
const workinghours=document.getElementById("Workinghours")
const specialty=document.getElementById("Speciality")
const phonenumber=document.getElementById("Phonenumber")
const address=document.getElementById("Address")



form.addEventListener('submit',(e)=>{

    e.preventDefault()
    let FirstName = firstname.value
    let LastName = lastname.value
    let WorkingHours = workinghours.value
    let Specialty = specialty.value
    let PhoneNumber = phonenumber.value
    let Address = address.value

    async function insertOthers(){
    const { data, error } = await _supabase
    .from('Others')
    .insert([
      { First_Name: FirstName,
       Last_Name: LastName ,
       Working_Hours: WorkingHours,
       Speciality: Specialty,
       Phone_Number:PhoneNumber,
       Address:Address, }
    ])
    console.log("Worker added")
    redirect()
}
    
insertOthers()


})



function redirect(){
    location.href='staff.html'
}
