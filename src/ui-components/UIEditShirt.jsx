/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { API } from "aws-amplify";
import { updateShirt } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function UIEditShirt(props) {
  const { shirt, overrides, ...rest } = props;
  const [
    textFieldThreeEightFiveOneOneSevenThreeSevenValue,
    setTextFieldThreeEightFiveOneOneSevenThreeSevenValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSevenThreeEightValue,
    setTextFieldThreeEightFiveOneOneSevenThreeEightValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSevenThreeNineValue,
    setTextFieldThreeEightFiveOneOneSevenThreeNineValue,
  ] = useState("");
  const [
    textFieldThreeEightFiveOneOneSevenFourZeroValue,
    setTextFieldThreeEightFiveOneOneSevenFourZeroValue,
  ] = useState("");
  const frameFourFourFourOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = async () => {
    await API.graphql({
      query: updateShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          Type: textFieldThreeEightFiveOneOneSevenThreeSevenValue,
          Brand: textFieldThreeEightFiveOneOneSevenThreeEightValue,
          Size: textFieldThreeEightFiveOneOneSevenThreeNineValue,
          Image: textFieldThreeEightFiveOneOneSevenFourZeroValue,
          id: shirt?.id,
        },
      },
    });
  };
  const buttonOnMouseUp = useNavigateAction({ type: "url", url: "/" });
  useEffect(() => {
    if (
      textFieldThreeEightFiveOneOneSevenThreeSevenValue === "" &&
      shirt !== undefined &&
      shirt?.Type !== undefined
    )
      setTextFieldThreeEightFiveOneOneSevenThreeSevenValue(shirt?.Type);
  }, [shirt]);
  useEffect(() => {
    if (
      textFieldThreeEightFiveOneOneSevenThreeEightValue === "" &&
      shirt !== undefined &&
      shirt?.Brand !== undefined
    )
      setTextFieldThreeEightFiveOneOneSevenThreeEightValue(shirt?.Brand);
  }, [shirt]);
  useEffect(() => {
    if (
      textFieldThreeEightFiveOneOneSevenThreeNineValue === "" &&
      shirt !== undefined &&
      shirt?.Size !== undefined
    )
      setTextFieldThreeEightFiveOneOneSevenThreeNineValue(shirt?.Size);
  }, [shirt]);
  useEffect(() => {
    if (
      textFieldThreeEightFiveOneOneSevenFourZeroValue === "" &&
      shirt !== undefined &&
      shirt?.Image !== undefined
    )
      setTextFieldThreeEightFiveOneOneSevenFourZeroValue(shirt?.Image);
  }, [shirt]);
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
      {...getOverrideProps(overrides, "UIEditShirt")}
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
              frameFourFourFourOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 444")}
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
            children={shirt?.id}
            {...getOverrideProps(overrides, "Edit Shirt")}
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
            value={textFieldThreeEightFiveOneOneSevenThreeSevenValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSevenThreeSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511737")}
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
            value={textFieldThreeEightFiveOneOneSevenThreeEightValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSevenThreeEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511738")}
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
            value={textFieldThreeEightFiveOneOneSevenThreeNineValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSevenThreeNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511739")}
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
            value={textFieldThreeEightFiveOneOneSevenFourZeroValue}
            onChange={(event) => {
              setTextFieldThreeEightFiveOneOneSevenFourZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField38511740")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="UPDATE"
          onClick={() => {
            buttonOnClick();
          }}
          onMouseUp={() => {
            buttonOnMouseUp();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
