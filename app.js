const getCoordinates = ({ source, event })=> {
  if (source === "mouse") {
    return {
      clientX: event.clientX,
      clientY: event.clientY
    }
  }
  if (source === "touch") {
    return {
      clientX: event.touches[0].clientX,
      clientY: event.touches[0].clientY
    }
  }
}

const updatePosition = (source)=> (event)=> {
  const { clientX, clientY } = getCoordinates({ source, event })
  const x = clientX / window.innerWidth
  const y = clientY / window.innerHeight
  const root = document.documentElement
  root.style.setProperty('--x', x*100)
  root.style.setProperty('--y', y*100)
}

const updateFontSize = ()=> {
  const root = document.documentElement
  const currentFontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size') || '0'
  const newFontSize = parseInt(currentFontSize) + 1
  root.style.setProperty('--font-size', newFontSize)
}

document.addEventListener("mousemove", updatePosition("mouse"))
document.addEventListener("touchmove", updatePosition("touch"))

document.addEventListener("click", updateFontSize)
