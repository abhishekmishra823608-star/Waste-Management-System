// CLOCK

setInterval(()=>{

const now = new Date()

let time = now.toLocaleTimeString()

let clock = document.getElementById("clock")

if(clock)
clock.innerHTML=time

},1000)


// REPORT STORAGE

let form=document.getElementById("reportForm")

if(form)
{
form.addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let location=document.getElementById("location").value
let type=document.getElementById("type").value
let desc=document.getElementById("description").value

let reports=JSON.parse(localStorage.getItem("reports")) || []

reports.push({name,location,type,desc})

localStorage.setItem("reports",JSON.stringify(reports))

alert("Report Submitted")

form.reset()

})
}


// DASHBOARD DISPLAY

let table=document.getElementById("reportTable")

if(table)
{
let reports=JSON.parse(localStorage.getItem("reports")) || []

reports.forEach(r=>{

let row=`
<tr>
<td>${r.name}</td>
<td>${r.location}</td>
<td>${r.type}</td>
<td>${r.desc}</td>
</tr>
`

table.innerHTML+=row

})
}