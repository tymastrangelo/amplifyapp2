/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UINoteCardNEWOverridesProps = {
    UINoteCardNEW?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon4025608?: MyIconProps;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon4025607?: MyIconProps;
    "Note Name"?: PrimitiveOverrideProps<TextProps>;
    "Note Link"?: PrimitiveOverrideProps<TextProps>;
    "Note User"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UINoteCardNEWProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: any;
} & {
    overrides?: UINoteCardNEWOverridesProps | undefined | null;
}>;
export default function UINoteCardNEW(props: UINoteCardNEWProps): React.ReactElement;
