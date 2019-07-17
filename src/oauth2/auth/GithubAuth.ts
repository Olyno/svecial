import OAuth2 from '../OAuth2';
import { request } from '../Util';

class GithubAuth extends OAuth2 {

	constructor (element: string, config?: any) {
		super(element);
		this.authorization_url = 'https://github.com/login/oauth/authorize';
		this.token_url = 'https://github.com/login/oauth/access_token';
		this.informations_link = 'https://api.github.com/user';
		this.scopes = [];
		if (config) {
			for (let key of Object.keys(config)) {
				this[key] = config[key];
			}
		}
	}

	async useCode(w: Window): Promise<void> {
		return new Promise((resolve, reject) => {
			const code = w.location.search.replace('?code=', '');
			request('POST', <string> this.token_url, {
				client_id: this.client_id,
				client_secret: this.client_secret,
				code,
				redirect_uri: this.redirect_uri
			})
			.then(response => {
				response = JSON.parse(response);
				this.auth.access_token = response.access_token;
				this.auth.scope = this.scopes.join(' ');
				this.auth.token_type = response.token_type;
				this.getUser()
					.then(user => resolve(user))
					.catch(error => reject(error))
			})
		})
	}

	async getUser(): Promise<any> {
		return new Promise((resolve, reject) => {
			if (!this.auth) {
				reject("You must login first");
                return;
			}
			request('GET', <string> this.informations_link, {
				Authorization: `${this.auth.token_type} ${this.auth.access_token}`,
			})
				.then(user => resolve(user))
				.catch(error => reject(error));
		});
	}

}

export default GithubAuth;