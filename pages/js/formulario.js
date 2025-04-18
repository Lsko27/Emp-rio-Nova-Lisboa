document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o envio do form se necessário
  
    const formSection = document.getElementById('formtot');
    const inputs = formSection.querySelectorAll('.col-md-6, .col-md-4');
  
    inputs.forEach(group => {
      const checkbox = group.querySelector('input[type="checkbox"]');
      const select = group.querySelector('select');
  
      if (checkbox && checkbox.checked && select) {
        console.log(`Item: ${checkbox.nextElementSibling.textContent.trim()}`);
        console.log(`Quantidade: ${select.options[select.selectedIndex].text}`);
      }
    });
  });