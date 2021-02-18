import { AuthingGuard, GuardMode, GuardScenes, RegisterMethods, SocialConnections, UserConfig } from "@authing/react-ui-components";
import React, { useCallback, useState } from "react";
import '@authing/react-ui-components/lib/index.min.css';
import { appId } from "../../../constants/constants";

interface AuthingDialogProps {
    title: string,
    dialogOpen: string | null,
    closeDialog: () => void
}
const AuthingDialog: React.FC<AuthingDialogProps> = ({ title, dialogOpen, closeDialog }) => {
    const config: UserConfig = {
        logo: 'https://usercontents.authing.cn/client/logo@2.png',
        title: title,
        mode: GuardMode.Modal,
        defaultScenes: dialogOpen == "register" ? GuardScenes.Register : GuardScenes.Login,
        defaultRegisterMethod: RegisterMethods.Phone,
        autoRegister: true,
        socialConnections: [SocialConnections.Github, SocialConnections.Dingtalk, SocialConnections.WxWCorpQr],
    };
    const onLogin = (userInfo: any) => {
        console.log("login success");
        console.log(userInfo);
        _onClose();
    }
    const _onClose = useCallback(() => {
        closeDialog();
    }, [closeDialog]);

    const printDialog = useCallback(() => {
        return (<AuthingGuard
            appId={appId}
            config={config}
            onLogin={onLogin}
            onClose={_onClose}
        />);
    }, [dialogOpen]);
    return (
        <>
            {dialogOpen && printDialog()}
        </>
    );
}
export default AuthingDialog;