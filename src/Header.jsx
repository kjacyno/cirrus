import Box from '@mui/material/Box';
import CirrusLogo from './assets/cirrus-logo.png'
export default function Header (){
    return (
        <Box sx={{height: 'auto', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
            backgroundImage:'url("/src/assets/cirrus-icon.png")',  backgroundRepeat: 'no-repeat', backgroundSize: 'contain'

        }} >

        <div className="header-logo">
        <img src={CirrusLogo} alt='cirrus-logo'/>      
          </div>
        </Box>
    )
}