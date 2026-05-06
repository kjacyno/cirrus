import Grinea from '/src/assets/logo_GRINEA_zloto_granat.png'
import Erbet from '/src/assets/erbet.png'
import Ersbet from '/src/assets/ersbet.jpg'
import Grimbud from '/src/assets/logo-grimbud-final.png'
import Bryksy from '/src/assets/bryksy.png'
import GtC from '/src/assets/gt-c.png'
import ExprK from '/src/assets/expresKonk.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slick from 'react-slick'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export const PartnersCarousel = () => {
    const partnersSlideShow = [
        { src: Grinea, alt: 'Grinea logo', href: 'https://grinea.eu/pl/' },
        { src: Erbet, alt: 'Erbet logo', href: 'https://www.erbet.pl/' },
        { src: Ersbet, alt: 'Ersbet logo', href: 'https://ersbet.pl/' },
        { src: Grimbud, alt: 'Grimbud logo', href: 'https://grimbud.pl/' },
        { src: Bryksy, alt: 'Bryksy logo', href: 'https://bryksy.pl/' },
        { src: GtC, alt: 'GT Construction logo', href: 'https://gt-c.pl/' },
        {
            src: ExprK,
            alt: 'Expres Konkurent logo',
            href: 'https://expres-konkurent.pl/',
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    }
    const Slider = Slick.default

    return (
        <Box
            className='slider-container'
            sx={{
                mt: { xs: 1, md: 6 },
            }}
        >
            <Slider {...settings}>
                {partnersSlideShow.map(({ src, alt, href }, index) => (
                    <Link
                        key={index}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        underline='none'
                        sx={{
                            outline: 'none',
                            '&:focus': {
                                outline: 'none',
                            },
                            '&:active': {
                                outline: 'none',
                            },
                        }}
                    >
                        <Box
                            component='img'
                            src={src}
                            alt={alt}
                            sx={{
                                width: { xs: 70, sm: 100, md: 156 },
                                height: 'auto',
                                objectFit: 'contain',
                            }}
                        />
                    </Link>
                ))}
            </Slider>
        </Box>
    )
}