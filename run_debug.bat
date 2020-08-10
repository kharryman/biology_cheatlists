CALL del /q /S "android\app\src\main\assets\index.android.bundle"
CALL cd android
CALL gradlew clean
CALL cd ..
CALL react-native bundle --dev false --platform android --entry-file index.js --bundle-output android\app\src\main\assets\index.android.bundle --assets-dest android\app\src\main\res
FOR /D %%i in (android\app\src\main\res\drawable-*) do rd /s /q %%i
CALL del /q /S "android\app\src\main\res\raw\*"
CALL react-native run-android