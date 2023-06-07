const showHomeContent = isShow => {
    const homeContent = document.getElementById('homeContent')
    if(isShow){
        homeContent.style.opacity = 1
    } else {
        homeContent.style.opacity = 0
    }
}

export default showHomeContent