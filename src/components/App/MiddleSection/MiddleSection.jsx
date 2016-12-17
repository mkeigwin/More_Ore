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

    let gradient1 = 'radial-gradient(ellipse at center, rgba(255,175,75,1) 0%, rgba(131,68,41,1) 100%)'
    let gradient2 = 'radial-gradient(ellipse at center, #8e9eab , #eef2f3)'

    if (whatToMine === 'bOre') {
      middleSection.style.background = gradient1
    } else if (whatToMine === 'iOre') {
      middleSection.style.background = gradient2
    } else if (whatToMine === 'gOre') {
      middleSection.style.backgroundImage = 'url("http://static6.businessinsider.com/image/5643b7bd9dd7cc1a008c9289/chinese-scientists-found-a-literal-gold-mine-under-the-sea.jpg")'
    }
  }

  showNumber(e) {
    // Gets a random number between 1-100, then subtract 50
    // So the final value would be a number between -50 and 50
    let randomNumber = Math.floor(Math.random() * 101) - 50;

    let whatToMine = document.querySelector('.what-to-mine').value

    let pops = document.querySelector('.pops')
    let currentX = e.pageX+(randomNumber)
    let currentY = e.pageY-100

    let newDiv = document.createElement('div')
    newDiv.classList.add('pop')
    if (whatToMine === 'bOre') {
      newDiv.innerHTML = `+${this.props.orePerClick.toFixed(1)}`
    } else if (whatToMine === 'iOre') {
      newDiv.innerHTML = `+${(this.props.orePerClick/5).toFixed(1)}`
    } else if (whatToMine === 'gOre') {
      newDiv.innerHTML = `+${(this.props.orePerClick/10).toFixed(1)}`
    }


    newDiv.style.left = `${currentX}px`
    newDiv.style.top = `${currentY}px`
    pops.append(newDiv)

    let allPops = document.querySelectorAll('.pop')
    allPops.forEach((singlePop) => {
      setTimeout(() => {
        singlePop.remove()
      }, 0.8 * 1000) //MAKE SURE SECONDS ARE LESS THAN CSS
    })

  }

  handleClick(e) {
    this.props.addOre();
    this.showNumber(e)
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

        <div className="pops"></div>

        <img
          className='ore-image'
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onClick={ (e) => this.handleClick(e)}
          src={oreImage}
          alt="ore"
          />
      </section>
    )
  }
}

export default MiddleSection
