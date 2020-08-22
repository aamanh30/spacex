// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pageLimit: '100',
  baseAPIUrl: 'https://api.spaceXdata.com/v3/',
  firebaseConfig: {
    apiKey: 'AIzaSyDurwFhB7Yk2mpjyGs3joozVKcQOD3XZfI',
    authDomain: 'spacex-b8f22.firebaseapp.com',
    databaseURL: 'https://spacex-b8f22.firebaseio.com',
    projectId: 'spacex-b8f22',
    storageBucket: 'spacex-b8f22.appspot.com',
    messagingSenderId: '1095301305891',
    appId: '1:1095301305891:web:316754d967b82e97610396',
    measurementId: 'G-DJLLGKJ2F8'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
