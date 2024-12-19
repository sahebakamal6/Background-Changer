
let b = document.getElementById("button");

let images = [
    "url('https://images5.alphacoders.com/546/546609.jpg')",
    "url('https://images8.alphacoders.com/601/601973.jpg')",
    "url('https://i.pinimg.com/originals/66/be/79/66be7922881ea8c3bcb1bd40ba12a797.jpg')",
    "url('https://images8.alphacoders.com/135/1354214.jpeg')",
    "url('https://images6.alphacoders.com/298/thumb-1920-298926.jpg')",
    "url('https://wallpapers.com/images/featured/3d-galaxy-4io58y5d17av1ln2.jpg')",
    "url('https://images7.alphacoders.com/366/366443.jpg')",
    "url('https://i.pinimg.com/originals/0f/95/9e/0f959e9c31917d40344c5da33622e14a.jpg')",
    "url('https://wallpapers.com/images/hd/1920x1080-hd-space-hlsjb955rck9g4gl.jpg')",
    "url('https://images7.alphacoders.com/302/302720.jpg')",
    "url('https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg')",
    "url('https://img.freepik.com/free-photo/milky-way-glows-mountain-peak-dusk-generated-by-ai_188544-19863.jpg')",
    "url('https://images5.alphacoders.com/106/thumb-1920-1068540.jpg')",
    "url('https://images6.alphacoders.com/131/1317388.jpeg')",
    "url('https://upload.wikimedia.org/wikipedia/commons/e/ed/HD-Galaxy.jpg')",
    "url('https://wallpapers.com/images/hd/4k-ultra-hd-galaxy-planets-hlbd521kkb8jmtw5.jpg')",
    "url('https://images6.alphacoders.com/134/1341464.png')",
    "url('https://images6.alphacoders.com/133/1336965.jpeg')"
]
let index = 0;

b.addEventListener('click',()=>{
    document.body.style.backgroundImage = images[index];
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "top"
    document.body.style.backgroundRepeat = "no-repeat"
    index++
    if(index >= images.length){
        index = 0;
    }    
});
