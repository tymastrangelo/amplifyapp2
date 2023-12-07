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
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import Buttondefaultfalseprimary from "./Buttondefaultfalseprimary";
export default function UINewShirt(props) {
  const { shirt, overrides, ...rest } = props;
  const [
    textFieldFourZeroFourOneOneZeroNineZeroValue,
    setTextFieldFourZeroFourOneOneZeroNineZeroValue,
  ] = useState("");
  const [
    textFieldFourZeroFourOneOneZeroNineOneValue,
    setTextFieldFourZeroFourOneOneZeroNineOneValue,
  ] = useState("");
  const [
    textFieldFourZeroFourOneOneZeroNineTwoValue,
    setTextFieldFourZeroFourOneOneZeroNineTwoValue,
  ] = useState("");
  const [
    textFieldFourZeroFourOneOneZeroNineFourValue,
    setTextFieldFourZeroFourOneOneZeroNineFourValue,
  ] = useState("");
  const frameFourFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const frameFourFourFiveOnClick = async () => {
    await API.graphql({
      query: createShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          Type: textFieldFourZeroFourOneOneZeroNineZeroValue,
          Brand: textFieldFourZeroFourOneOneZeroNineOneValue,
          Size: textFieldFourZeroFourOneOneZeroNineTwoValue,
          Image: textFieldFourZeroFourOneOneZeroNineFourValue,
        },
      },
    });
  };
  const frameFourFourFiveOnDoubleClick = useNavigateAction({
    type: "url",
    url: "/",
  });
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
            placeholder="ex: t-shirt, top, etc"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourOneOneZeroNineZeroValue}
            onChange={(event) => {
              setTextFieldFourZeroFourOneOneZeroNineZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40411090")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Brand"
            placeholder="ex: Nike, Adidas"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourOneOneZeroNineOneValue}
            onChange={(event) => {
              setTextFieldFourZeroFourOneOneZeroNineOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40411091")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Size"
            placeholder="ex: S, M, L"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourOneOneZeroNineTwoValue}
            onChange={(event) => {
              setTextFieldFourZeroFourOneOneZeroNineTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40411092")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Upload image"
            placeholder="image file name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldFourZeroFourOneOneZeroNineFourValue}
            onChange={(event) => {
              setTextFieldFourZeroFourOneOneZeroNineFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField40411094")}
          ></TextField>
        </Flex>
        <View
          width="68px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourFourFiveOnClick();
          }}
          onDoubleClick={() => {
            frameFourFourFiveOnDoubleClick();
          }}
          {...getOverrideProps(overrides, "Frame 445")}
        >
          <Buttondefaultfalseprimary
            display="flex"
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            backgroundColor="rgba(78,165,202,1)"
            {...getOverrideProps(overrides, "Button/default/false/primary")}
          ></Buttondefaultfalseprimary>
        </View>
      </Flex>
    </Flex>
  );
}
