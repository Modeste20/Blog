import { MDXProvider } from '@mdx-js/react'
import ShareWithFacebook from './ComponentInArticle/ShareWithFacebook'
import React from 'react'

const MdxProvider = ({children}) => {
    const shortCodes = {ShareWithFacebook}
  return (
    <MDXProvider components={shortCodes}>
        {
            children
        }
    </MDXProvider>
  )
}

export default MdxProvider