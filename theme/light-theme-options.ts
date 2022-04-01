import { ThemeOptions } from '@mui/material';

// Colors

const neutral = {
    50: '#FFEBEE',
    100: '#FFCDD2',
    200: '#EF9A9A',
    300: '#E57373',
    400: '#EF5350',
    500: '#F44336',
    600: '#E53935',
    700: '#D32F2F',
    800: '#C62828',
    900: '#B71C1C',
};

const background = {
    default: '#f9fafc',
    paper: '#FFFFFF',
    black: '#000000',
};

const divider = '#E6E8F0';

const primary = {
    main: '#FF8A80',
    light: '#FFCDD2',
    dark: '#EF5350',
    contrastText: '#FFFFFF'
};

const secondary = {
    main: '#FF80AB',
    light: '#F8BBD0',
    dark: '#EC407A',
    contrastText: '#FFFFFF'
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
    primary: '#757575',
    secondary: '#424242',
    disabled: '#EEEEEE'
};

export const lightThemeOptions: ThemeOptions = {
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    backgroundColor: neutral[500],
                    color: '#FFFFFF'
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
        MuiPopover: {
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
            active: neutral[500],
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(0, 0, 0, 0.17)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background,
        divider,
        error,
        info,
        mode: 'light',
        neutral,
        primary,
        secondary,
        success,
        text,
        warning
    },
};
