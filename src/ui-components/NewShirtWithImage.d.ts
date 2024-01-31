/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type NewShirtWithImageOverridesProps = {
    NewShirtWithImage?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    "New Shirt"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField3949224?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3949225?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3949226?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3949227?: PrimitiveOverrideProps<TextFieldProps>;
    Button3949257?: PrimitiveOverrideProps<ButtonProps>;
    Button3949228?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NewShirtWithImageProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NewShirtWithImageOverridesProps | undefined | null;
}>;
export default function NewShirtWithImage(props: NewShirtWithImageProps): React.ReactElement;
