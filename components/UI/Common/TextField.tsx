import styled, { css } from '@emotion/native';
import React from 'react';
import { ITextInput } from '../../../model/UI/textinput';

const TextField = styled.TextInput<Partial<ITextInput>>`
flex-grow: 1;
font-size: ${({ size }) => size ? size + "px" : '12px'};
border : ${({ variant }) => variant ? `1px solid ${variant}` : `1px solid #333`} 
`;

export default TextField;