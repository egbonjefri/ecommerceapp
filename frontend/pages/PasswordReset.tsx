import { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleResetPassword = async () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex'
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/reset-password', { email });
      setShowSuccessMessage(true);
      loading.style.display = 'none'
    } catch (error) {
        const errorMsg = document.getElementById('component-helper-text');
        errorMsg.innerHTML = 'Password reset Failed: Username incorrect.';
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <StyledContainer maxWidth="sm">
      <Box mb={3}>
        <Typography variant="h4">Reset Your Password</Typography>
        <Typography ml={1} variant='caption' gutterBottom>Enter your email and a password reset link will be sent</Typography>
      </Box>
      <Box>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleResetPassword}>
          Reset Password
        </Button>
      </Box>
      <Box id='loading' mt={5} sx={{ display: 'none', justifyContent:'center', alignItems:'flex-start' }}>
      <CircularProgress />
    </Box>
    <FormHelperText sx={{color:'red',display:'none',justifyContent:'center', alignItems:'center'}} id="component-helper-text">
          Some important helper text
        </FormHelperText>
      {showSuccessMessage && (
        <Box sx={{width:'50rem'}} ml={25} mt={3}>
          <Typography sx={{color:'green'}} variant="body1">Email sent successfully! Please check your spam folder if you have trouble finding it.</Typography>
        </Box>
      )}
    </StyledContainer>
  );
};

export default PasswordReset;
