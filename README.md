## TP effectué avec : 

OS : Ubuntu 24.04.4 LTS
node : v22.19.0
curl : 8.5.0

## Déploiement bare metal

Pour respecter la contrainte d'écoute simultanée sur le port 9090 sans conflit, chaque service est assigné à un alias loopback distinct (`127.0.0.1` et `127.0.0.2`).

