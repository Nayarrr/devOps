## TP effectué avec : 

OS : Ubuntu 24.04.4 LTS
node : v22.19.0
curl : 8.5.0

## Déploiement bare metal

Pour respecter la contrainte d'écoute simultanée sur le port 9090 sans conflit, chaque service est assigné à un alias loopback distinct (`127.0.0.1` et `127.0.0.2`).

## Déploiement Docker

Deux dockerfile pour chaque service, tous les deux sont lancés suivant le docker compose. De cette manière on impose une version de node 

## Non-root

Par défaut, les conteneurs Docker exécutent les process avec l'utilisateur `root`.

On a imposé à l'utilisateur avec `USER node`, restreignant strictement les droits aux seuls besoins du serveur Node.js.

Exemple : 

# En Root : 

ubuntu@dell-pret-ig-J5H85S2:~/devOps/tp1$ docker compose exec --user root service-a whoami
root
ubuntu@dell-pret-ig-J5H85S2:~/devOps/tp1$ docker compose exec --user root service-a apk add --no-cache nmap
fetch https://dl-cdn.alpinelinux.org/alpine/v3.20/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.20/community/x86_64/APKINDEX.tar.gz
(1/4) Installing lua5.4-libs (5.4.6-r1)
(2/4) Installing libpcap (1.10.4-r1)
(3/4) Installing libssh2 (1.11.0-r3)
(4/4) Installing nmap (7.95-r0)
    # Ctrl + C a cette étape afin d'éviter d'installer pour rien



ubuntu@dell-pret-ig-J5H85S2:~/devOps/tp1$ docker compose exec service-a whoami
node

ubuntu@dell-pret-ig-J5H85S2:~/devOps/tp1$ docker compose exec service-a apk add --no-cache nmap
ERROR: Unable to lock database: Permission denied
ERROR: Failed to open apk database: Permission denied