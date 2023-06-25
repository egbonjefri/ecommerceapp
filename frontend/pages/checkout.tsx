import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import styles from '../styles/checkout.module.css'
import { cartState } from '../state/atoms';
import { useRecoilState } from 'recoil';
const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}


export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [cart, setCart] = useRecoilState(cartState);

  const handleNext = () => {
    if(activeStep === 2){
        setCart([])
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (

      <Container component="main" maxWidth="sm" sx={{ mt:15, mb: 4 }}>
      <div className={styles.headerDiv}>
        <Typography sx={{fontSize:'40px', color:'#151875'}} variant="h4" component="h1" align="center">
        {activeStep === 3 ? 'Order Complete' : 'Complete Your Order'}

        </Typography>
        </div>
        <div className={styles.paper}>
        <Paper  elevation={12} variant="outlined" sx={{  my: { xs: 3, md: 12 }, p: { xs: 2, md: 3 } }}>

          <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5, }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>

        <div className={styles.container}>
            <TaskAltIcon sx={{color:'#151875',fontSize:'100px'}} />
              <Typography sx={{fontWeight: 'bolder', color:'#151875'}} variant="h5" gutterBottom>
                Thank you for your order!
              </Typography>
              <Typography align='center' sx={{opacity:'0.5'}} variant="subtitle1">
              Your order is being processed and will be completed within 3-6 hours. 
              You will receive an email confirmation when your order is completed.
              </Typography>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: '#151875' }}
            >
             <Link className={styles.navlist} href="/">Continue Shopping</Link> 
            </Button>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        </div>
      </Container>
  );
}