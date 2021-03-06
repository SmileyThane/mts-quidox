import React from 'react'

import { useWindowDimension } from '../../hooks'
import { Icon } from '@ant-design/compatible'
import { navigations } from '../../constants'
import { ThemeNav } from './styled'

const { menu } = navigations

export default function Nav ({ theme: { theme }, type = 'desktop' }) {
  const { width } = useWindowDimension()

  return (
    <ThemeNav type={type}>
      {menu.map(({ title, route, icon, disabled, exact }) => (
        <ThemeNav.Link
          key={title}
          to={route}
          type={type}
          exact={exact}
          disabled={disabled}
          activeStyle={{ color: theme['@primary-color'] }}
        >

          {width > 1350 &&
            <Icon component={icon} />}
          {title}
        </ThemeNav.Link>
      ))}
    </ThemeNav>
  )
}
