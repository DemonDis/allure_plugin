# ALLURE 

## Start Allure

```bash
$ allure generate logs --clean -o report
```
```bash
$ allure open -p 9999 report&
```
```bash
$ cp -r ./report/history ./logs
```




allure generate


allure --version
2.25.0

node -v
v18.19.0

gradle -version
Gradle 8.1.1

java -version
java version "20.0.2" 2023-07-18
Java(TM) SE Runtime Environment (build 20.0.2+9-78)
Java HotSpot(TM) 64-Bit Server VM (build 20.0.2+9-78, mixed mode, sharing)

https://docs.azul.com/core/uninstall/macos.html
cd /Library/Java/JavaVirtualMachines/
sudo rm -rf

https://sdkman.io/usage
sdk install java

https://www.java.com/ru/download/help/mac_uninstall_java.html
sudo rm -fr /Library/Internet\ Plug-Ins/JavaAppletPlugin.plugin
sudo rm -fr /Library/PreferencesPanes/JavaControlPanel.prefPane
sudo rm -fr ~/Library/Application\ Support/Oracle/Java

Error message "error:0308010C:digital envelope routines::unsupported"
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

ou can try one of these:

1. Downgrade to Node.js v16.

    You can reinstall the current LTS version from Node.js’ website.

    You can also use nvm. For Windows, use nvm-windows.

2. Enable legacy OpenSSL provider.

On Unix-like (Linux, macOS, Git bash, etc.):

export NODE_OPTIONS=--openssl-legacy-provider
