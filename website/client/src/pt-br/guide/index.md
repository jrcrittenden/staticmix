# Introdução ao Repomix

<script setup>
import HomeBadges from '../../../components/HomeBadges.vue'
import YouTubeVideo from '../../../components/YouTubeVideo.vue'
import { VIDEO_IDS } from '../../../utils/videos'
</script>

O Repomix é uma ferramenta que compacta todo o seu repositório em um único arquivo amigável para IA. Ele foi projetado para ajudá-lo a alimentar seu código-fonte para Modelos de Linguagem Grandes (LLMs) como ChatGPT, Claude, Gemini, Grok, DeepSeek, Perplexity, Gemma, Llama e mais.

<YouTubeVideo :videoId="VIDEO_IDS.REPOMIX_DEMO" />

<HomeBadges />

[![Sponsors](https://cdn.jsdelivr.net/gh/yamadashy/sponsor-list/sponsors/sponsors.png)](https://github.com/sponsors/yamadashy)

## Início Rápido

Execute este comando no diretório do seu projeto:

```bash
npx repomix@latest
```

É isso! Você encontrará um arquivo `repomix-output.xml` contendo todo o seu repositório em um formato amigável para IA.

Você pode então enviar este arquivo para um assistente de IA com um prompt como:

```
Este arquivo contém todos os arquivos do repositório combinados em um só.
Eu quero refatorar o código, então, por favor, revise-o primeiro.
```

A IA analisará todo o seu código-fonte e fornecerá insights abrangentes:

![Uso do Arquivo Repomix 1](/images/docs/repomix-file-usage-1.png)

Ao discutir mudanças específicas, a IA pode ajudar a gerar código. Com recursos como o Artifacts do Claude, você pode até receber vários arquivos interdependentes:

![Uso do Arquivo Repomix 2](/images/docs/repomix-file-usage-2.png)

Feliz codificação! 🚀

## Por que Repomix?

A força do Repomix reside em sua capacidade de trabalhar com serviços de assinatura como ChatGPT, Claude, Gemini, Grok sem se preocupar com custos, enquanto fornece contexto completo da base de código que elimina a necessidade de exploração de arquivos—tornando a análise mais rápida e frequentemente mais precisa.

Com toda a base de código disponível como contexto, o Repomix permite uma ampla gama de aplicações incluindo planejamento de implementação, investigação de bugs, verificações de segurança de bibliotecas de terceiros, geração de documentação e muito mais.

## Principais Recursos

- **Saída Otimizada para IA**: Formata seu código-fonte para fácil processamento por IA
- **Contagem de Tokens**: Rastreia o uso de tokens para limites de contexto de LLM
- **Consciente do Git**: Respeita seus arquivos `.gitignore` e `.git/info/exclude`
- **Focado em Segurança**: Detecta informações sensíveis
- **Múltiplos Formatos de Saída**: Escolha entre texto simples, XML ou Markdown

## O que vem a seguir?

- [Guia de Instalação](installation.md): Diferentes maneiras de instalar o Repomix
- [Guia de Uso](usage.md): Aprenda sobre recursos básicos e avançados
- [Configuração](configuration.md): Personalize o Repomix para suas necessidades
- [Recursos de Segurança](security.md): Aprenda sobre verificações de segurança

## Comunidade

Junte-se à nossa [comunidade Discord](https://discord.gg/wNYzTwZFku) para:
- Obter ajuda com o Repomix
- Compartilhar suas experiências
- Sugerir novos recursos
- Conectar-se com outros usuários

## Suporte

Encontrou um bug ou precisa de ajuda?
- [Abra um problema no GitHub](https://github.com/yamadashy/repomix/issues)
- Junte-se ao nosso servidor Discord
- Verifique a [documentação](https://repomix.com)
