import React from 'react'

import whiteLogo from '../../assets/images/logo/white-logo.svg'
import darkLogo from '../../assets/images/logo/dark-logo.svg'

export default function Logo() {
  return (
    <>
        <img src={darkLogo} alt="logo" className={'w-36 dark:hidden'} />
        <img src={whiteLogo} alt="logo" className={'w-36 hidden dark:block'} />
    </>
  )
}
