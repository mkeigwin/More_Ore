$(() => {

  console.log('game.js connected')

  let amountPerClick = 1

  let bOre = 100
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

  let pickaxeUpgradePrice = 10

  let pickaxeLevel = 1

  let isSmelting = false
  let smeltTime = 1000


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
      if ($('.furnace-bronze-amount').text() > 0) {

        isSmelting = true

        $('.furnace-image').attr('src', './assets/furnace_active.png');
        let amountOfBronze = $('.furnace-bronze-amount').text()
        console.log(amountOfBronze)
        bOre -= (amountOfBronze * 10)
        $('.bOre-amount').text(bOre)
        $('.furnace-bronze-amount').text(0)
        let timer = (2000 * amountOfBronze)
        $('.smelt-button').text(`Amount left: ${amountOfBronze}`)

        let countdownTimer = setInterval(() => {
          amountOfBronze--
          console.log(amountOfBronze)
          bBar++
          $('.smelt-button').text(`Amount left: ${amountOfBronze}`)
          $('.bBar-amount').text(bBar)

          if (amountOfBronze <= 0) {
            console.log(amountOfBronze)
            console.log('clearing interval')
            clearInterval(countdownTimer)
            $('.smelt-button').text('SMELT')
            isSmelting = false
            $('.furnace-image').attr('src', './assets/furnace_inactive.png');
          }
        }, smeltTime)
      }

      // setTimeout(() => {
      //   clearInterval(countdownTimer)
      //   $('.smelt-button').text('SMELT')
      //   isSmelting = false
      //   $('.furnace-image').attr('src', './assets/furnace_inactive.png');
      // }, timer)
    }

  })

  $('.upgrade-pickaxe').mouseover((e) => {
    $('.upgrade-pickaxe-modal').css('display', 'block');
  })

  $('.upgrade-pickaxe').mouseout(() => {
    $('.upgrade-pickaxe-modal').css('display', 'none');
  })

  $('.upgrade-pickaxe').click(() => {
    if (bBar >= pickaxeUpgradePrice) {
      bBar -= pickaxeUpgradePrice
      $('.bBar-amount').text(bBar)
      amountPerClick *= 2
      pickaxeLevel++
      pickaxeUpgradePrice *= 2.1
      $('.upgrade-pickaxe-price').text(pickaxeUpgradePrice)
      $('.pickaxe-level').text(pickaxeLevel)
    }
  })

  $('.rock').click(() => {
    bOre += amountPerClick;
    $('.bOre-amount').text(bOre)
  })

})
