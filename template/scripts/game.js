window.addEventListener('DOMContentLoaded', () => {

  console.log('game.js connected')

  let ore = document.querySelector('.ore-image')

  let bOreAmount = document.querySelector('.bOre-amount')
  let iOreAmount = document.querySelector('.iOre-amount')
  let gOreAmount = document.querySelector('.gOre-amount')
  let pOreAmount = document.querySelector('.pOre-amount')
  let dOreAmount = document.querySelector('.dOre-amount')

  let r_bOreAmount = document.querySelector('.r-bOre-amount')
  let r_iOreAmount = document.querySelector('.r-iOre-amount')
  let r_gOreAmount = document.querySelector('.r-gOre-amount')
  let r_pOreAmount = document.querySelector('.r-pOre-amount')
  let r_dOreAmount = document.querySelector('.r-dOre-amount')

  let furnace1 = document.querySelector('#furnace1')
  let furnace2 = document.querySelector('#furnace2')
  let smeltButton = document.querySelector('.smelt-button')
  let smeltButton2 = document.querySelector('.smelt-button-2')
  let whatToMake = document.querySelector('.what-to-make')
  let amountToMake = document.querySelector('.amount-to-make')

  let add1 = document.querySelector('.add1')
  let add10 = document.querySelector('.add10')
  let add100 = document.querySelector('.add100')
  let addAll = document.querySelector('.addAll')

  let buyFurnaceButton = document.querySelector('.buy-furnace-button')
  let upgradePickaxeButton = document.querySelector('.upgrade-pickaxe-button')
  let pickaxeLevel = document.querySelector('.pickaxe-lv')
  let orePerClickStats = document.querySelector('.amount-per-click')

  let orePerClick = 1

  let bOre = 10
  let iOre = 0
  let gOre = 0
  let pOre = 0
  let dOre = 0

  let r_bOre = 21
  let r_iOre = 0
  let r_gOre = 0
  let r_pOre = 0
  let r_dOre = 0

  let priceOfFurnace = 20
  let amountOfFurnace = 1

  let upgradePickaxePrice = 10
  let pickaxeLv = 1

  let isSmelting = false
  let isSmelting2 = false

  const upgradePickaxe = () => {
    console.log('asdf')
    if (r_bOre >= upgradePickaxePrice) {
      r_bOre-=upgradePickaxePrice
      r_bOreAmount.innerHTML = r_bOre
      orePerClick*=1.5
      pickaxeLv++
      pickaxeLevel.innerHTML = pickaxeLv
      orePerClickStats.innerHTML = orePerClick.toFixed(1)

    }
  }

  const smeltOres = () => {
    console.log('clicked')
    if (isSmelting === false) {

      isSmelting = true
      furnace1.style.background = 'url("./assets/furnace_active.png")'
      furnace1.style.backgroundSize = 'contain'
      let selectedOre = whatToMake.value
      let amount = parseInt(amountToMake.innerHTML)

      if (selectedOre === 'bOre') {
        smeltButton.innerHTML = `Ores left to smelt: ${amount}`
        smeltButton.style.cursor = 'not-allowed'
        smeltButton.disabled = true
        bOre -= (amount * 10)
        bOreAmount.innerHTML = bOre
        amountToMake.innerHTML = 0
        let smeltTime = setInterval(() => {
          amount--
          r_bOre++
          r_bOreAmount.innerHTML = r_bOre
          smeltButton.innerHTML = `Ores left to smelt: ${amount}`
          if (amount <= 0) {
            clearInterval(smeltTime)
            smeltButton.innerHTML = 'SMELT'
            smeltButton.style.cursor = 'pointer'
            smeltButton.disabled = false
            isSmelting = false
            furnace1.style.background = 'url("./assets/furnace_inactive.png")'
            furnace1.style.backgroundSize = 'contain'
          }
        }, 2000)
      }
    }
  }
  const smeltOres2 = () => {
    console.log('clicked')
    if (isSmelting2 === false) {

      isSmelting2 = true
      furnace2.style.background = 'url("./assets/furnace_active.png")'
      furnace2.style.backgroundSize = 'contain'
      let selectedOre = whatToMake.value
      let amount = parseInt(amountToMake.innerHTML)

      if (selectedOre === 'bOre') {
        smeltButton.innerHTML = `Ores left to smelt: ${amount}`
        smeltButton.style.cursor = 'not-allowed'
        smeltButton.disabled = true
        bOre -= (amount * 10)
        bOreAmount.innerHTML = bOre
        amountToMake.innerHTML = 0
        let smeltTime = setInterval(() => {
          amount--
          r_bOre++
          r_bOreAmount.innerHTML = r_bOre
          smeltButton.innerHTML = `Ores left to smelt: ${amount}`
          if (amount <= 0) {
            clearInterval(smeltTime)
            smeltButton.innerHTML = 'SMELT'
            smeltButton.style.cursor = 'pointer'
            smeltButton.disabled = false
            isSmelting2 = false
            furnace2.style.background = 'url("./assets/furnace_inactive.png")'
            furnace2.style.backgroundSize = 'contain'
          }
        }, 2000)
      }
    }
  }

  const add1ToSmelt = (e) => {
    console.log(e)
    console.log(this)
    let selectedOre = whatToMake.value
    let amount = parseInt(amountToMake.innerHTML)
    let maxAmount = Math.floor(bOre/10)

    if (selectedOre === 'bOre') {
      if (bOre >= 10 && amount < maxAmount) {
        amount++
        console.log(amount)
        amountToMake.innerHTML = amount
      }
    }
  }

  const add10ToSmelt = () => {
    let selectedOre = whatToMake.value
    let currentAmount = parseInt(amountToMake.innerHTML)
    console.log(currentAmount)
    let amountNeededToAdd10 = (currentAmount*10) + 100
    console.log(`Amount of Ore needed to add 10: ${amountNeededToAdd10}`)
    let maxAmount = (amountNeededToAdd10/bOre)

    if (selectedOre === 'bOre') {
      if (maxAmount <= 1) {
        currentAmount += 10
        console.log(currentAmount)
        amountToMake.innerHTML = currentAmount
        console.log('you can add 10!')
      }
    }
  }

  // const add100ToSmelt = () => {

  // }

  // const addAllToSmelt = () => {

  // }

  const addOre = () => {
    bOre+= orePerClick
    bOreAmount.innerHTML = bOre.toFixed(0)
  }

  const buyFurnace = () => {
    console.log('buyFurnace running')
    if (r_bOre >= priceOfFurnace && amountOfFurnace < 4) {
      r_bOre -= priceOfFurnace
      r_bOreAmount.innerHTML = r_bOre
      priceOfFurnace *= 2
      amountOfFurnace++
      furnace2.style.display = 'block'
    }
  }

  ore.addEventListener('click', addOre)
  smeltButton.addEventListener('click', smeltOres)
  smeltButton2.addEventListener('click', smeltOres2)
  add1.addEventListener('click', add1ToSmelt)
  add10.addEventListener('click', add10ToSmelt)
  // add100.addEventListener('click', add100ToSmelt)
  // addAll.addEventListener('click', addAllToSmelt)
  upgradePickaxeButton.addEventListener('click', upgradePickaxe)
  buyFurnaceButton.addEventListener('click', buyFurnace)


})
