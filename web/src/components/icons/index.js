import React from 'react'
import HamburgerIcon from './hamburger'
import SustainableIcon from './sustainable'
import AuctionIcon from './auction'
import AccessibleIcon from './accessible'
import FacebookIcon from './facebook'
import TwitterIcon from './twitter'
import InstagramIcon from './instagram'
import PlayIcon from './auction copy'

function Icon(props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'auction':
      return <AuctionIcon />
    case 'sustainable':
      return <SustainableIcon />
    case 'accessible':
      return <AccessibleIcon />
    case 'play':
      return <PlayIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'instagram':
      return <InstagramIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
