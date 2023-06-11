import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Circle from "../Background circle/Circle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('usertoken');
    dispatch(setUser(null))
    navigate("/signin")
  };
  const {user} = useSelector((state)=>state.user)
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            position: "absolute",
            top: "5%",
            left: 0,
            cursor:'pointer'
          }}
          onClick={handleLogout}
        >
          <Box
            sx={{
              height: "65px",
              width: "65px",
              backgroundColor: "#00FF66",
              borderRadius: "50%",
              ml: 2,
            }}
          >
            <ArrowBackIosIcon sx={{ ml: 3, mt: 3 }} />
          </Box>
          <Typography sx={{ color: "white", ml: 2, mt: 3, fontWeight: 600 }}>
            Back
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              position: "absolute",
              bottom: { md: "7%", lg: 20 },
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
              top: { md: "20%", lg: "22%" },
              right: { md: "10%", lg: "12%" },
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
              md: "unset",
            },
            backgroundColor: "rgba(23, 23, 23, 0.5)",
            flexDirection: "column",
            maxWidth: 1450,
            width: { xs: "90%", sm: "65%", md: "95%", lg: "80%" },
            height: { xs: "40%", sm: "25%", md: "45%", lg: 400 },
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: 30, sm: 0, md: 15 },
            marginBottom: 7,
            mx: { xs: 0, sm: 17, md: 0 },
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
              display: { xs: "none", md: "flex" },
              mt: "-1000",
              cursor:'pointer'
            }}
            onClick={handleLogout}
          >
            <Box
              sx={{
                height: "65px",
                width: "65px",
                backgroundColor: "#00FF66",
                borderRadius: "50%",
                ml: 2,
              }}
            >
              <ArrowBackIosIcon sx={{ ml: 3, mt: 3 }} />
            </Box>
            <Typography sx={{ color: "white", ml: 2, mt: 3, fontWeight: 600 }}>
              Back
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#171717",
              mr: { md: 5, lg: 2 },
              height: { sm: 200, md: "75%", lg: "50%" },
              width: { sm: "75%", md: 360, lg: "40%" },
              borderRadius: 2,
              mx: { xs: "3%", sm: "12%", md: "35%", lg: "30%" },
              my: { xs: "1%", sm: 0, md: "2%", lg: "4%" },
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <Typography
              sx={{ fontWeight: 600, color: "#00ff66", mb: 2, pt: 2, ml: 3,fontSize:16 }}
              variant="h6"
            >
              Name
              <Typography
                sx={{ ml: 2, color: "white", fontWeight: 200 }}
                variant="span"
                component="span"
              >
                {user?.name}
              </Typography>
            </Typography>
            <Typography
              sx={{ fontWeight: 600, color: "#00ff66", mb: 2, pt: 2, ml: 3,fontSize:16}}
              variant="h6"
            >
              Email
              <Typography
                sx={{ ml: 2, color: "white", fontWeight: 200,"@media (max-width: 363px)": {
                  fontSize: 11,
                }, }}
                variant="span"
                component="span"
              >
                {user?.email}
              </Typography>
            </Typography>
            <Typography
              sx={{ fontWeight: 600, color: "#00ff66", pb: 2, pt: 2, ml: 3,fontSize:16 }}
              variant="h6"
            >
              Email status
              <Typography
                sx={{ ml: 2, color: "white", fontWeight: 200 }}
                variant="span"
                component="span"
              >
                {user?.status}
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
