---
sidebar_position: 4
---

# Create/Update certificate
Create or update the certificate used by istio.

## Extract the .key file from the .pfx file
```
openssl pkcs12 -in pfx-filename.pfx -nocerts -out key-filename.key
```
## Decrypt the .key file
```
openssl rsa -in key-filename.key -out key-filename-decrypted.key
```
## Extract the .crt file from .pfx file
```
openssl pkcs12 -in pfx-filename.pfx -clcerts -nokeys | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > crt-filename.crt
```
## Extract the cacerts from .pfx file
```
openssl pkcs12 -in pfx-filename.pfx -cacerts -nokeys -chain | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > cacerts.cer
```
## Combine certificate and ca certs
```
cat crt-filename.crt cacerts.cer > combined_cert.pem
```
##  Create a secret in your Kubernetes cluster
```
kubectl create secret tls your-secret-name --cert combined_cert.pem --key key-filename-decrypted.key
kubectl create secret tls ingress-cert -n istio-ingress --cert combined_cert.pem --key key-filename-decrypted.key
```
## Verify that your new secret exists in your clusters namespace
```
kubectl get secret -n istio-ingress
```
## Update your Ingress tls to match your new secret
```
kind: Ingress
metadata:
  name: your-ingress
spec:
  tls:
  - secretName: your-secret-name      
  - hosts: 
    - your-host-name.com
```
## Apply using continuous deployment or manually using
```
kubectl apply -f your-ingress.yml
```
## Test your new https host (wait five minutes after deploy)
```
curl -v https://your-host-name.com
```
