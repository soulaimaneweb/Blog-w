// NAV BAR LOGIC
let navbar = document.querySelector(".head")
window.addEventListener("scroll" , ()=> {
    navbar.classList.toggle("active", window.scrollY > 0)
})


// THE LOGIC OF ITEMS CATEGORY
let allItemsCtaegory = document.querySelectorAll(".category-list li")
allItemsCtaegory.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault()
        allItemsCtaegory.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")
    })
})


// THE LOGIC OF THE BLOGS
let blogs = [
    {
        id:1,
        imgurl:"./imgs/post-1.jpg",
        special : "phone"
    },
    {
        id:2,
        imgurl:"./imgs/post-2.jpg"
    },
    {
        id:3,
        imgurl:"./imgs/post-3.jpg"
    },
    {
        id:4,
        imgurl:"./imgs/post-4.jpg"
    },
    {
        id:5,
        imgurl:"./imgs/post-5.jpg"
    },
    {
        id:6,
        imgurl:"./imgs/post-6.jpg"
    },
    {
        id:7,
        imgurl:"./imgs/post-4.jpg"
    },
    {
        id:8,
        imgurl:"./imgs/post-5.jpg"
    },
    {
        id:9,
        imgurl:"./imgs/post-6.jpg"
    },
]
// SAVE TO LOCAL STORAGE 
localStorage.setItem("allBlogs", JSON.stringify(blogs))
let itemDom = document.querySelector(".blogs")
function drawBlogs() {
    let blogsUI = blogs.map((blog) => {
        return `
        <div class="blog" data-reveal>
                <div class="img">
                    <img src="${blog.imgurl}" alt="">
                </div>
                <span>Mobile</span>
                <h2 onclick="addTocart(${blog.id})">How To Create UX Desing Using XD Adobe  </h2>
                <div class="time">22 FEB 2022</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium error voluptas porro placeat suscipit iure fugit nam illo incidunt aspernatur.</p>
                <div class="profile">
                    <img src="./imgs/profile-1.jpg" alt="">
                    <h3>Marques Brwon</h3>
                </div>
            </div>
        `
    })
    itemDom.innerHTML = blogsUI.join("")
}
drawBlogs()
// FUNCTION POST PAGE 
function addTocart(id) {
    localStorage.setItem("blogId", id)
    window.location ="./cart-Details.html"
}




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




window.addEventListener("load" , () => {
    let reveals =document.querySelectorAll("[data-reveal]")
    reveals.forEach(revel => {
        revel.style.transform ="translate(0)"
        revel.style.opacity ="1"
    }) 
})


