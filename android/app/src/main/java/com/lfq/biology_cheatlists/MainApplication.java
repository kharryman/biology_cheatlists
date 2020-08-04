package com.lfq.biology_cheatlists;

import android.annotation.SuppressLint;
import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.google.android.gms.ads.RequestConfiguration;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
//import androidx.multidex.MultiDexApplication;
import com.google.android.gms.ads.MobileAds;
import io.invertase.firebase.admob.ReactNativeFirebaseAdmobPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
            //packages.add(new ReactNativeFirebaseAdmobPackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  //@SuppressLint("MissingPermission")
  @Override
  public void onCreate() {
    super.onCreate();
      List<String> testDeviceIds = Arrays.asList("2A5A9A7C7D984C8B1B9C49E0C1F3009B");
      RequestConfiguration configuration =
              new RequestConfiguration.Builder().setTestDeviceIds(testDeviceIds).build();
      MobileAds.setRequestConfiguration(configuration);
    MobileAds.initialize(this, "ca-app-pub-8514966468184377~3569828390");
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.lfq.biology_cheatlists.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
