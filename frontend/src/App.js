/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import { lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Spinner from './components/Spinner'
import Header from './components/Header'
import User from './components/User'

const Item = lazy(() => import('./components/Item'))
const Categories = lazy(() => import('./components/Categories'))
const Category = lazy(() => import('./components/Category'))
const AddItem = lazy(() => import('./components/AddItem'))
const MyBookings = lazy(() => import('./components/MyBookings'))
const MyItems = lazy(() => import('./components/MyItems'))
const MyItem = lazy(() => import('./components/MyItem'))
const PendingBookings = lazy(() => import('./components/PendingBookings'))
const SignIn = lazy(() => import('./components/SignIn'))
const Profile = lazy(() => import('./components/Profile'))
const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  return (
    <Suspense
      fallback={
        <div
          css={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner size="large" />
        </div>
      }
    >
      <Global styles={styles.global} />
      <User.Provider>
        <Header />
        <Suspense fallback={<Spinner />}>
          <main>
            <Router>
              <Categories path="/" />
              <Categories path="/categories" />
              <Category path="category/:slug" />
              <Item path="item/:id" />
              <AddItem path="add-item" />
              <Dashboard path="profile">
                <MyBookings path="bookings" />
                <MyItems path="items" />
                <MyItem path="item/:id" />
                <PendingBookings path="pending-bookings" />
                <Profile path="/" />
              </Dashboard>
              <SignIn path="sign-in" />
            </Router>
          </main>
        </Suspense>
      </User.Provider>
    </Suspense>
  )
}

const styles = {
  global: css`
    html {
      box-sizing: border-box;
      font-size: 18px;
      line-height: 1.6;
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
  `,
}

export default App
