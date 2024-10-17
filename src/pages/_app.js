import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { supabase } from '../utils/supabaseClient'

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default MyApp