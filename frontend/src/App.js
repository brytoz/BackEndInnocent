import { Fragment } from 'react'
import Stack from './dir/stack/Stack'
import { AuthProvider } from './dir/contexts/useAuth'

function App() {
  return (
    <Fragment>
        <AuthProvider>
          <Stack />
        </AuthProvider>
    </Fragment>
  )
}

export default App
