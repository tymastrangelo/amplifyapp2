/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type UINoteCardOverridesProps = {
    UINoteCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Note Name"?: PrimitiveOverrideProps<TextProps>;
    "Note Link"?: PrimitiveOverrideProps<TextProps>;
    "Note User"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type UINoteCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    note?: any;
} & {
    overrides?: UINoteCardOverridesProps | undefined | null;
}>;
export default function UINoteCard(props: UINoteCardProps): React.ReactElement;
