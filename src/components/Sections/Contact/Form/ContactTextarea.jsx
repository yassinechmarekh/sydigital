import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function ContactTextarea({placeholder,onchange,value,name}) {
  return (
    <>
        <Textarea onChange={onchange} name={name} value={value} placeholder={placeholder} className={'bg-transparent dark:bg-transparent text-white placeholder:text-slate-100 dark:placeholder:text-white focus-visible:placeholder:text-white dark:focus-visible:placeholder:text-turquoise border border-slate-100 dark:border-white focus:border-none focus-visible:ring-white focus-visible:ring-offset-0 dark:focus-visible:ring-turquoise'} />
    </>
  )
}