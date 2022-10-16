import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://twitter.com/mygrash7aga3adi" target="_blank">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/eyad.abuzaid.737" target="_blank">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/eyad.abuzaid.737" target="_blank">
            <BsInstagram />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia