// MyCustomComponent.d.ts
import React from 'react';
import { FlexProps } from '@aws-amplify/ui-react';

export declare type MyCustomComponentProps = React.PropsWithChildren<Partial<FlexProps> & {
    // Define any custom props here
}>;

export default function MyCustomComponent(props: MyCustomComponentProps): React.ReactElement;
