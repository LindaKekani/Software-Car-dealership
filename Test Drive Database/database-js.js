
document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    
    let name = document.getElementById('nameInput').value;
    let model = document.getElementById('modelInput').value;
  
    const inputElement = document.getElementById("digitInput");
    const digitCountElement = document.getElelmentById("digitInput");
    const digitOnly = inputText.replace(/\D/g, " ");
    const truncatedDigits = digitsOnly.slice(0, 10);
    inputElement.value = truncatedDigits;
    digitCountElement.textContent = truncatedDigits.length + " / 1o digits"; 
 
    let car = {
      name: name,
      model: model
    };
  
  
    fetch('/addCar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        if (data.success) {
        
        document.getElementById('nameInput').value = '';
        document.getElementById('modelInput').value = '';
  
    
        let newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + data.car.name + '</td><td>' + data.car.model + '</td>';
        document.getElementById('carTable').appendChild(newRow);
      } else {
        alert('Failed to add car');
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  });
  