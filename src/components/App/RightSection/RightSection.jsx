import React from 'react'
import './RightSection.css'



class RightSection extends React.Component {

  changeTab(e) {

    let rightSectionTab = document.querySelectorAll('.right-section-tab')
    let upgradesTabContent = document.querySelector('.right-section-tabs-content-upgrades')
    let furnaceTabContent = document.querySelector('.right-section-tabs-content-furnace')
    let tavernTabContent = document.querySelector('.right-section-tabs-content-tavern')
    let questsTabContent = document.querySelector('.right-section-tabs-content-quests')

    rightSectionTab.forEach((tab) => {
      tab.classList.remove('selected')
    })

    e.target.classList.add('selected')

    if (e.target.id === 'upgrades') {
      upgradesTabContent.style.display = 'block'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'none'
    } else if (e.target.id === 'furnace') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'block'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'none'
    } else if (e.target.id === 'tavern') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'block'
      questsTabContent.style.display = 'none'
    } else if (e.target.id === 'quests') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'block'
    }
  }

  showPickaxeModal() {
    let upgradePickaxeModal = document.querySelector('.upgrade-pickaxe-modal')
    upgradePickaxeModal.style.display = 'block'
  }

  hidePickaxeModal() {
    let upgradePickaxeModal = document.querySelector('.upgrade-pickaxe-modal')
    upgradePickaxeModal.style.display = 'none'
  }

  showFurnaceModal() {
    let furnaceModal = document.querySelector('.furnace-modal')
    let coverThePage = document.querySelector('.cover-the-page')
    furnaceModal.style.display = 'block'
    coverThePage.style.display = 'block'
  }

  showFurnaceUpgradeModal() {
    let upgradeFurnaceModal = document.querySelector('.upgrade-furnace-modal')
    upgradeFurnaceModal.style.display = 'block'
  }

  hideFurnaceUpgradeModal() {
    let upgradeFurnaceModal = document.querySelector('.upgrade-furnace-modal')
    upgradeFurnaceModal.style.display = 'none'
  }

  showReinforcePickaxeModal() {
    let reinforcePickaxeModal = document.querySelector('.reinforce-pickaxe-modal')
    reinforcePickaxeModal.style.display = 'block'
  }

  hideReinforcePickaxeModal() {
    let reinforcePickaxeModal = document.querySelector('.reinforce-pickaxe-modal')
    reinforcePickaxeModal.style.display = 'none'
  }

  render() {
    return(
      <section className='right-section'>
        <div className="right-section-tabs">
          <div onClick={this.changeTab.bind(this)} className="right-section-tab selected" id='upgrades'>Upgrades</div>
          <div onClick={this.changeTab.bind(this)} className="right-section-tab" id='furnace'>Furnace</div>
          <div onClick={this.changeTab.bind(this)} className="right-section-tab" id='tavern'>Tavern</div>
          <div onClick={this.changeTab.bind(this)} className="right-section-tab" id='quests'>Quests</div>
        </div>
        <div className="right-section-tabs-content">
          <div className="right-section-tab-content right-section-tabs-content-upgrades">
            <h1>Upgrades here!</h1>
            <button
              className='upgrade-pickaxe-button'
              onClick={this.props.upgradePickaxe}
              onMouseOver={this.showPickaxeModal}
              onMouseOut={this.hidePickaxeModal}
              >
              <h3>Sharpen Pickaxe lv.{this.props.pickaxeLv}</h3>
              <p>Cost: {this.props.pickaxeUpgradePrice} Refined Bronze</p>
            </button>
            <button
              className='upgrade-furnace-button'
              onClick={this.props.upgradeFurnace}
              onMouseOver={this.showFurnaceUpgradeModal}
              onMouseOut={this.hideFurnaceUpgradeModal}
              >
              <h3>Upgrade Furnace lv.{this.props.furnaceLv}</h3>
              <p>Cost: {this.props.furnaceUpgradePrice} Refined Bronze</p>
            </button>
            <button
              className='reinforce-pickaxe-button'
              onClick={this.props.reinforcePickaxe}
              onMouseOver={this.showReinforcePickaxeModal}
              onMouseOut={this.hideReinforcePickaxeModal}
              >
              <h3>Reinfornce Pickaxe lv.{this.props.reinforcedPickaxeLv}</h3>
              <p>Cost: 1000 Raw {this.props.reinforcedPickaxeCost}</p>
            </button>
            <button disabled>???</button>
            <button disabled>???</button>
            <button disabled>???</button>
            <button disabled>???</button>
            <button disabled>???</button>
            <button disabled>???</button>
          </div>

          <div className="right-section-tab-content right-section-tabs-content-furnace">
            <h1>Smelt your raw ores to refined ores!</h1>
            <div onClick={this.showFurnaceModal} className='furnace'></div>
          </div>
          <div className="right-section-tab-content right-section-tabs-content-tavern">
            <h1>Hire miners or heroes to do your bidding!</h1>
          </div>
          <div className="right-section-tab-content right-section-tabs-content-quests">
            <h1>Send your heroes off on quests for a chance of a Legendary item!</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default RightSection
