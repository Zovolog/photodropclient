import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterWrapper,
  FrameBt,
  HalfBlock,
  TextMain,
  TextSmall,
} from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <div>
      <FooterWrapper>
        <FooterContainer>
          <HalfBlock>
            <TextMain>PhotoDrop is brought to you by</TextMain>
            <img
              src="/img/FrameologyLogo.png"
              alt="logo"
              width="150px"
              style={{ marginBottom: "20px" }}
            />
            <TextSmall>
              Our mission is to help people connect with their memories. If you
              framing some of the photos from your experience, please consider
              using Frameology. It supports the photographers and makes
              PhotoDrop possible.
            </TextSmall>
            <FrameBt>Frame a photo</FrameBt>
          </HalfBlock>
          <HalfBlock>
            <TextSmall>
              Questions? Get in touch -{" "}
              <a href="mailto:hello@photodrop.me">hello@photodrop.me</a>
            </TextSmall>
            <img
              src="/img/ClimateNeutralLogo.png"
              alt="logo"
              width="100px"
              style={{ margin: "10px 0 30px 0" }}
            />
            <TextSmall>
              <Link
                to="/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms
              </Link>
            </TextSmall>
            <TextSmall>
              <Link
                to="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>
            </TextSmall>
            <TextSmall>© 2022 FOM Online Inc</TextSmall>
          </HalfBlock>
        </FooterContainer>
      </FooterWrapper>
    </div>
  );
};
