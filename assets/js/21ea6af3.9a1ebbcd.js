"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),v=a,f=p["".concat(l,".").concat(v)]||p[v]||d[v]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},c="Vault Setup",i={unversionedId:"configurations/vault-setup",id:"configurations/vault-setup",title:"Vault Setup",description:"Shell into vault-0 and run the following commands:",source:"@site/docs/configurations/vault-setup.md",sourceDirName:"configurations",slug:"/configurations/vault-setup",permalink:"/configurations/vault-setup",draft:!1,editUrl:"https://github.com/hooray4me/hooray4me.github.io/tree/master/docs/configurations/vault-setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Connect to Artifactory Container Registry",permalink:"/configurations/connect-to-artifactory"},next:{title:"Create/Update certificate",permalink:"/configurations/create-certificate"}},l={},u=[{value:"k8 Auth",id:"k8-auth",level:2},{value:"connect cluster",id:"connect-cluster",level:2},{value:"role binding",id:"role-binding",level:2},{value:"Enable kv-2 secret store",id:"enable-kv-2-secret-store",level:2},{value:"Create policy",id:"create-policy",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vault-setup"},"Vault Setup"),(0,a.kt)("p",null,"Shell into vault-0 and run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl exec -i -t -n vault vault-0 -c vault -- sh -c "clear; (bash || ash || sh)"\n')),(0,a.kt)("h2",{id:"k8-auth"},"k8 Auth"),(0,a.kt)("p",null,"Enable k8 authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vault auth enable kubernetes\n")),(0,a.kt)("h2",{id:"connect-cluster"},"connect cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vault write auth/kubernetes/config token_reviewer_jwt="$(cat/var/run/secrets/kubernetes.io/serviceaccount/token)"     kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n')),(0,a.kt)("h2",{id:"role-binding"},"role binding"),(0,a.kt)("p",null,"Create a role that will bind to the argocd-repo-server service account in k8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vault write auth/kubernetes/role/argocd bound_service_account_names=argocd-repo-server bound_service_account_namespaces=argocd policies=argocd ttl=24h\n")),(0,a.kt)("h2",{id:"enable-kv-2-secret-store"},"Enable kv-2 secret store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vault secrets enable kv-v2\nvault kv put kv-v2/argocd password="123456"\n')),(0,a.kt)("h2",{id:"create-policy"},"Create policy"),(0,a.kt)("p",null,"Create a read policy for argo data path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'vault policy write argocd - <<EOF \npath "kv-v2/data/argocd" { capabilities = ["read"] } \nEOF\n')))}p.isMDXComponent=!0}}]);