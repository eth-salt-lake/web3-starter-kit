import { alpha, Box, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';

const footerSections = [
    {
        title: 'Use dApp',
        links: [
            {
                title: 'Browse Components',
                href: '/browse'
            },
            {
                title: 'Documentation',
                href: '/docs/welcome'
            }
        ]
    },
    {
        title: 'Community',
        links: [
            {
                title: 'Discord',
                href: 'https://discord.com/invite/hCqMm8m34p'
            },
            {
                title: 'Telegram',
                href: 'https://t.me/abc'
            },
            {
                title: 'Youtube',
                href: 'https://www.youtube.com/channel/abc'
            }
        ],
    },
    {
        title: 'Developers',
        links: [
            {
                title: 'Get started',
                href: '/docs/welcome'
            },
            {
                title: 'Documentation',
                href: '/docs/welcome'
            },
            {
                title: 'Tutorials',
                href: '/tutorials'
            },
            {
                title: 'Learn by doing',
                href: '/learn-by-doing'
            },
            {
                title: 'Set up local environment',
                href: '/setup-local-environment'
            }
        ]
    },
    {
        title: 'About dApp',
        links: [
            {
                title: 'About',
                href: '/about'
            },
            {
                title: 'Blog',
                href: '/blog'
            },
            {
                title: 'GitHub',
                href: 'https://github.com/eth-salt-lake',
            }
        ]
    },
];

export const Footer: FC = (props) => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'background.black',
                    borderTopColor: 'divider',
                    borderTopStyle: 'solid',
                    borderTopWidth: 1,
                    pb: 6,
                    pt: {
                        md: 15,
                        xs: 6
                    }
                }}
                {...props}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item
                            xs={6}
                            md={6}
                        >
                            <Image
                                src="/images/slcdao-logo.png"
                                width={41}
                                height={41}
                                alt="SLCDAO logo"
                            />
                        </Grid>
                        <Grid item
                            xs={6}
                            md={6}
                            flexDirection="row"
                        >
                            <Grid
                                container
                                spacing={2}
                                justifyContent="flex-end"
                            >
                                <Grid
                                    item
                                    sm={1}
                                    md={1}
                                >
                                    <IconButton
                                        sx={{
                                            color: 'white',
                                        }}
                                    >
                                        <GitHubIcon
                                            fontSize="medium"
                                        />
                                    </IconButton>
                                </Grid>
                                <Grid
                                    item
                                    sm={1}
                                    md={1}
                                >
                                    <IconButton
                                        sx={{
                                            color: 'white',
                                        }}
                                    >
                                        <TwitterIcon
                                            fontSize="medium"
                                        />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        {footerSections.map((section, index) => (
                            <Grid
                                item
                                key={section.title}
                                md={3}
                                lg={3}
                                sm={3}
                                xs={12}
                            >
                                <Typography
                                    color="primary.contrastText"
                                    variant="overline"
                                >
                                    {section.title}
                                </Typography>
                                <List disablePadding>
                                    {section.links.map((link) => (
                                        <ListItem
                                            disableGutters
                                            key={link.title}
                                            sx={{
                                                pb: 0,
                                                pt: 0,
                                            }}
                                        >
                                            <ListItemText
                                                sx={{
                                                    m: 0,
                                                    textAlign: 'left',
                                                }}
                                                primary={(
                                                    <Link
                                                        href={link.href}
                                                        color="primary.contrastText"
                                                        variant="subtitle2"
                                                        sx={{
                                                            fontSize: '0.975rem',
                                                        }}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                )}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </Box >
        </>
    );
};