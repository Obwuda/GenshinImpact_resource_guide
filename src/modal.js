import React, { useState } from "react";
import Modal from "react-modal";
import { Container, Row, Col, Button } from "reactstrap";
import onClickOutside from "react-onclickoutside";

import "./modal.css";

class ModalMatInfo extends React.Component {
  handleClickOutside = (e) => {
    this.close(e);
  };

  render() {
    if (this.props.isOpen === false) return null;

    let modalStyle = {
      height: "600px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "9999",
      background: "#fff",
      border: "1px solid gray",
      boxShadow: "4px 4px 25px 1px #888888",
      borderRadius: "2px"
    };

    if (this.props.style) {
      for (let key in this.props.style) {
        modalStyle[key] = this.props.style[key];
      }
    }

    let backdropStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      zIndex: "9998",
      background: "rgba(0, 0, 0, 0.3)"
    };

    if (this.props.backdropStyle) {
      for (let key in this.props.backdropStyle) {
        backdropStyle[key] = this.props.backdropStyle[key];
      }
    }

    return (
      <div className={this.props.containerClassName}>
        <div className={this.props.className} style={modalStyle}>
          <div className={"modalHeader"}>
            <a
              onClick={(e) => this.close(e)}
              href="#"
              className={"close-thin"}
            ></a>
            <img
              class="boss_icon"
              src="https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Monster_Pyro_Regisvine_thumb.png/revision/latest/scale-to-width-down/252?cb=20200920155701"
              alt="boss"
            />
            <div class="boss_backdrop">
              <h1 class="header_txt">Pyro Regisvine</h1>
              <h1 class="sub_header_txt">Elite boss</h1>
            </div>
          </div>
          <div className="modal_body">{this.props.children}</div>
          <div className={"modalFooter"}>
            <a onClick={(e) => this.close(e)} className="closeButtonStyle"></a>
          </div>
        </div>
        {!this.props.noBackdrop && (
          <div
            className={this.props.backdropClassName}
            style={backdropStyle}
            onClick={(e) => this.close(e)}
          />
        )}
      </div>
    );
  }

  close(e) {
    e.preventDefault();

    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default onClickOutside(ModalMatInfo);
