# OpenShift dev environement variables

Simulate gear environement variables.

## How to use

```
$ git clone https://github.com/Filirom1/openshift-dev-env.git
$ cd openshift-dev-env
$ git clone https://github.com/AtosWorldline/openshift-cartridge-tomcat-community.git cartridge
$ mkdir repo # create your repo there
$ ./oo-env.js
export OPENSHIFT_TOMCAT_DIR=/home/romain/openshift-dev-env/cartridge/
export OPENSHIFT_TOMCAT_LOG_DIR=/home/romain/openshift-dev-env/cartridge/logs/
export OPENSHIFT_TOMCAT_IP=127.9.129.129
export OPENSHIFT_TOMCAT_VERSION=2.0
export OPENSHIFT_TOMCAT_IDENT=atosworldline:tomcat:7.0:0.0.1
export OPENSHIFT_TMP_DIR=/tmp//
export OPENSHIFT_REPO_DIR=/home/romain/openshift-dev-env/repo/
export OPENSHIFT_DATA_DIR=/home/romain/openshift-dev-env/data/
export OPENSHIFT_HOMEDIR=/home/romain/openshift-dev-env/home/
export OPENSHIFT_APP_NAME=tomcat
export OPENSHIFT_GEAR_NAME=tomcat
export OPENSHIFT_CLOUD_DOMAIN=example.com
export OPENSHIFT_APP_DNS=test-namespace.example.com
export OPENSHIFT_GEAR_DNS=test-namespace.example.com
export OPENSHIFT_DNS=test-namespace.example.com
export OPENSHIFT_NAMESPACE=namespace
export OPENSHIFT_GEAR_UUID=51c9c022e0b8cd9c83000044
export OPENSHIFT_APP_UUID=51c9c022e0b8cd9c83000044
export OPENSHIFT_BROKER_HOST=localhost
export OPENSHIFT_PRIMARY_CARTRIDGE_DIR=/home/romain/openshift-dev-env/cartridge/
export CARTRIDGE_VERSION_2=2
export OPENSHIFT_CARTRIDGE_SDK_BASH=/home/romain/sdk/sdk
export OPENSHIFT_CARTRIDGE_SDK_RUBY=/home/romain/sdk/sdk.rb
export M2_HOME=/etc/alternatives/maven-3.0
export OPENSHIFT_TOMCAT_JDK6=/usr/lib/jvm/jre-1.6.0/
export OPENSHIFT_TOMCAT_JDK7=/usr/lib/jvm/jre-1.7.0/

```
