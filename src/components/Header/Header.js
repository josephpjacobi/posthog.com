import React from 'react'
import { Link } from 'gatsby'
import Menu from '../Menu'
import logo from '../../images/posthog-logo-150x29.svg'
import whiteLogo from '../../images/posthog-logo-white.svg'
import { useValues } from 'kea'
import { layoutLogic } from '../../logic/layoutLogic'

function Header({ onPostPage, isBlogArticlePage, isHomePage, hideLogoOnDesktop }) {
    const { sidebarHide } = useValues(layoutLogic)

    return (
        <div
            className={
                'menuHeaderWrapper ' + (!isBlogArticlePage && !sidebarHide && hideLogoOnDesktop ? ' noLogo' : '')
            }
        >
            {!sidebarHide && (
                <Link id="logo" to="/" className={hideLogoOnDesktop && !isBlogArticlePage ? 'display-mobile ' : ''}>
                    <img alt="logo" id="logo-image-header" src={isHomePage || isBlogArticlePage ? whiteLogo : logo} />
                </Link>
            )}
            <Menu isBlogArticlePage={isBlogArticlePage} isHomePage={isHomePage} onPostPage={onPostPage} />
        </div>
    )
}

export default Header
