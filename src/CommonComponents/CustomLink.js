import Link from 'next/link'
import React from 'react'

const CustomLink = ({href,style,children}) => {
  return (
    <Link
        locale={false}
        href={href}
        className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${style}`}
      >
        {children}
      </Link>
  )
}

export default CustomLink