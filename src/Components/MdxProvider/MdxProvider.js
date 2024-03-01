import { MDXProvider } from '@mdx-js/react'
import ShareWithFacebook from './ComponentInArticle/ShareWithFacebook'
import Links from './ComponentInArticle/Links/Links'

import React from 'react'

const MdxProvider = ({children}) => {
    const shortCodes = {ShareWithFacebook, Links}
  return (
    <div className='article-content'>
      <MDXProvider components={shortCodes}>
          {
              children
          }
      </MDXProvider>
    </div>
  )
}

export default MdxProvider