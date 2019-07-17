class AccessToken {

    access_token: string | undefined;
    token_type: string | undefined;
    expires_in: string | undefined;
    refresh_token: string | undefined;
    scope: string | undefined;

    constructor (data?: any) {
        if (data) {
            for (let key of Object.keys(data)) {
                this[key] = data[key];
            }
        }
    }

}

export default AccessToken;