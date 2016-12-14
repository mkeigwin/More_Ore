import React from 'react'
import './MiddleSection.css'
import oreImage from '../../../assets/ore.png'

class MiddleSection extends React.Component {

  mouseOver() {
    let ore = document.querySelector('.ore-image')
    ore.style.height = '21vw'
  }

  mouseOut() {
    let ore = document.querySelector('.ore-image')
    ore.style.height = '20vw'
  }

  mouseDown() {
    let ore = document.querySelector('.ore-image')
    ore.style.height = '20vw'
  }

  mouseUp() {
    let ore = document.querySelector('.ore-image')
    ore.style.height = '21vw'
  }

  changeBackground() {
    let whatToMine = document.querySelector('.what-to-mine').value
    let middleSection = document.querySelector('.middle-section')
    if (whatToMine === 'bOre') {
      middleSection.style.backgroundImage = 'url("http://i.imgur.com/TaLoXAG.jpg?1")'
    } else if (whatToMine === 'iOre') {
      middleSection.style.backgroundImage = 'url("http://www.ironminers.com/images/ironmines/ny-mine/ny-mine-19.jpg")'
    } else if (whatToMine === 'gOre') {
      middleSection.style.backgroundImage = 'url("http://static6.businessinsider.com/image/5643b7bd9dd7cc1a008c9289/chinese-scientists-found-a-literal-gold-mine-under-the-sea.jpg")'
    }
  }

  render() {
    return(
      <section className='middle-section'>

        <select onChange={this.changeBackground.bind(this)} className='what-to-mine'>
          <option default value="bOre">Bronze Mine</option>
          <option disabled value="iOre">Iron Mine</option>
          <option disabled value="gOre">Gold Mine</option>
          <option disabled value="pOre">Platinum Mine</option>
          <option disabled value="dOre">Diamond Mine</option>
        </select>

        <img
          className='ore-image'
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onClick={this.props.addOre}
          src={oreImage}
          alt="ore" />
      </section>
    )
  }
}

export default MiddleSection
