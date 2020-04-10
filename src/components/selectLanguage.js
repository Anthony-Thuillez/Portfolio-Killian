import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import styled from "styled-components"

const SelectLanguage = (props) => {

  const [isToggled, setToggled] = useState(false)

  const toggleLang = () => setToggled(!isToggled)

  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  )

  return (
    <Lang className={"lang-cta" + (isToggled ? ' active' : '')} onClick={toggleLang}>
      <FormattedMessage id="selectLanguage" />
      <ul>
        {links}
      </ul>
    </Lang>
  )
}

SelectLanguage.propTypes = {
  langs: PropTypes.array
}

export default SelectLanguage

const Lang = styled.div`
  z-index: 10;
  position: fixed;
  top: 27px;
  right: 100px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  & > span {
    padding: 0 12px;
    letter-spacing: 2px;
  }
  & > ul {
    display: none;
    margin-top: 5px;
    a:first-child {
      li {
        border-bottom: solid 1px #4c4c4c;
      }
    }
    li {
      padding: 8px 0;
      background: #1f1f1f;
    }
  }
  &.active {
    & > ul {
      display: block;
    }
  }
`