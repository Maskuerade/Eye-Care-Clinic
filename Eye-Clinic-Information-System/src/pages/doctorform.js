const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")


const form = document.querySelector('form')
const firstname=document.getElementById("Firstname")
const lastname=document.getElementById("Lastname")
const workinghours=document.getElementById("Workinghours")
const specialty=document.getElementById("Specialty")
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

    async function insertDoctor(){
    const { data, error } = await _supabase
    .from('Doctor')
    .insert([
      { FirstName: FirstName,
       LastName: LastName ,
       WorkingHours: WorkingHours,
       Specialty: Specialty,
       Phone:PhoneNumber,
       Address:Address, }
    ])
    console.log("Doctor added")
    redirect()
}
    
insertDoctor()


})



function redirect(){
    location.href='staff.html'
}
