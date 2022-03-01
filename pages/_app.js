import React from 'react'

import '../styles/globals.scss'
import { Layout } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

// import React, { useEffect, useState } from 'react'
// import { Layout } from '../components'

// import '../styles/globals.scss'

// import type { AppProps } from 'next/app'

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp
