import { AuthingGuard, GuardMode, GuardScenes, SocialConnections, UserConfig } from "@authing/react-ui-components"
import React, { useCallback, useState } from "react"
import '@authing/react-ui-components/lib/index.min.css'


interface AuthingDialogProps {
    title: string,
    defaultScenes: GuardScenes,
    dialogOpen: string | null,
    closeDialog: () => void
}
const AuthingDialog: React.FC<AuthingDialogProps> = ({ title, defaultScenes, dialogOpen, closeDialog }) => {
    const appId = '600a6c7ad9f22333999c26d5';
    const config: UserConfig = {
        logo: 'https://usercontents.authing.cn/client/logo@2.png',
        title: title,
        mode: GuardMode.Modal,
        defaultScenes: defaultScenes,
        socialConnections: [SocialConnections.Github],
    };
    const onLogin = (userInfo: any) => {
        console.log(userInfo)
    }
    const printDialog = useCallback(() => {
        return (<AuthingGuard
            appId={appId}
            config={config}
            onLogin={onLogin}
            onClose={closeDialog}
        />);
    }, [defaultScenes]);
    return (
        <>
            {dialogOpen && printDialog()}
        </>
    );
}
export default AuthingDialog;