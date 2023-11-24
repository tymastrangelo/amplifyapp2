/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type APPHomePageOverridesProps = {
    APPHomePage?: PrimitiveOverrideProps<ViewProps>;
    "Button Bar"?: PrimitiveOverrideProps<ViewProps>;
    "back bar"?: PrimitiveOverrideProps<ViewProps>;
    "Profile (OFF)"?: PrimitiveOverrideProps<ViewProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "icon (OFF)38894756"?: PrimitiveOverrideProps<ViewProps>;
    Complete?: PrimitiveOverrideProps<ViewProps>;
    user?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector38894760?: PrimitiveOverrideProps<IconProps>;
    Vector38894761?: PrimitiveOverrideProps<IconProps>;
    "Calendar (OFF)"?: PrimitiveOverrideProps<ViewProps>;
    Calendar?: PrimitiveOverrideProps<TextProps>;
    "icon (OFF)38894772"?: PrimitiveOverrideProps<ViewProps>;
    button?: PrimitiveOverrideProps<ViewProps>;
    "Add (OFF)"?: PrimitiveOverrideProps<ViewProps>;
    circle?: PrimitiveOverrideProps<ViewProps>;
    "icon (OFF)38894782"?: PrimitiveOverrideProps<ViewProps>;
    Line_185?: PrimitiveOverrideProps<IconProps>;
    Line_186?: PrimitiveOverrideProps<IconProps>;
    "Clothes (OFF)"?: PrimitiveOverrideProps<ViewProps>;
    Clothes?: PrimitiveOverrideProps<TextProps>;
    "icon (ON)38894792"?: PrimitiveOverrideProps<ViewProps>;
    "Home (ON)"?: PrimitiveOverrideProps<ViewProps>;
    Home?: PrimitiveOverrideProps<TextProps>;
    "icon (ON)38894804"?: PrimitiveOverrideProps<ViewProps>;
    Vector38894805?: PrimitiveOverrideProps<IconProps>;
    Vector38894806?: PrimitiveOverrideProps<IconProps>;
    "Suggested outfit"?: PrimitiveOverrideProps<ViewProps>;
    "Widget Background"?: PrimitiveOverrideProps<ViewProps>;
    "outfit preview"?: PrimitiveOverrideProps<ImageProps>;
    Button38894810?: PrimitiveOverrideProps<FlexProps>;
    Weather?: PrimitiveOverrideProps<ViewProps>;
    time?: PrimitiveOverrideProps<TextProps>;
    "wave design?"?: PrimitiveOverrideProps<ViewProps>;
    "Vector 1"?: PrimitiveOverrideProps<IconProps>;
    "Vector 2"?: PrimitiveOverrideProps<IconProps>;
    "\"Change Location\" Button"?: PrimitiveOverrideProps<ViewProps>;
    location?: PrimitiveOverrideProps<FlexProps>;
    "Marco Island, FL"?: PrimitiveOverrideProps<TextProps>;
    "weather summary"?: PrimitiveOverrideProps<FlexProps>;
    sun?: PrimitiveOverrideProps<ViewProps>;
    "sun.max.fill"?: PrimitiveOverrideProps<IconProps>;
    Details?: PrimitiveOverrideProps<FlexProps>;
    Condition?: PrimitiveOverrideProps<TextProps>;
    "High & Low"?: PrimitiveOverrideProps<TextProps>;
    "\"Notifications\" Button"?: PrimitiveOverrideProps<FlexProps>;
    "Hicon / Bold / Notification 3"?: PrimitiveOverrideProps<ViewProps>;
    "Notification 3"?: PrimitiveOverrideProps<ViewProps>;
    Vector38894832?: PrimitiveOverrideProps<IconProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    "Welcome message"?: PrimitiveOverrideProps<ViewProps>;
    "Mr. Headrick"?: PrimitiveOverrideProps<TextProps>;
    "Good Morning,"?: PrimitiveOverrideProps<TextProps>;
    HEADER?: PrimitiveOverrideProps<ViewProps>;
    Button38894874?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type APPHomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: APPHomePageOverridesProps | undefined | null;
}>;
export default function APPHomePage(props: APPHomePageProps): React.ReactElement;
