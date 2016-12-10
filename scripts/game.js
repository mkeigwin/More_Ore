$(() => {

  console.log('game.js connected')

  let amountPerClick = 1

  let bOre = 10000
  let iOre = 10000
  let gOre = 10000
  let pOre = 10000
  let dOre = 10000

  let bBar = 10000
  let iBar = 10000
  let gBar = 10000
  let pBar = 10000
  let dBar = 10000

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
      pickaxeUpgradePrice *= 1.5
      $('.upgrade-pickaxe-price').text(pickaxeUpgradePrice)
      $('.pickaxe-level').text(pickaxeLevel)
    }
  })



  $('.rock').click(() => {
    bOre += amountPerClick;
    $('.bOre-amount').text(bOre)
  })

})
