FROM node:12.18.3
ENV NODE_ENV=development
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install \
    && npm install react-scripts@3.4.1 -g
EXPOSE 3000
COPY . .
CMD ["npm",  "start"]



