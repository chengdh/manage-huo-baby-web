
// Wrapper that provides a common interface for different providers

import '@authing/native-js-ui-components/lib/index.min.css'
import { AuthProviderClass, AuthOptions, ProviderOptions } from "react-use-auth/dist/types";
import { appName } from "../constants/constants";

interface AuthingOptions {
    appId: string;
    config: object | undefined;
}

export default class Authing implements AuthProviderClass {
    private expiresInSeconds: number = 1209600; //过期时间设为14天
    private authing;

    //authing js sdk
    private authingClient;

    private dispatch: (eventName: string, eventData?: any) => void;

    constructor(params: AuthOptions) {
        this.dispatch = params.dispatch;
        const { appId, config } = params as AuthingOptions;
        this.importAuthingGuard(appId, config);
    }

    private async importAuthingGuard(appId: string, config: any | undefined) {
        //NOTE 使用动态加载,否则会出现ssr错误
        const AuthingGuard = (await import("@authing/native-js-ui-components")).AuthingGuard;
        this.authing = new AuthingGuard(appId, config);

        const AuthenticationClient = (await import("authing-js-sdk")).AuthenticationClient;
        this.authingClient = new AuthenticationClient({ appId });

        //注册成功
        //注册失败
        this.authing.on("login-error", (user: any, authClient: any) => {
            console.log("login error");
            this.dispatch("ERROR", {
                error: "login-error",
                errorType: "AuthingError"
            });
        });

        this.authing.on("login", async (user: any) => {
            console.log("login success");
            // const retuser = await this.authingClient.loginByUsername(user.username,user.password);
            const ret = await this.authingClient.checkLoginStatus(user.token)
            console.log(ret);
            this.dispatch("AUTHENTICATED", {
                user,
                authResult: {
                    expiresIn: this.expiresInSeconds
                }
            });
            this.authing.hide();
        });
    }

    // Makes configuration easier by guessing default options
    static addDefaultParams(params: ProviderOptions, callbackDomain: string) {
        const { appId, config } = params as AuthingOptions;
        return {
            appId: appId,
            config: {
                mode: "modal",
                title: appName,
                // logo: "",
                ...config
            }
        };
    }
    // Opens login dialog
    public authorize() {
        this.dispatch("LOGIN");
        this.authing.show();
    }

    // Opens signup dialog
    public signup() {
        this.dispatch("LOGIN");
        this.authing.show();
    }

    // Logs user out on the underlying service
    public logout(returnTo?: string) {
        this.authingClient.logout();
    }

    // Handles login after redirect back from service
    public async handleLoginCallback(dispatch: any): Promise<boolean> {
        console.warn(
            "handleLoginCallback is unnecessary with authing"
        );
        return true;
    }

    // verifies session is still valid
    // returns fresh user info
    public async checkSession(): Promise<{
        user: any;
        authResult: any;
    }> {
        console.log("checkSession");

        const user = await this.authingClient.getCurrentUser();

        console.log(user);
        if (user) {
            return {
                user,
                authResult: {
                    expiresIn: this.expiresInSeconds
                }
            };
        } else {
            throw new Error("Session invalid");
        }
    }

    // Returns the userId from NetlifyIdentity shape of data
    public userId(user: any): string {
        return user.id;
    }

    // Returns user roles from NetlifyIdentity shape of data
    public userRoles(user: any): string[] | null {
        return ["admin"];
    }
}