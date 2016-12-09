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
