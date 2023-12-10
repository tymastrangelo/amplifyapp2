/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import MyIcon from "./MyIcon";
import { Button, Flex, View } from "@aws-amplify/ui-react";
export default function UINavBar(props) {
  const { overrides, ...rest } = props;
  const frameFourFourOneOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonThreeEightFiveTwoThreeZeroFiveOnClick = useNavigateAction({
    type: "url",
    url: "/NewShirt",
  });
  const buttonThreeEightFiveTwoThreeZeroNineOnClick = useNavigateAction({
    type: "url",
    url: "/NewPants",
  });
  const buttonThreeEightFiveTwoThreeOneThreeOnClick = useNavigateAction({
    type: "url",
    url: "/NewShoes",
  });
  return (
    <Flex
      gap="40px"
      direction="row"
      width="320px"
      height="48px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UINavBar")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameFourFourOneOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 441")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="-0.5px"
          padding="0px 0px 0px 0px"
          type="home"
          {...getOverrideProps(overrides, "MyIcon3852285")}
        ></MyIcon>
      </View>
      <Flex
        gap="32px"
        direction="row"
        width="29px"
        height="29px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          width="29px"
          height="29px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="👕"
          onClick={() => {
            buttonThreeEightFiveTwoThreeZeroFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Button3852305")}
        ></Button>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="29px"
        height="29px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 322")}
      >
        <Button
          width="29px"
          height="29px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="👖"
          onClick={() => {
            buttonThreeEightFiveTwoThreeZeroNineOnClick();
          }}
          {...getOverrideProps(overrides, "Button3852309")}
        ></Button>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="29px"
        height="29px"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 323")}
      >
        <Button
          width="29px"
          height="29px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="👟"
          onClick={() => {
            buttonThreeEightFiveTwoThreeOneThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button3852313")}
        ></Button>
      </Flex>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 442")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0.5px"
          padding="0px 0px 0px 0px"
          type="more_vert"
          {...getOverrideProps(overrides, "MyIcon3852317")}
        ></MyIcon>
      </View>
    </Flex>
  );
}
