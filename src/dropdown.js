import React from "react";
import { Dropdown } from "semantic-ui-react";
import { chars, char_info, mat_gems } from "./genshin_data_english";
import { char_imgs } from "./image_srcs_data";
import AscInfo from "./char_resource.js";
import "./styles.css";

const charnames = [
  { key: "di", value: "diluc", text: chars.diluc },
  { key: "je", value: "jean", text: chars.jean },
  { key: "ke", value: "keqing", text: chars.keqing },
  { key: "mo", value: "mona", text: chars.mona },
  { key: "qi", value: "qiqi", text: chars.qiqi },
  { key: "ve", value: "venti", text: chars.venti }
];

const asc_lvls = [
  { key: "0", value: "0", text: "Overall" },
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "2", text: "2" },
  { key: "3", value: "3", text: "3" },
  { key: "4", value: "4", text: "4" },
  { key: "5", value: "5", text: "5" }
];

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sel_char: null, sel_asc: null };
  }

  handleChange = (event, data) => {
    this.setState({ sel_char: data.value });
  };

  handlechange_asc = (event, data) => {
    this.setState({ sel_asc: data.value });
  };
  render() {
    var sel_char = this.state.sel_char;
    var sel_asc = this.state.sel_asc;
    return (
      <div class="container">
        <div class="dropdown_wrap">
          <div class="d1">
            <Dropdown
              placeholder="Select Character"
              fluid
              search
              selection
              onChange={this.handleChange}
              options={charnames}
            />
          </div>
          <div class="d2">
            <Dropdown
              placeholder="Ascension Level"
              fluid
              search
              selection
              onChange={this.handlechange_asc}
              options={asc_lvls}
            />
          </div>
        </div>

        {/* if char is selected */}
        {this.state.sel_char && (
          <div class="char_wrap">
            <img
              class="char_img"
              src={char_imgs[sel_char]}
              alt={charnames[sel_char]}
            />
            <div class="asc_mat_con">
              <AscInfo sel_char={sel_char} sel_asc={sel_asc} />
            </div>
            {/* <div class="tal_mat_con">
              <AscInfo sel_char={sel_char} sel_asc={sel_asc} />
            </div> */}
          </div>
        )}
      </div>
    );
  }
}

export default DropdownSearch;
