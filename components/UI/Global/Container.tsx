import styled, { css } from '@emotion/native';
import {IView} from "../../../model/UI/container";

const Container = styled.View<Partial<IView>>`
    ${({ flex }) => flex && `
    flex: ${flex};
  `}
    ${({ bg }) => bg && `
    background-color: ${bg};
  `}
    ${({ width }) => width && `
    width: ${width};
  `}
    ${({ height }) => height && `
    height: ${height};
  `}
    ${({ direction }) => direction && `
    flex-direction: ${direction};
  `}
    ${({ justify }) => justify && `
    justify-content: ${justify};
  `}
   ${({ alignitems }) => alignitems && `
    align-items: ${alignitems};
  `}
   ${({ padding }) => padding && `
    padding: ${padding}px;
  `}
    ${({ wrap }) => wrap && `
    flex-wrap: ${wrap};
  `}
  `;



export default Container;