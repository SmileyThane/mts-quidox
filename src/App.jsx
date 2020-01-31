import React, { Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import { Loading, Header, Footer, MobileMenu, Aside, ScrollTop } from './components'

const Home = React.lazy(() => import('./views/Home'))
const News = React.lazy(() => import('./views/News'))
const SingleNews = React.lazy(() => import('./views/SingleNews'))
const Registration = React.lazy(() => import('./views/Registration'))

function App () {
  return (
    <>
      <Router history={history}>
        <ScrollTop />
        <Header />
        <div className='wrapper'>
          <MobileMenu />
          <Aside />
          <main className='main'>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route path='/' component={Home} exact />

                <Route path='/news' component={News} exact />
                <Route path='/news/:id' component={SingleNews} />

                <Route path='/registration' component={Registration} />
              </Switch>
            </Suspense>
          </main>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
