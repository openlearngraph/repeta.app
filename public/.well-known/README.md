# `.well-known/` — passkey domain binding

These files bind `repeta.app` to the Repeta iOS and Android apps so the OS
will offer passkeys registered on either platform for sign-in on the other.

## `apple-app-site-association`

Replace `TEAMID` with your real Apple Developer Team ID before publishing.
Apple fetches this file from `https://repeta.app/.well-known/apple-app-site-association`
(no extension, served as `application/json`). Verify with:

```sh
curl -I https://repeta.app/.well-known/apple-app-site-association
```

Apple's CDN caches this; allow up to 24 h after a change. While iterating, set
`associatedDomains: ["webcredentials:repeta.app?mode=developer"]` in `app.json`
so iOS bypasses the cache.

## `assetlinks.json`

`sha256_cert_fingerprints` must contain the SHA-256 of every signing cert that
will ever be used to sign an installed Repeta APK. Credential Manager checks
the **installed** APK's cert, so list all of them:

1. **Play app-signing cert** — used by anything installed from the Play Store.
   Get it from Play Console → *Test and release* → *Setup* → *App integrity* →
   *App signing key certificate* → SHA-256. Only present if Play App Signing is
   enabled (default for apps created after Aug 2021).
2. **Upload key** (`olg-app/android/keystore.properties` → `storeFile`) — used
   by `yarn build:android:local` and any sideloaded APK before Play re-signs:

   ```sh
   keytool -list -v \
     -keystore /Users/dumitru/keystores/repeta-upload.keystore \
     -alias repeta-upload \
     | grep SHA256
   ```
3. **Debug keystore** — used by `yarn android` dev builds. Expo prebuild places
   it inside the project, not in `~/.android/`:

   ```sh
   keytool -list -v \
     -keystore olg-app/android/app/debug.keystore \
     -alias androiddebugkey \
     -storepass android -keypass android \
     | grep SHA256
   ```

You can also pull the fingerprint straight from any built APK:

```sh
apksigner verify --print-certs path/to/app-release.apk | grep SHA-256
```

Verify the published file with Google's tester:
https://developers.google.com/digital-asset-links/tools/generator
