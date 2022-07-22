import PropTypes from "prop-types";
import React, { Component } from "react";
import { requireNativeComponent, View } from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

class BrightcovePlayerPoster extends Component {
  setNativeProps = (nativeProps) => {
    if (this._root) {
      this._root.setNativeProps(nativeProps);
    }
  };

  render() {
    return (
      <NativeBrightcovePlayerPoster
        ref={(e) => (this._root = e)}
        {...this.props}
      />
    );
  }
}

BrightcovePlayerPoster.propTypes = {
  ...(ViewPropTypes || View.propTypes),
  policyKey: PropTypes.string,
  accountId: PropTypes.string,
  referenceId: PropTypes.string,
  videoId: PropTypes.string,
  videoToken: PropTypes.string,
};

BrightcovePlayerPoster.defaultProps = {};

const NativeBrightcovePlayerPoster = requireNativeComponent(
  "BrightcovePlayerPoster",
  BrightcovePlayerPoster
);

module.exports = BrightcovePlayerPoster;
