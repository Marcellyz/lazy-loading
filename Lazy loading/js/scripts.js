const images = document.querySelectorAll(".image-container img");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
        
        if(!entry.isIntersecting)return

        const image = entry.target

        image.src=image.src.replace("&w=10&", "&w=1000&");

        observer.unobserve(image)
    })
}, {})


// for Each para percorrer as imagens
images.forEach((image) =>{
    observer.observe(image)
})