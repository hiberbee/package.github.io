import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import 'src/components/Logo/Logo.css'
import logo from './logo.svg'

export function Logo(): ReactElement {
  return (
    <Link to={'/'} className={'logo'}>
      <img alt={'Hiberbee'} width={32} height={32} src={logo} />
      <span>Hiberbee</span>
    </Link>
  )
}
