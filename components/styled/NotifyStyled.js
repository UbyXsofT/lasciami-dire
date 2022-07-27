import React from "react";
import { CardStyled, TitleStyled } from "./IndexStyled";

const Notify = ({ title }) => {
  return (
    <CardStyled
      width={400}
      height={150}
      alignItems={"center"}
      justifyContent={"center"}
      bg={"#36b8c9"}
      mb={3}
      py={6}
      px={4}
    >
      <TitleStyled fontSize={25} fontWeight={"bold"} color={"#FFFFFF"}>
        {title}
      </TitleStyled>
    </CardStyled>
  );
};
export default Notify;
