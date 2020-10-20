import React from "react";
// import { Dropdown } from "semantic-ui-react";
// import { chars, char_info, mat_gems } from "./genshin_data_english";
// import { char_imgs } from "./image_srcs_data";
// import CharInfo from "./char_resource.js";
// import Modal from "react-modal";
import { Modal, ModalWrapper } from "carbon-components-react";
// import { Container, Row, Col, Button } from "reactstrap";

class InfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sel_char: null, sel_asc: null, is_open: false };
  }

  render() {
    return (
      <ModalWrapper
        buttonTriggerText="Launch modal"
        modalHeading="Modal heading"
        modalLabel="Label"
      >
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec
          dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam
          placerat felis ultrices lorem condimentum, nec ullamcorper felis
          porttitor.{" "}
        </p>
      </ModalWrapper>
    );
  }
}

export default InfoModal;
