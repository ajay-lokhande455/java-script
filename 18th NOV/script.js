// const img = document.querySelector(".img-1");
// function change(){
//     img.setAttribute("src", "https://miro.medium.com/v2/resize:fit:2400/0*hDAyhnOx767w5qma.jpg");
//     img.style.width = "300px"
// }

// console.log(img.getAttribute("src"))  

const imageNumber = ["https://miro.medium.com/v2/resize:fit:2400/0*hDAyhnOx767w5qma.jpg", 
                    "https://th.bing.com/th/id/OIP.pUQnwm5GXy1lnB08FbVWGwHaEo?rs=1&pid=ImgDetMain"
]

function showImage(imageNumber){
    const image = document.getElementById("my-img2");
    const box = document.getElementById("box");
    box.style.display= "block";
    image.setAttribute("src",imageNumber[index])
}



