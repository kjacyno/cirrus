import * as React from 'react'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import { IconButton, MenuList, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavButtons } from '../NavButtons/NavButtons.jsx'

export const MobileNav = () => {
    const id = React.useId()
    const buttonId = `${id}-button`
    const menuId = `${id}-menu`
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Stack
            className='mobileNav'
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
        >
            <IconButton
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup='true'
                aria-expanded={open}
                onClick={handleClick}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    color: (theme) => theme.palette.secondary.main,
                    ml: 'auto',
                }}
            >
                {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // disableScrollLock={true}
                slotProps={{
                    list: {
                        'aria-labelledby': buttonId,
                        sx: { p: 0 },
                    },
                    paper: {
                        sx: {
                            backdropFilter: 'blur(15px)',
                            backgroundColor: 'rgba(18, 18, 18, 0.8)',
                            backgroundImage: 'none',
                            zIndex: 12,
                        },
                    },
                }}
            >
                <MenuList>
                    <NavButtons mobile={true} onClose={handleClose} />
                </MenuList>
            </Menu>
        </Stack>
    )
}
