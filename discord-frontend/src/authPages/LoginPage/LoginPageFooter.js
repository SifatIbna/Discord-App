import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'

import RedirectInfo from '../../shared/components/RedirectInfo'
import {useHistory} from "react-router-dom";

const LoginPageFooter = ({handleLogin,isFormValid}) => {

    const history = useHistory(); 
    const handlePushToRegisterPage = ()=>{
        history.push('/register')
    };

  return (
    <>
        <CustomPrimaryButton
            label="Log In"
            additionalStyles={{marginTop: '30px'}}
            disabled={!isFormValid}
            onClick={handleLogin}
        />
        <RedirectInfo 
            text="Need An Account?"
            redirectText="Create an account"
            additionaStyles={{marginTop:'5px'}}
            redirectHandler={handlePushToRegisterPage}
        />
    </>
  )
}

export default LoginPageFooter