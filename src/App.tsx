import { useState } from 'react'
import './App.css'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

function App() {
  const [imageUrl] = useState<string>('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1200&auto=format&fit=crop')

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Image Generator
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container sx={{ flex: 1, minHeight: 0 }}>
        <Grid size={{ xs: 12, md: 7 }} sx={{ borderRight: { md: '1px solid', xs: 'none' }, borderColor: 'divider' }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              backgroundColor: 'background.default',
            }}
          >
            <Box
              component="img"
              src={imageUrl}
              alt="Preview"
              sx={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 1,
                boxShadow: 1,
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h5" gutterBottom>
              Controls
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Use the button below to generate a new image.
            </Typography>
            <Box sx={{ mt: 'auto' }}>
              <Button variant="contained" color="primary" size="large" fullWidth>
                Generate
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
