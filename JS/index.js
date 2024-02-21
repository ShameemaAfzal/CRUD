const API_URL = 'https://65a3abe7a54d8e805ed3daa9.mockapi.io/students'

const constructTable = async(data)=>{
    const tbody = document.getElementById("table-body")
    tbody.innerHTML=``
    data.forEach((e,i) => {
        tbody.innerHTML += `<tr>
        <td>${i+1}</td>
        <td>${e.firstname}</td>
        <td>${e.lastname}</td>
        <td>${e.email}</td>
        <td>${e.batch}</td>
        <td>
            <button class="btn btn-primary"><a href="./html/edit.html?id=${e.id}" class="nav-link active">Edit</a>
            </button>
            &nbsp;
            <button class="btn btn-danger" onclick="handleDelete(${e.id})">Delete
            </button>
        </td>
      </tr>`
    });
}
const getData = async()=>{
    try{
        let res = await fetch(API_URL)
        let data = await res.json()
        constructTable(data)
    }catch (error) {
        console.log(error)
    }
}

const handleDelete = async(id)=>{
    try {
        let res = await fetch(`${API_URL}/${id}`,{
            method:"DELETE"
        })
        if(res.status===200)
        {
            getData()
        }
    } catch (error) {
        console.log(error)
    }
}

getData()