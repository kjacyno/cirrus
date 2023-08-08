import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from '@mui/icons-material/ContactMail';
export default function Contact() {
  return (
    <Box
      sx={{
        width: {
            xs: '100%', // theme.breakpoints.up('xs')
            sm: '100%', // theme.breakpoints.up('sm')
            md: '50%', // theme.breakpoints.up('md')
            lg: '30%', // theme.breakpoints.up('lg')
            xl: '30%', // theme.breakpoints.up('xl')
          },
        margin: 'auto',

      }}
    >
      <div className="text-flex">
        <PhoneIcon /> <p> 000 000 000</p>{" "}
      </div>
      <div className="text-flex">
        <ContactMailIcon /> <p>cirrus@wp.pl</p>{" "}
      </div>
    </Box>
  );
}
