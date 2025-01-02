import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => (props.main ? "50px" : "40px")};
  line-height: ${(props) => (props.main ? "62px" : "46px")};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.primaryBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 0;
  padding-top: 0;
  padding: ${(props) => (props.main ? "0 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "46px" : "38px")};
    line-height: ${(props) => (props.main ? "46px" : "38px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "0 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${(props) => props.theme.colors.primaryColor};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.theme.colors.primaryBackground};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.secondaryColor};

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const SecondaryBtn = styled.button`
  color: ${(props) => props.theme.colors.buttonColor};
  background: ${(props) => props.theme.colors.primaryBackground};
  border: none;
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #rbga(255, 255, 255, 0.7);
    background: rgba(255, 117, 67, 0.93);
    border: 1px solid #fff;
  }

  &:active {
    background: rgba(255, 117, 67, 0.73);
    border: 1px solid rgba(255, 117, 67, 0.9);
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 24px;
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => (alt ? "120px" : "170px")};
  height: ${({ alt }) => (alt ? "34px" : "51px")};
  border-radius: 50px;
  font-size: ${({ alt }) => (alt ? "15px" : "19px")};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form ? "0" : "0 0 80px")};
  color: rbga(255, 255, 255, 0.7);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ disabled }) =>
    disabled
      ? "inset 0px 0px 1px rgba(255, 255, 255, 0.6), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
      : "inset 0px 0px 4px rgba(255, 255, 255, 0.6), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => (alt ? "100px" : "120px")};
    height: ${({ alt }) => (alt ? "28px" : "34px")};
    font-size: ${({ alt }) => (alt ? "15px" : "11px")};
    margin-bottom: ${({ alt }) => (alt ? "0" : "32px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 21px;
    font-size: 9px;
    margin-bottom: ${({ alt }) => (alt ? "0" : "16px")};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.05s ease;
  font-size: ${({ alt }) => (alt ? "15px" : "19px")};
  font-weight: 400;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  &:hover {
    box-shadow: "inset 0px 0px 2px rgba(255, 255, 255, 0.9), inset 0px 0px 4px rgba(20, 20, 55, 0.6)";
    background: rgba(255, 255, 255, 0.15);
    font-size: ${({ alt }) => (alt ? "15px" : "19px")};
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => (alt ? "15px" : "11px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 9px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: rgba(255, 117, 67, 0.83);
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;
