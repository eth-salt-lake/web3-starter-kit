import type { FC } from 'react';
import { Box, Container, Divider, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { MaximizeOutlined, MobiledataOff, Person, Refresh, SentimentNeutral, Shower, Storage, TrainSharp } from '@mui/icons-material';

export const HomePage: FC = (props) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    pt: 6,
                    pb: 6,
                }}
                {...props}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <h2>Typography</h2>
                    <Typography
                        align="center"
                        variant="h1"
                    >
                        H1
                    </Typography>
                    <Typography
                        align="center"
                        variant="h2"
                    >
                        H2
                    </Typography>
                    <Typography
                        align="center"
                        variant="h3"
                    >
                        H3
                    </Typography>
                    <Typography
                        align="center"
                        variant="h4"
                    >
                        H4
                    </Typography>
                    <Typography
                        align="center"
                        variant="h5"
                    >
                        H5
                    </Typography>
                    <Typography
                        align="center"
                        variant="body1"
                    >
                        Body 1
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                        color="textSecondary"
                    >
                        Body 2
                    </Typography>
                    <Typography
                        align="center"
                        variant="subtitle1"
                    >
                        Subtitle 1
                    </Typography>
                    <Typography
                        align="center"
                        variant="subtitle2"
                    >
                        Subtitle 2
                    </Typography>
                    <Typography
                        align="center"
                        variant="caption"
                    >
                        Caption
                    </Typography>
                </Container>
            </Box>
            <Divider />
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    pt: 6,
                    pb: 6,
                }}
                {...props}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box>
                        <Typography
                            align="center"
                            sx={{ pb: 6 }}
                            variant="h2"
                        >
                            Some Material Icons
                        </Typography>
                        <Grid
                            container
                            flexDirection="row"
                        >
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <Person
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    User
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <TrainSharp
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Train
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <Storage
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Storage
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <Shower
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Shower
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <SentimentNeutral
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Seniment
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <Refresh
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Refresh
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <MobiledataOff
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Mobile Off
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    p: 6,
                                    width: '150px',
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'neutral.50',
                                    },
                                    textAlign: 'center',
                                }}
                            >
                                <MaximizeOutlined
                                    fontSize='medium'
                                    color='secondary'
                                />
                                <Typography
                                    color='secondary'
                                    variant='subtitle1'
                                >
                                    Maximize
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Link
                            href="https://fonts.google.com/icons"
                            passHref={true}
                        >
                            <Typography
                                color='secondary'
                                variant='subtitle1'
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }}
                            >
                                Material Icons Library
                            </Typography>
                        </Link>
                    </Box>
                </Container>
            </Box>
            <Divider />
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    pt: 6,
                    pb: 6,
                }}
                {...props}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Box>
                        <Typography
                            align="center"
                            sx={{ pb: 6 }}
                            variant="h2"
                        >
                            Buttons
                        </Typography>
                        <Grid
                            container
                            flexDirection="row"
                            spacing={12}
                        >
                            <Grid
                                item
                                sm={12}
                                md={4}
                                textAlign="center"
                            >
                                <Button
                                    size="large"
                                    variant="contained"
                                >
                                    Contained
                                </Button>
                            </Grid>
                            <Grid
                                item
                                sm={12}
                                md={4}
                                textAlign="center"
                            >
                                <Button
                                    size="large"
                                    variant="outlined"
                                >
                                    Outlined
                                </Button>
                            </Grid>
                            <Grid
                                item
                                sm={12}
                                md={4}
                                textAlign="center"
                            >
                                <Button
                                    size="large"
                                    variant="text"
                                >
                                    Text
                                </Button>
                            </Grid>
                            <Grid
                                item
                                sm={12}
                                md={4}
                                textAlign="center"
                            >
                                <Button
                                    size="large"
                                    variant="contained"
                                    disabled
                                >
                                    Disabled
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Divider />
        </>
    );
};
