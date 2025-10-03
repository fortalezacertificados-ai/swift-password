export const translations = {
  en: {
    title: "Password Generator",
    subtitle: "Generate your secure password now",
    length: "Password Length",
    uppercase: "Include Uppercase Letters (A-Z)",
    lowercase: "Include Lowercase Letters (a-z)",
    numbers: "Include Numbers (0-9)",
    symbols: "Include Symbols (!@#$%)",
    generate: "Generate Password",
    copy: "Copy",
    copied: "Copied to clipboard!",
    securityTitle: "Security Tips",
    securityTips: [
      "Use at least 12 characters for stronger security",
      "Mix letters, numbers and symbols",
      "Avoid common words or patterns",
      "Never reuse passwords across different sites",
      "Consider using a password manager"
    ]
  },
  es: {
    title: "Generador de Contraseñas",
    subtitle: "Genera tu contraseña segura ahora",
    length: "Longitud de la Contraseña",
    uppercase: "Incluir Letras Mayúsculas (A-Z)",
    lowercase: "Incluir Letras Minúsculas (a-z)",
    numbers: "Incluir Números (0-9)",
    symbols: "Incluir Símbolos (!@#$%)",
    generate: "Generar Contraseña",
    copy: "Copiar",
    copied: "¡Copiado al portapapeles!",
    securityTitle: "Consejos de Seguridad",
    securityTips: [
      "Usa al menos 12 caracteres para mayor seguridad",
      "Mezcla letras, números y símbolos",
      "Evita palabras comunes o patrones",
      "Nunca reutilices contraseñas en diferentes sitios",
      "Considera usar un gestor de contraseñas"
    ]
  },
  fr: {
    title: "Générateur de Mot de Passe",
    subtitle: "Générez votre mot de passe sécurisé maintenant",
    length: "Longueur du Mot de Passe",
    uppercase: "Inclure des Lettres Majuscules (A-Z)",
    lowercase: "Inclure des Lettres Minuscules (a-z)",
    numbers: "Inclure des Chiffres (0-9)",
    symbols: "Inclure des Symboles (!@#$%)",
    generate: "Générer le Mot de Passe",
    copy: "Copier",
    copied: "Copié dans le presse-papiers!",
    securityTitle: "Conseils de Sécurité",
    securityTips: [
      "Utilisez au moins 12 caractères pour plus de sécurité",
      "Mélangez lettres, chiffres et symboles",
      "Évitez les mots courants ou les motifs",
      "Ne réutilisez jamais les mots de passe sur différents sites",
      "Envisagez d'utiliser un gestionnaire de mots de passe"
    ]
  },
  de: {
    title: "Passwort-Generator",
    subtitle: "Generieren Sie jetzt Ihr sicheres Passwort",
    length: "Passwortlänge",
    uppercase: "Großbuchstaben einschließen (A-Z)",
    lowercase: "Kleinbuchstaben einschließen (a-z)",
    numbers: "Zahlen einschließen (0-9)",
    symbols: "Symbole einschließen (!@#$%)",
    generate: "Passwort generieren",
    copy: "Kopieren",
    copied: "In die Zwischenablage kopiert!",
    securityTitle: "Sicherheitstipps",
    securityTips: [
      "Verwenden Sie mindestens 12 Zeichen für mehr Sicherheit",
      "Mischen Sie Buchstaben, Zahlen und Symbole",
      "Vermeiden Sie gebräuchliche Wörter oder Muster",
      "Verwenden Sie niemals dasselbe Passwort auf verschiedenen Websites",
      "Erwägen Sie die Verwendung eines Passwort-Managers"
    ]
  },
  pt: {
    title: "Gerador de Senhas",
    subtitle: "Gere sua senha segura agora",
    length: "Comprimento da Senha",
    uppercase: "Incluir Letras Maiúsculas (A-Z)",
    lowercase: "Incluir Letras Minúsculas (a-z)",
    numbers: "Incluir Números (0-9)",
    symbols: "Incluir Símbolos (!@#$%)",
    generate: "Gerar Senha",
    copy: "Copiar",
    copied: "Copiado para a área de transferência!",
    securityTitle: "Dicas de Segurança",
    securityTips: [
      "Use pelo menos 12 caracteres para maior segurança",
      "Misture letras, números e símbolos",
      "Evite palavras comuns ou padrões",
      "Nunca reutilize senhas em sites diferentes",
      "Considere usar um gerenciador de senhas"
    ]
  }
};

export type Language = keyof typeof translations;
