import React from 'react'
import Address from './Address'
import Name from './Name'
import Email from './Email'
import Profileinfo from './Profileinfo'
import './Profile.css'
const profile = () => {
  return (
    <div className='maindiv'>
        <Address/>
        <Name/>
        <Email/>
        <Profileinfo/>
    </div>
  )
}

export default profile