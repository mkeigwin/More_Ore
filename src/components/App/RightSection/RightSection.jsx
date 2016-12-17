import React from 'react'
import './RightSection.css'



class RightSection extends React.Component {

  changeTab(e) {

    let rightSectionTab = document.querySelectorAll('.right-section-tab')
    let upgradesTabContent = document.querySelector('.right-section-tabs-content-upgrades')
    let furnaceTabContent = document.querySelector('.right-section-tabs-content-furnace')
    let tavernTabContent = document.querySelector('.right-section-tabs-content-tavern')
    let questsTabContent = document.querySelector('.right-section-tabs-content-quests')

    let upgradesTab = document.querySelector('#upgrades')
    let furnaceTab = document.querySelector('#furnace')
    let tavernTab = document.querySelector('#tavern')
    let questsTab = document.querySelector('#quests')

    rightSectionTab.forEach((tab) => {
      tab.classList.remove('selected')
    })

    e.target.classList.add('selected')

    if (e.target.id === 'upgrades') {
      upgradesTabContent.style.display = 'block'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'none'
      upgradesTab.style.background = 'white'
      furnaceTab.style.background = 'lightgrey'
      tavernTab.style.background = 'lightgrey'
      questsTab.style.background = 'lightgrey'
    } else if (e.target.id === 'furnace') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'block'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'none'
      upgradesTab.style.background = 'lightgrey'
      furnaceTab.style.background = 'white'
      tavernTab.style.background = 'lightgrey'
      questsTab.style.background = 'lightgrey'
    } else if (e.target.id === 'tavern') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'block'
      questsTabContent.style.display = 'none'
      upgradesTab.style.background = 'lightgrey'
      furnaceTab.style.background = 'lightgrey'
      tavernTab.style.background = 'white'
      questsTab.style.background = 'lightgrey'
    } else if (e.target.id === 'quests') {
      upgradesTabContent.style.display = 'none'
      furnaceTabContent.style.display = 'none'
      tavernTabContent.style.display = 'none'
      questsTabContent.style.display = 'block'
      upgradesTab.style.background = 'lightgrey'
      furnaceTab.style.background = 'lightgrey'
      tavernTab.style.background = 'lightgrey'
      questsTab.style.background = 'white'
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


  showHireMinerModal() {
    let hireMinerModal = document.querySelector('.hire-miner-modal')
    hireMinerModal.style.display = 'block'
  }

  hideHireMinerModal() {
    let hireMinerModal = document.querySelector('.hire-miner-modal')
    hireMinerModal.style.display = 'none'
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
              className='hire-button upgrade-pickaxe-button'
              onClick={this.props.upgradePickaxe}
              onMouseOver={this.showPickaxeModal}
              onMouseOut={this.hidePickaxeModal}
              >
              <h3>Sharpen Pickaxe lv.{this.props.pickaxeLv}</h3>
              <p>Cost: {this.props.pickaxeUpgradePrice.toFixed(1)} Refined Bronze</p>
            </button>
            <button
              className='hire-button upgrade-furnace-button'
              onClick={this.props.upgradeFurnace}
              onMouseOver={this.showFurnaceUpgradeModal}
              onMouseOut={this.hideFurnaceUpgradeModal}
              >
              <h3>Upgrade Furnace lv.{this.props.furnaceLv}</h3>
              <p>Cost: {parseFloat(this.props.furnaceUpgradePrice).toFixed(1)} Refined Bronze</p>
            </button>
            <button
              className='hire-button reinforce-pickaxe-button'
              onClick={this.props.reinforcePickaxe}
              onMouseOver={this.showReinforcePickaxeModal}
              onMouseOut={this.hideReinforcePickaxeModal}
              >
              <h3>Reinfornce Pickaxe lv.{this.props.reinforcedPickaxeLv}</h3>
              <p>Cost: 1000 Raw {this.props.reinforcedPickaxeCost}</p>
            </button>
            <button disabled className='hire-button'>???</button>
            <button disabled className='hire-button'>???</button>
            <button disabled className='hire-button'>???</button>
          </div>

          <div className="right-section-tab-content right-section-tabs-content-furnace">
            <h1>Smelt your raw ores to refined ores!</h1>
            <div onClick={this.showFurnaceModal} className='furnace'></div>
          </div>
          <div className="right-section-tab-content right-section-tabs-content-tavern">
            <h1>Current Workers</h1>
            <p>Amount of Idle Miners: <span>{this.props.totalMinerAmount}</span></p>
            <p>Amount of Idle Heroes: <span>0</span></p>
            <br/>
            <p>Bronze Mine <span><button className='minusMinerFromMine'>-</button>0<button onClick={e => this.props.addMiner(e)} className='addMinerToMine addToBronze'>+</button></span></p>
            <p>Iron Mine <span><button className='minusMinerFromMine'>-</button>0<button onClick={e => this.props.addMiner(e)} className='addMinerToMine addToIron'>+</button></span></p>
            <p>Gold Mine <span><button className='minusMinerFromMine'>-</button>0<button onClick={e => this.props.addMiner(e)} className='addMinerToMine addToGold'>+</button></span></p>
            <h1>Hire miners or heroes to do your bidding!</h1>
            <button
              className='hire-button hire-miner-button'
              onClick={this.props.hireMiner}
              onMouseOver={this.showHireMinerModal}
              onMouseOut={this.hideHireMinerModal}
              >
              <h3>Hire Miner</h3>
              <p>Cost: {this.props.hireMinerPrice} Refined Bronze</p>
            </button>
            <button
              className='hire-button hire-smelter-button'
              >
              <h3>Hire Smelter</h3>
              <p>Cost: 10 Refined Iron</p>
            </button>
            <button
              className='hire-button hire-hero-button'
              >
              <h3>Hire Hero</h3>
              <p>Cost: 10 Refined Gold</p>
            </button>
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
