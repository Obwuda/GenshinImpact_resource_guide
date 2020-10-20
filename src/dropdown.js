import React from "react";
import { Dropdown } from "semantic-ui-react";
import { chars, char_info, mat_gems } from "./genshin_data_english";
import { char_imgs } from "./image_srcs_data";
import CharInfo from "./char_resource.js";
import "./styles.css";

const charnames = [
  { key: "di", value: "diluc", text: chars.diluc },
  { key: "je", value: "jean", text: chars.jean },
  { key: "ke", value: "keqing", text: chars.keqing },
  { key: "mo", value: "mona", text: chars.mona },
  { key: "qi", value: "qiqi", text: chars.qiqi },
  { key: "ve", value: "venti", text: chars.venti }
];

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sel_char: null, sel_asc: null };
  }

  handleChange = (event, data) => {
    this.setState({ sel_char: data.value });
  };
  render() {
    var sel_char = this.state.sel_char;
    return (
      <div>
        <Dropdown
          placeholder="Select Character"
          fluid
          search
          selection
          onChange={this.handleChange}
          options={charnames}
        />
        {/* if char is selected */}
        {this.state.sel_char && (
          <div>
            {/* <h1>{asc_tal_mat[sel_char]["asc"]["gemstone"]}</h1> */}
            <img
              class="char_img"
              src={char_imgs[sel_char]}
              alt={charnames[sel_char]}
              width="33%"
            />
            <CharInfo sel_char={sel_char} sel_asc="idk" />
          </div>
        )}
      </div>
    );
  }
}

export default DropdownSearch;
