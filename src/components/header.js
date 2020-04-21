import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <div className={headerStyles.navList}>
                <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></p>
                <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">blog</Link></p>
                <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></p>
                <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact me</Link></p>
            </div>
        </header>
    )
}

export default Header