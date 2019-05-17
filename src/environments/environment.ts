// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDvdVZIzhbPtepPn6N5QPph9PJnccr43T4',
    authDomain: 'todolistapp-71cd7.firebaseapp.com',
    databaseURL: 'https://todolistapp-71cd7.firebaseio.com',
    projectId: 'todolistapp-71cd7',
    storageBucket: 'todolistapp-71cd7.appspot.com',
    messagingSenderId: '215878231855'
  }
};
