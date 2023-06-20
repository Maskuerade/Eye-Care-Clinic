const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 

const thead = document.getElementById('dash') 
//let drbtn = document.getElementById("dr-btn")
//thead.innerHTML = "";

drbtn.addEventListener("click", (e) => {
  DoctorsPromise.then((Technicians)=>{
  // let Technicians =[
  //   {FirstName: "muhammad", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
  //   {FirstName: "yoyobunt", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
  //   {FirstName: "gogol", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"},
  //   {FirstName: "shoyo", LastName :"khaled", Age: "20", Gender: "male", Experience: "gamed", Device:"gada3"}
  // ]

    // /const plusbtn=document.getElementById('plus-button')
    // const addbtn=document.getElementById('mariam')
    // addbtn.textContent= "Add Technician"
    // plusbtn.href = "TechForm.html"
    const thead = document.getElementById("dash");
    thead.innerHTML = "";

    //zawed aw ghayar column heading and repeat for each button 
    let heads = "<th>Technician ID</th>";
    heads += "<th>First Name</th>";
    heads += "<th>Last Name</th>";
    heads += "<th>Age</th>";
    heads += "<th>Gender</th>";
    heads += "<th>Experience(years)</th>";
    heads += "<th>Device</th>";
    heads += "<th>Actions</th>";

    thead.innerHTML = heads;
    const columnNames = ['FirstName', 'LastName', 'Age', 'Gender', 'Experience', 'Device'];

    let tablebody = document
      .getElementById("dynamic-table")
      .getElementsByTagName("tbody")[0];
    tablebody.innerHTML = "";

    for (var i = 0; i < Technicians.length; i++) {
      let item = Technicians[i];
      let row = document.createElement("tr");

      let IDcell = document.createElement("td");
      IDcell.textContent = item.id;
      row.appendChild(IDcell);

      let firstnamecell = document.createElement("td");
      firstnamecell.textContent = item.first;
      row.appendChild(firstnamecell);

      let lastnamecell = document.createElement("td");
      lastnamecell.textContent = item.last;
      row.appendChild(lastnamecell);

      let Agecell = document.createElement("td");
      Agecell.textContent = item.age;
      row.appendChild(Agecell);

      let Gendercell = document.createElement("td");
      Gendercell.textContent = item.gender;
      row.appendChild(Gendercell);

      let Datecell = document.createElement("td");
      Datecell.textContent = item.exp;
      row.appendChild(Datecell);

      let Timecell = document.createElement("td");
      Timecell.textContent = item.device;
      row.appendChild(Timecell);

      let ActionsCell = document.createElement("td");
      let rowId = item.id; // Assuming `item` has a property `id` that represents the row's unique identifier

      // let editButton = document.createElement("button");
      // editButton.textContent = "Edit";
      // editButton.setAttribute("id", "editButton_" + i);
      // editButton.classList.add("edit-button");
      // editButton.setAttribute("onclick", `editRow(this,"Tech",${item.id},${JSON.stringify(columnNames)})`);
      // ActionsCell.appendChild(editButton);

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
  });
  });
  
  
  
  //prmoise put it in a variable
  
  // async function fetchdoc( ){
    
  //   let { data: Doctors, error } = await _supabase
  //   .from('Doctors')
  //   .select('*')

  //   console.log(Doctors[0].age)
    

  // };

  // fetchdoc()


  let DoctorsPromise = new Promise(async (resolve, reject) => {
    let { data: retrievedDoctors } = await _supabase
      .from("Doctors")
      .select("*");
    resolve(retrievedDoctors);
  });
  
DoctorsPromise.then((data)=>{
  console.log(data)
})



















function createApp() {
    // const data = [
    //   { date: "16/06/23", name: 'Mayar Ahmed', phone: '010263842', type:"Exam", doctor: "Ahmed", status: "Paid" },
    //   { date: "16/06/23", name: 'Mayar Ahmed', phone: '010263842', type:"Exam", doctor: "Ahmed", status: "Paid" },
    //   { date: "16/06/23", name: 'Mayar Ahmed', phone: '010263842', type:"Exam", doctor: "Ahmed", status: "Paid" },
    //   { date: "16/06/23", name: 'Mayar Ahmed', phone: '010263842', type:"Exam", doctor: "Ahmed", status: "Paid" },
    //   { date: "16/06/23", name: 'Mayar Ahmed', phone: '010263842', type:"Exam", doctor: "Ahmed", status: "Paid" },
    // ];
  

    
    function renderData() {
      const tableBody = document.querySelector(".table tbody");
      tableBody.innerHTML ="";
      data.forEach(function (val) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${val.date}</td>
          <td>${val.name}</td>
          <td>${val.phone}</td>
          <td>${val.type}</td>
          <td>${val.doctor}</td>
          <td>${val.status}</td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    renderData();
  }
  
  createApp();
  
  document.addEventListener('DOMContentLoaded', function() {
    const pageContent = document.querySelector('.main-content');
  
    function loadPage(page) {
      // Fetch the content of the page from the server or load it from a local file
      // For simplicity, let's assume the content is stored in separate HTML files
      fetch(`src/pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
          pageContent.innerHTML = html;
        })
        .catch(error => {
          console.error('Error loading page:', error);
        });
    }
  
    // Event listener for the sidebar links
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        const page = this.getAttribute('href');
        loadPage(page);
      });
    });
  
    // Load the initial page when the document loads
    loadPage('dashboard');
  });
  