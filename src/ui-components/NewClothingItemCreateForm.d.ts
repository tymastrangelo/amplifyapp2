/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewClothingItemCreateFormInputValues = {
    ClothingChoice?: string;
    Size?: string;
    ClothingName?: string;
    ClothingBrand?: string;
    image?: string;
};
export declare type NewClothingItemCreateFormValidationValues = {
    ClothingChoice?: ValidationFunction<string>;
    Size?: ValidationFunction<string>;
    ClothingName?: ValidationFunction<string>;
    ClothingBrand?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewClothingItemCreateFormOverridesProps = {
    NewClothingItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ClothingChoice?: PrimitiveOverrideProps<TextFieldProps>;
    Size?: PrimitiveOverrideProps<TextFieldProps>;
    ClothingName?: PrimitiveOverrideProps<TextFieldProps>;
    ClothingBrand?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewClothingItemCreateFormProps = React.PropsWithChildren<{
    overrides?: NewClothingItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewClothingItemCreateFormInputValues) => NewClothingItemCreateFormInputValues;
    onSuccess?: (fields: NewClothingItemCreateFormInputValues) => void;
    onError?: (fields: NewClothingItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewClothingItemCreateFormInputValues) => NewClothingItemCreateFormInputValues;
    onValidate?: NewClothingItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewClothingItemCreateForm(props: NewClothingItemCreateFormProps): React.ReactElement;
