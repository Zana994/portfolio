const box = document.querySelector('.skills_container')
const loadingBars = document.querySelectorAll('.loading_bar')

function isInViewport(element) {
    const rect = element.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    )
}

document.addEventListener('scroll', () => {
    if(isInViewport(box)) { 
        for(var i = 0; i < loadingBars.length; i++)
            loadingBars[i].classList.add('loading')
    }
})