document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // Lista de campos que serão validados individualmente
  const fields = form.querySelectorAll('input[required], select[required], input[minlength], input[pattern]');

  fields.forEach(field => {
    // Valida o campo quando o usuário perde o foco (on blur)
    field.addEventListener('blur', () => {
      validateField(field);
    });

    // Limpa o erro em tempo real assim que o usuário digita algo válido
    field.addEventListener('input', () => {
      if (field.checkValidity()) {
        clearError(field);
      }
    });
  });

  // Evento de envio do formulário
  form.addEventListener('submit', (event) => {
    let isFormValid = true;
    const errorsList = [];

    // Valida todos os campos antes de submeter
    fields.forEach(field => {
      const isValid = validateField(field);
      if (!isValid) {
        isFormValid = false;
        
        // Captura o texto da label para criar o link do resumo
        const labelText = document.querySelector(`label[for="${field.id}"]`)?.textContent.replace('*', '').trim() 
                          || field.placeholder 
                          || field.name;
                          
        errorsList.push({ id: field.id, message: getCustomMessage(field), label: labelText });
      }
    });

    // Validação extra: Confirmar se as senhas são iguais
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmarSenha');
    if (senha && confirmarSenha && senha.value !== confirmarSenha.value) {
      isFormValid = false;
      setError(confirmarSenha, 'As senhas digitadas não são iguais.');
      errorsList.push({ id: confirmarSenha.id, message: 'As senhas digitadas não são iguais.', label: 'Confirmar Senha' });
    }

    if (!isFormValid) {
      event.preventDefault(); // Impede o envio do formulário
      renderErrorSummary(errorsList);
    }
  });

  // Função principal para validar um campo isolado
  function validateField(field) {
    // Ignora botões e o campo oculto honeypot
    if (field.type === 'submit' || field.tabIndex === -1) 
      return true;

    if (!field.checkValidity()) {
      const errorMessage = getCustomMessage(field);
      setError(field, errorMessage);
      return false;
    } else {
      clearError(field);
      return true;
    }
  }

  // Define o estado de erro no HTML em conformidade com acessibilidade
  function setError(field, message) {
    const errorId = `${field.id}-error`;
    let errorSpan = document.getElementById(errorId);

    // Se o elemento de erro não existir, cria um logo após o input
    if (!errorSpan) {
      errorSpan = document.createElement('span');
      errorSpan.id = errorId;
      errorSpan.className = 'error-message'; // Use para estilizar no CSS (ex: cor vermelha)
      errorSpan.style.color = '#c0392b';
      errorSpan.style.display = 'block';
      errorSpan.style.marginTop = '5px';
      field.parentNode.insertBefore(errorSpan, field.nextSibling);
    }

    errorSpan.textContent = message;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errorId);
  }

  // Remove o estado de erro e limpa os atributos ARIA
  function clearError(field) {
    const errorId = `${field.id}-error`;
    const errorSpan = document.getElementById(errorId);

    if (errorSpan) {
      errorSpan.remove();
    }
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }

  // Gera mensagens personalizadas legíveis por humanos e tecnologias assistivas
  function getCustomMessage(field) {
    if (field.validity.valueMissing) {
      return 'Este campo é obrigatório.';
    }
    else if(field.validity.tooShort) {
      return `O campo deve ter no mínimo ${field.minLength} caracteres.`;
    }
    else if(field.validity.patternMismatch) {
      if (field.id === 'cpf') return 'Digite o CPF no formato válido (000.000.000-00).';
      return 'O formato digitado não é válido.';
    }
    else if(field.validity.typeMismatch && field.type === 'email') {
      return 'Por favor, insira um endereço de e-mail válido.';
    }
    return field.validationMessage;
  }

});