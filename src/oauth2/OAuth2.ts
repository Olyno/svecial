import AccessToken from './AccessToken';

abstract class OAuth2 {

	element: HTMLElement;
	client_id: string | undefined;
	client_secret: string | undefined;
	
	authorization_url: string | undefined;
	token_url: string | undefined;
	revocation_url: string | undefined;
	informations_link: string | undefined;
	redirect_uri: string;
	scopes: string[] = [];
	auth: AccessToken;

	constructor (element: string) {
		this.element = <HTMLElement> (document.getElementById(element) ? document.getElementById(element) : document.getElementsByClassName(element)[0]);
		this.auth = new AccessToken();
		this.redirect_uri = window.location.href;
	}

	abstract async useCode(w: Window): Promise<void>;

	async init(): Promise<void> {
		return new Promise<any>((resolve, reject) => {
			this.element.addEventListener('click', async (e) => {
				e.preventDefault();
				this.login()
					.then(user => resolve(user))
					.catch(error => reject(error))
			})
		})
	}

	async login(): Promise<void> {
		return new Promise<any>((resolve, reject) => {
			const url = `${this.authorization_url}?response_type=code
				&client_id=${this.client_id}
				&client_secret=${this.client_secret}
				&scope=${this.scopes.join('%20')}
				&redirect_uri=${this.redirect_uri}`;
			const popout = <Window> window.open(url, "OAuth2-Login", "width=400,height=600");
			popout.focus();
			let waiter = setInterval(() => {
				try {
					popout.location.hash;
				} catch {
					return;
				}
				try {
					popout.location.href.includes('?code=')
				} catch {
					clearInterval(waiter);
					reject("Access Denied: User has probably closed the popout");
					return;
				}

				if (popout.location.href.includes('?code=')) {
					console.log('GOT');
					clearInterval(waiter);
					popout.close();
					this.useCode(popout)
						.then(user => resolve(user))
						.catch(error => reject(error))
					return;
				}
			
				if (popout.closed) {
					clearInterval(waiter);
					reject("Access Denied: User closed the popout");
					return;
				}
			}, 500);
		})
	}

}

export default OAuth2;