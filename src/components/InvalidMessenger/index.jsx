import { Component } from "react";

import './styles.css'

export class InvalidMessenger extends Component {
  render() {
    const { erro } = this.props
    let cssClass = '' 
    if (erro) cssClass = 'error-p'
    return(
      <p className={cssClass}> {erro} </p>
    )
  }
}