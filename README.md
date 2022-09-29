## Projeto FullStack de uma loja virtual feito com [MongoDB](https://www.mongodb.com/) e [Prisma](https://www.prisma.io/) no Backend e [Next.js](https://nextjs.org/) e [Sass](https://sass-lang.com/) no Frontend

### Para rodar o projeto localmente:
Renomeie o arquivo ".env.copy" para ".env", que está na pasta ./back-end/
Altere a variável `DATABASE_URL` se necessário.
### Para instalar as dependências:
_Dentro da pasta raiz_:
`npm run prestart`
#### Para iniciar o front-end
*Dentro da pasta ./front-end/*:
`npm run dev`
####  Para iniciar o back-end
*Dentro da pasta ./back-end/*:
* Inicie o docker do MongoDB com:
`docker-compose up -d`
* Inicie o backend com:
`npm run dev`

#### Para semear o banco de dados:
` npx prisma db seed `
