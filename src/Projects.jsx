import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Skeleton from '@mui/material/Skeleton';
import {useEffect, useState} from 'react';
import {Backdrop} from "@mui/material";

export default function Projects() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => {
            clearTimeout(timer)
        };
    }, []);
    const handleOpen = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <ImageList
            sx={{
                maxWidth: '100vw',
                height: '100vh',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                cursor: 'pointer',
                gridTemplateColumns:
                    'repeat(auto-fill, minmax(500px, 1fr))!important',
                '@media screen and (max-width: 768px)': {
                    display: 'flex',
                    flexDirection: 'column'
                },
            }}
        >
            {isLoading
                ?
                Array.from(Array(4)).map((index) => (
                    <ImageListItem key={index}>
                        <Skeleton key={index} variant="rectangular" height={500}/>
                    </ImageListItem>
                ))
                : (
                    itemData.map((item) => (
                        <ImageListItem key={item.img} onClick={() => handleOpen(item.img)} sx={{maxWidth: '100vw'}}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                key={item.title}
                            />
                            <ImageListItemBar
                                sx={{
                                    maxWidth: '100%',
                                }}
                                title={item.title}
                            />
                        </ImageListItem>
                    )))}
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={selectedImage !== null}
                onClick={handleClose}
            >
                {selectedImage && (
                    <img src={selectedImage} alt="Full Screen" loading="lazy" className='full-screen'/>
                )}
            </Backdrop>
        </ImageList>
    )
}


const itemData = [
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/dom-ns.jpg',
        title: 'Dom jednorodzinny, ul.Chruściela, Nowy Sącz',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/krakow-rakowiecka.jpg',
        title: 'Osiedle mieszkaniowe, ul.Rakowiecka, Kraków',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/RudaSlaska.jpg',
        title: 'Budynek mieszkalno-usługowy, Ruda Śląska',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/Rytro-przedszkole.jpg',
        title: 'Przedszkole, Rytro',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/bierun-atut.jpg',
        title: 'C.H. Atut, Bieruń',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/chorow-karczma-elewacja.jpg',
        title: 'Karczma, lunapark Legendia, Chorzów',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/chorzow-stacja-paliw.jpg',
        title: 'Stacja paliw, Chorzów',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/czarna-owca-hotel-piwniczna.JPG',
        title: 'Hotel Piwniczna SPA&Conference, Piwniczna - Zdroj',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/palacyk-ns.jpg',
        title: 'Pałacyk, Nowy Sącz',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/drukarnia-flexergis.jpg',
        title: 'Drukarnia Flexergis, Nowy Sącz',
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/golkowice-biblioteka.jpg',
        title: 'Powiatowa i Miejsko-Gminna Biblioteka Publiczna im. Wiktora Bazielicha w Starym Sączu – Filia w Przysietnicy, Gołkowice Górne'
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/krakow-pawia.jpg',
        title: 'Budynek usługowy, ul.Pawia, Kraków'
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/mikolow-salwator.jpg',
        title: 'Dom Seniora Salwator Park, Mikołów'
    },
    {
        img: 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk/piwniczanka.jpg',
        title: ' Hala i budynek administracyjno-biurowy, ul.Zdrojowa, Piwniczna-Zdrój'
    }
]