// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import './App.css'

import LeftSection from './LeftSection/LeftSection.jsx'
import MiddleSection from './MiddleSection/MiddleSection.jsx'
import RightSection from './RightSection/RightSection.jsx'

import UpgradePickaxeModal from '../Modals/UpgradeModals/UpgradePickaxeModal.jsx'
import UpgradeFurnaceModal from '../Modals/UpgradeModals/UpgradeFurnaceModal.jsx'
import FurnaceModal from '../Modals/FurnaceModal/FurnaceModal.jsx'

import furnaceActive  from '../../assets/furnace_active.png'
import furnaceInactive  from '../../assets/furnace_inactive.png'

// create a React Component called _App_
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      orePerClick: 1,

      bOre: 0,
      iOre: 0,
      gOre: 0,
      pOre: 0,
      dOre: 0,
      r_bOre: 0,
      r_iOre: 0,
      r_gOre: 0,
      r_pOre: 0,
      r_dOre: 0,

      pickaxeLv: 1,
      pickaxeUpgradePrice: 10,
      unlockMineLv: 1,

      furnaceLv: 1,
      furnaceUpgradePrice: 15,

      isSmelting: false,
      smeltTimer: 2,
      amountToMake: 0,
    }
  }

  smeltOre() {
    console.log('smeltOre firing')

    let whatToMake = document.querySelector('.what-to-make').value
    let smeltButton = document.querySelector('.smelt-button')
    let furnace = document.querySelector('.furnace')
    let furnaceModal = document.querySelector('.furnace-modal')
    let coverThePage = document.querySelector('.cover-the-page')
    let smeltButtonText=['smelting', 'smelting.', 'smelting..', 'smelting...', 'smelting..', 'smelting.']
    let i = 0
    if (this.state.isSmelting === false && whatToMake === 'bOre') {

      smeltButton.disabled = true
      smeltButton.style.cursor = 'not-allowed'

      let changeButtonText = setInterval(() => {
        if (i >= smeltButtonText.length) {
          i = 0
        }
        smeltButton.innerHTML = smeltButtonText[i]
        i += 1
      }, 1000)

      // Set isSmelting = true and takes out the bOre required
      this.setState({
        isSmelting: true,
        bOre: this.state.bOre -= (this.state.amountToMake * 10)
      })

      // Change image
      furnace.style.backgroundImage = `url(${furnaceActive})`

      // Every 2 seconds, add 1 r_bOre
      let smeltInterval = setInterval(() => {

        this.setState({
          r_bOre: this.state.r_bOre += 1,
          amountToMake: this.state.amountToMake -= 1
        })
      }, (this.state.smeltTimer * 1000))

      let smeltTimer = setTimeout(() => {
        clearInterval(smeltInterval)
        clearInterval(changeButtonText)
        furnace.style.backgroundImage = `url(${furnaceInactive})`
        smeltButton.innerHTML = 'SMELT'
        smeltButton.disabled = false
        smeltButton.style.cursor = 'pointer'
        this.setState({
          isSmelting: false,
          amountToMake: 0
        })
      }, ((1000 * this.state.smeltTimer) * this.state.amountToMake))
    }
  }

  add1ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false) {
      if (this.state.bOre >= (this.state.amountToMake * 10) + 10) {
        this.setState({
          amountToMake: this.state.amountToMake += 1
        })
      }
    }
  }

  add10ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false) {
      if (this.state.bOre >= (this.state.amountToMake * 10) + 100) {
        this.setState({
          amountToMake: this.state.amountToMake += 10
        })
      }
    }
  }

  add100ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false) {
      console.log(`${this.state.bOre} >= (${(this.state.amountToMake * 10) + 1000})`)
      if (this.state.bOre >= (this.state.amountToMake * 10) + 1000) {
        console.log('working')
        this.setState({
          amountToMake: this.state.amountToMake += 100
        })
      }
    }
  }

  addAllToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    let maxAmount = (this.state.bOre/10)
    if (whatToMake === 'bOre' && this.state.isSmelting === false) {
      if (this.state.bOre >= (this.state.amountToMake * 10)) {
        this.setState({
          amountToMake: this.state.amountToMake = Math.floor(maxAmount)
        })
      }
    }
  }

  minus1ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false && this.state.amountToMake > 0) {
      this.setState({
        amountToMake: this.state.amountToMake -= 1
      })
    }
  }

  minus10ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false && this.state.amountToMake >= 10) {
      this.setState({
        amountToMake: this.state.amountToMake -= 10
      })
    }
  }

  minus100ToSmelt() {
    let whatToMake = document.querySelector('.what-to-make').value
    if (whatToMake === 'bOre' && this.state.isSmelting === false && this.state.amountToMake >= 100) {
      this.setState({
        amountToMake: this.state.amountToMake -= 100
      })
    }
  }

  hideAll() {
    let coverThePage = document.querySelector('.cover-the-page')
    let furnaceModal = document.querySelector('.furnace-modal')

    coverThePage.style.display = 'none'
    furnaceModal.style.display = 'none'
  }

  addOre() {
    let whatToMine = document.querySelector('.what-to-mine').value

    if (whatToMine === 'bOre') {
      this.setState({
        bOre: this.state.bOre += this.state.orePerClick
      })
    } else if (whatToMine === 'iOre') {
      this.setState({
        iOre: this.state.iOre += this.state.orePerClick
      })
    } else if (whatToMine === 'gOre') {
      this.setState({
        gOre: this.state.gOre += this.state.orePerClick
      })
    } else if (whatToMine === 'pOre') {
      this.setState({
        pOre: this.state.pOre += this.state.orePerClick
      })
    } else if (whatToMine === 'dOre') {
      this.setState({
        dOre: this.state.dOre += this.state.orePerClick
      })
    }
  }

  upgradePickaxe() {
    console.log('upgradePickaxe firing')
    // let whatToMine = document.querySelector('.what-to-mine').options[this.state.unlockMineLv]
    // console.log(whatToMine)
    if (this.state.r_bOre >= this.state.pickaxeUpgradePrice) {
      console.log('you have enough refined bronze ore!')

      // whatToMine.disabled = false

      this.setState({
        r_bOre: this.state.r_bOre -= this.state.pickaxeUpgradePrice,
        pickaxeLv: this.state.pickaxeLv += 1,
        pickaxeUpgradePrice: this.state.pickaxeUpgradePrice *= 1.5,
        orePerClick: (this.state.orePerClick *= 1.5),

      })
    }
  }

  upgradeFurnace() {
    console.log('upgradeFurnace firing')
    if (this.state.r_bOre >= this.state.furnaceUpgradePrice) {
      this.setState({
        r_bOre: this.state.r_bOre -= this.state.furnaceUpgradePrice,
        furnaceLv: this.state.furnaceLv += 1,
        furnaceUpgradePrice: this.state.furnaceUpgradePrice *= 1.5,
        smeltTimer: this.state.smeltTimer /= 1.5
      })
    }
  }

  render(){
    return (
      <div className='app-container'>

        <UpgradePickaxeModal
          pickaxeLv={this.state.pickaxeLv}
          pickaxeUpgradePrice={this.state.pickaxeUpgradePrice}
        />
        <UpgradeFurnaceModal
          furnaceLv={this.state.furnaceLv}
          furnaceUpgradePrice={this.state.furnaceUpgradePrice}
        />

        <FurnaceModal
          smeltOre={this.smeltOre.bind(this)}
          add1ToSmelt={this.add1ToSmelt.bind(this)}
          add10ToSmelt={this.add10ToSmelt.bind(this)}
          add100ToSmelt={this.add100ToSmelt.bind(this)}
          addAllToSmelt={this.addAllToSmelt.bind(this)}
          minus1ToSmelt={this.minus1ToSmelt.bind(this)}
          minus10ToSmelt={this.minus10ToSmelt.bind(this)}
          minus100ToSmelt={this.minus100ToSmelt.bind(this)}
          amountToMake={this.state.amountToMake}
        />

        <div onClick={this.hideAll} className="cover-the-page"></div>

        <LeftSection
          orePerClick={this.state.orePerClick}
          bOre={this.state.bOre}
          iOre={this.state.iOre}
          gOre={this.state.gOre}
          pOre={this.state.pOre}
          dOre={this.state.dOre}
          r_bOre={this.state.r_bOre}
          r_iOre={this.state.r_iOre}
          r_gOre={this.state.r_gOre}
          r_pOre={this.state.r_pOre}
          r_dOre={this.state.r_dOre}
          smeltTimer={this.state.smeltTimer}
        />

        <MiddleSection
          addOre={this.addOre.bind(this)}
        />

        <RightSection
          upgradePickaxe={this.upgradePickaxe.bind(this)}
          pickaxeUpgradePrice={this.state.pickaxeUpgradePrice}
          upgradeFurnace={this.upgradeFurnace.bind(this)}
          furnaceUpgradePrice={this.state.furnaceUpgradePrice}
        />

      </div>
    );
  }

}

export default App;