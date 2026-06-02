export const handleScroll = (scrollValue) => {
    const target = document.getElementById(scrollValue)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
    }
}