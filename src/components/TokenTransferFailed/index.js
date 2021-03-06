import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Header } from 'components'
import { Toast } from "components/index";
import Button from 'components/Button'
import './index.scss'

type Props = {

}

class TokenTransferFailed extends Component<Props> {
  onCopy = () => {
    Toast.html(I18n.t('copySuccess'))
  }

  moveTo = (location) => () => {
    const { changeLocation } = this.props
    changeLocation(location)
  }

  render() {
    const { transferInfo: tx } = this.props

    return (
      <Fragment>
        <Header title={I18n.t('transferResult')} onBack={this.moveTo('/account')} hasSetting={false} />
        <div className="failed-box">
          <div className="failed-logo-box">
            <i className="failed-logo">!</i>
            <p className="failed-result">{I18n.t('transferFailed')}</p>
          </div>
          <div className="item-box">
            <p className="item-title">{I18n.t('txid')}</p>
            <p className="item-content item-txHash">{tx.tx_hash}</p>
          </div>
          <div className="item-box">
            <p className="item-title">{I18n.t('gasUsage')}</p>
            <p className="item-content item-gasUsage">{tx.gas_usage} {I18n.t('iGAS')}</p>
          </div>
          <div className="item-box">
            <p className="item-title">
              {I18n.t('transferFailedTip')}
              <CopyToClipboard onCopy={this.onCopy} text={`${tx.message}(status code: ${tx.status_code}})`}>
                <i className="copy" />
              </CopyToClipboard>
            </p>
            {
              tx.message && (
                <p className="item-content item-errorMessage">
                  {tx.message} (status code: {tx.status_code})
                </p>
              )
            }
          </div>
          <Button onClick={this.moveTo('/account')}>{I18n.t('transferClose')}</Button>
        </div>
      </Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
  transferInfo: state.ui.transferInfo,
})

export default connect(mapStateToProps)(TokenTransferFailed)

