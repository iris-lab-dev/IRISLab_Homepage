import { lazy } from "react";
import styled from "styled-components";
import SnsContent from "../../content/NetworkContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const SnsSection = styled.section`
  min-height: calc(100vh - var(--header-height));
  padding: 7.5rem 1.5rem 3rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const SnsContentWrapper = styled.div`
  width: min(100%, 720px);
  margin: 0 auto;
`;

const SnsTitle = styled.h2`
  margin: 0;
  text-align: center;
`;

const SnsDescription = styled.p`
  margin: 1.5rem 0 3rem;
  text-align: center;

  .accent-black-strong {
    font-weight: 700;
  }
`;

const SnsGroups = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const SnsGroup = styled.section`
  padding: 1.5rem;
  border-top: 1px solid #d9d9d9;

  &:last-child {
    border-bottom: 1px solid #d9d9d9;
  }
`;

const AccountName = styled.h3`
  margin: 0 0 1rem;
  font-family: "OneStoreMobileGothicBody", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
`;

const ChannelList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ChannelLink = styled.a`
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 0.2em;

  &:hover,
  &:focus {
    color: #d4a017;
  }
`;

const Network = () => {
  return (
    <Container>
      <ScrollToTop />
      <SnsSection id="sns">
        <SnsContentWrapper>
          <SnsTitle>{SnsContent.title}</SnsTitle>
          <SnsDescription dangerouslySetInnerHTML={{ __html: SnsContent.text }} />
          <SnsGroups>
            {SnsContent.groups.map((group) => (
              <SnsGroup key={group.name}>
                <AccountName>{group.name}</AccountName>
                <ChannelList>
                  {group.channels.map((channel) => (
                    <li key={`${group.name}-${channel.name}`}>
                      <ChannelLink href={channel.link} target="_blank" rel="noopener noreferrer">
                        {channel.name}
                      </ChannelLink>
                    </li>
                  ))}
                </ChannelList>
              </SnsGroup>
            ))}
          </SnsGroups>
        </SnsContentWrapper>
      </SnsSection>
    </Container>
  );
};

export default Network;
