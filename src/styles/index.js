import styled from 'styled-components';

// ////////////////////////////////////////////////////////

export const HeaderText = styled.p`
  color: #5768e9;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const AppContainer = styled.div`
  padding: 5% 15%;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 3% 10%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 3% 5%;
  }

  .form-control.input-sm {
    height: 30px;
  }
`;

export const Layout = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  padding-right: ${props => (props.paddingRight ? props.padding : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  margin-right: ${props => (props.marginRight ? props.margin : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  width: ${props => (props.width ? props.width : '')};
  height: ${props => (props.height ? props.height : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
`;
