import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Link as RouterLink,
} from 'react-router-dom';

export default function HomeCard({ c }) {
    return (
        <Card sx={{ height: 180, overflow: "auto", backgroundColor: c.bg }}>
            <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    {c.product}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {c.description}
                </Typography>
            </CardContent>
            <CardActions>
                {c?.url ? (
                    <RouterLink to={c.url} style={{textDecoration: 'none'}}>
                        <Button size="small" variant='contained' style={{ backgroundColor: "whitesmoke", color: c.bg }}>Go to page</Button>
                    </RouterLink>
                ) : (
                    null
                )}
            </CardActions>
        </Card>
    );
}