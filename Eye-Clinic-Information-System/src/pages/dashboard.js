const { createClient } = supabase
const _supabase = createClient("https://yuteujqkgjjxnuxuesok.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dGV1anFrZ2pqeG51eHVlc29rIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NzEzNDU3NSwiZXhwIjoyMDAyNzEwNTc1fQ.lWAljdj7grdzyB7RDxtVrIKpsJpRU8SMs6WflWk_INI")

console.log(_supabase) 

const thead = document.getElementById('dashboard') 
thead.innerHTML = "";

let DashboardPromise = new Promise(async (resolve, reject) => {
  let { data: retrievedDashboard } = await _supabase
    .from("Dashboard")
    .select("*");
  resolve(retrievedDashboard);
});


DashboardPromise.then((Dashboard)=>{
  
  const thead = document.getElementById("dashboard");
  thead.innerHTML = "";

  let heads = "<th>Appointement ID</th>";
  heads += "<th>Type</th>";
  heads += "<th>Name</th>";
  heads += "<th>Phone</th>";
  heads += "<th>Date</th>";
  heads += "<th>Room</th>";
  heads += "<th>Status</th>";
 


  thead.innerHTML = heads;

  let tablebody = document
    .getElementById("dynamic-dashboard-table")
    .getElementsByTagName("tbody")[0];
  tablebody.innerHTML= "";

  for (var i = 0; i < Dashboard.length; i++) {
    let item = Dashboard[i];
    let row = document.createElement("tr");
 
    let Typecell = document.createElement("td");
    Typecell.textContent = item.Type;
    row.appendChild(Typecell);

    let Namecell = document.createElement("td");
    Namecell.textContent = item.Name;
    row.appendChild(Namecell);

    let Phonecell = document.createElement("td");
    Phonecell.textContent = item.Phone;
    row.appendChild(Phonecell);

    let Datecell = document.createElement("td");
    Datecell.textContent = item.Date;
    row.appendChild(Datecell);

    let Roomcell = document.createElement("td");
    Roomcell.textContent = item.Room;
    row.appendChild(Roomcell);

    
    let Statuscell = document.createElement("td");
    Statuscell.textContent = item.Status;
    row.appendChild(Statuscell);

    let idcell = document.createElement("td");
    idcell.textContent = item.id;
    row.appendChild(idcell);
    
    row.style.textAlign = "center";
    tablebody.style.borderBottom = "3px solid black";
    tablebody.appendChild(row);
    tablebody.style.blockSize = "40px";
  }

})

