import React from 'react'

import {
  About,
  HowToUse,
  ESCCheck,
  News,
  AuthorizationType,
  ServicePackage,
  HowItsWork,
  QuidoxProcess
} from './parts'

export default function () {
  return (
    <>
      <About />
      <QuidoxProcess />
      <HowToUse />
      <HowItsWork />
      <ESCCheck />
      <ServicePackage />
      <News />
      <AuthorizationType />
    </>
  )
}
