import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Circle from "../Background circle/Circle";
import { toast } from "react-hot-toast";
import axios from "../../axios/axios.js"
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { otpSchema } from "../../validation/otpvalidation";
import { hideLoading } from "../../redux/alertsSlice";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const steps = ["Get OTP", "Validate OTP", "Sign in"];

const Otp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user);
  const userEmail = user?.email
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds,minutes]);

  const formik = useFormik({
    initialValues: {
        otpis:''
    },
    validationSchema:otpSchema,
     onSubmit:async (values,helpers)=>{
    try {
      const response = await axios.post("/postOtp",{
        values
      })
      dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message)
        dispatch(setUser(null))
        navigate('/success')

      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      helpers.setErrors({submit:error.message})
      toast.error("something went wrongg")
     }
   }
  })
  const resendOTP = async () => {
    setMinutes(0);
    setSeconds(30);

    try {
      // dispatch(showLoading());
      const response = await axios.post("/resendOtp", {
        userEmail
      });
      // dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Box
        sx={{
          height: { xs: 915, sm: "140vh", md: "auto", lg: "auto" },
          width: { xs: "100%", sm: "110vw", md: "100%" },
          display: { xs: "block", sm: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              bottom: { md: "13%", lg: 20 },
              left: { xs: "25%", sm: "50%" },
              transform: "translateX(-50%)",
            }}
          >
            <Circle />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              top: { md: "40%", lg: "40%" },
              left: { md: "60%" },
              transform: "translate(-50%, -50%)",
            }}
          >
            <Circle />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              top: { md: "13%", lg: "15%" },
              right: { md: "75%" },
            }}
          >
            <Circle />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              top: { md: "23%", lg: "20%" },
              left: { md: "25%" },
            }}
          >
            <Circle />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              top: { md: "50%" },
              left: { md: "20%" },
            }}
          >
            <Circle />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              top: { md: "18%", lg: "22%" },
              right: { md: "12%", lg: "12%" },
            }}
          >
            <Circle />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#00ff66",
              pt: { xs: 10, sm: 18 },
              pl: { xs: 3, sm: 6 },
            }}
            variant="h5"
          >
            Validate your OTP
          </Typography>
          <Typography
            sx={{
              color: "white",
              pt: { xs: 2, sm: 3 },
              pl: { xs: 3, sm: 6 },
              pr: { xs: 3, sm: 5 },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </Typography>
        </Box>
        <Box
          sx={{
            background: {
              xs: `linear-gradient(to bottom right,rgba(0, 255, 102, .3) , rgba(23, 23, 23, .2))`,
              sm: `linear-gradient(to bottom right,rgba(0, 255, 102, .3) , rgba(23, 23, 23, .2))`,
              md: "unset",
            },
            backgroundColor: "rgba(23, 23, 23, 0.5)",
            flexDirection: "column",
            maxWidth: 1450,
            width: { xs: "90%", sm: "85%", md: "95%", lg: "80%" },
            height: { xs: "40%", sm: "35%", md: "45%", lg: 400 },
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: 5, sm: 15, md: 15 },
            marginBottom: 7,
            mx: { xs: 2, sm: 7, md: 0 },
            py: 10,
            borderRadius: 5,
            zIndex: 1,
            backdropFilter: {
              xs: "blur(80px)",
              sm: "blur(80px)",
              md: "blur(40px)",
            },
            border: "1px solid #dbd9d9",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", sm: "block", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ marginTop: { xs: 0, sm: 0, md: 5 } }}>
              <Stepper
                sx={{ ml: { xs: 0, sm: 0, md: 0, lg: 0 } }}
                activeStep={1}
                alternativeLabel
              >
                {steps.map((label) => (
                  <Step>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <form onSubmit={formik.handleSubmit}>
              <TextField
                sx={{
                  backgroundColor: "#171717",
                  width: { xs: "90%", sm: 480, md: "75%", lg: "65%" },
                  mx: { xs: 2, sm: 10, md: 5, lg: 12 },
                  mt: { xs: 3, sm: 5 },
                }}
                name="otpis"
                  value={formik.values.otpis}
                  error={formik.errors.otpis}
                  helperText={formik.errors.otpis}
                  onChange={formik.handleChange}
                margin="normal"
                type={"text"}
                label="Enter OTP"
                variant="outlined"
              />
              <Button
                variant="contained"
                name = "submit"
                type="submit"
                sx={{
                  backgroundColor: "#00ff66",
                  width: { xs: "90%", sm: 480, md: "75%", lg: "65%" },
                  fontWeight: 600,
                  mx: { xs: 2, sm: 10, md: 5, lg: 5 },
                  ml: { xs: 2, sm: 10, md: 5, lg: 12 },
                  mt: { xs: 1, sm: 5 },
                  p: 2,
                  color: "#171717",
                  ":hover": { backgroundColor: "#171717", color: "#00ff66" },
                  marginTop: 3,
                  borderRadius: 10,
                }}
              >
                Validate
              </Button>
              </form>
              <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: "1.5rem 0",
                  }}
                >
                  {seconds > 0 || minutes > 0 ? (
                    <p style={{color:'white'}}>
                      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : (
                    <p style={{color:'white'}}>Didn't recieve code?</p>
                  )}
    
                  <Button
                    disabled={seconds > 0 || minutes > 0}
                    sx={{
                      color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#171717",
                      backgroundColor: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#00ff66"
                    }}
                    onClick={resendOTP}
                  
                  >
                    Resend OTP
                  </Button>
                </Box>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Box
                sx={{
                  backgroundColor: "#171717",
                  mr: { md: 5, lg: 10 },
                  height: "98%",
                  width: { md: 360, lg: 400 },
                  borderRadius: 6,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <Typography
                  sx={{ fontWeight: 600, color: "#00ff66", pt: 5, pl: 2 }}
                  variant="h5"
                >
                  Validate your OTP
                </Typography>
                <Typography sx={{ color: "white", pt: 5, pl: 2, pr: 3 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Otp;
