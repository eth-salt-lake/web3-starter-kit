import { ThemeOptions } from '@mui/material';

export const baseThemeOptions: ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0
                }
            }
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '3px',
                },
                sizeSmall: {
                    padding: '6px 16px'
                },
                sizeMedium: {
                    padding: '8px 20px'
                },
                sizeLarge: {
                    padding: '11px 24px'
                },
                textSizeSmall: {
                    padding: '7px 12px'
                },
                textSizeMedium: {
                    padding: '9px 16px'
                },
                textSizeLarge: {
                    padding: '12px 16px'
                },
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#nprogress': {
                    pointerEvents: 'none'
                },
                '#nprogress .bar': {
                    backgroundColor: '#000000',
                    height: 3,
                    left: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 2000
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiPopover: {
            defaultProps: {
            }
        },
        MuiRadio: {
            defaultProps: {
            }
        },
        MuiSwitch: {
            defaultProps: {
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                }
            }
        }
    },
    shape: {
        borderRadius: 8
    },
    typography: {
        button: {
            fontWeight: 600
        },
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        body1: {
            fontSize: '1.5rem',
            fontWeight: 400,
            lineHeight: 1.875,
        },
        body2: {
            fontSize: '1.275rem',
            fontWeight: 400,
            lineHeight: 1.875
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.975
        },
        subtitle2: {
            fontSize: '0.975rem',
            fontWeight: 500,
            lineHeight: 1.875
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66
        },
        h1: {
            fontWeight: 700,
            fontSize: '2.875rem',
            lineHeight: 1.375,
        },
        h2: {
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.375,
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.875rem',
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.375
        }
    },
};
