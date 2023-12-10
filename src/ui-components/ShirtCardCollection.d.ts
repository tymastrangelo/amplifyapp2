/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ShirtCardProps } from "./ShirtCard";
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
export declare type ShirtCardCollectionOverridesProps = {
    ShirtCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    ShirtCard?: ShirtCardProps;
} & EscapeHatchProps;
export declare type ShirtCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ShirtCardProps;
} & {
    overrides?: ShirtCardCollectionOverridesProps | undefined | null;
}>;
export default function ShirtCardCollection(props: ShirtCardCollectionProps): React.ReactElement;
