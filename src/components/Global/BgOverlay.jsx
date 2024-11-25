import React from 'react'

export default function BgOverlay({setOpenMenu}) {
  return (
    <div className={'fixed inset-0 bg-[#0000005c] z-40'} onClick={() => setOpenMenu(false)}>
        
    </div>
  )
}
