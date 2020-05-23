import styled from '@emotion/styled'

import React from 'react'
import { StyledFooterWrapper } from '../containers/styled-footer-wrapper'
import TumblrIcon from '../../public/img/006-tumblr.svg'
import DribbbleIcon from '../../public/img/022-dribbble.svg'
import TwitchIcon from '../../public/img/016-twitch.svg'
import YoutubeIcon from '../../public/img/011-youtube.svg'
import FacebookIcon from '../../public/img/021-facebook.svg'
import InstagramIcon from '../../public/img/025-instagram.svg'
import SnapchatIcon from '../../public/img/034-snapchat.svg'
import GithubIcon from '../../public/img/038-github.svg'
import DeviantArtIcon from '../../public/img/039-deviantart.svg'
import PinterestIcon from '../../public/img/041-pinterest.svg'
import TwitterIcon from '../../public/img/043-twitter.svg'
import LinkedinIcon from '../../public/img/045-linkedin.svg'
import BehanceIcon from '../../public/img/048-behance.svg'

const FooterGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 8px;
`

const FooterGridCell = styled.div`
  background-color: #55d4eb;
`

const IconLink = (props) => {
  return (
    <a href={props.link} target={props.link && '_blank'}>
      <img src={props.source} alt={props.altText} height={32} width={32} />
    </a>
  )
}

export const GlobalFooter = () => {
  return (
    <StyledFooterWrapper>
      <React.Fragment>
        <FooterGridContainer>
          <FooterGridCell />
          <FooterGridCell
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <IconLink
              source={TumblrIcon}
              altText='Tumblr Icon'
              link='https://www.tumblr.com/blog/jcweaverart'
            />
            <IconLink
              source={DribbbleIcon}
              altText='Dribbble Icon'
              link='https://dribbble.com/jcweaverart'
            />
            <IconLink
              source={TwitchIcon}
              altText='Twitch Icon'
              link='https://www.twitch.tv/jcweaverart'
            />
            <IconLink
              source={YoutubeIcon}
              altText='Youtube Icon'
              link='https://www.youtube.com/channel/UCziNshD--losK1FwSqqeo0w?view_as=subscriber'
            />
            <IconLink
              source={FacebookIcon}
              altText='Facebook Icon'
              link='https://www.facebook.com/jcweaverart/'
            />
            <IconLink
              source={InstagramIcon}
              altText='Instagram Icon'
              link='https://www.instagram.com/jcweaverart/'
            />
            <IconLink
              source={SnapchatIcon}
              altText='Snapchat Icon'
              link='https://www.snapchat.com/'
            />
            <IconLink
              source={GithubIcon}
              altText='Github Icon'
              link='https://github.com/jcweaverart'
            />
            <IconLink
              source={DeviantArtIcon}
              altText='Deviantart Icon'
              link='https://www.deviantart.com/jcweaverart'
            />
            <IconLink
              source={PinterestIcon}
              altText='Pinterest Icon'
              link='https://www.pinterest.com/jcweaverart/'
            />
            <IconLink
              source={TwitterIcon}
              altText='Twitter Icon'
              link='https://twitter.com/jcweaverart'
            />
            <IconLink
              source={LinkedinIcon}
              altText='Linkedin Icon'
              link='https://www.linkedin.com/in/weaverjordan/'
            />
            <IconLink
              source={BehanceIcon}
              altText='Behance Icon'
              link='https://www.behance.net/jcweaverart'
            />
          </FooterGridCell>
          <FooterGridCell />
        </FooterGridContainer>
      </React.Fragment>
    </StyledFooterWrapper>
  )
}
