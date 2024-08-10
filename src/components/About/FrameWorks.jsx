import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';




const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 100px;
  background: var(--purple1);

  h2 {
    color: var(--purple0);
  }
  h3 {
    color: var(--white0);
  }
  h4 {
    color: var(--yello0);
  }
  p {
    color: var(--white0);
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`;

const Content = styled.div`
  position: relative;
  width: 1150px;
  max-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 800px;
  overflow: hidden;
`;

const Image = styled.img`
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const SectionTitle = styled.h2`
  font-size: 3em;

  strong {
    color: var(--black0);
  }
  strong2 {
    color: var(--orange0);
  }
`;

const MediaInfo = styled.ul`
  width: 400px;
  margin-left: 50px;
`;

const MediaInfoItem = styled.li`
  list-style: none;
  font-size: 1.4em;
  margin-bottom: 50px;

  &:nth-child(1),
  &:nth-child(5) {
    padding-left: 100px;
  }

  &:nth-child(2),
  &:nth-child(4) {
    padding-left: 50px;
  }
`;

const MediaInfoLink = styled.a`
  color: var(--yello0);
  text-decoration: none;
`;







const FrameWorks = () => {
  return (
    <>
     <Section className="sec-03">
        <Container>
          <SectionTitle>Lorem Ipsum</SectionTitle>
          <Content>
            <MediaInfo className="MediaInfo">
              <MediaInfoItem>
                <MediaInfoLink href="#"><FaFacebook /> Facebook</MediaInfoLink>
              </MediaInfoItem>
              <MediaInfoItem>
                <MediaInfoLink href="#"><FaInstagram /> Instagram</MediaInfoLink>
              </MediaInfoItem>
              <MediaInfoItem>
                <MediaInfoLink href="#"><FaTwitter /> Twitter</MediaInfoLink>
              </MediaInfoItem>
              <MediaInfoItem>
                <MediaInfoLink href="#"><FaYoutube /> Youtube</MediaInfoLink>
              </MediaInfoItem>
              <MediaInfoItem>
                <MediaInfoLink href="#"><FaLinkedin /> Linkedin</MediaInfoLink>
              </MediaInfoItem>
            </MediaInfo>
            <ImageWrapper className="ImageWrapper">
              <Image src="./img3.png" alt="Description" />
            </ImageWrapper>
          </Content>
        </Container>
      </Section>
    </>
  );
}

export default FrameWorks;