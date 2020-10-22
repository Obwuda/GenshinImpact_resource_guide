import React from "react";
import { View, Image, Text } from "react-native";
import MatTable from "./table";

import {
  chars,
  char_info,
  mat_gems,
  mat_bosses,
  mat_mobs
} from "./genshin_data_english";
import { char_imgs } from "./image_srcs_data";
import InfoModal from "./modal";
import "./styles.css";
import { Table } from "reactstrap";

class AscInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sel_char: props.sel_char,
      sel_asc: props.sel_asc,
      modal_is_open: false
    };
    this.set_vars();
  }
  open_modal = () => {
    this.setState({ modal_is_open: true });
    console.log("clicked5");
  };

  close_modal = () => {
    this.setState({ modal_is_open: false });
  };

  set_vars = () => {
    const sel_char = this.state.sel_char;
    // mob drops ======================
    this.mobmat1 =
      mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv1"];
    this.mobmat2 =
      mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv2"];
    this.mobmat3 =
      mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv3"];
  };

  boss_mats = () => {
    var gem_imgs = [];
    const sel_char = this.state.sel_char;
    const gem_tiers = ["sliver", "fragment", "chunk", "gemstone"];
    gem_tiers.forEach((tier) => {
      var src = mat_bosses[char_info[sel_char]["asc"]["gemstone"]]["img"][tier];
      gem_imgs.push(
        <img
          class="bdrop_gem"
          src={src}
          onClick={this.open_modal}
          alt={"gemstone"}
        />
      );
    });
    var bdrop_img = mat_bosses[char_info[sel_char]["asc"]["boss_drop"]]["img"];
    const bdrop2_img = (
      <img class="bdrop_other" src={bdrop_img} alt={"gemstone"} />
    );
    return (
      <div class="boss_container">
        <h1 class="card_title"> Boss drops </h1>
        {gem_imgs}
        {bdrop2_img}
      </div>
    );
  };

  mob_mats = () => {
    return (
      <div class="mob_container">
        {this.state.modal_is_open && (
          <InfoModal
            width={0}
            height={0}
            noBackdrop={true}
            isOpen={this.state.open_modal}
            onClose={this.close_modal}
          >
            {/* <img
              src={"https://i.imgur.com/xl3Fm10.png"}
              alt={"pyrovine"}
              width="500px"
            /> */}
            {<MatTable />}
          </InfoModal>
        )}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.modal_is_open && (
          <InfoModal
            width={0}
            height={0}
            noBackdrop={true}
            isOpen={this.state.open_modal}
            onClose={this.close_modal}
          >
            {<MatTable />}
          </InfoModal>
        )}
        {this.boss_mats()}
        {this.boss_mats()}
        {this.boss_mats()}
      </div>
    );
  }
}

export default AscInfo;
