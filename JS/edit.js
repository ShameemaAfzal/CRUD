const API_URL = 'https://65a3abe7a54d8e805ed3daa9.mockapi.io/students'

const urlParams = new URLSearchParams(window.location.search)
const id = (urlParams.get('id'))

let myForm =  document.getElementById('createForm')
myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    edit()
})


const edit = async()=>{
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
        let res = await fetch(`${API_URL}/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        if(res.status===200)
        {
            window.location.href='/'
        } 
    } catch (error) {
        console.log(error)
    }
}

const getStudentById = async()=>{
    try {
        let res = await fetch(`${API_URL}/${id}`)
        let data = await res.json()
        if(res.status===200){
        document.getElementById("firstname").value = data.firstname?data.firstname:""
        document.getElementById("lastname").value = data.lastname?data.lastname:""
        document.getElementById("email").value = data.email?data.email:""
        document.getElementById("batch").value = data.batch?data.batch:""
        document.getElementById("city").value = data.address.city?data.address.city:""
        document.getElementById("state").value = data.address.state?data.address.state:""
        document.getElementById("zipcode").value = data.address.zipcode?data.address.zipcode:""
        }
    } catch (error) {
        console.log(error)
    }
}
const goback =()=>{
    window.history.back()
}

getStudentById()