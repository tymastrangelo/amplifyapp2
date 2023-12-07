/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtondefaultfalseprimaryProps } from "./Buttondefaultfalseprimary";
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
export declare type UINewShirtOverridesProps = {
    UINewShirt?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "New Shirt"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField40411090?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40411091?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40411092?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40411094?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 445"?: PrimitiveOverrideProps<ViewProps>;
    "Button/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type UINewShirtProps = React.PropsWithChildren<Partial<FlexProps> & {
    shirt?: any;
} & {
    overrides?: UINewShirtOverridesProps | undefined | null;
}>;
export default function UINewShirt(props: UINewShirtProps): React.ReactElement;
