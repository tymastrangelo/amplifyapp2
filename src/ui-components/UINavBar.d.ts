/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UINavBarOverridesProps = {
    UINavBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 441"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3852285?: MyIconProps;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    Button3852305?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Button3852309?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 323"?: PrimitiveOverrideProps<FlexProps>;
    Button3852313?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 442"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3852317?: MyIconProps;
} & EscapeHatchProps;
export declare type UINavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UINavBarOverridesProps | undefined | null;
}>;
export default function UINavBar(props: UINavBarProps): React.ReactElement;
