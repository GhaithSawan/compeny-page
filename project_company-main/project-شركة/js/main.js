let scrol = document.getElementById("scrol")

onscroll = function () {
    if (window.scrollY > 400) {
        scrol.style.right = "20px"
        scrol.style.visibility = "visible"

    }
    else {
        scrol.style.right = "-100px"
        scrol.style.visibility = "hidden"



    }
}


scrol.onclick = function () {

    window.scroll({
        top: 0,
        left: 0,



    })
}


// ___________________
let data = [
    // {
    //     name: "gaes",
    //     parg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, adipisci non error vel velit",
    //     gender: "male",
    //     src: "./imag/user2.jpg"

    // },
    // {
    //     name: "fatima",
    //     parg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, adipisci non error vel velit",
    //     gender: "female",
    //     src: "./imag/user1.jpg"

    // }

]

if (localStorage.getItem("person")) {
    data = JSON.parse(localStorage.getItem("person"))
} else {
    data = []
}



showData()
function showData() {
    let aboutus2 = document.getElementById("aboutus2")
    aboutus2.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        var content = `  
            <div class="person1 person col-lg-3   ">
            <div class="infermation">
                ${data[i].parg}
            </div>
            <div class="name">
                <img src=${data[i].src} alt="">
                <h1>${data[i].name}</h1>
            </div>
        
            </div>
      
    `
        aboutus2.innerHTML += content
    }

}


let addbuttton = document.getElementById("addbtn")
addbuttton.onclick = () => {
    let name = document.getElementById("name")
    let p = document.getElementById("p")
    let checkbox1 = document.getElementById("checkbox1").checked
    let checkbox2 = document.getElementById("checkbox2").checked

    if (checkbox1 == true) {
        let newoBJ =
        {
            name: name.value,
            parg: p.value,
            gender: "male",
            src: "./imag/user2.jpg"

        }
        data.push(newoBJ)
        localStorage.setItem("person", JSON.stringify(data))

    }
    if (checkbox2 == true) {
        let newoBJ =
        {
            name: name.value,
            parg: p.value,
            gender: "female",
            src: "./imag/user1.jpg"

        }
        data.push(newoBJ)
        localStorage.setItem("person", JSON.stringify(data))

    }
    name.value = ""
    p.value = ""
    showData()
}



