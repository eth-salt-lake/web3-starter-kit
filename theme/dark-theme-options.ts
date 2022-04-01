import { ThemeOptions } from '@mui/material';

// Colors

const neutral = {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
};

const background = {
    default: '#212121',
    paper: '#000',
};

const divider = 'rgba(255, 255, 255, 0.12)';

const primary = {
    main: '#fff',
    light: '#fff',
    dark: '#fff',
    contrastText: neutral[500]
};

const secondary = {
    main: '#616161',
    light: '#616161',
    dark: '#424242',
    contrastText: neutral[200]
};

const success = {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#FFFFFF'
};

const info = {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b',
    contrastText: '#FFFFFF'
};

const warning = {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100',
    contrastText: '#FFFFFF'
};

const error = {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#FFFFFF'
};

const text = {
    primary: '#BDBDBD',
    secondary: '#E0E0E0',
    disabled: 'rgba(55, 65, 81, 0.48)'
};


export const darkThemeOptions: ThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: '#FFFFFF'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        opacity: 1,
                        color: text.secondary
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: divider
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    borderColor: divider,
                    borderStyle: 'solid',
                    borderWidth: 1
                }
            }
        },
    },
    palette: {
        action: {
            active: neutral[400],
            hover: '#616161',
            selected: 'rgba(255, 255, 255, 0.08)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabled: 'rgba(255, 255, 255, 0.26)'
        },
        background,
        divider,
        error,
        info,
        mode: 'dark',
        neutral,
        primary,
        secondary,
        success,
        text,
        warning
    },
};
