const panels = document.querySelectorAll('.panel')
// console.log(panels)
panels.forEach(panelAddClass => {
    panelAddClass.addEventListener('click', () => {
        removeActiveClasses()
        panelAddClass.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panelRemoveClass => {
        panelRemoveClass.classList.remove('active')
    })
}