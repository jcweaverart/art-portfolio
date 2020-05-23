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
    <a href={props.href || ''} target='_blank'>
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
            <IconLink source={TumblrIcon} altText='Tumblr Icon' />
            <IconLink source={DribbbleIcon} altText='Dribbble Icon' />
            <IconLink source={TwitchIcon} altText='Twitch Icon' />
            <IconLink source={YoutubeIcon} altText='Youtube Icon' />
            <IconLink source={FacebookIcon} altText='Facebook Icon' />
            <IconLink source={InstagramIcon} altText='Instagram Icon' />
            <IconLink source={SnapchatIcon} altText='Snapchat Icon' />
            <IconLink source={GithubIcon} altText='Github Icon' />
            <IconLink source={DeviantArtIcon} altText='Deviantart Icon' />
            <IconLink source={PinterestIcon} altText='Pinterest Icon' />
            <IconLink source={TwitterIcon} altText='Twitter Icon' />
            <IconLink source={LinkedinIcon} altText='Linkedin Icon' />
            <IconLink source={BehanceIcon} altText='Behance Icon' />
          </FooterGridCell>
          <FooterGridCell />
        </FooterGridContainer>
      </React.Fragment>
    </StyledFooterWrapper>
  )
}
