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

    return (
      <div className={this.props.containerClassName}>
        <div className="modal_overall">
          <div className={"modalHeader"}>
            <a
              onClick={(e) => this.close(e)}
              href="#"
              className={"close-thin"}
            ></a>
            <div class="img_group">
              <img
                class="boss_icon"
                src="https://static.wikia.nocookie.net/gensin-impact/images/e/e8/Monster_Pyro_Regisvine_thumb.png/revision/latest/scale-to-width-down/252?cb=20200920155701"
                alt="boss"
              />
              <img
                class="map"
                src="https://i.imgur.com/BPK0Wva.png"
                alt="map"
              />

              <div class="boss_backdrop">
                <h1 class="header_txt">Pyro Regisvine</h1>
                <h1 class="sub_header_txt">Elite boss</h1>
              </div>
            </div>
            <div className="modal_body">{this.props.children}</div>
            <div className={"modalFooter"}>
              <a
                onClick={(e) => this.close(e)}
                className="closeButtonStyle"
              ></a>
            </div>
          </div>
        </div>
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
