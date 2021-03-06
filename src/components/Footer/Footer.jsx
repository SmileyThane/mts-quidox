import React from 'react'
import { Icon } from '@ant-design/compatible'
import { useLocation } from 'react-router-dom'

import { Col, Row } from 'antd'
import { useWindowDimension } from '../../hooks'
import { Text, Container } from '../'
import { socials, footerNav } from './static'
import { ThemeFooter } from './styled'
export default function Footer ({ theme: { theme } }) {
  const { width } = useWindowDimension()
  const { pathname } = useLocation()

  const isLoginPage = pathname === '/login'
  return (
    <>
      {!isLoginPage &&
        <ThemeFooter>
          <Container>
            <Row type='flex' gutter={[24, 24]}>
              <Col md={24} lg={12}>
                <div>
                  <ThemeFooter.Socials style={{ marginBottom: width < 1200 ? '2.5rem' : '10rem' }}>
                    {socials.map(({ type, url, icon }, idx) => (
                      <ThemeFooter.SocialsItem key={idx}>
                        <ThemeFooter.SocialsItemLink href={url} alt={type} color={theme['@primary-color']} target='_blank'>
                          <Icon component={icon} />
                        </ThemeFooter.SocialsItemLink>
                      </ThemeFooter.SocialsItem>
                    ))}
                  </ThemeFooter.Socials>

                  <Text style={{ color: '#fff', fontSize: '1.8rem', textAlign: 'left' }}>
                    © 2019 СООО «Мобильные ТелеСистемы». Все права защищены.
                  </Text>
                </div>
              </Col>

              <Col md={12} lg={5}>
                <ThemeFooter.Nav>
                  {footerNav.filter(el => el.position === 'left')
                    .map(({ title, route }, idx) => (
                      <ThemeFooter.NavLink color={theme['@primary-color']} activeStyle={{ color: theme['@primary-color'] }} key={idx} to={route}>{title}</ThemeFooter.NavLink>
                    ))}
                </ThemeFooter.Nav>
              </Col>

              <Col md={12} lg={5}>
                <ThemeFooter.Nav>
                  {footerNav.filter(el => el.position === 'right')
                    .map(({ title, route }, idx) => (
                      <ThemeFooter.NavLink color={theme['@primary-color']} activeStyle={{ color: theme['@primary-color'] }} key={idx} to={route}>{title}</ThemeFooter.NavLink>
                    ))}
                </ThemeFooter.Nav>
              </Col>

              <Col md={24} lg={2}>
                <ThemeFooter.BottomBlock>
                  <Text style={{ fontSize: '1.8rem' }}>mts.by</Text>
                </ThemeFooter.BottomBlock>
              </Col>
            </Row>
          </Container>
        </ThemeFooter>
      }
    </>
  )
}
