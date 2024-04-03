## Projeto FullStack de uma loja virtual feito com [MongoDB](https://www.mongodb.com/) e [Prisma](https://www.prisma.io/) no Backend e [Next.js](https://nextjs.org/) e [Sass](https://sass-lang.com/) no Frontend

### Link do site em produção:
https://react-store-pi.vercel.app/

### Para rodar o projeto localmente:
Renomeie o arquivo ".env.copy" para ".env", que está na pasta ./back-end/
Altere a variável `DATABASE_URL` para uma versão em cloud do MongoDB se necessário.
### Para instalar as dependências:
_Dentro da pasta raiz_:
`npm install`
#### Para iniciar o front-end
*Dentro da pasta raiz:
`npm run dev`
#### Para gerar um novo esquema do prisma (necessário ao alterar o arquivo schema.prisma):
Dentro da pasta raiz:
`npx prisma generate --schema=./back-end/prisma/schema.prisma`
####  Para iniciar o back-end
*Dentro da pasta ./back-end/*:
* Inicie o docker do MongoDB com:
`docker-compose up -d`
* Inicie o backend com:
`npm run dev`

#### Para semear o banco de dados:
` npx prisma db seed `
