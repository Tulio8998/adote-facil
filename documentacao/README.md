# Adote Fácil 🐶🐱

## 📌 Funcionalidades Principais (Histórias de Usuário)

O sistema é construído em torno de quatro experiências centrais:

<details>
  <summary><strong>👤 Gerenciamento de Usuários</strong></summary>
  
  - **Cadastro de novo usuário:**
    > Como um usuário, eu quero me cadastrar na plataforma usando meu nome, e-mail e
    uma senha, para que eu possa ter um perfil e começar a doar ou procurar animais
    para adotar.

  - **Autenticação de usuário (login):**
    >Como um usuário cadastrado, eu quero fazer login com meu e-mail e senha, para
    que eu possa acessar meu painel pessoal, gerenciar meus animais e interagir com
    outros usuários.

  - **Edição de perfil:**
    > Como um usuário logado, eu quero poder atualizar minhas informações de perfil,
    como nome, e-mail ou senha, para que meus dados estejam sempre corretos e
    seguros.
</details>

<details>
  <summary><strong>💬 Comunicação entre Usuários</strong></summary>
  
  - **História: Iniciar uma conversa**
    > Como um adotante, quero iniciar uma conversa com o doador de um animal para tirar dúvidas e manifestar meu interesse na adoção.

  - **História: Enviar e receber mensagens**
    > Como um usuário (doador ou adotante), quero poder trocar mensagens em um chat para me comunicar de forma eficaz sobre a adoção.

  - **História: Visualizar lista de conversas**
    > Como um usuário, quero ver uma lista de todas as minhas conversas ativas para acessar e continuar o diálogo facilmente.
</details>

<details>
  <summary><strong>🐾 Gerenciamento de Animais</strong></summary>
  
  - **Cadastrar animal:**
    > Como usuário com um animal para adoção, quero cadastrá-lo para que os
    interessados possam vê-lo.

  - **Buscar animais disponíveis:**
    > Como um usuário interessado em adotar, quero buscar animais filtrando por
    espécie, sexo e idade, para filtrar facilmente um que se encaixe com o meu
    perfil.

  - **Visualizar detalhes de um animal:**
    > Como um usuário que encontrou um animal interessante, quero visualizar
    todas as informações e fotos dele, para decidir se quero iniciar o processo de
    adoção.
</details>

<details>
  <summary><strong>⭐ Adoção de Animais</strong></summary>
  
  - **Área de exibição de Animais:**
    > Como um candidato à adoção, eu quero que tenha uma área que me mostre todos os animais disponíveis para doação.

  - **Informações de Animal:**
    > Como um candidato à adoção, eu quero ver uma seção de descrição no perfil do animal que quero adotar com informações claras sobre ele como, por exemplo, seu comportamento, para que eu possa tomar uma decisão segura na escolha do meu pet.

  - **Adoção:**
    > Como voluntário do abrigo, eu quero criar um perfil detalhado para cada animal resgatado, incluindo nome, tipo, gênero, raça, foto e descrição para que eu possa registrar sua história, temperamento e necessidades especiais.
</details>


## ✅ Cenários de Teste

Abaixo estão os principais cenários de teste que guiam o desenvolvimento e garantem a qualidade das funcionalidades.

<details>
  <summary><strong>Testes de Gerenciamento de Usuários</strong></summary>

  #### História: Cadastro de novo usuário
  - **Fluxo Principal:** Um usuário que preenche o formulário com dados válidos e únicos deve ser cadastrado com sucesso e redirecionado para a página de login.
  - **Fluxo Alternativo:** O sistema deve impedir o cadastro e exibir um erro específico se o e-mail já estiver em uso, se as senhas não conferem, ou se algum campo obrigatório estiver inválido.

  #### História: Autenticação de usuário (login)
  - **Fluxo Principal:** Um usuário cadastrado que informa seu e-mail e senha corretos deve ser autenticado com sucesso e redirecionado para a área logada do sistema.
  - **Fluxo Alternativo:** O sistema deve negar o acesso e exibir uma mensagem de erro se o usuário informar credenciais incorretas (e-mail ou senha) ou deixar os campos em branco.

  #### História: Editar perfil
  - **Fluxo Principal:** Um usuário logado deve conseguir navegar até a página de edição e salvar com sucesso as alterações em seu nome ou em sua senha.
  - **Fluxo Alternativo:** O sistema deve impedir a atualização e mostrar um erro se o usuário tentar usar um e-mail que já pertence a outra conta, se as novas senhas não forem iguais, ou se um usuário não autenticado tentar acessar a página.
</details>

<details>
  <summary><strong>Testes de Comunicação entre Usuários</strong></summary>

  #### História: Iniciar uma conversa
  - **Fluxo Principal:** Um usuário interessado em um animal clica para entrar em contato com o dono e é direcionado para uma tela de chat, criando uma nova conversa se ela não existir.
  - **Fluxo Alternativo:** O botão para iniciar a conversa não deve estar disponível para os animais que o próprio usuário cadastrou.

  #### História: Enviar e receber mensagens
  - **Fluxo Principal:** Dentro de um chat, um usuário digita uma mensagem e a envia, e ela aparece imediatamente na sua tela e fica disponível para o outro usuário.
  - **Fluxo Alternativo:** O sistema não deve permitir o envio de mensagens em branco ou vazias.

  #### História: Visualizar lista de conversas
  - **Fluxo Principal:** Ao acessar a área de conversas, o usuário visualiza uma lista com todos os seus chats, exibindo o nome do outro usuário e a última mensagem trocada.
  - **Fluxo Alternativo:** Se o usuário ainda não tiver nenhuma conversa, o sistema deve exibir uma mensagem informando que não há chats para mostrar.
</details>

<details>
  <summary><strong>Testes de Gerenciamento de Animais</strong></summary>
  
  #### História: Cadastrar animal
  - **Fluxo Principal:** O usuário deve preencher as informações solicitadas (nome, tipo, gênero, raça, descrição e fotos) e confirmar o envio. O sistema valida os dados e cadastra o animal com sucesso, exibindo uma mensagem de confirmação.
  - **Fluxo Alternativo:** Se o usuário deixar de preencher algum dos campos obrigatórios (nome, tipo ou gênero), o sistema não permite o cadastro do animal e exibe uma mensagem solicitando o preenchimento dos campos.

  #### História: Busca de animais para adoção
  - **Fluxo Principal:** Um usuário que aplica filtros válidos (como espécie e localização) deve visualizar uma lista de animais que correspondem aos critérios escolhidos.
  - **Fluxo Alternativo:** O sistema deve exibir uma mensagem informando que não há animais disponíveis para os filtros selecionados ou que a busca foi inválida.
  
  #### História: Visualização de detalhes de um animal
  - **Fluxo Principal:** Um usuário que clica em um animal na lista deve ser redirecionado para a página de detalhes, onde todas as informações e fotos estão carregadas corretamente.
  - **Fluxo Alternativo:** Se o animal já foi adotado ou teve o anúncio excluído, o sistema não deve exibi-lo na lista.
</details>

<details>
  <summary><strong>Testes de Adoção de Animais</strong></summary>

  #### História: Área de exibição de Animais
  - **Fluxo Principal:** Um usuário faz login e vê os animais disponíveis na aba “Animais disponíveis para adoção.
  - **Fluxo Alternativo:** O sistema impede a visualização dos animais disponíveis na aba “Animais disponíveis para adoção” se não existirem animais disponíveis ou se o login não estiver sido executado com sucesso
  #### História: Informações de Animal
  - **Fluxo Principal:** Um usuário já logado, navega até a página de perfil de um animal específico no sistema, o sistema carrega e exibe informações do animal (nome, espécie, raça, idade, foto) e descrição do animal, contendo informações detalhadas sobre seu comportamento, temperamento, histórico (se aplicável), necessidades especiais, etc.
  - **Fluxo Alternativo:** Um usuário já logado acessa o perfil de um animal e a seção de descrição está vazia ou com informações insuficientes.
  #### História: Adoção
  - **Fluxo Principal:** O voluntário do abrigo inicia o processo fazendo login no sistema do Adote fácil e seleciona a opção ”Disponibilizar animal para adoção”. Em seguida, o sistema apresenta um formulário detalhado onde o voluntário deve preencher todas as informações pertinentes sobre o animal resgatado, incluindo nome, tipo, gênero, raça, foto, e uma descrição abrangente que abranja sua história (como temperamento ou qualquer necessidade especial).
  Após o preenchimento completo do formulário e o upload da foto, o voluntário submete os dados e o sistema os guarda.
  - **Fluxo Alternativo:** Caso o voluntário, já logado, não preencha o formulário com informações ou ocorra uma falha no upload da foto, o sistema identifica os erros e exibirá mensagens claras para que o voluntário possa corrigi-los.
</details>
