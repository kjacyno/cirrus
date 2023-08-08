import Box from "@mui/material/Box";

export default function About() {
    return (
        <Box sx={{width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',

        }}>
           <p className="text-info">
                Firma Cirrus działa od 1998 roku.<br/>
                Specjalizuje się w budowie i remontach budynków komercyjnych.<br/>
                Prowadzimy działalność ogólnobudowlaną ze specjalizacją elewacje i prace wykończeniowe.<br/>
                Współpracujemy z firmami:<br/>
                Grinea Rzeszów, Erbet, Ersbet, Grimbud, Bryksy Kraków, Gt Construction, Express Concurent.
            </p>
<div className='gallery'>

</div>
        </Box>
    );
}
