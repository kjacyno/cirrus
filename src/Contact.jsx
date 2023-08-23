import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from '@mui/icons-material/ContactMail';
export default function Contact() {
  return (
    <Box
      sx={{
        width: {
            xs: '100%',
            sm: '100%',
            md: '50%',
            lg: '30%',
            xl: '30%',
          },
        margin: 'auto',
      }}
    >
      <div className="text-flex">
          <PhoneIcon /> <p><a href="tel:+48887842913">+48 887 842 913</a></p>
      </div>
      <div className="text-flex">
          <ContactMailIcon /> <p><a href="mailto:cirrus@wp.pl">cirrus@wp.pl</a></p>
      </div>
    </Box>
  );
}