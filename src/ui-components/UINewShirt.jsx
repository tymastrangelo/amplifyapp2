/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { API } from "aws-amplify";
import { createShirt } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function UINewShirt(props) {
  const { shirt, overrides, ...rest } = props;
  const [
    textFieldThreeEightFiveOneOneSixFiveSevenValue,
    setTextFieldThreeEightFiveOneOneSixFiveSevenValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSixFiveEightValue,
    setTextFieldThreeEightFiveOneOneSixFiveEightValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSixFiveNineValue,
    setTextFieldThreeEightFiveOneOneSixFiveNineValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSixSixZeroValue,
    setTextFieldThreeEightFiveOneOneSixSixZeroValue,
  ] = useState("");
  const frameFourFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonOnClick = async () => {
    await API.graphql({
      query: createShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          Type: textFieldThreeEightFiveOneOneSixFiveSevenValue,
          Brand: textFieldThreeEightFiveOneOneSixFiveEightValue,
          Size: textFieldThreeEightFiveOneOneSixFiveNineValue,
          Image: textFieldThreeEightFiveOneOneSixSixZeroValue,
        },
      },
    });
  };
  const buttonOnMouseLeave = useNavigateAction({ type: "url", url: "/" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="616px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UINewShirt")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="616px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
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
              frameFourFourThreeOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 443")}
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
              left="0px"
              padding="0px 0px 0px 0px"
              type="close"
              {...getOverrideProps(overrides, "MyIcon")}
            ></MyIcon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Shirt"
            {...getOverrideProps(overrides, "New Shirt")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Type"
            placeholder="T-Shirt, Longsleeve, etc."
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveOneOneSixFiveSevenValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSixFiveSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511657")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Brand"
            placeholder="Nike, Adidas, etc."
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveOneOneSixFiveEightValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSixFiveEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511658")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Size"
            placeholder="xs, s, m, l, xl"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveOneOneSixFiveNineValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSixFiveNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511659")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="upload image"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightFiveOneOneSixSixZeroValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSixSixZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511660")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="ADD"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseLeave={() => {
            buttonOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
