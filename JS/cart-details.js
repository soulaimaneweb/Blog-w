// NAV BAR LOGIC
let navbar = document.querySelector(".head")
window.addEventListener("scroll" , ()=> {
    navbar.classList.toggle("active", window.scrollY > 0)
})
// BTN TO TOP
let btnTop = document.querySelector(".fa-arrow-right")
window.addEventListener("scroll" , ()=> {
    btnTop.classList.toggle("active", window.scrollY > 400)
})
btnTop.addEventListener("click" , ()=> {
    window.scrollTo({
        top,
        behavior:"smooth",
    })
})



// THE LOGIC OF COLORS

// TOGLER COTAINER
let colorContainer = document.querySelector(".colors-container")
let gearbtn = document.querySelector(".fa-gear")
gearbtn.addEventListener("click" , () => {
    colorContainer.classList.toggle("active")
})
// SET COLORS TO LOCALSTORAGE
let mainColor = localStorage.getItem("main-color")
if(mainColor != null) {
    document.documentElement.style.setProperty("--main-color", mainColor)
}
let colors = document.querySelectorAll(".colors-container span")
colors.forEach((color) => {
    color.addEventListener("click" , (e)=> {
        colors.forEach(color => {
            color.classList.remove("active")
        })
        color.classList.add("active")
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("main-color" , e.target.dataset.color)
    })
})




let blogs = JSON.parse(localStorage.getItem("allBlogs"))
let blogId = localStorage.getItem("blogId")
let itemDom = document.querySelector(".img")
let blogDeatils =blogs.find((blog) => blog.id == blogId)


itemDom.innerHTML = `
<img src="${blogDeatils.imgurl}" alt="">
`