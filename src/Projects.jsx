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
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/dom-ns.jpg?alt=media&token=f3b96696-6f83-481f-a6fe-a08c2eeb62b5',
        title: 'Dom jednorodzinny, ul.Chruściela, Nowy Sącz',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/krakow-rakowiecka.jpg?alt=media&token=de4285e2-0cc6-40e8-9901-f83d3d9acfb5',
        title: 'Osiedle mieszkaniowe, ul.Rakowiecka, Kraków',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/RudaSlaska.jpg?alt=media&token=4223aa57-65ed-4f73-9e48-64f4cc556ee4',
        title: 'Budynek mieszkalno-usługowy, Ruda Śląska',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/Rytro-przedszkole.jpg?alt=media&token=ff2ae939-edf0-4823-b4d1-a8cff2939f56',
        title: 'Przedszkole, Rytro',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/bierun-atut.jpg?alt=media&token=2c8f94c6-ad54-4ae8-9de9-df53fea54692',
        title: 'C.H. Atut, Bieruń',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/chorow-karczma-elewacja.jpg?alt=media&token=593de78e-14f7-4afc-873e-3916b32ed27c',
        title: 'Karczma, lunapark Legendia, Chorzów',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/chorzow-stacja-paliw.jpg?alt=media&token=7c8da99a-552d-47ea-b76f-e8c9eccfe7c6',
        title: 'Stacja paliw, Chorzów',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/czarna-owca-hotel-piwniczna.JPG?alt=media&token=d583e5a7-fd53-438b-869f-b58c33b12d52',
        title: 'Hotel Piwniczna SPA&Conference, Piwniczna - Zdroj',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/palacyk-ns.jpg?alt=media&token=d91ceacd-d28a-4dfe-96d9-d38487dac80b',
        title: 'Pałacyk, Nowy Sącz',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/drukarnia-flexergis.jpg?alt=media&token=8ca94fc3-9ea1-423e-a7fb-d23b35733af8',
        title: 'Drukarnia Flexergis, Nowy Sącz',
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/golkowice-biblioteka.jpg?alt=media&token=df9457b5-0798-4a97-afe6-e6e87e6a5884',
        title: 'Powiatowa i Miejsko-Gminna Biblioteka Publiczna im. Wiktora Bazielicha w Starym Sączu – Filia w Przysietnicy, Gołkowice Górne'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/krakow-pawia.jpg?alt=media&token=9403e6df-d407-411d-8322-abdfcf53f881',
        title: 'Budynek usługowy, ul.Pawia, Kraków'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/mikolow-salwator.jpg?alt=media&token=71a5b4e7-b915-479e-ab81-b83925f158dd',
        title: 'Dom Seniora Salwator Park, Mikołów'
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/cirrus-kowalczyk.appspot.com/o/piwniczanka.jpg?alt=media&token=99b4cc07-5a33-4592-952d-3d0a9ecd0305',
        title: ' Hala i budynek administracyjno-biurowy, ul.Zdrojowa, Piwniczna-Zdrój'
    }
]