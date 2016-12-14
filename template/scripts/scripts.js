window.addEventListener('DOMContentLoaded', () => {

  console.log('scripts.js connected')

  let leftSectionTab = document.querySelectorAll('.left-section-tab')
  let inventoryTabContent = document.querySelector('.left-section-tabs-content-inventory')
  let statsTabContent = document.querySelector('.left-section-tabs-content-stats')

  let rightSectionTab = document.querySelectorAll('.right-section-tab')
  let upgradesTabContent = document.querySelector('.right-section-tabs-content-upgrades')
  let furnaceTabContent = document.querySelector('.right-section-tabs-content-furnace')
  let tavernTabContent = document.querySelector('.right-section-tabs-content-tavern')
  let questsTabContent = document.querySelector('.right-section-tabs-content-quests')

  let upgradePickaxeButton = document.querySelector('.upgrade-pickaxe-button')
  let buyFurnaceButton = document.querySelector('.buy-furnace-button')

  let upgradePickaxeModal = document.querySelector('.upgrade-pickaxe-modal')
  let buyFurnaceModal = document.querySelector('.buy-furnace-modal')

  let closeMenu = document.querySelector('.close-menu')

  let furnace1 = document.querySelector('#furnace1')
  let furnace2 = document.querySelector('#furnace2')
  let furnace1Modal = document.querySelector('.furnace1-modal')
  let furnace2Modal = document.querySelector('.furnace2-modal')

  let pageCover = document.querySelector('.page-cover')

  let oreImage = document.querySelector('.ore-image')



  furnace2.addEventListener('click', () => {
    pageCover.style.display = 'block'
    furnace2Modal.style.display = 'block'
  })

  furnace1.addEventListener('click', () => {
    pageCover.style.display = 'block'
    furnace1Modal.style.display = 'block'
  })

  pageCover.addEventListener('click', () => {
    pageCover.style.display = 'none'
    furnace1Modal.style.display = 'none'
    furnace2Modal.style.display = 'none'
  })

  closeMenu.addEventListener('click', () => {
    pageCover.style.display = 'none'
    furnace1Modal.style.display = 'none'
  })

  leftSectionTab.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      leftSectionTab.forEach((remove) => {
        remove.classList.remove('selected')
      })
      tab.classList.add('selected')
      if (tab.id === 'inventory') {
        inventoryTabContent.style.display = 'block'
        statsTabContent.style.display = 'none'
      } else if (tab.id ==='stats') {
        statsTabContent.style.display = 'block'
        inventoryTabContent.style.display = 'none'
      }
    })
  })

  rightSectionTab.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      rightSectionTab.forEach((remove) => {
        remove.classList.remove('selected')
      })
      tab.classList.add('selected')
      if (tab.id === 'upgrades') {
        upgradesTabContent.style.display = 'block'
        furnaceTabContent.style.display = 'none'
        tavernTabContent.style.display = 'none'
        questsTabContent.style.display = 'none'
      } else if (tab.id === 'furnace') {
        upgradesTabContent.style.display = 'none'
        furnaceTabContent.style.display = 'block'
        tavernTabContent.style.display = 'none'
        questsTabContent.style.display = 'none'
      } else if (tab.id === 'tavern') {
        upgradesTabContent.style.display = 'none'
        furnaceTabContent.style.display = 'none'
        tavernTabContent.style.display = 'block'
        questsTabContent.style.display = 'none'
      } else if (tab.id === 'quests') {
        upgradesTabContent.style.display = 'none'
        furnaceTabContent.style.display = 'none'
        tavernTabContent.style.display = 'none'
        questsTabContent.style.display = 'block'
      }
    })
  })

  oreImage.addEventListener('mouseover', () => {
    oreImage.style.height = '21vw'
  })

  oreImage.addEventListener('mouseout', () => {
    oreImage.style.height = '20vw'
  })

  oreImage.addEventListener('mousedown', () => {
    oreImage.style.height = '20vw'
  })

  oreImage.addEventListener('mouseup', () => {
    oreImage.style.height = '21vw'
  })

  upgradePickaxeButton.addEventListener('mouseover', () => {
    upgradePickaxeModal.style.display = 'block'
  })

  upgradePickaxeButton.addEventListener('mouseout', () => {
    upgradePickaxeModal.style.display = 'none'
  })

  buyFurnaceButton.addEventListener('mouseover', () => {
    buyFurnaceModal.style.display = 'block'
  })

  buyFurnaceButton.addEventListener('mouseout', () => {
    buyFurnaceModal.style.display = 'none'
  })

})
