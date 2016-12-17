import React from 'react'
import './LeftSection.css'

class LeftSection extends React.Component {

  changeTab(e) {

    console.log(this)

    let leftSectionTab = document.querySelectorAll('.left-section-tab')
    let inventoryTabContent = document.querySelector('.left-section-tabs-content-inventory')
    let statsTabContent = document.querySelector('.left-section-tabs-content-stats')
    let inventoryTab = document.querySelector('#inventory')
    let statsTab = document.querySelector('#stats')

    leftSectionTab.forEach((tab) => {
      tab.classList.remove('selected')
    })

    e.target.classList.add('selected')

    if (e.target.id === 'inventory') {
      console.log('inventory selected')
      inventoryTabContent.style.display = 'block'
      statsTabContent.style.display = 'none'
      inventoryTab.style.backgroundColor = 'white'
      statsTab.style.backgroundColor = 'lightgrey'
    } else {
      console.log('stats selected')
      inventoryTabContent.style.display = 'none'
      statsTabContent.style.display = 'block'
      inventoryTab.style.backgroundColor = 'lightgrey'
      statsTab.style.backgroundColor = 'white'
    }
  }

  render() {
    console.log(this)

    return(
      <section className='left-section'>

        <div className="left-section-tabs">
          <div onClick={this.changeTab.bind(this)} className="left-section-tab selected" id='inventory'>Inventory</div>
          <div onClick={this.changeTab.bind(this)} className="left-section-tab" id='stats'>Stats</div>
        </div>

        <div className="left-section-tabs-content">
          <div className="left-section-tab-content left-section-tabs-content-inventory">
            <br />
            <h1>Raw Ores</h1>
            <br />
            <p>Bronze Ore: <span>{this.props.bOre.toFixed(1)}</span></p>
            <p>Iron Ore: <span>{this.props.iOre.toFixed(1)}</span></p>
            <p>Gold Ore: <span>{this.props.gOre.toFixed(1)}</span></p>
            <p>Platinum Ore: <span>{this.props.pOre.toFixed(1)}</span></p>
            <p>Diamond Ore: <span>{this.props.dOre.toFixed(1)}</span></p>
            <br />
            <h1>Refined Ores</h1>
            <br />
            <p>Refined Bronze: <span>{this.props.r_bOre.toFixed(1)}</span></p>
            <p>Refined Iron: <span>{this.props.r_iOre.toFixed(1)}</span></p>
            <p>Refined Gold: <span>{this.props.r_gOre.toFixed(1)}</span></p>
            <p>Refined Platinum: <span>{this.props.r_pOre.toFixed(1)}</span></p>
            <p>Refined Diamond: <span>{this.props.r_dOre.toFixed(1)}</span></p>
            <br />
            <h1>Workers</h1>
            <br />
            <p>Miner: <span>{this.props.totalMinerAmount}</span></p>
            <p>Hero: <span>0</span></p>
          </div>

          <div className="left-section-tab-content left-section-tabs-content-stats">
            <br />
            <h1>Stats</h1>
            <br />
            <p>Ores Per Click: <span>{this.props.orePerClick.toFixed(1)}</span></p>
            <p>Smelt Speed: <span>{parseFloat(this.props.smeltTimer).toFixed(1)}s/ore</span></p>
            <br />
            <p>Bronze Ore Per Second: <span>0</span></p>
            <p>Iron Ore Per Second: <span>0</span></p>
            <p>Gold Ore Per Second: <span>0</span></p>
            <p>Platinum Ore Per Second: <span>0</span></p>
            <p>Diamond Ore Per Second: <span>0</span></p>
            <br />
            <p>Refined Bronze Per Second: <span>0</span></p>
            <p>Refined Iron Per Second: <span>0</span></p>
            <p>Refined Gold Per Second: <span>0</span></p>
            <p>Refined Platinum Per Second: <span>0</span></p>
            <p>Refined Diamond Per Second: <span>0</span></p>
          </div>

        <button onClick={this.props.saveGame}className='save-game-button'>SAVE GAME</button>

        </div>

      </section>
    )
  }
}

export default LeftSection
