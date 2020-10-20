import React from "react";
import { Dropdown } from "semantic-ui-react";
import { chars, char_info, mat_gems, mat_mobs } from "./genshin_data_english";
import { char_imgs } from "./image_srcs_data";
import InfoModal from "./popups";

class CharInfo extends React.Component {
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

  set_vars = () => {
    const sel_char = this.state.sel_char;
    // gemstones const
    this.sliver =
      mat_gems[char_info[sel_char]["asc"]["gemstone"]]["img"]["sliver"];
    this.fragment =
      mat_gems[char_info[sel_char]["asc"]["gemstone"]]["img"]["fragment"];
    this.chunk =
      mat_gems[char_info[sel_char]["asc"]["gemstone"]]["img"]["chunk"];
    this.gemstone =
      mat_gems[char_info[sel_char]["asc"]["gemstone"]]["img"]["gemstone"];

    // mob drops ======================
    this.mobmat1 = (
      <img
        src={mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv1"]}
        alt={"mob_drop"}
      />
    );
    this.mobmat2 = (
      <img
        src={mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv2"]}
        alt={"mob_drop"}
      />
    );
    this.mobmat3 = (
      <img
        src={mat_mobs[char_info[sel_char]["asc"]["mob_drop"]]["img"]["lv3"]}
        alt={"mob_drop"}
      />
    );
  };

  overall_mats = () => {
    return (
      <div>
        <InfoModal />
        <img src={this.sliver} onClick={this.open_modal} alt={"gemstone"} />
        <img src={this.fragment} alt={"gemstone"} />;
        <img src={this.chunk} alt={"gemstone"} />;
        <img src={this.gemstone} alt={"gemstone"} />;{this.mobmat1}
        {this.mobmat2}
        {this.mobmat3}
        {this.state.modal_is_open && (
          <InfoModal is_open={this.state.modal_is_open} />
        )}
      </div>
    );
  };

  render() {
    return this.overall_mats();
  }
}

export default CharInfo;
