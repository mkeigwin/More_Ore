import React from 'react'
import './UpgradeModal.css'

class reinforcePickaxeModal extends React.Component {
  render() {
    return(
      <div className="upgrade-modal reinforce-pickaxe-modal">
        <h1>⚒Reinforced Pickaxe lv.{this.props.reinforcedPickaxeLv}</h1>
        <h3>Gain the ability to mine {this.props.reinforcedPickaxeCost.toLowerCase()}!</h3>
        <h4>Forged from the finest</h4>
        <p>Price: 1000 Raw {this.props.reinforcedPickaxeCost} Ore</p>
      </div>
    )
  }
}

export default reinforcePickaxeModal
