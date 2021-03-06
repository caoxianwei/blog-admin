import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import history from '@/utils/history'
import { Home, Refresh, Search, Exit } from '@/common/BaseImg'
import { logout } from '@/components/Auth/module'

const HomeMenuList = ({ className, logout }) => (
  <List className={className} >
    <Item onClick={() => { history.push('/') }}><Home />主页</Item>
    <Item onClick={() => { history.go(0) }}><Refresh />刷新</Item>
    <Item onClick={() => { history.push('/posts/search') }}><Search />搜索</Item>
    <Item onClick={logout}><Exit />退出</Item>
  </List>
)
HomeMenuList.propTypes = {
  className: PropTypes.string,
  logout: PropTypes.func.isRequired
}
HomeMenuList.defaultProps = {
  className: ''
}
export default connect(null, { logout })(HomeMenuList)

const List = styled.ul`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
`
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  line-height: 2;
  & > svg {
    margin-right: 16px;
    fill: rgba(0, 0, 0, .6);
  }
`
