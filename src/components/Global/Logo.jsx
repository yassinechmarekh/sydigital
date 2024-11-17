import React from 'react'

import whiteLogo from '../../assets/logo/white-logo.svg'
import darkLogo from '../../assets/logo/white-logo.svg'

export default function Logo() {
  return (
    <>
        <img src={darkLogo} alt="logo" className={'w-40 dark:hidden'} />
        <img src={whiteLogo} alt="logo" className={'w-40 hidden dark:block'} />
    </>
  )
}
