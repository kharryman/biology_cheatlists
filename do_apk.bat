CALL react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/
FOR /D %%i in (android\app\src\main\res\drawable-*) do rd /s /q %%i
CALL del /q /S "android\app\src\main\res\raw\*"
CALL cd android
CALL gradlew assembleRelease
CALL cd ..


REM react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res