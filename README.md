
# Dashboard Financeira Simples

Este projeto é uma dashboard financeira simples construída com Next.js, Prisma ORM e NextAuth para autenticação. O projeto utiliza o banco de dados serverless da Neon.tech, é 100% responsivo e incorpora gráficos do Chart.js para uma representação visual dos gastos.


# Funcionalidades
- Dashboard Financeira: Uma interface simples e intuitiva para visualizar informações financeiras.

- Criação de Cartão de Crédito: Funcionalidade para adicionar cartões de crédito ao perfil do usuário.

- Gerenciamento de Despesas e Categorias: Permite criar e categorizar despesas.
- Adição de Dinheiro na Conta: Capacidade de adicionar fundos à conta do usuário.
- Visualização Gráfica de Gastos: Utilização do Chart.js para exibir gastos de forma gráfica e interativa.
- Temas: Suporte a temas para personalização da experiência do usuário.
- Autenticação Completa: Implementação de autenticação usando NextAuth.
- Design Responsivo: Interface adaptável para uma ótima experiência em diferentes dispositivos.

## Referência

- [@auth/prisma-adapter](https://www.npmjs.com/package/@auth/prisma-adapter)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [@nextui-org/react](https://www.npmjs.com/package/@nextui-org/react)
- [@prisma/client](https://www.npmjs.com/package/@prisma/client)
- [@radix-ui/react-avatar](https://www.npmjs.com/package/@radix-ui/react-avatar)
- [@radix-ui/react-dialog](https://www.npmjs.com/package/@radix-ui/react-dialog)
- [@radix-ui/react-dropdown-menu](https://www.npmjs.com/package/@radix-ui/react-dropdown-menu)
- [@radix-ui/react-icons](https://www.npmjs.com/package/@radix-ui/react-icons)
- [@radix-ui/react-label](https://www.npmjs.com/package/@radix-ui/react-label)
- [@radix-ui/react-popover](https://www.npmjs.com/package/@radix-ui/react-popover)
- [@radix-ui/react-select](https://www.npmjs.com/package/@radix-ui/react-select)
- [@radix-ui/react-slot](https://www.npmjs.com/package/@radix-ui/react-slot)
- [@radix-ui/react-switch](https://www.npmjs.com/package/@radix-ui/react-switch)
- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [chart.js](https://www.npmjs.com/package/chart.js)
- [class-variance-authority](https://www.npmjs.com/package/class-variance-authority)
- [clsx](https://www.npmjs.com/package/clsx)
- [cmdk](https://www.npmjs.com/package/cmdk)
- [decimal.js](https://www.npmjs.com/package/decimal.js)
- [embla-carousel-react](https://www.npmjs.com/package/embla-carousel-react)
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [intl](https://www.npmjs.com/package/intl)
- [lucide-react](https://www.npmjs.com/package/lucide-react)
- [next](https://www.npmjs.com/package/next)
- [next-auth](https://www.npmjs.com/package/next-auth)
- [next-themes](https://www.npmjs.com/package/next-themes)
- [numeral](https://www.npmjs.com/package/numeral)
- [react](https://www.npmjs.com/package/react)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-hook-form](https://www.npmjs.com/package/react-hook-form)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-intl](https://www.npmjs.com/package/react-intl)
- [react-responsive](https://www.npmjs.com/package/react-responsive)
- [sonner](https://www.npmjs.com/package/sonner)
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge)
- [tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)
- [vaul](https://www.npmjs.com/package/vaul)
- [zod](https://www.npmjs.com/package/zod)


## Deploy e Configuração

Este projeto utiliza Next.js e pode ser facilmente implantado e configurado. Aqui estão os passos para clonar e executar o projeto localmente:

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

### Clonando o Projeto

- 1 Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://link-para-o-seu-repositorio.git


- 2 Entre na pasta do seu projeto 

    ```bash
    cd nome-da-sua-pasta

- 3 Variáveis de ambiente.

Para executar este projeto corretamente, você precisará configurar algumas variáveis de ambiente. Essas variáveis são cruciais para o funcionamento de diversas funcionalidades, incluindo conexões com bancos de dados, APIs e serviços de autenticação.

Siga os passos abaixo para configurar as variáveis de ambiente:

Crie um arquivo .env na raiz do seu projeto. Este arquivo será utilizado para armazenar todas as suas variáveis de ambiente locais.

Adicione as variáveis necessárias ao seu arquivo .env Abaixo está uma lista das variáveis de ambiente que você precisará configurar:

- DATABASE_URL= [Neon Tech](https://neon.tech/)

- DIRECT_URL= [Neon Tech](https://neon.tech/)

- NEXTAUTH_SECRET= [Next Auth](https://authjs.dev/?_gl=1*finbkh*_gcl_au*MTg3NTEwNjY3Mi4xNzA1NDI0NjE1)

- GITHUB_CLIENT_ID= [Github](https://github.com)

- GITHUB_CLIENT_SECRET= [Github](https://github.com)

- GOOGLE_CLIENT_ID= [Google](https://console.cloud.google.com/)

- GOOGLE_CLIENT_SECRET= [Google](https://console.cloud.google.com/)


- 4 Instale as dependências do projeto:

    ```bash
    npm i next@latest

- 5 Após a configuração, você pode iniciar o servidor de desenvolvimento:

    ```bash
    npm run dev


## Deploy e Acesso ao Projeto

O projeto já está hospedado e disponível para visualização na [Vercel](https://financial-rho.vercel.app/). Fique à vontade para explorar a aplicação e suas funcionalidades. Aqui estão algumas notas importantes sobre o acesso e uso da aplicação:

Informações sobre o Login
Provedor Google: Atualmente, estamos enfrentando um problema técnico com o login via Google. Estamos trabalhando para resolver essa questão o mais rápido possível. Enquanto isso, a funcionalidade de login pelo Google não estará disponível.

Provedor GitHub: O login através do GitHub está funcionando perfeitamente. Se você preferir, pode utilizar sua conta GitHub para acessar o sistema.

Cadastro Tradicional: Se não desejar vincular uma conta de rede social, oferecemos a opção de se registrar com um e-mail e senha tradicionais.

Suporte e Contato
Se você encontrar qualquer dificuldade ou tiver perguntas sobre o projeto, não hesite em entrar em contato comigo. Estou disponível tanto no LinkedIn quanto no Instagram para esclarecer dúvidas ou receber feedback sobre a aplicação. Sua opinião e experiência são muito valiosas para a melhoria contínua do projeto.

Agradecimentos
Agradeço por tomar o tempo para explorar este projeto. Toda e qualquer contribuição, seja através de feedback ou sugestões, é enormemente apreciada.

- [Instagram](https://www.instagram.com/eliasmartinzs/) - Para contato 

- [Linkdein](https://www.linkedin.com/in/elias-martins-242a95258/) - Para contato