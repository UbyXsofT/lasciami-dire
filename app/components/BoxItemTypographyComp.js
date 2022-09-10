///** DEFAULT */
import React, { useState, useEffect } from "react";
///** CUSTOM */
import { BoxStl, TitleStl, ContainerStl, TextStl } from "./styled/index";
import { colors, typography, components } from "../theme/index";
///** REDUX */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { RDX_InfoTheme } from "../store/actions/themeAction";

const BoxItemTypographyComp = (props) => {
  console.log("props", props);
  const rootTypo = props.rootTypo;
  const nameTypo = props.nameTypo;
  const deskTypo = props.deskTypo;

  return (
    <ContainerStl
      Key='ContainerBoxItemTypographyComp'
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
      }}
    >
      <TextStl
        style={{
          fontSize: 20,
          fontWeight: "400",
          fontFamily: "Cantarell",
          letterSpacing: 0,
          lineHeight: 30,
          textAlign: "left",
          color: props.THEME.colorsTheme.TEXT_COLOR_1,
        }}
      >
        {`${rootTypo}.${nameTypo}  = ${deskTypo} \n\n`}
      </TextStl>
      <TextStl
        style={{
          fontSize: rootTypo === "fontSize" ? deskTypo : 12,
          fontWeight: rootTypo === "fontWeight" ? deskTypo : "400",
          fontFamily: rootTypo === "fontFamily" ? deskTypo : "Cantarell",
          letterSpacing: rootTypo === "letterSpacing" ? deskTypo : 0,
          lineHeight: rootTypo === "lineHeight" ? deskTypo : 18,
          textAlign: "left",
          color: props.THEME.colorsTheme.TEXT_COLOR_1,
        }}
      >
        {`Default font family \nCantarell!`}
      </TextStl>
    </ContainerStl>
  );
};

//* REDUX - ///////////
const mapStateToProps = (state) => ({
  THEME: state.themeReducer.theme,
});
const mapDispatchToProps = (dispatch) => ({
  RDX_InfoTheme: bindActionCreators(RDX_InfoTheme, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxItemTypographyComp);
