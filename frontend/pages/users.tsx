import type { NextPage } from "next";
import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Users: NextPage = () => {

    const router = useRouter();
    const email = router.query[''];
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [password, setPassword] = useState('');

    const handleResetPassword = async () => {
      try {
        const response = await axios.put(`http:127.0.0.1:8000/users/${email}/update-password`, { password });
        console.log(response.data); 
        setShowSuccessMessage(true);
      } catch (error) {
        console.error(error); 
      }
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    return (
      <StyledContainer maxWidth="sm">
        <Box mb={3}>
          <Typography variant="h4">Password Reset</Typography>
        </Box>
        <Box>
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleResetPassword}>
            Reset Password
          </Button>
        </Box>
        <FormHelperText sx={{color:'red',display:'none',justifyContent:'center', alignItems:'center'}} id="component-helper-text">
          Some important helper text
        </FormHelperText>
      {showSuccessMessage && (
        <Box sx={{width:'50rem'}} ml={25} mt={3}>
          <Typography sx={{color:'green'}} variant="body1">Password reset successful</Typography>
        </Box>
      )}
      </StyledContainer>
    );
  };
  
export default Users;