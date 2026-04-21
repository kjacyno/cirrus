import Box from "@mui/material/Box";
import Grinea from "/src/assets/logo_GRINEA_zloto_granat.png";
import Erbet from "/src/assets/erbet.png";
import Ersbet from "/src/assets/ersbet.png";
import Grimbud from "/src/assets/logo-grimbud-final.png";
import Bryksy from "/src/assets/bryksy.png";
import GtC from "/src/assets/gt-c.png";
import ExprK from "/src/assets/expresKonk.png";

export default function About() {
    return (
        <Box sx={{
            width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
        }}>
            <p className="text-info">
                Firma Cirrus działa od 1998 roku.<br/>
                Specjalizuje się w budowie i remontach budynków komercyjnych.<br/>
                Prowadzimy działalność ogólnobudowlaną ze specjalizacją elewacje i prace wykończeniowe.<br/>
                Współpracujemy z firmami:<br/>
                Grinea Rzeszów, Erbet, Ersbet, Grimbud, Bryksy Kraków, Gt Construction, Express Concurent.
            </p>
            <div className='partners'>
                <a href="https://grinea.eu/pl/" target="_blank" rel="noreferrer"><img src={Grinea} alt="Grinea logo"/></a>
                <a href="https://www.erbet.pl/" target="_blank" rel="noreferrer"><img src={Erbet} alt="Erbet logo"/></a>
                <a href="https://ersbet.pl/" target="_blank" rel="noreferrer"><img src={Ersbet} alt="Ersbet logo"/></a>
                <a href="https://grimbud.pl/" target="_blank" rel="noreferrer"><img src={Grimbud} alt="Grimbud logo"/></a>
                <a href="https://bryksy.pl/" target="_blank" rel="noreferrer"><img src={Bryksy} alt="Bryksy logo"/></a>
                <a href="https://gt-c.pl/" target="_blank" rel="noreferrer"><img src={GtC} alt="GT Construction logo"/></a>
                <a href="https://expres-konkurent.pl/" target="_blank" rel="noreferrer"><img src={ExprK} alt="Expres Konkurent logo"/></a>
            </div>
        </Box>
    );
}