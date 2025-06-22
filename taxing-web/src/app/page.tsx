import React from 'react';
import { Button, Typography, Container, Box, Grid, Paper, SvgIcon, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import wechatLogo from '@/../public/icons/微信logo.svg';
import littleRedBookLogo from '@/../public/icons/小红书logo.svg';
import linkedinLogo from '@/../public/icons/linkedin.svg';
import xiaoYuZhouLogo from '@/../public/icons/小宇宙.svg';
import spotifyLogo from '@/../public/icons/spotify.svg';
import Image from 'next/image';
import backgroundImgSrc from '@/../public/images/taxing-hero-image.png';
import TextDivider from '@/components/TextDivider';
import {MediaIcon, OverviewData, PastProgramCardData} from '@/types/home';
import aboutImage from "@/../public/images/taxing-about.png";
import map from '@/../public/images/map.jpg'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const mediaIcons: MediaIcon[] = [
  {iconSrc: wechatLogo, text: "她行Mentorship", redirectUrl: "https://mp.weixin.qq.com/s/j6mqJA1TKbIYU8grMWL4fQ"},
  {iconSrc: littleRedBookLogo, text: "她行Mentorship", redirectUrl: "https://www.xiaohongshu.com/user/profile/61afcdc0000000002102acff?xsec_token=YBnLX563FOKkgkvuUqJp9Is8OOknOL8Ka1FqrECyZ6xV4=&xsec_source=app_share&xhsshare=CopyLink&appuid=59f69ff24eacab69b220e875&apptime=1745496711&share_id=523a71f6823144a28c2153b9f02a9aa8"},
  {iconSrc: linkedinLogo, text: "Forward With Her", redirectUrl: "https://www.linkedin.com/company/taxing-mentorship/"},
  {iconSrc: xiaoYuZhouLogo, text: "她声HerVoice", redirectUrl: "https://www.xiaoyuzhoufm.com/podcast/6665957dc449f5567cfcf85a"},
  {iconSrc: spotifyLogo, text: "她声HerVoice", redirectUrl: "https://open.spotify.com/show/1erEPXE5haT4nrsNjrXsdr?si=7RJlVulrT_KwuCkmSO2PhQ"},
];

const overviewData: OverviewData[] = [
  {iconSrc: RocketLaunchIcon, field: "Established", value: "2020"},
  {iconSrc: RocketLaunchIcon, field: "Volunteers", value: "100"},
  {iconSrc: RocketLaunchIcon, field: "Mentors", value: "480"},
  {iconSrc: RocketLaunchIcon, field: "Mentees", value: "1.4m"},
];

const pastProgramCards: PastProgramCardData[] = [
  {imageSrc: "/images/taxing-hero-image.png", title: "past program 1", text: "past program 1 text"},
  {imageSrc: "/images/taxing-hero-image.png", title: "past program 2", text: "past program 2 text"},
  {imageSrc: "/images/taxing-hero-image.png", title: "past program 3", text: "past program 3 text"},
]


const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: 'relative',
          width: '100vw', // Full viewport width
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          mb: 6,
        }}
      >
        {/* Background Image with Next.js Image component */}
        <Image
          src={backgroundImgSrc}
          alt="Taxing background"
          fill
          style={{
            objectFit: 'cover',
          }}
          priority // Load this image first
          quality={85} // Higher quality (default is 75)
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        />

        {/* Hero Content */}
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
            }}
          >
            她行
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
            }}
          >
            Forward With Her
            Mentorship
          </Typography>
        </Container>
      </Box>

      {/* Regular Content (no background image) */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>

          <Box sx={{ display: 'flex', flexDirection: 'column', mr: 1}}>
            <TextDivider text="关于我们" />
            <Typography
                  variant="h4"
                >
                她行简介
              </Typography>
            <Typography
                  variant="body1"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.

‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </Typography>
          </Box>

          <Box>
            <Image src={aboutImage} alt="" style={{borderRadius: '5%'}}/>
          </Box>
        </Box>


        <TextDivider text="OUR 平台" />

        {/* media icons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
          {mediaIcons.map((mediaIcon : MediaIcon) => (
            <Box key={mediaIcon.redirectUrl} sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <SvgIcon component="a" fontSize="large" href={mediaIcon.redirectUrl} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                <Image src={mediaIcon.iconSrc} alt="Logo" />
              </SvgIcon>
                <Typography
                  variant="body1"
                >
                  {mediaIcon.text}
              </Typography>
          </Box>
          ))}
        </Box>

        <TextDivider text="往期回顾" />

        <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{padding: 4, px: 6}}
          >
            「她行」的Mentorship活动在聚焦于理工科女性的职业成长的同时, 也搭建了一个个温暖的女性社群
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
          {pastProgramCards.map((pastProgramCard : PastProgramCardData) => (
            <Card key={pastProgramCard.title}
            sx={{
              height: 300,
              width: 300,
              backgroundImage: `url(${pastProgramCard.imageSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              borderRadius: 3,
              color: 'white',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
                borderRadius: 'inherit',
              },
            }}>
              <CardContent sx={{
                position: 'relative',
                //zIndex: 1,
                color: 'white',
                p: 3,
                pt: 4
              }}>
                <Typography gutterBottom variant="h5" component="div">
                  {pastProgramCard.title}
                </Typography>
                <Typography variant="body2">
                  {pastProgramCard.text}
                </Typography>
              </CardContent>

              <CardActions sx={{p:4, mt: 4}}>
                <Button size="small" variant="contained" color="primary">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>



        <Box sx={{ textAlign: 'center', m: 1, mt:8 }}>
          <Typography
              variant="h4"
            >
              Participants
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', m: 1 }}>
          我们聚集了来自世界各地的她们
        </Box>
        <Box sx={{ textAlign: 'center', m: 1 }}>
          Our participants come from all around the world.
        </Box>

        <Image src={map} alt="map" width={1200} height={600}/>


        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pt: 3}}>
          {overviewData.map((singleOverviewData : OverviewData) => (
            <Box key={singleOverviewData.field} sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <SvgIcon component={singleOverviewData.iconSrc} color='secondary'/>
                <Typography
                  variant="h3"
                >
                  {singleOverviewData.value}
              </Typography>
              <Typography
                  variant="h4"
                >
                  {singleOverviewData.field}
              </Typography>
          </Box>
          ))}
        </Box>




      </Container>
    </>
  );
};

export default Home;