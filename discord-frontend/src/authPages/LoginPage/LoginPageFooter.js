import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'

const LoginPageFooter = ({handleLogin,isFormValid}) => {
  return (
    <>
        <CustomPrimaryButton
            label="Log In"
            additionalStyles={{marginTop: '30px'}}
            disabled={!isFormValid}
            onClick={handleLogin}
        />
    </>
  )
}

export default LoginPageFooter