import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import SocialsNetworks from "./socials-networks"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from 'react-intl'
import 'intl'
import "../styles/main.css"

const Layout = ({ children, location, i18nMessages }) => {

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }      
            }
          }
        }
      `}
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/')
        const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url)).map((item) => ({ ...item, link: item.link.replace(`/${defaultLangKey}/`, '/') }))
        return (
          <IntlProvider
            locale={langKey}
            messages={i18nMessages}
          >
            <>
              <Header langs={langsMenu} />
              <main>{children}</main>
              <SocialsNetworks /> 
            </>
          </IntlProvider>
        )
      }}
    />
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}