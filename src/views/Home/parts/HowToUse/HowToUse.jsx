import React from 'react'

import { Row, Col } from 'antd'
import { Icon } from '@ant-design/compatible'
import { howItsWork } from './static'
import { Text, Heading, Container } from '../../../../components'
import { HowToUseContent } from './styled'

export default function HowToUse () {
  return (
    <HowToUseContent>
      <Container style={{ maxWidth: '161rem' }}>
        <Heading
          level={2}
          style={{ marginBottom: '7rem' }}
          brandText='Пользоваться'
        >просто
        </Heading>
        <Row gutter={[24, 24]} align='middle'>
          {howItsWork.map(({ text, icon }, idx) => (
            <Col md={12} lg={6} key={idx}>
              <HowToUseContent.Block>
                <Icon component={icon} />
                <Text
                  style={{ marginTop: '3rem' }}
                  dangerouslySetInnerHTML={{ __html: text }}
                  bolder
                />
              </HowToUseContent.Block>
            </Col>
          ))}
        </Row>
      </Container>
    </HowToUseContent>
  )
}
