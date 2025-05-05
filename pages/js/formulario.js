document.getElementById('btn').addEventListener('click', function (e) {
  e.preventDefault(); // Impede o envio do form se necessário

  const formSection = document.getElementById('formtot');
  const inputs = formSection.querySelectorAll('.col-md-6, .col-md-4, .col');
  
  // Armazenar os produtos selecionados
  const produtosSelecionados = [];

  inputs.forEach(group => {
    const checkbox = group.querySelector('input[type="checkbox"]');
    const select = group.querySelector('select');
    
    // Verifica se o checkbox foi marcado e se um valor de quantidade foi selecionado
    if (checkbox && checkbox.checked && select) {
      const nomeProduto = checkbox.nextElementSibling.textContent.trim(); // Nome do produto
      const quantidade = select.options[select.selectedIndex].text; // Quantidade selecionada

      // Adiciona os itens selecionados ao array
      produtosSelecionados.push(`${nomeProduto}: ${quantidade}`);
    }
  });

  // Se houver produtos selecionados, exibe a mensagem de sucesso
  if (produtosSelecionados.length > 0) {
    Swal.fire({
      icon: "success",
      title: "FORMULÁRIO ENVIADO COM SUCESSO!",
      text: "Produtos selecionados: " + produtosSelecionados.join(", "),
    });
  } else {
    // Caso nenhum item tenha sido selecionado
    Swal.fire({
      icon: "warning",
      title: "Nenhum produto foi selecionado",
      text: "Por favor, marque ao menos um produto e escolha uma quantidade.",
    });
  }
});
