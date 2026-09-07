# Étape 1 : Build
FROM node:20.18.0-alpine3.20 AS builder
WORKDIR /app
COPY service_B.js ./

# Étape 2 : Runtime final
FROM node:20.18.0-alpine3.20 AS runner
WORKDIR /app

# Copie depuis l'étape précédente avec attribution des droits à node
COPY --from=builder --chown=node:node /app/service_B.js ./

# Définition de l'utilisateur non-root
USER node

# Port
EXPOSE 9090

CMD ["node", "service_B.js"]