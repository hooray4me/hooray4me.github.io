---
sidebar_position: 3
---

# Vault Setup

Shell into vault-0 and run the following commands:

```
kubectl exec -i -t -n vault vault-0 -c vault -- sh -c "clear; (bash || ash || sh)"
```
## k8 Auth
Enable k8 authentication
```
vault auth enable kubernetes
```
## connect cluster
```
vault write auth/kubernetes/config token_reviewer_jwt="$(cat/var/run/secrets/kubernetes.io/serviceaccount/token)"     kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt
```
## role binding
Create a role that will bind to the argocd-repo-server service account in k8
```
vault write auth/kubernetes/role/argocd bound_service_account_names=argocd-repo-server bound_service_account_namespaces=argocd policies=argocd ttl=24h
```
## Enable kv-2 secret store
```
vault secrets enable kv-v2
vault kv put kv-v2/argocd password="123456"
```
## Create policy
Create a read policy for argo data path
```
vault policy write argocd - <<EOF 
path "kv-v2/data/argocd" { capabilities = ["read"] } 
EOF
```