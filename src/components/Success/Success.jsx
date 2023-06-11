import { Box, Button, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Circle from '../Background circle/Circle'
import { useNavigate } from 'react-router-dom';
const steps = [
  'Get OTP',
  'Validate OTP',
  'Sign in',
]; 

const Success = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/signin')
    }, 2000)
  }, [])
  return (
    <>
    <Box
        sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "black",
        }}
      >
        
        <Box>
        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            bottom: {md:'7%',lg:20},
            left: {xs:'25%',sm:'50%'},
            transform: 'translateX(-50%)'
          }}
        >
          <Circle />
        </Box>

        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            top: {md:'40%',lg:'40%'},
            left: {md:'60%'},
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Circle />
        </Box>

        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            top: {md:"13%",lg:'15%'},
            right: {md:"75%"},
          }}
        >
          <Circle />
        </Box>
        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            top: {md:"23%",lg:"20%"},
            left: {md:"25%"},
          }}
        >
          <Circle />
        </Box>
        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            top: {md:"50%"},
            left: {md:"20%"},
          }}
        >
          <Circle />
        </Box>
        <Box
          sx={{
            display:{xs:'none',sm:'none',md:'block'},
            position: 'absolute',
            top: {md:'20%',lg:'22%'},
            right: {md:'10%',lg:'12%'},
          }}
        >
          <Circle />
        </Box>
        </Box>
        <Box
          sx={{
            background: {
                xs: `linear-gradient(to bottom right,rgba(0, 255, 102, .3) , rgba(23, 23, 23, .2))`,
                sm: `linear-gradient(to bottom right,rgba(0, 255, 102, .3) , rgba(23, 23, 23, .2))`,
                md: 'unset'
              },
              backgroundColor: "rgba(23, 23, 23, 0.5)",
              flexDirection: "column",
              maxWidth: 1450,
              width: { xs: "90%", sm: "65%", md: "95%", lg: '80%' },
              height: { xs: "20%", sm: '25%', md: "45%", lg: 400 },
              alignItems: "center",
              justifyContent: "center",
              marginTop: { xs: 0, sm: 0, md: 15 },
              marginBottom: 7,
              mx: { xs: 0, sm: 17, md: 0 },
              py: 10,
              borderRadius: 5,
              zIndex: 1,
              backdropFilter: { xs: "blur(80px)", sm: "blur(80px)", md: "blur(40px)" },
              border: "1px solid #dbd9d9"
          }}
        >
            <Box
                sx={{
                  backgroundColor: "#171717",
                //   mr: { md: 5, lg: 2 },
                //   height: "10%",
                //   width: { md: 360, lg: '15%' },
                  borderRadius: 2,
                  mx:{xs:'30%',sm:'35%',md:'35%',lg:'40%'},
                  my:{xs:'15%',sm:'10%',md:'10%',lg:'15%'},
                  display: { xs: "block", sm: "block", md: "block" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, color: "#00ff66",py:{xs:2,sm:2,md:2,lg:3} }}
                  variant="h5"
                  textAlign={'center'}
                >
                  Successful
                </Typography>

              </Box>
        </Box>
      </Box>
    </>
  )
}

export default Success
