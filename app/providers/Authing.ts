
// Wrapper that provides a common interface for different providers

import { UserConfig, User, AuthingGuard, AuthenticationClient, GuardMode } from "@authing/native-js-ui-components";
import { AuthProviderClass, AuthOptions, ProviderOptions } from "react-use-auth/dist/types";
import { appName } from "../constants/constants";

interface AuthingOptions {
    appId: string;
    config: UserConfig | undefined;
}

export default class Authing implements AuthProviderClass {
    private authing: AuthingGuard;
    private dispatch: (eventName: string, eventData?: any) => void;

    constructor(params: AuthOptions) {
        this.dispatch = params.dispatch;

        const { appId, config } = params as AuthingOptions;

        this.authing = new AuthingGuard(appId, config);

        //注册成功
        //注册失败
        this.authing.on("login-error", (user: User, authClient: AuthenticationClient) => {
            this.dispatch("ERROR", {
                error: "login-error",
                errorType: "netlifyError"
            });
        });
        this.authing.on("login", (user: User) => {
            this.dispatch("AUTHENTICATED", {
                user,
                authResult: {
                    expiresIn: user.tokenExpiredAt
                }
            });
        });
    }

    // Makes configuration easier by guessing default options
    static addDefaultParams(params: ProviderOptions, callbackDomain: string) {
        const { config } = params as AuthingOptions;

        return {
            mode: GuardMode.Modal,
            title: appName,
            // logo: "",
            ...config
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
        // this.netlifyIdentity.logout();
    }

    // Handles login after redirect back from service
    public async handleLoginCallback(dispatch: any): Promise<boolean> {
        console.warn(
            "handleLoginCallback is unnecessary with Netlify Identity Widget"
        );
        return true;
    }

    // verifies session is still valid
    // returns fresh user info
    public async checkSession(): Promise<{
        user: any;
        authResult: any;
    }> {
        // try {
        //     await this.authing.refresh();
        // } catch (e) {
        //     throw new Error("Session invalid");
        // }

        // const user = this.netlifyIdentity.currentUser();

        // if (user) {
        //     return {
        //         user,
        //         authResult: {
        //             expiresIn: user.token?.expires_in
        //         }
        //     };
        // } else {
        //     throw new Error("Session invalid");
        // }
        return {
            user: "",
            authResult: {
                expiresIn: ""
            }
        };
    }

    // Returns the userId from NetlifyIdentity shape of data
    public userId(user: User): string {
        return user.id;
    }

    // Returns user roles from NetlifyIdentity shape of data
    public userRoles(user: User): string[] | null {
        return ["admin"];
    }
}