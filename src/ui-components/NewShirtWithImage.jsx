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
export default function NewShirtWithImage(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeNineFourNineTwoTwoFourValue,
    setTextFieldThreeNineFourNineTwoTwoFourValue,
  ] = useState("");
  const [
    textFieldThreeNineFourNineTwoTwoFiveValue,
    setTextFieldThreeNineFourNineTwoTwoFiveValue,
  ] = useState("");
  const [
    textFieldThreeNineFourNineTwoTwoSixValue,
    setTextFieldThreeNineFourNineTwoTwoSixValue,
  ] = useState("");
  const frameFourFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonThreeNineFourNineTwoTwoEightOnClick = async () => {
    await API.graphql({
      query: createShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          Type: textFieldThreeNineFourNineTwoTwoFourValue,
          Brand: textFieldThreeNineFourNineTwoTwoFiveValue,
          Size: textFieldThreeNineFourNineTwoTwoSixValue,
        },
      },
    });
  };
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
      {...getOverrideProps(overrides, "NewShirtWithImage")}
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
            value={textFieldThreeNineFourNineTwoTwoFourValue}
            onChange={(event) => {
              setTextFieldThreeNineFourNineTwoTwoFourValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3949224")}
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
            value={textFieldThreeNineFourNineTwoTwoFiveValue}
            onChange={(event) => {
              setTextFieldThreeNineFourNineTwoTwoFiveValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3949225")}
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
            value={textFieldThreeNineFourNineTwoTwoSixValue}
            onChange={(event) => {
              setTextFieldThreeNineFourNineTwoTwoSixValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField3949226")}
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
            {...getOverrideProps(overrides, "TextField3949227")}
          ></TextField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Upload Image"
            {...getOverrideProps(overrides, "Button3949257")}
          ></Button>
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
            buttonThreeNineFourNineTwoTwoEightOnClick();
          }}
          {...getOverrideProps(overrides, "Button3949228")}
        ></Button>
      </Flex>
    </Flex>
  );
}
