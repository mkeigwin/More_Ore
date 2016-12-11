window.addEventListener('DOMContentLoaded', () => {

  console.log('game.js is linked and DOM is loaded')

  let ore = document.querySelector('.ore-image')
  let bOreAmount = document.querySelector('.bOre-amount')

  let orePerClick = 0

  let bOre = 0
  let iOre = 0
  let gOre = 0
  let pOre = 0
  let dOre = 0

  let r_bOre = 0
  let r_iOre = 0
  let r_gOre = 0
  let r_pOre = 0
  let r_dOre = 0

  const addOre = () => {
    console.log('addOre function running')
    bOre++
    bOreAmount.innerHTML = bOre
  }

  ore.addEventListener('click', addOre)


})
