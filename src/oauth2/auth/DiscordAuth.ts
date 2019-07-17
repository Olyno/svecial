import OAuth2 from '../OAuth2';
import { request, parseHash } from '../Util';

class DiscordAuth extends OAuth2 {

	constructor (element: string, config?: any) {
		super(element);
		this.authorization_url = 'https://discordapp.com/api/oauth2/authorize';
		this.token_url = 'https://discordapp.com/api/oauth2/token';
		this.revocation_url = 'https://discordapp.com/api/oauth2/token/revoke';
		this.informations_link = 'https://discordapp.com/api/v6/users/@me';
		this.scopes = ['identify'];
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
				grant_type: 'authorization_code',
				code,
				redirect_uri: this.redirect_uri,
				scope: this.scopes.join(' ')
			})
			.then(response => {
				response = JSON.parse(response);
				this.auth.access_token = response.access_token;
				this.auth.expires_in = response.expires_in;
				this.auth.refresh_token = response.refresh_token;
				this.auth.scope = response.scope;
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
			if ( !(this.scopes.includes('identify') || this.scopes.includes('email')) ) {
				reject(`You must have the scope 'identify' or 'email' to use 'getUser'`);
				return;
			}
			request('GET', <string> this.informations_link, {
				headers: {
					Authorization: `${this.auth.token_type} ${this.auth.access_token}`,
				}
			})
				.then(user => resolve(user))
				.catch(error => reject(error));
		});
	}

	async getConnections() {
		return new Promise((resolve, reject) => {
			if (!this.auth) {
				reject("You must login first");
				return;
			}
			if (!(this.scopes.includes('connections') )) {
				reject(`You must have the scope 'connections' to use 'getConnections'`);
				return;
			}
			request('GET', `${this.informations_link}/connections`, {
				headers: {
					Authorization: `${this.auth.token_type} ${this.auth.access_token}`,
				}
			})
				.then(user => resolve(user))
				.catch(error => reject(error));
		});
	}

	async getGuilds() {
		return new Promise((resolve, reject) => {
			if (!this.auth) {
				reject("You must login first");
				return;
			}
			if ( !(this.scopes.includes('guilds')) ) {
				reject(`You must have the scope 'guilds' to use 'getGuilds'`);
				return;
			}
			request('GET', `${this.informations_link}/guilds`, {
				headers: {
					Authorization: `${this.auth.token_type} ${this.auth.access_token}`,
				}
			})
				.then(user => resolve(user))
				.catch(error => reject(error));
		});
	}

	async joinGuild(inviteID: string) {
		return new Promise((resolve, reject) => {
			if (!this.auth) {
				reject("You must login first");
				return;
			}
			if ( !(this.scopes.includes('guilds.join')) ) {
				reject(`You must have the scope 'guilds.join' to use 'joinGuild'`);
				return;
			}
			request('POST', `https://discordapp.com/api/v6/invites/${inviteID}`, {
				headers: {
					Authorization: `${this.auth.token_type} ${this.auth.access_token}`,
				}
			})
				.then(user => resolve(user))
				.catch(error => reject(error));
		});
	}

}

export default DiscordAuth;