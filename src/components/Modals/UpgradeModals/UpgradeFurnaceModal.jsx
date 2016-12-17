import React from 'react'
import './UpgradeModal.css'

class UpgradeFurnaceModal extends React.Component {
  render() {
    return(
      <div className="upgrade-modal upgrade-furnace-modal">
        <h1>🔥Furnace lv.{this.props.furnaceLv}</h1>
        <h3>Increase Smelting Speed by 1.5x</h3>
        <h4>Fight fire with more fire! <br /> 🔥🔥🔥</h4>
        <p>Price: {parseFloat(this.props.furnaceUpgradePrice).toFixed(1)} Refined Bronze</p>
      </div>
    )
  }
}

export default UpgradeFurnaceModal
