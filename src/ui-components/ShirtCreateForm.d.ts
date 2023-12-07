/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type ShirtCreateFormInputValues = {
    Type?: string;
    Brand?: string;
    Size?: string;
    Image?: string;
};
export declare type ShirtCreateFormValidationValues = {
    Type?: ValidationFunction<string>;
    Brand?: ValidationFunction<string>;
    Size?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShirtCreateFormOverridesProps = {
    ShirtCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Brand?: PrimitiveOverrideProps<TextFieldProps>;
    Size?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type ShirtCreateFormProps = React.PropsWithChildren<{
    overrides?: ShirtCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShirtCreateFormInputValues) => ShirtCreateFormInputValues;
    onSuccess?: (fields: ShirtCreateFormInputValues) => void;
    onError?: (fields: ShirtCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShirtCreateFormInputValues) => ShirtCreateFormInputValues;
    onValidate?: ShirtCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShirtCreateForm(props: ShirtCreateFormProps): React.ReactElement;
