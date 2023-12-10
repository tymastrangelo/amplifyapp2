/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ShirtCard2Props } from "./ShirtCard2";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type ShirtCard2CollectionOverridesProps = {
    ShirtCard2Collection?: PrimitiveOverrideProps<CollectionProps>;
    ShirtCard2?: ShirtCard2Props;
} & EscapeHatchProps;
export declare type ShirtCard2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ShirtCard2Props;
} & {
    overrides?: ShirtCard2CollectionOverridesProps | undefined | null;
}>;
export default function ShirtCard2Collection(props: ShirtCard2CollectionProps): React.ReactElement;
