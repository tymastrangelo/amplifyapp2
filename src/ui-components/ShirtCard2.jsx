/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { API } from "aws-amplify";
import { deleteShirt } from "../graphql/mutations";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ShirtCard2(props) {
  const { shirt, got, overrides, ...rest } = props;
  const frameFourFourFiveOnClick = async () => {
    await API.graphql({
      query: deleteShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          id: shirt?.id,
        },
      },
    });
  };
  const frameFourFourFiveOnMouseUp = useNavigateAction({
    type: "url",
    url: "/",
  });
  const frameFourFourSixOnClick = useNavigateAction({
    type: "url",
    url: `${"/EditShirt/"}${shirt?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="566px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ShirtCard2")}
      {...rest}
    >
      <Image
        width="unset"
        height="425px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={shirt?.Image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="143px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 10px"
        opacity="0.800000011920929"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <View
          width="298px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 447")}
        >
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameFourFourFiveOnClick();
            }}
            onMouseUp={() => {
              frameFourFourFiveOnMouseUp();
            }}
            {...getOverrideProps(overrides, "Frame 445")}
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
              type="delete"
              {...getOverrideProps(overrides, "MyIcon385889")}
            ></MyIcon>
          </View>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="31px"
            padding="0px 0px 0px 0px"
            onClick={() => {
              frameFourFourSixOnClick();
            }}
            {...getOverrideProps(overrides, "Frame 446")}
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
              type="edit"
              {...getOverrideProps(overrides, "MyIcon385891")}
            ></MyIcon>
          </View>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="22px"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt?.Brand}
          {...getOverrideProps(overrides, "Brand")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt?.Type}
          {...getOverrideProps(overrides, "Type")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="18px"
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
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt?.Size}
          {...getOverrideProps(overrides, "Size")}
        ></Text>
      </Flex>
    </Flex>
  );
}
