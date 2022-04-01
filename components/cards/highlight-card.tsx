import { Avatar, Box, Card, CardContent, CardMedia, Chip, List, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import type { Theme } from '@mui/material';
import PropTypes from 'prop-types';

interface HighlightCardProps {
    imageSrc: string,
    title: string,
    date: string,
    type: string,
    description: string,
    children?: React.ReactNode,
}

const HighlightCard: FC<HighlightCardProps> = (props) => {
    const { title, imageSrc, date, type, description, children } = props;

    const largeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

    return (
        <>
            <Card>
                <Stack direction={largeScreen ? "row" : "column"} spacing={0}>
                    <CardMedia
                        component="span"
                        sx={{
                            minWidth: '40%',
                            minHeight: '300px',
                            backgroundColor: '#f5f5f5',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundImage: `url("/images/highlight-background.svg")`,
                            backgroundSize: 'contain',
                        }}
                    >
                        <Avatar
                            src={imageSrc}
                            sx={{
                                sm: {
                                    width: '75px',
                                    height: '75px',
                                },
                                md: {
                                    width: '150px',
                                    height: '150px',
                                },
                                width: '150px',
                                height: '150px',
                            }}
                        />
                    </CardMedia>
                    <CardContent>
                        <Typography
                            variant='h4'
                            color='textPrimary'
                        >
                            {title}
                        </Typography>
                        <Box
                            sx={{
                                mt: 1,
                                mb: 2,
                            }}
                        >
                            <Stack direction="row" spacing={2}>
                                {date && (<Chip
                                    label={date}
                                    color="secondary"
                                />
                                )}
                                <Chip
                                    label={type}
                                    color="secondary"
                                />
                            </Stack>
                        </Box>
                        <Paper
                            style={{ maxHeight: 200, overflow: 'auto' }}
                            elevation={0}
                        >
                            <List>
                                <Typography
                                    variant='subtitle1'
                                    color='textSecondary'
                                >
                                    {description}
                                </Typography>
                            </List>
                        </Paper>
                        <Box
                            sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {children}
                        </Box>
                    </CardContent>
                </Stack>
            </Card>
        </>
    );
};

export default HighlightCard;

HighlightCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'article', 'podcast', 'podcast-episode', 'virtual-event']).isRequired,
}