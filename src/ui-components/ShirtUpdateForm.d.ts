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
export declare type ShirtUpdateFormInputValues = {
    Type?: string;
    Brand?: string;
    Size?: string;
    Image?: string;
};
export declare type ShirtUpdateFormValidationValues = {
    Type?: ValidationFunction<string>;
    Brand?: ValidationFunction<string>;
    Size?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShirtUpdateFormOverridesProps = {
    ShirtUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Type?: PrimitiveOverrideProps<TextFieldProps>;
    Brand?: PrimitiveOverrideProps<TextFieldProps>;
    Size?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShirtUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShirtUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shirt?: any;
    onSubmit?: (fields: ShirtUpdateFormInputValues) => ShirtUpdateFormInputValues;
    onSuccess?: (fields: ShirtUpdateFormInputValues) => void;
    onError?: (fields: ShirtUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShirtUpdateFormInputValues) => ShirtUpdateFormInputValues;
    onValidate?: ShirtUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShirtUpdateForm(props: ShirtUpdateFormProps): React.ReactElement;
