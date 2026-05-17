fetchBtn = document.getElementById("fetchBtn")
let container = document.getElementById("userContainer")

var url = "https://jsonplaceholder.typicode.com/users"

fetchBtn.addEventListener("click", getUserData)

async function getUserData() {
    try{
         let object = await fetch(url);
        let data = await object.json();
        decodeFromText(data);
    }catch{
        console.error("data error", error);
    }
   
    }

function decodeFromText(table){
    table.forEach((user, index) => {
    container.innerHTML += `
        
        <div class="user" style="animation-delay: ${index * 0.15}s; --i: ${index};">
            <div class="avatar">
                <img src="assets/avatar.webp">    
            </div>
            <div class="userInfo">
                <h6 class="name">${user.name}</h6>
                <div class="contact">
                    <div class="mail"><h6>E-mail: </h6><p>${user.email}</p></div>
                    <div class="address"><h6>Address: </h6><p>${user.address.city}, ${user.address.street}, ${user.address.suite}</p></div>
                </div>
            </div>
        </div>
        `;
    });
    
    fetchBtn.style.display = "none";


}