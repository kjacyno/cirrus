import { Typography } from '@mui/material'
import { handleScroll } from '../../utils/handleScroll.js'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { navButtonsValues } from '/src/components/utils/navButtonsValues.js'

export const NavButtons = ({ mobile, onClose }) => {
    return navButtonsValues.map(({ label, scrollValue }, index) =>
        mobile ? (
            <MenuItem
                key={index}
                onClick={onClose}
            >
                <Button
                    variant='text'
                    sx={{
                        justifyContent: 'left',
                        p: 0,
                    }}
                    onClick={() => handleScroll(scrollValue)}
                >
                    <Typography
                        color={'textWhite'}
                        align={'left'}
                        sx={{
                            fontSize: (theme) =>
                                theme.typography['customSizes'],
                            textShadow: `2px 2px 2px #950202,
                                     -1px -1px 0 #950202,
                                     1px -1px 0 #950202,
                                     -1px 1px 0 #950202,
                                     1px 1px 0 #950202`,
                        }}
                    >
                        {label}
                    </Typography>
                </Button>
            </MenuItem>
        ) : (
            <Button
                key={index}
                variant='text'
                sx={{
                    justifyContent: 'left',
                    p: 0,
                }}
                onClick={() => handleScroll(scrollValue)}
            >
                <Typography
                    color={'textWhite'}
                    align={'left'}
                    sx={{
                        fontSize: (theme) => theme.typography['customSizes'],
                        textShadow: `2px 2px 2px #950202,
                                     -1px -1px 0 #950202,
                                     1px -1px 0 #950202,
                                     -1px 1px 0 #950202,
                                     1px 1px 0 #950202`,
                    }}
                >
                    {label}
                </Typography>
            </Button>
        )
    )
}
