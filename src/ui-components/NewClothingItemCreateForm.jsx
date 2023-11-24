/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createNewClothingItem } from "../graphql/mutations";
export default function NewClothingItemCreateForm(props) {
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
    ClothingChoice: "",
    Size: "",
    ClothingName: "",
    ClothingBrand: "",
    image: "",
  };
  const [ClothingChoice, setClothingChoice] = React.useState(
    initialValues.ClothingChoice
  );
  const [Size, setSize] = React.useState(initialValues.Size);
  const [ClothingName, setClothingName] = React.useState(
    initialValues.ClothingName
  );
  const [ClothingBrand, setClothingBrand] = React.useState(
    initialValues.ClothingBrand
  );
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClothingChoice(initialValues.ClothingChoice);
    setSize(initialValues.Size);
    setClothingName(initialValues.ClothingName);
    setClothingBrand(initialValues.ClothingBrand);
    setImage(initialValues.image);
    setErrors({});
  };
  const validations = {
    ClothingChoice: [{ type: "Required" }],
    Size: [{ type: "Required" }],
    ClothingName: [{ type: "Required" }],
    ClothingBrand: [{ type: "Required" }],
    image: [],
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
          ClothingChoice,
          Size,
          ClothingName,
          ClothingBrand,
          image,
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
            query: createNewClothingItem.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "NewClothingItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Clothing choice"
        isRequired={true}
        isReadOnly={false}
        value={ClothingChoice}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClothingChoice: value,
              Size,
              ClothingName,
              ClothingBrand,
              image,
            };
            const result = onChange(modelFields);
            value = result?.ClothingChoice ?? value;
          }
          if (errors.ClothingChoice?.hasError) {
            runValidationTasks("ClothingChoice", value);
          }
          setClothingChoice(value);
        }}
        onBlur={() => runValidationTasks("ClothingChoice", ClothingChoice)}
        errorMessage={errors.ClothingChoice?.errorMessage}
        hasError={errors.ClothingChoice?.hasError}
        {...getOverrideProps(overrides, "ClothingChoice")}
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
              ClothingChoice,
              Size: value,
              ClothingName,
              ClothingBrand,
              image,
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
      <TextField
        label="Clothing name"
        isRequired={true}
        isReadOnly={false}
        value={ClothingName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClothingChoice,
              Size,
              ClothingName: value,
              ClothingBrand,
              image,
            };
            const result = onChange(modelFields);
            value = result?.ClothingName ?? value;
          }
          if (errors.ClothingName?.hasError) {
            runValidationTasks("ClothingName", value);
          }
          setClothingName(value);
        }}
        onBlur={() => runValidationTasks("ClothingName", ClothingName)}
        errorMessage={errors.ClothingName?.errorMessage}
        hasError={errors.ClothingName?.hasError}
        {...getOverrideProps(overrides, "ClothingName")}
      ></TextField>
      <TextField
        label="Clothing brand"
        isRequired={true}
        isReadOnly={false}
        value={ClothingBrand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClothingChoice,
              Size,
              ClothingName,
              ClothingBrand: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.ClothingBrand ?? value;
          }
          if (errors.ClothingBrand?.hasError) {
            runValidationTasks("ClothingBrand", value);
          }
          setClothingBrand(value);
        }}
        onBlur={() => runValidationTasks("ClothingBrand", ClothingBrand)}
        errorMessage={errors.ClothingBrand?.errorMessage}
        hasError={errors.ClothingBrand?.hasError}
        {...getOverrideProps(overrides, "ClothingBrand")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClothingChoice,
              Size,
              ClothingName,
              ClothingBrand,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
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
            children="Submit"
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
