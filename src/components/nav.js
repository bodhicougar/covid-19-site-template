import React, { useState } from 'react'
import { Link } from 'gatsby'
import microcopy from '../utils/microcopy'

const Nav = ({ microcopies }) => {
  const [hidden, setHidden] = useState(true)
  return (
    <nav className="p-6 bg-white" aria-label="Main Navigation">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/">
            <span className="text-xl font-semibold tracking-tight">
              Project covid19
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => {
              setHidden(!hidden)
            }}
            aria-expanded={!hidden}
            className="flex items-center px-3 py-2 text-grey-800 border border-gray-800 rounded hover:text-blue hover:border-blue"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{microcopy(microcopies, 'menu')}</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            hidden ? 'hidden' : ''
          }`}
        >
          <li>
            <Link
              to="/contact"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            >
              {microcopy(microcopies, 'contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
