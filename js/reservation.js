
   const form = document.getElementById('bookingForm');
    const errorDiv = document.getElementById('error');

    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 


        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        


        let errors = [];


        if (name === '') {
            errors.push('Customer name is required.');
        }

        if (email === '') {
            errors.push('Email address is required.');
        }

        if (phone === '') {
            errors.push('Phone number is required.');
        }
        
        if (date === '') {
            errors.push('Reservation date is required.');
        }
        
        if (time === '') {
            errors.push('Reservation time is required.');
        }
        
        
        if (parseInt(guests) < 1 || guests === '') {
            errors.push('Number of guests must be 1 or more.');
        }
        
     
        
        
        if (date && time) {
            const selectedDateTime = new Date(`${date}T${time}`);
            const currentDateTime = new Date();
            
            
            currentDateTime.setMinutes(currentDateTime.getMinutes() - 1); 

            if (selectedDateTime < currentDateTime) {
                errors.push("Reservation date and time cannot be in the past.");
            }
        }


        

        if (errors.length > 0) {
        

            errorDiv.innerHTML = ''; 
            
            
            errorDiv.innerHTML += '<strong>Please enter the required information to avoid incomplete bookings:</strong><br>'; 
            
            
            const errorList = document.createElement('ul');
            errors.forEach(function(msg) {
                const listItem = document.createElement('li');
                listItem.textContent = msg;
                errorList.appendChild(listItem);
            });
            
            
            errorDiv.appendChild(errorList);
            errorDiv.style.display = 'block'; 

        } else {
            
            errorDiv.style.display = 'none'; 

            console.log("Validation Passed! Data:", {name, email, phone, date, time, guests: parseInt(guests)});
            alert(' Thank YouReservation confirmed!');
            
            
            form.reset(); 
        }

    });

