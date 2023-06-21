const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")


const form = document.querySelector('form')
const drId=document.getElementById("Doctor ID")
const patientId=document.getElementById("Patient ID")
const date=document.getElementById("Date")
const time=document.getElementById("Time")


form.addEventListener('submit',(e)=>{

    e.preventDefault()
    let DrID = drId.value
    let PatientID = patientId.value
    let Date = date.value
    let Time = time.value

    async function insertSurgery(){
    const { data, error } = await _supabase
    .from('Surgeries')
    .insert([
      { Doctor_ID: DrID,
        Patient_ID: PatientID ,
       Date: Date,
       Time: Time, }
    ])
    console.log("Surgery added")
    redirect()
}
    
insertSurgery()


})



function redirect(){
    location.href='services.html'
}
