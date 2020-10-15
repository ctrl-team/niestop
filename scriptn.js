const button = document.getElementById("button")
let sTime

button.addEventListener('mousedown', () => {
  sTime = new Date().getTime()
})

button.addEventListener('mouseup', async() => {
  const time = new Date(new Date().getTime()-sTime).getSeconds() + 1
  await alert(`Przegrałeś! Trzymałeś przez: ${time}s`)
  location.reload()
})
