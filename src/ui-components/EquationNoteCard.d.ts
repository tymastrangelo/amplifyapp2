/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type EquationNoteCardOverridesProps = {
    EquationNoteCard?: PrimitiveOverrideProps<FlexProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon40311869?: MyIconProps;
    "Frame 438"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon40311871?: MyIconProps;
    Equation?: PrimitiveOverrideProps<TextProps>;
    Intercepts?: PrimitiveOverrideProps<TextProps>;
    Domain?: PrimitiveOverrideProps<TextProps>;
    Range?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EquationNoteCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: EquationNoteCardOverridesProps | undefined | null;
}>;
export default function EquationNoteCard(props: EquationNoteCardProps): React.ReactElement;
