//console.log("working")
 // chrome://extensions/
 // trigger the developer mode on

let oldLeads = []
let myLeads = `[]`;
myLeads =JSON.parse(myLeads)
myLeads.push("")
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const btnTab = document.getElementById("tab-btn");

/* const tabs = [
    {url :"https://www.linked.com/in/per-harald-borgen/"}
]
 */ 
// localStorage.clear()
// Get the leads from the localStorage -PS JSON.parse()
// Store it in a variable, leadsFromLocalStorage
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads") )
// log out the variable
// console.log(leadsFromLocalStorage)

// ["lead1" , "lead2"] or null 
// 1 check if leadsFromLocalStorage is truthy
if (leadsFromLocalStorage === true){
    myLeads = leadsFromLocalStorage
    render(leads)
}

inputBtn.addEventListener("click" , function(){
    // Grab the url
        myLeads.push(inputEl.value)
    console.log(myLeads)
    // clear out input field
inputEl.value = "";
// save the myleads array to localStorage
localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads)
})

//2. Listen for double clicks on the delete button (google it!)
var delEl = document.getElementById("delete-btn");
delEl.addEventListener("dblclick", function (){
    console.log("double clicked")
    localStorage.clear()
    myLeads = []
    render (myLeads)
      
})

btnTab.addEventListener("click" , function(){
    chrome.tabs.query({active:true, currentWindow:true} , function (tabs){
// console.log(tabs)
  //console.log(tabs[0].url)
//save the url instead of just logging it out
    myLeads.push(tabs[0].url)
    console.log(myLeads)

    // save the myleads array to localStorage
localStorage.setItem("myLeads",JSON.stringify( myLeads ))

render(myLeads)

    })

})

function render(leads){

    let listItems = "";
    for (let i = 0; i < leads.length; i++){
        console.log(myLeads[i])
        // Template strings
listItems += `<li>
    <a target='_blank' href='${leads[i]}'>
 ${myLeads[i]}
    </a>
</li>`
    }

ulEl.innerHTML = listItems;

}
