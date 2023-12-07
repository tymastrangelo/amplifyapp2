/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { API } from "aws-amplify";
import { createShirt } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
export default function ShirtCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Type: "",
    Brand: "",
    Size: "",
    Image: undefined,
  };
  const [Type, setType] = React.useState(initialValues.Type);
  const [Brand, setBrand] = React.useState(initialValues.Brand);
  const [Size, setSize] = React.useState(initialValues.Size);
  const [Image, setImage] = React.useState(initialValues.Image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.Type);
    setBrand(initialValues.Brand);
    setSize(initialValues.Size);
    setImage(initialValues.Image);
    setErrors({});
  };
  const validations = {
    Type: [{ type: "Required" }],
    Brand: [{ type: "Required" }],
    Size: [{ type: "Required" }],
    Image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Type,
          Brand,
          Size,
          Image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createShirt.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ShirtCreateForm")}
      {...rest}
    >
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type: value,
              Brand,
              Size,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      ></TextField>
      <TextField
        label="Brand"
        isRequired={true}
        isReadOnly={false}
        value={Brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type,
              Brand: value,
              Size,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Brand ?? value;
          }
          if (errors.Brand?.hasError) {
            runValidationTasks("Brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("Brand", Brand)}
        errorMessage={errors.Brand?.errorMessage}
        hasError={errors.Brand?.hasError}
        {...getOverrideProps(overrides, "Brand")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={true}
        isReadOnly={false}
        value={Size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type,
              Brand,
              Size: value,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Size ?? value;
          }
          if (errors.Size?.hasError) {
            runValidationTasks("Size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("Size", Size)}
        errorMessage={errors.Size?.errorMessage}
        hasError={errors.Size?.hasError}
        {...getOverrideProps(overrides, "Size")}
      ></TextField>
      <Field
        errorMessage={errors.Image?.errorMessage}
        hasError={errors.Image?.hasError}
        label={"Image"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  Type,
                  Brand,
                  Size,
                  Image: value,
                };
                const result = onChange(modelFields);
                value = result?.Image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImage((prev) => {
              let value = initialValues?.Image;
              if (onChange) {
                const modelFields = {
                  Type,
                  Brand,
                  Size,
                  Image: value,
                };
                const result = onChange(modelFields);
                value = result?.Image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={[]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "Image")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Add"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
