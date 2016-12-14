import React from 'react'
import './FurnaceModal.css'

class FurnaceModal extends React.Component {

  closeMenu() {
    let furnaceModal = document.querySelector('.furnace-modal')
    let coverThePage = document.querySelector('.cover-the-page')
    furnaceModal.style.display = 'none'
    coverThePage.style.display = 'none'
  }


  render() {
    return(
      <div className="furnace-modal">
        <h1>Furnace 1 <span onClick={this.closeMenu}className="close-menu">X</span></h1>
        <p>10 RAW ORE = 1 REFINED ORE</p>
        <h3>SELECT ORE TO SMELT</h3>
        <select className='what-to-make'>
          <option default value="bOre">Bronze Ore</option>
          <option value="iOre">Iron Ore</option>
          <option value="gOre">Gold Ore</option>
          <option value="pOre">Platinum Ore</option>
          <option value="dOre">Diamond Ore</option>
        </select>
        <h3>How many do you want to make?</h3>
        <div className="amount-to-make-container">
          <button onClick={this.props.minus100ToSmelt}>-100</button>
          <button onClick={this.props.minus10ToSmelt}>-10</button>
          <button onClick={this.props.minus1ToSmelt}>-1</button>
          <h2 className='amount-to-make'>{this.props.amountToMake}</h2>
          <button onClick={this.props.add1ToSmelt}>+1</button>
          <button onClick={this.props.add10ToSmelt}>+10</button>
          <button onClick={this.props.add100ToSmelt}>+100</button>
          <button onClick={this.props.addAllToSmelt}>ALL</button>
        </div>
        <button onClick={this.props.smeltOre} className='smelt-button'>SMELT</button>
      </div>
    )
  }
}

export default FurnaceModal
