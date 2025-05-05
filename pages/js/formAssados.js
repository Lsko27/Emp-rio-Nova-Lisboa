document.addEventListener('DOMContentLoaded', function () {
    // Selecionando todos os checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            // Selecionando o select relacionado ao checkbox
            const select = checkbox.closest('.col-md-6, .col-md-4, .col-md-12').querySelector('select');

            // Verificando se o checkbox foi marcado
            if (checkbox.checked) {
                select.disabled = false; // Habilita o select
                select.value = ""; // Reseta o valor do select
            } else {
                select.disabled = true; // Desabilita o select
                select.value = ""; // Reseta o valor do select
            }
        });

        // Inicializando os selects com base no estado atual dos checkboxes
        const select = checkbox.closest('.col-md-6, .col-md-4, .col-md-12').querySelector('select');
        if (checkbox.checked) {
            select.disabled = false;
        } else {
            select.disabled = true;
        }
    });
});
document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio do form

    const formSection = document.getElementById('formtot');
    const inputs = formSection.querySelectorAll('.col-md-6, .col-md-4, .col');

    // Armazenar os produtos selecionados
    const produtosSelecionados = [];

    inputs.forEach(group => {
      const checkbox = group.querySelector('input[type="checkbox"]');
      const select = group.querySelector('select');
      
      // Verifica se o checkbox foi marcado e se um valor de quantidade foi selecionado
      if (checkbox && checkbox.checked && select && select.selectedIndex > 0) {
        const nomeProduto = group.querySelector('label').textContent.trim(); // Nome do produto
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
