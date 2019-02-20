import React, { Component, Fragment } from 'react'
import { I18n } from 'react-redux-i18n'
import Input from 'components/Input'
import Button from 'components/Button'
import { Landing, Header } from 'components'
import iost from 'iostJS/iost'
import { privateKeyToPublicKey } from 'utils/key'


import './index.scss'

type Props = {

}

class AccountAdd extends Component<Props> {
  state = {
    password: '',
    errorMessage: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errorMessage: '',
    })
  }

  throwErrorMessage = () => {
    this.setState({
      errorMessage: I18n.t('invalidLoginInfo'),
    })
  }

  moveTo = (location) => () => {
    const { changeLocation } = this.props
    changeLocation(location)
  }


  render() {
    const { errorMessage } = this.state
    return (
      <Fragment>
        <Header title={I18n.t('accountCreate')} onBack={this.moveTo('/accountManage')} hasSetting={false} />
        <Landing className="landing-color" />
        <div className="accountAdd-box">
          <Button className="btn-accountCreate" onClick={this.moveTo('/accountCreateStep1')}>{I18n.t('accountCreate')}</Button>
          <Button className="btn-accountImport" onClick={this.moveTo('/accountImport')}>{I18n.t('accountImport')}</Button>
        </div>
      </Fragment>
    )
  }
}

export default AccountAdd
