$(() => {

  console.log('scripts.js connected')

  let $rock = $('.rock')

  $('.left-tab').click((e) => {
    $('.left-tab').removeClass('selected')
    let currentId = `#${e.target.id}`
    // let notSelected = (currentId === '#inventory-tab' ? '#stats-tab' : '#inventory-tab')
    $(currentId).addClass('selected')

    if (currentId === '#inventory-tab') {
      $('.inventory-tab-content').show()
      $('.stats-tab-content').hide()
    } else {
      $('.inventory-tab-content').hide()
      $('.stats-tab-content').show()
    }

  })

  $('.right-tab').click((e) => {
    $('.right-tab').removeClass('selected')
    let currentId = `#${e.target.id}`
    console.log(currentId)
    $(currentId).addClass('selected')

    if (currentId === '#upgrades-tab') {
      $('.upgrades-tab-content').show()
      $('.furnace-tab-content').hide()
      $('.tavern-tab-content').hide()
      $('.quests-tab-content').hide()
    } else if (currentId === '#furnace-tab') {
      $('.upgrades-tab-content').hide()
      $('.furnace-tab-content').show()
      $('.tavern-tab-content').hide()
      $('.quests-tab-content').hide()
    } else if (currentId === '#tavern-tab') {
      $('.upgrades-tab-content').hide()
      $('.furnace-tab-content').hide()
      $('.tavern-tab-content').show()
      $('.quests-tab-content').hide()
    } else if (currentId === '#quests-tab') {
      $('.upgrades-tab-content').hide()
      $('.furnace-tab-content').hide()
      $('.tavern-tab-content').hide()
      $('.quests-tab-content').show()
    }

  })

  $rock.mousedown(() => {
    $rock.css('height', '40vh');
  })

  $rock.mouseup(() => {
    $rock.css('height', '41vh');
  })

  $rock.mouseover(() => {
    $rock.css('height', '41vh');
  })

  $rock.mouseout(() => {
    $rock.css('height', '40vh')
  })
})
