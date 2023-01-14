const form = document.querySelector(".form")
const input = document.querySelectorAll(".input")
const userbox= document.querySelector(".userbox")



let arr = []


let render = ()=>{
  const localUser = JSON.parse(localStorage.getItem("user"))

  if(localUser){
    userbox.innerHTML=localUser?.map((item)=>{
      return `
      <ul>
      <li>  ismi :${item.name}</li>
      <li>  raqami :${item.number}</li>
      <li>   parol:${item.pasword}</li>
      </ul>
      `
    }).join("")
  }
}


form.addEventListener("submit",(e)=>{
  let userrr = JSON.parse(localStorage.getItem("user"))
e.preventDefault()
if(!arr.length){
  if(userrr){

    arr=[...userrr]
  }
}
let obj = {}
  let count = 0 
  for(let i of input){
     count+=1
   if(i.value){
    obj[i.name] = i .value
    obj.id =arr.length+1
    i.value= ""
   }
   else{
    i.style.backgroundColor = "red"
   }

  }
 if(Object.keys(obj).length>count-1){
  arr.push(obj)
  localStorage.setItem("user",JSON.stringify(arr))
  render()
 }
})
render()