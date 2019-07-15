const _default = [{
    props: 'appId',
    description: 'The id of your Discord app',
    type: 'string',
    values: ['-'],
    default: '-',
}]

export const GoogleButtonInfos = _default.concat([{
    props: 'scopes',
    description: 'Scopes for your app, seperated with a comma, i.e "profile, email"',
    type: 'string',
    values: ['profile', 'email'],
    default: 'profile'
}, {
    props: 'width',
    description: 'Width of the button',
    type: 'integer',
    values: ['-'],
    default: '140'
}, {
    props: 'height',
    description: 'Height of the button',
    type: 'integer',
    values: ['-'],
    default: '40'
}, {
    props: 'longTitle',
    description: 'Display long labels such as "Sign in with Google" rather than "Sign in"',
    type: 'boolean',
    values: ['true', 'false'],
    default: 'false'
}, {
    props: 'theme',
    description: 'Theme of button',
    type: 'string',
    values: ['light', 'dark'],
    default: 'light'
}, {
    props: 'onLoginSuccess',
    description: 'A function if the login is a success, take the GoogleUser in paramater',
    type: 'Function',
    values: ['-'],
    default: `() => {console.log('Logged to google with success!')}`
}, {
    props: 'onLoginFailure',
    description: 'A function if the login is a failure, take the error in paramater',
    type: 'Function',
    values: ['-'],
    default: `() => {console.log('Logged to google with failure!')}`
}])

export const FacebookButtonInfos = _default.concat([{
    props: 'scopes',
    description: 'Scopes for your app, seperated with a comma, i.e "public_profile, email"',
    type: 'string',
    values: [
        'public_profile',
        'email',
        'groups_access_member_info',
        'publish_to_groups',
        'user_age_range',
        'user_birthday',
        'user_events',
        'user_friends',
        'user_gender',
        'user_hometown',
        'user_likes',
        'user_link',
        'user_location',
        'user_photos',
        'user_posts',
        'user_tagged_places',
        'user_videos'
    ],
    default: 'public_profile'
}, {
    props: 'type',
    description: 'Type of button',
    type: 'string',
    values: ['login_with', 'continue_with'],
    default: 'login_with'
}, {
    props: 'audience',
    description: 'Choose the default audience selected when you request write permissions',
    type: 'string',
    values: ['friends', 'only_me', 'everyone'],
    default: 'friends'
}, {
    props: 'size',
    description: 'Size of button',
    type: 'string',
    values: ['small', 'medium', 'large'],
    default: 'large'
}, {
    props: 'language',
    description: 'Language of the user, i.e en_US',
    type: 'string',
    values: ['-'],
    default: 'en_US'
}, {
    props: 'useContinueAs',
    description: 'If user is already connected, show him a "continue as" button instead of "connexion"?',
    type: 'boolean',
    values: ['true', 'false'],
    default: 'false'
}, {
    props: 'autoLogoutButton',
    description: 'If user is already connected to your app, show him a "Logout" button?',
    type: 'boolean',
    values: ['true', 'false'],
    default: 'true'
}, {
    props: 'debug',
    description: 'Enable debug mode of Facebook\'s sdk',
    type: 'boolean',
    values: ['true', 'false'],
    default: 'false'
}, {
    props: 'onLoginSuccess',
    description: 'A function if the login is a success, take the response in paramater',
    type: 'Function',
    values: ['-'],
    default: '() => {console.log("Logged to facebook with success!")}'
}, {
    props: 'onLoginFailure',
    description: 'A function if the login is a failure, take the response in paramater',
    type: 'Function',
    values: ['-'],
    default: '() => {console.log("Logged to facebook with failure!")}'
}, {
    props: 'onStatusChange',
    description: 'A function if the status of the user change',
    type: 'Function',
    values: ['-'],
    default: '() => {console.log("Facebook status changed!")}'
}])

export const DiscordButtonInfos = _default.concat([{
    props: 'scopes',
    description: 'Scopes for your app, seperated with a comma, i.e "identify, connections"',
    type: 'string',
    values: ['identity', 'connections', 'guilds', 'email'],
    default: 'profile'
}, {
    props: 'redirect',
    description: 'The redirect url of your app',
    type: 'string',
    values: ['-'],
    default: 'http://localhost:3000'
}, {
    props: 'color',
    description: 'The color of the button',
    type: 'string',
    values: [
        'dark',
        'light',
        'black',
        'pink',
        'yellow',
        'aqua',
        'lightblue',
        'lightgreen',
        'brown',
        'blue',
        'gray',
        'green',
        'purple'
    ],
    default: 'dark'
}, {
    props: 'onLoginSuccess',
    description: 'A function if the login is a success, take the user\'s informations in paramater',
    type: 'Function',
    values: ['-'],
    default: '() => {console.log("Logged to discord with success!")}'
}, {
    props: 'onLoginFailure',
    description: 'A function if the login is a failure, take the the user\'s informations in paramater',
    type: 'Function',
    values: ['-'],
    default: '() => {console.log("Logged to discord with failure!")}'
}])