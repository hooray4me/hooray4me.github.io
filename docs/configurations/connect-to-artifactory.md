---
sidebar_position: 2
---

# Connect to Artifactory Container Registry

Do this per namespace (qa, prod, test, dev, etc), or docker images will not pull from Artifactory.

```
kubectl create secret docker-registry regcred \
--docker-server=artifactory.banno-tools.com \
--docker-username=eis-integratedservices \
--docker-password=artifactory_apikey \
--docker-email=tharpool@jhacorp.com \
-n dev
```