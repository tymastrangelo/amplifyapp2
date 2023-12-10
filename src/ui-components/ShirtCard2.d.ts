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
export declare type ShirtCard2OverridesProps = {
    ShirtCard2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 447"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 445"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3853118?: MyIconProps;
    "Frame 446"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3853123?: MyIconProps;
    Brand?: PrimitiveOverrideProps<TextProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    Size?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ShirtCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    shirt?: any;
} & {
    overrides?: ShirtCard2OverridesProps | undefined | null;
}>;
export default function ShirtCard2(props: ShirtCard2Props): React.ReactElement;
