import { AuthingGuard, GuardMode, SocialConnections, UserConfig } from "@authing/react-ui-components"
import React from "react"
import '@authing/react-ui-components/lib/index.min.css'

const AuthingPage: React.FC = () => {
    const appId = '600a6c7ad9f22333999c26d5';
    const config: UserConfig = {
        logo: 'https://usercontents.authing.cn/client/logo@2.png',
        title: 'Authing',
        mode: GuardMode.Modal,
        socialConnections: [SocialConnections.Github],
    };
    const onLogin = (userInfo: any) => {
        console.log(userInfo)
    }
    return <AuthingGuard appId={appId} config={config} onLoading={onLogin} />
}
export default AuthingPage;