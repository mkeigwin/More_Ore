$(() => {

  console.log('scripts connected')

  $('li').click(() => {
    console.log('tab clicked')
    $('.tab').removeClass('selected')
  })

})
