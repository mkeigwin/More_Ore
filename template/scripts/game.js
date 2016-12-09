$(() => {

  console.log('game.js connected')

  let bOre = 0
  let iOre = 0
  let gOre = 0
  let pOre = 0
  let dOre = 0

  let bBar = 0
  let iBar = 0
  let gBar = 0
  let pBar = 0
  let dBar = 0

  let miner = 0
  let heroes = 0

  let isSmelting = false







  $('.bronze-ore-subtract').click(() => {

    let amount = parseInt($('.furnace-bronze-amount').text())
    if (amount > 0) {
      amount--
      $('.furnace-bronze-amount').text(amount)
    }
  })

  $('.bronze-ore-add').click(() => {
    let amount = parseInt($('.furnace-bronze-amount').text())
    let maxAmount = Math.floor(bOre/10)
    if (bOre >= 10 && amount < maxAmount) {
      amount++
      $('.furnace-bronze-amount').text(amount)
    }
  })

  $('.smelt-button').click(() => {
    if (isSmelting === false) {
      isSmelting = true
      $('.furnace-image').attr('src', './assets/furnace_active.png');
      let amountOfBronze = $('.furnace-bronze-amount').text()
      bOre -= (amountOfBronze * 10)
      $('.bOre-amount').text(bOre)
      $('.furnace-bronze-amount').text(0)
      let timer = (5000 * amountOfBronze)

      setTimeout(() => {
        bBar+= parseInt(amountOfBronze)
        isSmelting = false
        $('.furnace-image').attr('src', './assets/furnace_inactive.png');
        $('.bBar-amount').text(bBar)
      }, timer)
    }

  })

  $('.upgrade-pickaxe').mouseover((e) => {
    $('.upgrade-pickaxe-modal').css('display', 'block');
  })

  $('.upgrade-pickaxe').mouseout(() => {
    $('.upgrade-pickaxe-modal').css('display', 'none');
  })

  $('.rock').click(() => {
    bOre++;
    $('.bOre-amount').text(bOre)
  })

})
