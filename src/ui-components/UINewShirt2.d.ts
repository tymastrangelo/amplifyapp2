/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type UINewShirt2OverridesProps = {
    UINewShirt2?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "New Shirt"?: PrimitiveOverrideProps<TextProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4065854?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4065855?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4065856?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4065857?: PrimitiveOverrideProps<TextFieldProps>;
    "Button/default/false/primary"?: ButtondefaultfalseprimaryProps;
} & EscapeHatchProps;
export declare type UINewShirt2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UINewShirt2OverridesProps | undefined | null;
}>;
export default function UINewShirt2(props: UINewShirt2Props): React.ReactElement;
