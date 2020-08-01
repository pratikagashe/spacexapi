import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    font-family: OpenSans,sans-serif;
    font-style: normal;
    font-weight: 400;
    text-transform: none;
    .btn{
      font-size: 16px;
      padding: 8px 20px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      text-decoration: none;
      border: none;
      text-align: center;
      vertical-align: middle;
      box-sizing: border-box;
      border-radius: 2px;
      height: 40px;
      text-transform: uppercase;
      &.primary{
        background: #86BC25;
        border: #86BC25n;
        color: #FFFFFF;
        &:hover:not(.disabled){
          background: #7EB121;
          color: #FFFFFF;
        }
      }
    }
  

  .landing-page {
    width: calc(100% + 16px);
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .center-text{
    text-align: center;
  }
    
  .card {
    padding: 8px;
    flex-grow: 0;
    max-width: 33%;
    flex-basis: 33%;
    box-sizing: border-box;
    
    .cardContent {
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 0.75rem;
      box-shadow: 1px 1px 3px #ddd;
      box-sizing: border-box;
      height: 100%;
    }

    @media screen and (max-width: 768px) {
      max-width: 100%;
      flex-basis: 100%;
    }
  }    
}
`;

export default GlobalStyle;
