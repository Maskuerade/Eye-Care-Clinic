const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 

const thead = document.getElementById('doc') 
let drbtn = document.getElementById("dr-btn")
thead.innerHTML = "";

let DoctorsPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedDoctors } = await _supabase
    .from("Doctor")
    .select("*");
  resolve(retrievedDoctors);
});


DoctorsPromise.then((Doctor)=>{
  
  const thead = document.getElementById("doc");
  thead.innerHTML = "";

  let heads = "<th>Doctor ID</th>";
  heads += "<th>First Name</th>";
  heads += "<th>Last Name</th>";
  heads += "<th>Working Hours</th>";
  heads += "<th>Speciality</th>";
  heads += "<th>Phone Number</th>";
  heads += "<th>Address</th>";
 
  heads += "<th>Actions</th>";

  thead.innerHTML = heads;
  const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];

  let tablebody = document
    .getElementById("dynamic-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Doctor.length; i++) {
    let item = Doctor[i];
    let row = document.createElement("tr");

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);

    let FirstNamecell = document.createElement("td");
    FirstNamecell.textContent = item.FirstName;
    row.appendChild(FirstNamecell);

    let LastNamecell = document.createElement("td");
    LastNamecell.textContent = item.LastName;
    row.appendChild(LastNamecell);

    let workinghourscell = document.createElement("td");
    workinghourscell.textContent = item.WorkingHours;
    row.appendChild(workinghourscell);

    let SpecialityCell = document.createElement("td");
    SpecialityCell.textContent = item.Specialty;
    row.appendChild(SpecialityCell);

    let PhoneNumberCell = document.createElement("td");
    PhoneNumberCell.textContent = item.Phone;
    row.appendChild(PhoneNumberCell);

    let AddressCell = document.createElement("td");
    AddressCell.textContent = item.Address;
    row.appendChild(AddressCell);


    let ActionsCell = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id", "deleteButton_" + i);
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("onclick", `deleteRow(this,"Doctor",${item.id})`);
    ActionsCell.appendChild(deleteButton);

    row.appendChild(ActionsCell);

    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})












drbtn.addEventListener("click", (e) =>{
  
  DoctorsPromise.then((Doctor)=>{
  
    const thead = document.getElementById("doc");
    thead.innerHTML = "";
  
    let heads = "<th>Doctor ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Working Hours</th>";
    heads += "<th>Speciality</th>";
    heads += "<th>Phone Number</th>";
    heads += "<th>Address</th>";
   
    heads += "<th>Actions</th>";
  
    thead.innerHTML = heads;
    const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];
  
    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML= "";
  
    for (var i = 0; i < Doctor.length; i++) {
      let item = Doctor[i];
      let row = document.createElement("tr");
  
      let idcell = document.createElement("td");
      idcell.textContent = item.id;
      row.appendChild(idcell);
  
      let FirstNamecell = document.createElement("td");
      FirstNamecell.textContent = item.FirstName;
      row.appendChild(FirstNamecell);
  
      let LastNamecell = document.createElement("td");
      LastNamecell.textContent = item.LastName;
      row.appendChild(LastNamecell);
  
      let workinghourscell = document.createElement("td");
      workinghourscell.textContent = item.WorkingHours;
      row.appendChild(workinghourscell);
  
      let SpecialityCell = document.createElement("td");
      SpecialityCell.textContent = item.Specialty;
      row.appendChild(SpecialityCell);
  
      let PhoneNumberCell = document.createElement("td");
      PhoneNumberCell.textContent = item.Phone;
      row.appendChild(PhoneNumberCell);
  
      let AddressCell = document.createElement("td");
      AddressCell.textContent = item.Address;
      row.appendChild(AddressCell);
  
  
      let ActionsCell = document.createElement("td");
  
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Doctor",${item.id})`);
      ActionsCell.appendChild(deleteButton);
  
      row.appendChild(ActionsCell);
  
      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";
      tablebody.appendChild(row);
      tablebody.style.blockSize = "40px";
    }
  
  })
  
  });


let othersbtn = document.getElementById("others-btn")

  othersbtn.addEventListener("click", (e) => {
    let Others =[
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "receptionist", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "cleaning staff", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "receptionist",phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "cleaning staff",phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "receptionist",phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "cleaning staff",phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "receptionist",phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed Mohamed", workinghours: "8 to 4", position: "cleaning staff",phonenum: "01283019823", address: "klkjddd"}
    ]
      // /const plusbtn=document.getElementById('plus-button')
      // const addbtn=document.getElementById('mariam')
      // addbtn.textContent= "Add Technician"
      // plusbtn.href = "TechForm.html"
      const thead = document.getElementById("btats");
      thead.innerHTML = "";
  
      //zawed aw ghayar column heading and repeat for each button 
      let heads = "<th>Staff ID</th>";
      heads += "<th>Name</th>";
      // heads += "<th>Last Name</th>";
      heads += "<th>Working Hours</th>";
      heads += "<th>Position</th>";
      heads += "<th>Phone Number</th>";
      heads += "<th>Address</th>";
      // heads += "<th>Actions</th>";
  
      thead.innerHTML = heads;
      const columnNames = ['Staff ID', 'Name', 'Working Hours', 'Position', 'Phone Number', 'Address'];
  
      let tablebody = document
        .getElementById("dynamic-table")
        .getElementsByTagName("tbody")[0];
      tablebody.innerHTML = "";
  
      for (var i = 0; i < Others.length; i++) {
        let item = Others[i];
        let row = document.createElement("tr");
  
        let IDcell = document.createElement("td");
        IDcell.textContent = item.ID;
        row.appendChild(IDcell);
  
        let firstnamecell = document.createElement("td");
        firstnamecell.textContent = item.name;
        row.appendChild(firstnamecell);
  
        let workinghourscell = document.createElement("td");
        workinghourscell.textContent = item.workinghours;
        row.appendChild(workinghourscell);
  
        let positioncell = document.createElement("td");
        positioncell.textContent = item.position;
        row.appendChild(positioncell);
  
        let phoneNumberCell = document.createElement("td");
        phoneNumberCell.textContent = item.phonenum;
        row.appendChild(phoneNumberCell);
  
        let addressCell = document.createElement("td");
        addressCell.textContent = item.address;
        row.appendChild(addressCell);
  
        // let Timecell = document.createElement("td");
        // Timecell.textContent = item.Device;
        // row.appendChild(Timecell);
  
        // let ActionsCell = document.createElement("td");
        // let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier
  
        // let editButton = document.createElement("button");
        // editButton.textContent = "Edit";
        // editButton.setAttribute("id", "editButton_" + i);
        // editButton.classList.add("edit-button");
        // editButton.setAttribute("onclick", `editRow(this,"Tech",${item.id},${JSON.stringify(columnNames)})`);
        // ActionsCell.appendChild(editButton);
  
        // let deleteButton = document.createElement("button");
        // deleteButton.textContent = "Delete";
        // deleteButton.setAttribute("id", "deleteButton_" + i);
        // deleteButton.classList.add("delete-button");
        // deleteButton.setAttribute("onclick", `deleteRow(this,"Tech",${item.id})`);
        // ActionsCell.appendChild(deleteButton);
  
        // row.appendChild(ActionsCell);
  
        row.style.textAlign = "center";
        tablebody.style.borderBottom = "3px solid black";
  
        tablebody.appendChild(row);
  
        tablebody.style.blockSize = "40px";
      }
    });


let nursebtn = document.getElementById("nurse-btn")

  nursebtn.addEventListener("click", (e) => {
    let Nurses =[
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"},
      {ID: "7829423", name:"Ahmed", workinghours: "8 to 4", drname:"ahmed", phonenum: "01283019823", address: "klkjddd"}
    ]
      // /const plusbtn=document.getElementById('plus-button')
      // const addbtn=document.getElementById('mariam')
      // addbtn.textContent= "Add Technician"
      // plusbtn.href = "TechForm.html"
      const thead = document.getElementById("btats");
      thead.innerHTML = "";
  
      //zawed aw ghayar column heading and repeat for each button 
      let heads = "<th>Nurse ID</th>";
      heads += "<th>Name</th>";
      // heads += "<th>Last Name</th>";
      heads += "<th>Working Hours</th>";
      heads += "<th>Dr Name</th>";
      heads += "<th>Phone Number</th>";
      heads += "<th>Address</th>";
      // heads += "<th>Actions</th>";
  
      thead.innerHTML = heads;
      const columnNames = ['Nurse ID', 'Name', 'Working Hours', 'Dr Name', 'Phone Number', 'Address'];
    
      let tablebody = document
        .getElementById("dynamic-table")
        .getElementsByTagName("tbody")[0];
      tablebody.innerHTML = "";
  
      for (var i = 0; i < Nurses.length; i++) {
        let item = Nurses[i];
        let row = document.createElement("tr");
  
        let IDcell = document.createElement("td");
        IDcell.textContent = item.ID;
        row.appendChild(IDcell);
  
        let firstnamecell = document.createElement("td");
        firstnamecell.textContent = item.name;
        row.appendChild(firstnamecell);
  
        let workinghourscell = document.createElement("td");
        workinghourscell.textContent = item.workinghours;
        row.appendChild(workinghourscell);
  
        let drnamecell = document.createElement("td");
        drnamecell.textContent = item.drname;
        row.appendChild(drnamecell);
  
        let phoneNumberCell = document.createElement("td");
        phoneNumberCell.textContent = item.phonenum;
        row.appendChild(phoneNumberCell);
  
        let addressCell = document.createElement("td");
        addressCell.textContent = item.address;
        row.appendChild(addressCell);
  
        row.style.textAlign = "center";
        tablebody.style.borderBottom = "3px solid black";
  
        tablebody.appendChild(row);
  
        tablebody.style.blockSize = "40px";
      }
    });

    

  
// DoctorsPromise.then((data)=>{
//   console.log(data)
// })


let NursesPromise = new Promise (async (resolve, rejct)=>{
  let {data:retrievedNurses} = await _supabase
  .from("Nurses")
  .select("*")
  resolve(retrievedNurses)
})


NursesPromise.then((data)=>{
  console.log("Nurses,", data)
})














/*document.addEventListener("DOMContentLoaded", function () {
    const data = [
        { ID: "7829423", name: "Ahmed", workinghours: "8 to 4", speciality: "Surgeon", phonenum: "01283019823", address: "klkjddd" },
        { ID: "7829423", name: "Ahmed", workinghours: "8 to 4", speciality: "Surgeon", phonenum: "01283019823", address: "klkjddd" },
        { ID: "7829423", name: "Ahmed", workinghours: "8 to 4", speciality: "Surgeon", phonenum: "01283019823", address: "klkjddd" },
        { ID: "7829423", name: "Ahmed", workinghours: "8 to 4", speciality: "Surgeon", phonenum: "01283019823", address: "klkjddd" },
        { ID: "7829423", name: "Ahmed", workinghours: "8 to 4", speciality: "Surgeon", phonenum: "01283019823", address: "klkjddd" }
      ];
      
      function populateTable() {
        const table = document.querySelector(".Dr-table table");
      
        data.forEach((staff) => {
          const row = document.createElement("tr");
      
          const idCell = document.createElement("td");
          idCell.textContent = staff.ID;
      
          const nameCell = document.createElement("td");
          nameCell.textContent = staff.name;
      
          const workingHoursCell = document.createElement("td");
          workingHoursCell.textContent = staff.workinghours;
      
          const specialityCell = document.createElement("td");
          specialityCell.textContent = staff.speciality;
      
          const phoneNumberCell = document.createElement("td");
          phoneNumberCell.textContent = staff.phonenum;
      
          const addressCell = document.createElement("td");
          addressCell.textContent = staff.address;
      
          row.appendChild(idCell);
          row.appendChild(nameCell);
          row.appendChild(workingHoursCell);
          row.appendChild(specialityCell);
          row.appendChild(phoneNumberCell);
          row.appendChild(addressCell);
      
          table.appendChild(row);
        });
      }
      
      populateTable();
      
});
  */


// drbtn.addEventListener("click", (e) => {
//   DoctorsPromise.then((Technicians)=>{
//   // let Technicians =[
//   //   {FirstName: "muhammad", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
//   //   {FirstName: "yoyobunt", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
//   //   {FirstName: "gogol", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
//   //   {FirstName: "shoyo", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"}
//   // ]

//     // /const plusbtn=document.getElementById('plus-button')
//     // const addbtn=document.getElementById('mariam')
//     // addbtn.textContent= "Add Technician"
//     // plusbtn.href = "TechForm.html"
//     const thead = document.getElementById("btats");
//     thead.innerHTML = "";

//     //zawed aw ghayar column heading and repeat for each button 
//     let heads = "<th>Technician ID</th>";
//     heads += "<th>First Name</th>";
//     heads += "<th>Last Name</th>";
//     heads += "<th>Age</th>";
//     heads += "<th>Gender</th>";
//     heads += "<th>Experience(years)</th>";
//     heads += "<th>Device</th>";
//     heads += "<th>Actions</th>";

//     thead.innerHTML = heads;
//     const columnNames = ['FirstName', 'LastName', 'Age', 'Gender', 'Experience', 'Device'];

//     let tablebody = document
//       .getElementById("dynamic-table")
//       .getElementsByTagName("tbody")[0];
//     tablebody.innerHTML = "";

//     for (var i = 0; i < Technicians.length; i++) {
//       let item = Technicians[i];
//       let row = document.createElement("tr");

//       let IDcell = document.createElement("td");
//       IDcell.textContent = item.id;
//       row.appendChild(IDcell);

//       let firstnamecell = document.createElement("td");
//       firstnamecell.textContent = item.first;
//       row.appendChild(firstnamecell);

//       let lastnamecell = document.createElement("td");
//       lastnamecell.textContent = item.last;
//       row.appendChild(lastnamecell);

//       let Agecell = document.createElement("td");
//       Agecell.textContent = item.age;
//       row.appendChild(Agecell);

//       let Gendercell = document.createElement("td");
//       Gendercell.textContent = item.gender;
//       row.appendChild(Gendercell);

//       let Datecell = document.createElement("td");
//       Datecell.textContent = item.exp;
//       row.appendChild(Datecell);

//       let Timecell = document.createElement("td");
//       Timecell.textContent = item.device;
//       row.appendChild(Timecell);

//       let ActionsCell = document.createElement("td");
//       let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

//       // let editButton = document.createElement("button");
//       // editButton.textContent = "Edit";
//       // editButton.setAttribute("id", "editButton_" + i);
//       // editButton.classList.add("edit-button");
//       // editButton.setAttribute("onclick", `editRow(this,"Tech",${item.id},${JSON.stringify(columnNames)})`);
//       // ActionsCell.appendChild(editButton);

//       let deleteButton = document.createElement("button");
//       deleteButton.textContent = "Delete";
//       deleteButton.setAttribute("id", "deleteButton_" + i);
//       deleteButton.classList.add("delete-button");
//       deleteButton.setAttribute("onclick", `deleteRow(this,"Tech",${item.id})`);
//       ActionsCell.appendChild(deleteButton);

//       row.appendChild(ActionsCell);

//       row.style.textAlign = "center";
//       tablebody.style.borderBottom = "3px solid black";

//       tablebody.appendChild(row);

//       tablebody.style.blockSize = "40px";
//     }
//   });
//   });
  
  
  
//   //prmoise put it in a variable
  
//   // async function fetchdoc( ){
    
//   //   let { data: Doctors, error } = await _supabase
//   //   .from('Doctors')
//   //   .select('*')

//   //   console.log(Doctors[0].age)
    

//   // };

//   // fetchdoc()



nursebtn.addEventListener("click", (e) =>{
  NursesPromise.then((Nurses)=>{

 

  
    const thead = document.getElementById("doc");
    thead.innerHTML = "";
 
    let heads = "<th>Nurse ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Working Hours</th>";
    heads += "<th>Phone Number</th>";
    heads += "<th>Address</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    // const columnNames = ['Doctor ID', 'First Name','Last Name', 'Working Hours', 'Speciality', 'Phone Number', 'Address'];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML= "";

    for (var i = 0; i < Nurses.length; i++) {
      let item = Nurses[i];
      let row = document.createElement("tr");

      let idcell = document.createElement("td");
      idcell.textContent = item.id;
      row.appendChild(idcell);

      let FirstNamecell = document.createElement("td");
      FirstNamecell.textContent = item.First_Name;
      row.appendChild(FirstNamecell);

      let LastNamecell = document.createElement("td");
      LastNamecell.textContent = item.Last_Name;
      row.appendChild(LastNamecell);

      let workinghourscell = document.createElement("td");
      workinghourscell.textContent = item.Working_Hours;
      row.appendChild(workinghourscell);

      let PhoneNumberCell = document.createElement("td");
      PhoneNumberCell.textContent = item.Phone_Number;
      row.appendChild(PhoneNumberCell);

      let AddressCell = document.createElement("td");
      AddressCell.textContent = item.Address;
      row.appendChild(AddressCell);


      let ActionsCell = document.createElement("td");

      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.setAttribute("id", "deleteButton_" + i);
      deleteButton.classList.add("delete-button");
      deleteButton.setAttribute("onclick", `deleteRow(this,"Tech",${item.id})`);
      ActionsCell.appendChild(deleteButton);

      row.appendChild(ActionsCell);

      row.style.textAlign = "center";
      tablebody.style.borderBottom = "3px solid black";
      tablebody.appendChild(row);
      tablebody.style.blockSize = "40px";
    }
  })
});



function deleteRow(button,tableName,id){

  async function DeleteFromTable(){
    const { data, error } = await _supabase
  .from(tableName)
  .delete()
  .eq( "id" , id)
  console.log('Item deleted')
  }
  DeleteFromTable()
  const rowtobeDeleted= button.parentNode.parentNode
  rowtobeDeleted.remove()
}