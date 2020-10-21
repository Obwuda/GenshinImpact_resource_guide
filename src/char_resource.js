import React from "react";
import { View, Image, Text } from "react-native";

import {
  chars,
  char_info,
  mat_gems,
  mat_bosses,
  mat_mobs
} from "./genshin_data_english";
import { char_imgs } from "./image_srcs_data";
import InfoModal from "./popups";
import "./styles.css";

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
    return (
      <div class="boss_container">
        <h1 class="card_title"> Boss drops </h1>
        {/* Gems */}
        {gem_imgs}
        {/* Other */}
        <img class="bdrop_other" src={bdrop_img} alt={"gemstone"} />
      </div>
    );
  };

  mob_mats = () => {
    return (
      <div class="mob_container">
        {this.state.modal_is_open && (
          <InfoModal
            width={950}
            height={340}
            noBackdrop={true}
            isOpen={this.state.open_modal}
            onClose={this.close_modal}
          >
            yikes
          </InfoModal>
        )}
        <h1> Mob drops </h1>
        {/* Gems */}

        <img
          class="bdrop_gem"
          src={this.sliver}
          onClick={this.open_modal}
          alt={"gemstone"}
        />
        <img
          class="bdrop_gem"
          onClick={this.open_modal}
          src={this.fragment}
          alt={"gemstone"}
        />
        <img class="bdrop_gem" src={this.chunk} alt={"gemstone"} />
        <img class="bdrop_gem" src={this.gemstone} alt={"gemstone"} />
        {/* Other */}
        <img class="bdrop_other" src={this.fragment} alt={"gemstone"} />
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.boss_mats()}
        {this.mob_mats()}
        {this.boss_mats()}
      </div>
    );
  }
}

export default AscInfo;
