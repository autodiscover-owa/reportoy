!function(e){function o(i){if(n[i])return n[i].exports;var t=n[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var n={};return o.m=e,o.c=n,o.p="",o(0)}([function(e,o,n){n(2);var i=n(1),t=n(5),r=n(6),a=r.StringsVariantId,_=r.AllowedIdentitiesType;i.registerSource("str",function(e,o){if(e.WF_STR_SignupLink_AriaLabel_Text="Create a Microsoft account",e.CT_STR_CookieBanner_Link_AriaLabel="Learn more about Microsoft's Cookie Policy",e.WF_STR_HeaderDefault_Title=o.iLoginStringsVariantId===a.CombinedSigninSignupV2WelcomeTitle?"Welcome":"Sign in",e.STR_Footer_IcpLicense_Text="沪ICP备13015306号-10",o.oAppCobranding&&o.oAppCobranding.friendlyAppName){var n=o.fBreakBrandingSigninString?"to continue to {0}":"Continue to {0}";e.WF_STR_App_Title=t.format(n,o.oAppCobranding.friendlyAppName)}switch(o.oAppCobranding&&o.oAppCobranding.signinDescription&&(e.WF_STR_Default_Desc=o.oAppCobranding.signinDescription),o.iLoginStringsVariantId){case a.RemoteConnectLogin:e.WF_STR_Default_Desc=o.sRemoteClientIp?'You will be signed in to <span id="appName">{0}</span> on the remote device or service with IP address: <span id="ipAddress">{1}</span>. Select Back if this isn’t the application and remote device or service you are trying to sign in to.':'You will be signed in to <span id="appName">{0}</span> on a remote device or service. Select Back if you aren’t trying to sign in to this application on a remote device or service.';break;case a.CombinedSigninSignupV2:e.WF_STR_Default_Desc="We'll check to see if you already have a Microsoft account.";break;case a.CombinedSigninSignupV2WelcomeTitle:e.WF_STR_Default_Desc="Let's see if you already have an account with us."}e.WF_STR_GenericError_Title="Something went wrong and we can't sign you in right now. Please try again later.",e.CT_PWD_STR_Email_Example=o.iAllowedIdentities===_.Both?"Email address, phone number or Skype":o.fAllowPhoneSignIn?"Email address or phone number":"someone@example.com ",e.CT_PWD_STR_Username_AriaLabel=o.iAllowedIdentities===_.Both?"Enter your email address, phone number or Skype.":o.fAllowPhoneSignIn?"Enter your email or phone":"Enter your email address",e.CT_PWD_STR_PwdTB_Label="Password",e.CT_PWD_STR_PwdTB_AriaLabel="Enter the password for {0}",e.CT_WPIL_STR_Android_UseDifferentAddress="Use another account",e.CT_PWD_STR_ForgotPwdLink_Text="Forgotten my password",e.CT_PWD_STR_KeepMeSignedInCB_Text="Keep me signed in",e.CT_PWD_STR_SignIn_Button="Sign in",e.CT_PWD_STR_SignIn_Button_Next="Next",e.CT_PWD_STR_SwitchToOTC_Link="Sign in with a single-use code",e.CT_PWD_STR_SwitchToRemoteNGC_Link="Use an app instead",e.CT_PWD_STR_RemoteLoginLink="Sign in from another device",e.CT_PWD_STR_SignUp_MenuLink="Create an account",e.CT_PWD_STR_Error_InvalidUsername=o.iAllowedIdentities===_.Both?"Enter a valid email address, phone number or Skype name.":o.fAllowPhoneSignIn?"Enter a valid email address or phone number.":"Enter a valid email address.",e.CT_PWD_STR_Error_InvalidPassword="The password is incorrect. Please try again.",e.CT_PWD_STR_Error_GetCredentialTypeError="There was an issue with looking up your account. Tap Next to try again.",e.CT_PWD_STR_Error_GetOneTimeCodeError="There was an issue with creating a code for you to use. Tap Next to try again.",e.CT_PWD_STR_Error_FlowTokenExpired="Sorry, your sign-in timed out. Please sign in again.",e.CT_PWD_STR_Error_SelectedAccountInvalid='We couldn\'t sign you in to this application with your user account. Your account may not work with this application, or we may not be able to sign you in automatically at this time. Try selecting "Use another account", then sign in again.',e.CT_PWD_STR_Error_IdpLoopDetected="Unable to sign in as the credentials from the identity provider are not fresh enough. Please sign out and sign in again with your identity provider.",e.CT_PWD_STR_Error_UserDisabled="Your account has been locked. Contact your support person to unlock it, then try again.",e.CT_PWD_STR_Error_BlockedClientId="This application has been blocked. The application owner needs to contact Microsoft.",e.CT_PWD_STR_Error_BlockedAdalVersion="The application needs to be updated before the user can sign in.",e.CT_PWD_STR_Error_MissingCustomSigningKey="This application needs be configured with an application-specific signing key. Either it's not configured with one, or its key has expired or is not yet valid. Contact the application's admin.",e.CT_PWD_STR_Error_IdsLocked="Your account has been temporarily locked to prevent unauthorised use. Try again later, and if you still have trouble, contact your admin.",e.CT_PWD_STR_Error_LastPasswordUsed="It looks like you've entered your old password. Try again with your new one.",e.CT_PWD_STR_Error_MissingPassword="Please enter your password.",e.CT_PWD_STR_Error_InvalidPhoneNumber="That phone number doesn’t look right. Please check the country code and phone number.",e.CT_PWD_STR_Error_InvalidPhoneFormatting="The phone number you entered isn’t valid. Your phone number can contain numbers, spaces and these special characters: ( ) [ ] . - # * /",e.CT_PWD_STR_PersistentCookies_Warning="Your account will be remembered on this device.",e.CT_PWD_STR_EnterPassword_Title="Enter password",e.CT_PWD_STR_RemoteConnect_PasswordPage_Desc="You will be signed in to {0}. Click Back if this isn't the application you were trying to use on your device.",o.iAllowedIdentities===_.Both?o.fCBShowSignUp?e.CT_PWD_STR_Error_UsernameNotExist='We couldn\'t find an account with that username. Try another, or <a id="idA_PWD_SignUp" href="#">get a new Microsoft account</a>.':e.CT_PWD_STR_Error_UsernameNotExist="We couldn't find an account with that username.":e.CT_PWD_STR_Error_UsernameNotExist="{0} isn't in our system. Make sure that you typed it correctly.",e.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain="This username may be incorrect. Make sure that you typed it correctly. Otherwise, contact your admin.",e.CT_PWD_STR_Error_UsernameNotExist_VerifiedDomain_MsaFailed='This username may be incorrect. Make sure that you typed it correctly. Otherwise, contact your admin. If this is a personal account, <a id="otherIdpLogin" href="#">sign in here</a>.',e.CT_PWD_STR_Error_UsernameNotExist_ConsumerEmail="You can't sign in here with a personal account. Use your work or school account instead.",e.CT_PWD_STR_Error_UnknownDomain_MsaFailed='{0} isn\'t in our system. Make sure that you typed it correctly. If this is a personal account, <a id="otherIdpLogin" href="#">sign in here</a>.',e.CT_FED_STR_ChangeUserLink_Text="Sign in with another account",e.WF_STR_ForceSI_Info="Because you're accessing sensitive info, you need to verify your password.",e.WF_STR_ASLP_Info="Your organisational policy requires you to sign in again after a certain period of time.",e.CT_HRD_STR_Splitter_Heading="It looks as if this email is used with more than one account from Microsoft. Which one do you want to use?",e.CT_HRD_STR_Splitter_Error_Heading="We're having trouble with locating your account. Which type of account do you want to use?",e.CT_HRD_STR_Splitter_AadTile_Title="Work or school account",e.CT_HRD_STR_Splitter_AadTile_Hint="Created by your IT department",e.CT_HRD_STR_Splitter_MsaTile_Title="Personal account",e.CT_HRD_STR_Splitter_MsaTile_Hint="Created by you",e.CT_HRD_STR_Redirect_Title="Taking you to your organisation's sign-in page",e.CT_HRD_STR_Redirect_Cancel="Cancel",e.CT_OTC_STR_SignIn_ReSendInfo="It may take a few minutes for the code to arrive. Are you sure you want to request a new code?",e.CT_OTC_STR_YesButton_Text="Yes",e.CT_OTC_STR_NoButton_Text="No",e.CT_OTC_STR_EnterCode_Title="Enter code",e.CT_OTC_STR_EnterCode_Desc="We just sent a code to {0}",e.CT_OTC_STR_EnterCode_Text="Code",e.CT_OTC_STR_EnterCode_AriaLabel="Enter the code that you received",e.CT_OTC_STR_Error_EmptyCode="To continue, enter the code we just sent you.",e.CT_OTC_STR_Error_CodeIncorrect="That code didn't work. Check the code and try again.",e.CT_OTC_STR_Error_ServerError="This service isn't available right now. Please try again later.",e.CT_OTC_STR_Error_OTCInvalid="Please enter the {0}-digit code. The code only contains numbers.",e.CT_OTC_STR_Error_SendCodeError="We couldn't send the code. Please try again.",e.CT_OTC_STR_SMSTextbox_Label2="Phone number",e.CT_OTC_STR_SMSTextbox_AriaLabel="Enter your phone number",e.CT_RNGC_STR_TimeOut_Title="Request timeout",e.CT_RNGC_STR_TimeOut_PageDescription="We sent a sign-in request to your Microsoft Authenticator app for {0}, but we didn't get your approval.",e.CT_RNGC_STR_Denied_Title="Request denied",e.CT_RNGC_STR_Denied_PageDescription="We sent a sign-in request to your Microsoft Authenticator app for {0}, but you denied it.",e.CT_RNGC_STR_Polling_Title="Approve sign in",e.CT_RNGC_STR_Polling_PageDescription="Approve the request we sent to your phone to sign in.",e.CT_RNGC_STR_Polling_PageDescription_UnfamiliarDevice="Tap the number you see below in your Microsoft Authenticator app to sign in.",e.CT_RNGC_STR_ResendNotification_Text="Tap Next to send another request.",e.CT_RNGC_STR_SwitchToPassword_Link="Use your password instead",e.CT_RNGC_STR_SwitchToFederated_Link="Use your password instead",e.CT_RNGC_STR_Error_Title_SendFail="Request has not been sent",e.CT_RNGC_STR_Error_SendFail="We can't send a notification to your phone at this time. Please try again.",e.CT_RNGC_STR_Request="We can't send a notification to your phone at this time. Please try again.",e.CT_RNGC_STR_SwitchToQrCode_Link="Scan a QR code instead",e.CT_RNGC_STR_QR_PageDescription="Scan the QR code to sign in with {0}.",e.CT_RNGC_STR_SwitchToPolling_Link="Use your app instead",e.CT_RNGC_STR_QR_Timeout_Title="Request timeout",e.CT_RNGC_STR_QR_Timeout_PageDescription="We didn't hear from you in time. Tap Next if you want to try again.",e.CT_RNGC_STR_LS_PageDescription="Please follow the instructions on your phone to sign in with {0}.",e.CT_RNGC_STR_LS_PageDescription_UnfamiliarDevice="To sign in with {0}, please follow the instructions on your phone and enter the number that you see below.",e.CT_RNGC_STR_LS_Timeout_Title="Request timeout",e.CT_RNGC_STR_LS_Timeout_PageDescription="We didn't hear from you in time. Tap Next if you want to try again.",e.CT_STR_CredentialPicker_Title="Choose a way to sign in",e.CT_STR_CredentialPicker_Title_NoUser="Sign-in options",e.CT_STR_CredentialPicker_Description="How would you like to verify your identity?",e.CT_STR_CredentialPicker_PersonalAccountsOnly="Personal accounts only",e.CT_STR_CredentialPicker_Option_AuthenticatorApp="Approve a request on my Microsoft Authenticator app",e.CT_STR_CredentialPicker_Option_Password="Use my password",e.CT_STR_CredentialPicker_Option_Federated="Use my password",e.CT_STR_CredentialPicker_Option_Fido="Sign in with Windows Hello or a security key",e.CT_STR_CredentialPicker_Option_FidoCrossPlatform="Sign in with a security key",e.CT_STR_CredentialPicker_Option_Fido_KnownUser="Use Windows Hello or a security key",e.CT_STR_CredentialPicker_Option_FidoCrossPlatform_KnownUser="Use a security key",e.CT_STR_CredentialPicker_Option_Help_Fido="Choose this only if you have enabled Windows Hello or a security key for your account.",e.CT_STR_CredentialPicker_Option_Help_FidoCrossPlatform="Choose this only if you have enabled a security key for your account.",e.CT_STR_CredentialPicker_Help_Desc="Learn more about this sign-in option",e.CT_STR_FidoDialog_Desc="Sign in without a username or password by using Windows Hello or a security key.",e.CT_STR_FidoDialog_Desc_CrossPlatform="Sign in without a username or password by using a security key.",e.CT_STR_GitHubDialog_Desc="To use this option, you must have previously linked your personal Microsoft account to a GitHub account.",e.CT_STR_GitHubDialog_Desc2="You can’t use this option to access work or school resources.",e.CT_STR_Dialog_CloseButton="Close",e.CT_PWD_STR_SwitchToCredPicker_Link="Other ways to sign in",e.CT_PWD_STR_SwitchToCredPicker_Link_NoUser="Sign-in options",e.CT_PWD_STR_SwitchToFido_Link="Sign in with Windows Hello or a security key",e.CT_PWD_STR_SwitchToFidoCrossPlatform_Link="Sign in with a security key",e.CT_FIDO_STR_Page_Title_NoHello="Sign in with a security key",e.CT_FIDO_STR_Page_Title="Sign in with Windows Hello or a security key",e.CT_FIDO_STR_Page_Description="Your PC will open a security window. Follow the instructions there to sign in.",e.CT_FIDO_STR_TryAgain_Button="Try again",e.CT_FIDO_STR_Error_NotFound="​We couldn’t verify you or the key you used. If you are using a security key, make sure that this is your key and try again.",e.CT_FIDO_STR_Error_NotAllowed="​We couldn’t verify you or the key you used. If you are using a security key, make sure that this is your key and try again.",e.CT_FIDO_STR_Error_Unknown="We had a problem with authenticating you. Please try again.",e.CT_FIDO_STR_Error_Constraint="The security key you used is not supported. Make sure that you have a FIDO2-capable key and try again.",e.TILE_STR_Header="Pick an account",e.TILE_STR_Desc_LinkedIn="It looks like you already have accounts you can use. Choose one, or continue with LinkedIn.",e.TILE_STR_Desc_GitHub="It looks like you already have accounts you can use. Choose one, or continue with GitHub.",e.TILE_STR_Active="Signed in",e.TILE_STR_Connected="Connected to Windows",e.TILE_STR_UseAnother="Use another account",e.TILE_STR_UseAnother_LinkedIn="Use a LinkedIn account",e.TILE_STR_UseAnother_GitHub="Use a GitHub account",e.TILE_STR_MsaTileHelpText="Sign in with {0} personal Microsoft account.",e.TILE_STR_AadTileHelpText="Sign in with {0} work or school account.",e.TILE_STR_Forget="Forget",e.TILE_STR_Signout="Sign out",e.TILE_STR_Signout_Forget="Sign out and forget",e.TILE_STR_Signing_Out="Signing out...",e.TILE_STR_Signout_Error="There was an issue with signing out of {0}. Please try again.",e.TILE_STR_Forget_Error="There was an issue with forgetting {0}. Please try again.",e.CT_STR_ResetPasswordSplitterTitle="Which type of account do you need help with?",e.WF_STR_CantAccessAccount_Text="Can’t access your account?",e.TILE_STR_MenuAltText="Open menu",e.TILE_STR_AsyncTileText="Finding more accounts...",e.TILE_STR_AsyncTileText_Title="We found an account you can use here:",e.CT_STR_ViewAgreementError="We didn't receive a response. Please try again.",e.CT_STR_ViewAgreement_ExternalLink="For details, please visit this site: {0}",e.CT_STR_ConfirmSend_Otc_ForceSignin="As you're accessing sensitive info, we'll send a code to {0} to verify your identity.",e.CT_STR_ConfirmSend_Otc_ASLP="Your organisational policy requires you to sign in again after a certain period of time. We'll send a code to {0} to verify your identity.",e.CT_STR_ConfirmSend_Otc_SendError="We couldn't send a code to your phone at this time. Try again later.",e.CT_STR_ConfirmSend_Otc_SendError_Email="We couldn't send a code to your email address at this time. Try again later.",e.CT_STR_ConfirmSend_Otc_Email="We'll send a code to {0} to sign you in.",e.CT_STR_ConfirmSend_Otc_SendCode="Send code",e.CT_STR_ConfirmSend_RemoteNgc="We'll send a sign-in request to your phone to sign in with {0}.",e.CT_STR_ConfirmSend_RemoteNgc_ForceSignin="Because you're accessing sensitive info for {0}, we'll send a request to your phone to verify your identity.",e.CT_STR_ConfirmSend_RemoteNgc_ASLP="Your organisational policy requires you to sign in again after a certain period of time. We'll send a request to your phone to verify your identity.",e.CT_STR_ConfirmSend_RemoteNgc_SendNotification="Send notification",e.CT_STR_PhoneDisambiguation_Title="Confirm your phone number",e.CT_STR_PhoneCountryCode_AriaLabel="Country Code",e.CT_PWD_STR_UseLinkedIn_Link="Sign in with LinkedIn",e.CT_PWD_STR_UseGitHub_Link="Sign in with GitHub",o.remoteLoginConfig&&(e.CT_STR_RemoteLogin_Description=t.format("Go to <b>{0}</b> on your work computer and enter the code below to sign in.",o.remoteLoginConfig.deviceAuthShortUrl),e.CT_STR_RemoteLogin_TimeoutTitle="This sign-in timed out",e.CT_STR_RemoteLogin_TimeoutError="The sign-in took too long. Tap Next to try again.",e.CT_STR_RemoteLogin_ErrorTitle="Something went wrong"),e.WF_STR_Confirm_Signup_Title="Create account",e.WF_STR_Confirm_Signup_Desc="It looks like you're new here. We'll create a new account with {0}.",e.WF_STR_Confirm_Signup_Button="Create account",e.WF_STR_Confirm_Recover_Username_Title="You may already have an account",e.WF_STR_Confirm_Recover_Username_Desc="{0} is already associated with an existing account. Choose 'Back' and enter the username for that account.",e.WF_STR_Confirm_Recover_Username_Instruction="If you can't remember the username for that account, choose 'Next' to recover it.",e.WF_STR_Confirm_Recover_Username_Signup_Link="Create another account",e.DSSO_STR_AuthenticatingMessage="Trying to sign you in",e.STR_TenantDisambiguation_Title="Pick an account to continue",e.STR_TenantDisambiguation_Subtitle="It looks like {0} can be used to sign in to more than one organisation.",e.STR_UserCredentialPolicy_Blocked="Your company policy requires that you use a different method to sign in.",e.STR_UserCredentialPolicy_Blocked_Fido_Remediation="Go to Security Info in My Profile and remove this security key so you no longer see this message.",e.STR_UserCredentialPolicy_Blocked_PhoneSignIn_Remediation="Disable phone sign-in on your account in Microsoft Authenticator so you no longer see this message."}),i.registerSource("html",function(e,o){e.CT_STR_OptOut_Description="You're seeing our <strong>new sign-in experience</strong>",e.WF_STR_SignUpLink_Text='No account? <a href="#" id="signup">Create one!</a>',e.CT_HRD_STR_Splitter_Rename='Tired of seeing this? <a href="#" id="iDisambigRenameLink">Rename your personal Microsoft account.</a>',e.CT_STR_CookieBanner_Text='This site uses cookies for analytics, personalised content and ads. By continuing to browse this site, you agree to this use. <a href="#" id="msccLearnMore">Learn more</a>',e.TILE_HTML_AsyncSessionFound='<span id="newSessionName">{0}</span> has previously signed in to this device. <a id="newSessionLink">Use this account instead</a>.',e.CT_PWD_STR_Error_WrongCreds=o.fLockUsername?"The password is incorrect. Please try again.":o.fAllowPhoneSignIn?'Your account or password is incorrect. If you can\'t remember your password, <a id="idA_IL_ForgotPassword0" href="#">reset it now.</a>':'Your email or password is incorrect. If you can\'t remember your password, <a id="idA_IL_ForgotPassword0" href="#">reset it now.</a>',e.CT_STR_ConfirmSend_Otc="We'll send a code to {0} to sign you in.",e.CT_OTC_STR_ResendCode='Didn’t receive it? Please wait for a few minutes and <a id="resendCodeLink" href="#">try again</a>.',e.CT_STR_FidoDialog_Desc2='To use this option, you must have previously set this up on your account. <a id="fidoHelpLink">Learn how to set this up</a>'})},function(e,o){function n(){var e=this,o={};e.registerSource=function(e,n){o[e]=o[e]||[],o[e].push(n)},e.getStrings=function(e,n){for(var i={},t=o[e]||[],r=0,a=t.length;r<a;r++)t[r](i,n);return i}}var i=window;i.StringRepository=e.exports=i.StringRepository||new n},function(e,o,n){var i=n(1),t=n(3),r=t.EnvironmentName;i.registerSource("str",function(e){e.CT_HRD_STR_Splitter_Back="Back",e.MOBILE_STR_Header_Brand="Microsoft account",e.MOBILE_STR_Footer_Microsoft="Microsoft",e.MOBILE_STR_Footer_Privacy="Privacy & cookies",e.MOBILE_STR_Footer_Terms="Terms of use",e.WF_STR_Footer_LinkDisclaimer_Text="Disclaimer",e.CT_STR_More_Options_Ellipsis_AriaLabel="Click here for troubleshooting information",e.CT_STR_Error_Details_Close_AltText="Close error details",e.STR_Error_Details_Debug_Mode_Enable="Enable",e.STR_Error_Details_Debug_Mode_Enable_AriaLabel="Enable advanced diagnostics",e.STR_Error_Details_Debug_Mode_Disable="Disable",e.STR_Error_Details_Debug_Mode_Disable_AriaLabel="Disable advanced diagnostics",e.STR_Error_Details_Debug_Mode="Advanced diagnostics:",e.STR_Error_Details_Debug_Mode_Desc="If you plan on getting support for an issue, turn this on and try to reproduce the error. This will collect additional information that will help to troubleshoot the issue.",e.STR_Error_Details_Debug_Mode_Failure="Something went wrong.",e.WF_STR_ProgressText="Please wait"}),i.registerSource("html",function(e,o){switch(o.iBannerEnvironment){case r.Internal:e.CT_STR_EnvironmentBanner_Text="INTERNAL PREVIEW ONLY";break;case r.TestSlice:e.CT_STR_EnvironmentBanner_Text='Dogfood - <a href="#" id="envBannerLink">details here</a>';break;case r.FirstSlice:e.CT_STR_EnvironmentBanner_Text='Insider Ring - <a href="#" id="envBannerLink">details here</a>'}})},function(e,o){o.UsernameMaxLength=113,o.SATOTPV1Length=6,o.SATOTPLength=8,o.PhoneNumberConfirmationLength=4,o.OneTimeCodeDefaultLength=16,o.OneTimeCodeMaxLength=7,o.PCExperienceQS="pcexp",o.PCExperienceDisabled=o.PCExperienceQS+"=false",o.NotPreferredCredentialQs="npc",o.Regex={PhoneNumberValidation:/^[0-9 ()[\].\-#*\/+]+$/},o.ProofUpRedirectLandingView={AccountCompromised:1,RiskySession:2},o.LoginMode={None:0,Login:1,ForceCredType:3,LWAConsent:4,GenericError:5,ForceSignin:6,OTS:7,HIP_Login:8,HIP_Lockout:9,InviteBlocked:10,SwitchUser:11,LWADelegation:12,ServiceBlocked:13,IDPFailed:14,StrongAuthOTC:16,StrongAuthMobileOTC:25,Finish:27,LoginWizard_Login:28,StrongAuthWABOTC:30,LoginWizard_HIP_Login:32,LoginWizard_Finish:34,LoginMobile:36,ForceSigninMobile:37,GenericErrorMobile:38,LoginHost:39,ForceSigninHost:40,GenericErrorHost:42,StrongAuthHostOTC:43,HIP_LoginHost:45,HIP_LoginMobile:46,HIP_LockoutHost:47,HIP_LockoutMobile:48,SwitchUserHost:49,LoginXbox_Login:50,HIP_LoginXbox:51,FinishXbox:52,IfExistsXbox:53,StartIfExistsXbox:54,StrongAuthXboxOTC:55,LoginWPWiz_Login:56,LoginWPWiz_HIP_Login:57,LoginWPWiz_Finish:58,StrongAuthWizOTC:59,StrongAuthWPWizOTC:60,FinishWPWiz:61,SwitchUserMobile:62,LoginWPWiz_PhoneSignIn:63,LoginWPWiz_HIP_PhoneSignIn:64,Login_PhoneSignIn:65,Login_HIP_PhoneSignIn:66,LoginHost_PhoneSignIn:67,LoginHost_HIP_PhoneSignIn:68,LoginMobile_PhoneSignIn:69,LoginMobile_HIP_PhoneSignIn:70,LoginWizard_PhoneSignIn:71,LoginWizard_HIP_PhoneSignIn:72,LoginXbox_PhoneSignIn:73,LoginXbox_HIP_PhoneSignIn:74,LoginWin10:75,HIP_LoginWin10:76,FinishWin10:77,FinishBlockedWin10:78,LoginWin10_PhoneSignIn:79,HIP_LoginWin10_PhoneSignIn:80,FinishWin10_TokenBroker:81,SwitchUserWin10:82,ForceSignInXbox:88,LoginClientSDK_Login:92,LoginClientSDK_HIP_Login:93,LoginClientSDK_Finish:94,StrongAuthClientSDKOTC:95,FinishClientSDK:96,LoginClientSDK_PhoneSignIn:97,LoginClientSDK_HIP_PhoneSignIn:98,Win10InclusiveOOBE_Finish:99,Win10InclusiveOOBE_FinishBlocked:100,Tiles:102,RemoteConnect:103,DesktopSsoProgress:104,FedConflict:105,Win10Host_Login:106,Win10Host_Login_PhoneSignin:107,Win10Host_Finish:108,Win10Host_StrongAuth:109,Win10Host_HIP_Login:110,Fido:111,Win10Host_HIP_Login_PhoneSignIn:112,FedLink:113,UserCredentialPolicyBlocked:114,BindFailed:115,Win10HostOOBE_HIP_Login:116,Win10HostOOBE_HIP_Login_PhoneSignIn:117,AadFedConflict:118,ProofFedConflict:119,FedBoundLink:120,FetchSessionsProgress:121},o.LoginBody={Login_OTC:5},o.SessionPullFlags={Msa:1,Dsso:2},o.PaginatedState={Previous:-1,Unknown:0,Username:1,Password:2,OneTimeCode:3,RemoteNGC:4,PhoneDisambiguation:5,LwaConsent:6,IdpDisambiguation:7,IdpRedirect:8,ViewAgreement:10,LearnMore:11,Tiles:12,ConfirmSend:13,RemoteConnectCode:14,RemoteLoginPolling:15,BindRedirect:16,TermsOfUse:17,DesktopSsoProgress:18,ResetPasswordSplitter:19,Kmsi:20,CheckPasswordType:21,ChangePassword:22,Fido:23,CredentialPicker:24,Consent:25,Error:26,ConfirmSignup:27,ConfirmRecoverUsername:28,ConfirmConsentSelection:29,FedConflict:30,ProofUpRedirect:32,ProofUpRedirectLanding:33,ConditionalAccessInstallBroker:34,ConditionalAccessWorkplaceJoin:35,ConditionalAccessError:36,CreateFido:37,FedLink:38,FedLinkComplete:40,IdpRedirectSpeedbump:41,TransferLogin:42,Cmsi:43,ProofConfirmation:44,MessagePrompt:45,FinishError:46,Hip:48,LearnMoreOfflineAccount:49,TenantDisambiguation:50,AadFedConflict:51,RemoteConnectCanaryValidation:52,FidoCanaryValidation:53,ProofFedConflict:54,FetchSessionsProgress:55},o.PostType={Password:11,Federation:13,SHA1:15,StrongAuth:18,StrongAuthTOTP:19,LWAConsent:30,PasswordInline:20,RemoteNGC:21,SessionApproval:22,NGC:23,OtcNoPassword:24,RemoteConnect_NativePlatform:25,OTC:27,Kmsi:28},o.UserProperty={USERNAME:"login",ERROR_CODE:"HR",ERR_MSG:"ErrorMessage",EXT_ERROR:"ExtErr",ERR_URL:"ErrUrl",DATOKEN:"DAToken",DA_SESKEY:"DASessionKey",DA_START:"DAStartTime",DA_EXPIRE:"DAExpires",STS_ILFT:"STSInlineFlowToken",SIGNINNAME:"SigninName",FIRST_NAME:"LastName",LAST_NAME:"FirstName",TILE_URL:"TileUrl",CID:"CID",PUID:"PUID"},o.Error={S_OK:"0",InvalidRealmDiscLogin:10,UsernameInvalid:1e3,PasswordEmpty:1001,HIPEmpty:1002,AltEmailInvalid:1005,PhoneInvalid:1006,SAContainsName:1007,OTCEmpty:1009,OTCInvalid:1010,NotEnoughProofs:1013,PhoneEmpty:1015,FedUser:1016,FedUserConflict:1017,FedUserInviteBlocked:1018,EmptyFields:1020,PhoneHasSpecialChars:1021,AutoVerifyNoCodeSent:1022,ProofConfirmationEmpty:1023,ProofConfirmationInvalid:1024,TOTPInvalid:1025,SessionNotApproved:1026,PhoneNumberInvalid:1027,PhoneFormattingInvalid:1028,PollingTimedOut:1029,SendNotificationFailed:1030,Server_MessageOnly:9999,PP_E_DB_MEMBERDOESNOTEXIST:"CFFFFC15",PP_E_EXCLUDED:"80041010",PP_E_MEMBER_LOCKED:"80041011",PP_E_BAD_PASSWORD:"80041012",PP_E_MISSING_MEMBERNAME:"80041031",PP_E_MISSING_PASSWORD:"80041032",PP_E_FEDERATION_INLINELOGIN_DISALLOWED:"800478AC",PP_E_PE_RULEFALSE:"8004490C",PP_E_MOBILECREDS_PHONENUMBER_BLANK:"80045801",PP_E_MOBILECREDS_PHONENUMBER_TOOSHORT:"80045806",PP_E_MOBILECREDS_PHONENUMBER_TOOLONG:"80045807",PP_E_MOBILECREDS_PHONENUMBER_INVALID:"80045800",PP_E_NAME_BLANK:"80041100",PP_E_EMAIL_INCOMPLETE:"8004110D",PP_E_EMAIL_INVALID:"8004110B",PP_E_NAME_TOO_SHORT:"80041101",PP_E_NAME_INVALID:"80041103",PP_E_INVALIDARG:"80048388",PP_E_SA_TOOSHORT:"80041120",PP_E_SA_TOOLONG:"80041121",PP_E_INVALID_PHONENUMBER:"8004113F",PP_E_SECRETQ_CONTAINS_SECRETA:"80041165",PP_E_SECRETA_CONTAINS_SECRETQ:"8004117D",PP_E_SA_CONTAINS_MEMBERNAME:"8004116A",PP_E_STRONGPROCESS_ALTEMAILSAMEASMAILBOX:"80049C2D",PP_E_EMAIL_RIGHT_TOO_LONG:"8004110C",PP_E_NAME_TOO_LONG:"80041102",PP_E_ALIAS_AUTH_NOTPERMITTED:"8004788B",PP_E_TOTP_INVALID:"80049C34",PP_E_OLD_SKYPE_PASSWORD:"80043557",PP_E_OTT_DATA_INVALID:"8004348F",PP_E_OTT_ALREADY_CONSUMED:"80043490",PP_E_OTT_INVALID_PURPOSE:"80043496",PP_E_PPSA_RPT_NOTOADDRESS:"80048120",PP_E_STRONGPROCESS_BADDEVICENAME:"80049C22",PP_E_INLINELOGIN_INVALID_SMS:"800434E1",PP_E_INLINELOGIN_INVALID_ALT:"800434E2",PP_E_PREVIOUS_PASSWORD:"80041013",PP_E_HIP_VALIDATION_WRONG:"80045505",PP_E_HIP_VALIDATION_ERROR_FATAL:"80045537",PP_E_HIP_VALIDATION_ERROR_UNAUTHENTICATED:"80045538",PP_E_HIP_VALIDATION_ERROR_OTHER:"80045539",PP_E_SQ_CONTAINS_PASSWORD:"8004341E",PP_E_SA_CONTAINS_PASSWORD:"8004341C",PP_E_SA_CONTAINED_IN_PASSWORD:"8004341D",PP_E_LIBPHONENUMBERINTEROP_NUMBERPARSE_EXCEPTION:"80043510",PP_E_STRONGPROCESS_EMAIL_HAS_MOBILE_DOMAIN:"80049C33",PP_E_STRONGPROCESS_MXALIAS_NOTALLOWED:"80049C23",PP_E_INVALID_MEMBERNAME:"80041034",PP_E_SA_TOO_MANY_CACHE_SESSIONS:"8004A00C",PP_E_INTERFACE_DISABLED:"80043448",PP_E_ASSOCIATE_DUPLICATE_ACCOUNT:"80043534",PP_E_OAUTH_REMOTE_CONNECT_USER_CODE_MISSING_OR_INVALID:"800478C7",PP_E_LOGIN_NOPA_USER_PASSWORD_REQUIRED:"800478CE"},o.EstsError={UserAccountSelectionInvalid:"16001",UserUnauthorized:"50020",UserAccountNotFound:"50034",IdsLocked:"50053",InvalidPasswordLastPasswordUsed:"50054",InvalidPasswordExpiredPassword:"50055",InvalidPasswordNullPassword:"50056",UserDisabled:"50057",FlowTokenExpired:"50089",InvalidUserNameOrPassword:"50126",InvalidDomainName:"50128",ProtectedKeyMisuse:"50141",MissingCustomSigningKey:"50146",IdpLoopDetected:"50174",InvalidOneTimePasscode:"50181",ExpiredOneTimePasscode:"50182",OneTimePasscodeCacheError:"50183",OneTimePasscodeEntryNotExist:"50184",InvalidPassword:"50193",SsoArtifactExpiredDueToConditionalAccess:"70044",InvalidTenantName:"90002",PhoneSignInBlockedByUserCredentialPolicy:"130500",PublicIdentifierSasBeginCallRetriableError:"131001",PublicIdentifierAuthUserNotAllowedByPolicy:"131010",PublicIdentifierSasBeginCallNonRetriableError:"131002",PublicIdentifierSasEndCallRetriableError:"131003",PublicIdentifierSasEndCallNonRetriableError:"131004",DeviceIsDisabled:"135011",FidoBlockedByPolicy:"135016",BlockedAdalVersion:"220300",BlockedClientId:"220400",UserUnauthorizedApiVersionNotSupported:"500201",UserUnauthorizedMsaGuestUsersNotSupported:"500202",UserAccountDeleted:"500341",UserAccountNotFoundNotConfiguredForRemoteNgc:"500342",UserAccountNotFoundFailedToCreateRemoteSignIn:"500343",UserAccountNotFoundForFidoSignIn:"500344",InvalidGrantDeviceNotFound:"700003",InvalidTenantNameEmptyGuidIdentifier:"900021",InvalidTenantNameEmptyIdentifier:"900022",InvalidTenantNameFormat:"900023",UserVoiceAuthFailedCallWentToVoicemail:"UserVoiceAuthFailedCallWentToVoicemail",UserVoiceAuthFailedInvalidPhoneInput:"UserVoiceAuthFailedInvalidPhoneInput",UserVoiceAuthFailedPhoneHungUp:"UserVoiceAuthFailedPhoneHungUp",UserVoiceAuthFailedInvalidPhoneNumber:"UserVoiceAuthFailedInvalidPhoneNumber",UserVoiceAuthFailedInvalidExtension:"UserVoiceAuthFailedInvalidExtension",InvalidFormat:"InvalidFormat",UserAuthFailedDuplicateRequest:"UserAuthFailedDuplicateRequest",UserVoiceAuthFailedPhoneUnreachable:"UserVoiceAuthFailedPhoneUnreachable",UserVoiceAuthFailedProviderCouldntSendCall:"UserVoiceAuthFailedProviderCouldntSendCall",User2WaySMSAuthFailedProviderCouldntSendSMS:"User2WaySMSAuthFailedProviderCouldntSendSMS",SMSAuthFailedProviderCouldntSendSMS:"SMSAuthFailedProviderCouldntSendSMS",User2WaySMSAuthFailedNoResponseTimeout:"User2WaySMSAuthFailedNoResponseTimeout",SMSAuthFailedNoResponseTimeout:"SMSAuthFailedNoResponseTimeout",SMSAuthFailedWrongCodeEntered:"SMSAuthFailedWrongCodeEntered",OathCodeIncorrect:"OathCodeIncorrect",OathCodeDuplicate:"OathCodeDuplicate",OathCodeOld:"OathCodeOld",PhoneAppNoResponse:"PhoneAppNoResponse",User2WaySMSAuthFailedWrongCodeEntered:"User2WaySMSAuthFailedWrongCodeEntered",PhoneAppInvalidResult:"PhoneAppInvalidResult",PhoneAppDenied:"PhoneAppDenied",PhoneAppTokenChanged:"PhoneAppTokenChanged",SMSAuthFailedMaxAllowedCodeRetryReached:"SMSAuthFailedMaxAllowedCodeRetryReached",PhoneAppFraudReported:"PhoneAppFraudReported",FraudCodeEntered:"FraudCodeEntered",UserIsBlocked:"UserIsBlocked"},o.Fido={MaxUserPromptLength:99,FinishStates:{Success:0,Cancel:1,Error:2,NotSupported:3},UnexpectedErrorCode:9999,EdgeErrorCodes:{SyntaxError:3,NotFoundError:8,NotSupportedError:9,InvalidAccessError:15,AbortError:20}},o.IfExistsResult={Unknown:-1,Exists:0,NotExist:1,Throttled:2,Error:4,ExistsInOtherMicrosoftIDP:5,ExistsBothIDPs:6},o.ThrottleStatus={NotThrottled:0,AadThrottled:1,MsaThrottled:2},o.DomainType={Unknown:1,Consumer:2,Managed:3,Federated:4,CloudFederated:5},o.CredentialType={Password:1,RemoteNGC:2,OneTimeCode:3,Federation:4,CloudFederation:5,Fido:7,GitHub:8,PublicIdentifierCode:9,LinkedIn:10,RemoteLogin:11,Google:12,NoPreferredCredential:1e3},o.RemoteNgcType={PushNotification:1,QrCode:2,ListSessions:3},o.SessionPollingType={Image:1,Json:2},o.AgreementType={Privacy:"privacy",Tou:"tou",Impressum:"impressum"},o.ApiErrorCodes={GeneralError:6e3,AuthFailure:6001,InvalidArgs:6002,Generic:8e3,Timeout:8001,Aborted:8002},o.DefaultRequestTimeout=3e4,PROOF={Type:{Email:1,AltEmail:2,SMS:3,DeviceId:4,CSS:5,SQSA:6,HIP:8,Birthday:9,TOTPAuthenticator:10,RecoveryCode:11,StrongTicket:13,TOTPAuthenticatorV2:14,TwoWayVoice:15,TwoWaySMS:16,Voice:-3}},o.ContentType={Json:"application/json; charset=utf-8",FormUrlEncoded:"application/x-www-form-urlencoded"},o.BindProvider={LinkedIn:0,GitHub:1,Google:2,Samsung:3},o.PromotedAltCredFlags={None:0,GitHub:1,LinkedIn:2},o.EnvironmentName={Internal:1,TestSlice:2,FirstSlice:3},o.AnimationState={Begin:0,End:-1,RenderNewView:1,AnimateNewView:2},o.DialogId={None:0,FidoHelp:1,GitHubHelp:2},o.KeyCode={Tab:9,Enter:13,Escape:27,Space:32,PageUp:33,PageDown:34,End:35,Home:36,ArrowUp:38,ArrowDown:40,GamePadB:196},o.ProofOfPossession={
AuthenticatorKey:"cpa",CanaryTokenKey:"canary",MethodHint:"cpa_method_hint"}},,function(e,o){e.exports={format:function(e){if(e)for(var o=1;o<arguments.length;o++)e=e.replace(new RegExp("\\{"+(o-1)+"\\}","g"),arguments[o]);return e}}},function(e,o){o.Tokens={Username:"#~#MemberName_LS#~#"},o.Fed={DomainToken:"#~#partnerdomain#~#",FedDomain:"#~#FederatedDomainName_LS#~#",Partner:"#~#FederatedPartnerName_LS#~#"},o.LoginOption={DoNotRemember:0,RememberPWD:1,NothingChecked:3},o.StringsVariantId={Default:0,SkypeMoveAlias:1,CombinedSigninSignup:2,CombinedSigninSignupDefaultTitle:3,RemoteConnectLogin:4,CombinedSigninSignupV2:5,CombinedSigninSignupV2WelcomeTitle:6},o.AllowedIdentitiesType={MsaOnly:0,AadOnly:1,Both:2},o.SessionIdp={Aad:0,Msa:1}}]),window.__=!0;