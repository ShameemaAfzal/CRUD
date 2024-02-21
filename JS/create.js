const API_URL = 'https://65a3abe7a54d8e805ed3daa9.mockapi.io/students'

let myForm =  document.getElementById('createForm')
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    create()
})


const create = async()=>{
    try {
        let data = {
            firstname:document.getElementById("firstname").value,
            lastname:document.getElementById("lastname").value,
            email:document.getElementById("email").value,
            batch:document.getElementById("batch").value,
            address:{
                city:document.getElementById("city").value,
                state:document.getElementById("state").value,
                zipcode:document.getElementById("zipcode").value,
            }
        }
        let res = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(res.status===201)
        {
            window.location.href='/'
        } 
    } catch (error) {
        console.log(error)
    }
}