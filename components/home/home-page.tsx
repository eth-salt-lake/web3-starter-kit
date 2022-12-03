import { FC, useEffect } from 'react';
import { Box, Container, Divider, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import Image from 'next/image';
import { MaximizeOutlined, MobiledataOff, Person, Refresh, SentimentNeutral, Shower, Storage, TrainSharp } from '@mui/icons-material';
import { useDispatch, useSelector } from '../../store';
import { ExampleStore, incrementBy, resetCounter } from '../../store/example-store';

export const HomePage: FC = (props) => {
    const theme = useTheme();

    const exampleStorage: ExampleStore = useSelector((state) => state.example);
    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

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
                            Review Content
                        </Typography>
                        
                        
                    </Box>
                </Container>
            </Box>
            <Divider />
        </>
    );
};
