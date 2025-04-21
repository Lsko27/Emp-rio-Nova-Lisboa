document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio do form se necessário
  
    const formSection = document.getElementById('formtot');
    const inputs = formSection.querySelectorAll('.col-md-6, .col-md-4, .col');
    const produto = document.querySelector('.produtos');
  
    inputs.forEach(group => {
      const checkbox = group.querySelector('input[type="checkbox"]');
      const select = group.querySelector('select');
  
      if (checkbox && checkbox.checked && select) {
          console.log(`Item: ${checkbox.nextElementSibling.textContent.trim()}`);
          console.log(`Quantidade: ${select.options[select.selectedIndex].text}`);
          Swal.fire({
            icon: "success",
            title: "FORMULÁRIO ENVIADO COM SUCESSO!",
          });
      }
    });
  });
