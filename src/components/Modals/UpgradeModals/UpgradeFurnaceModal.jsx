import React from 'react'
import './UpgradeModal.css'

class UpgradeFurnaceModal extends React.Component {
  render() {
    return(
      <div className="upgrade-modal upgrade-furnace-modal">
        <h1>🔥Furnace lv.{this.props.furnaceLv}</h1>
        <h3>Increase Smelting Speed by 1.5x</h3>
        <h4>Add some more fire! <br /> 🔥🔥🔥</h4>
        <p>Price: {this.props.furnaceUpgradePrice} Refined Bronze</p>
      </div>
    )
  }
}

export default UpgradeFurnaceModal
