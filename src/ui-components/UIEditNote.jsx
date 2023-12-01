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
import { updateNote } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function UIEditNote(props) {
  const { notes, overrides, ...rest } = props;
  const [
    textFieldThreeNineNineSevenSevenOneOneValue,
    setTextFieldThreeNineNineSevenSevenOneOneValue,
  ] = useState("");
  const [
    textFieldThreeNineNineSevenSevenOneTwoValue,
    setTextFieldThreeNineNineSevenSevenOneTwoValue,
  ] = useState("");
  const [
    textFieldThreeNineNineSevenSevenOneThreeValue,
    setTextFieldThreeNineNineSevenSevenOneThreeValue,
  ] = useState("");
  const [
    textFieldThreeNineNineSevenSevenOneFourValue,
    setTextFieldThreeNineNineSevenSevenOneFourValue,
  ] = useState("");
  const editProfileOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = async () => {
    await API.graphql({
      query: updateNote.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineNineSevenSevenOneOneValue,
          description: textFieldThreeNineNineSevenSevenOneTwoValue,
          image: textFieldThreeNineNineSevenSevenOneThreeValue,
          author: textFieldThreeNineNineSevenSevenOneFourValue,
          id: notes?.id,
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
      {...getOverrideProps(overrides, "UIEditNote")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
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
          onClick={() => {
            editProfileOnClick();
          }}
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
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
            children="Edit Note"
            {...getOverrideProps(overrides, "Edit Note")}
          ></Text>
        </Flex>
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
          {...getOverrideProps(overrides, "Profile")}
        >
          <View
            width="272px"
            height="96px"
            display={notes?.image}
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(-90deg, rgba(255,0,0,1), rgba(255,255,255,0))"
            {...getOverrideProps(overrides, "image")}
          ></View>
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
            label="Note Name"
            placeholder="note name"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineSevenSevenOneOneValue}
            onChange={(event) => {
              setTextFieldThreeNineNineSevenSevenOneOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3997711")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Description"
            placeholder="blah blah"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineSevenSevenOneTwoValue}
            onChange={(event) => {
              setTextFieldThreeNineNineSevenSevenOneTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3997712")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="link"
            placeholder="https://link.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineSevenSevenOneThreeValue}
            onChange={(event) => {
              setTextFieldThreeNineNineSevenSevenOneThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3997713")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="user"
            placeholder="@user"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineNineSevenSevenOneFourValue}
            onChange={(event) => {
              setTextFieldThreeNineNineSevenSevenOneFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3997714")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Save"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
