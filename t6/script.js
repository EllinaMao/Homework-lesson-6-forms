
    const TICKET_PRICE = 62; 
    let bookedDb = [];
    function renderSeats(bookedSeatsForThisRoute) {
        const grid = document.getElementById('seatsGrid');
        grid.innerHTML = ''; 

        for (let i = 1; i <= 28; i++) {
            const seatDiv = document.createElement('div');
            seatDiv.className = 'seat-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = i;
            checkbox.onchange = calculateTotal; 

            if (bookedSeatsForThisRoute.includes(i)) {
                checkbox.disabled = true;
                seatDiv.classList.add('booked');
            }

            const label = document.createElement('span');
            label.innerText = i;

            seatDiv.appendChild(checkbox);
            seatDiv.appendChild(label);
            grid.appendChild(seatDiv);
        }
    }

    function searchTickets() {
        const direction = document.getElementById('directionSelect').value;
        const date = document.getElementById('dateInput').value;

        if(date.trim() === "") {
            alert("Please enter a date");
            return;
        }

        const occupiedSeats = bookedDb
            .filter(ticket => ticket.direction === direction && ticket.date === date)
            .map(ticket => ticket.seat);

        document.getElementById('bookingArea').style.display = 'block';
        
        renderSeats(occupiedSeats);
        
        calculateTotal();
    }

    function calculateTotal() {
        const checkboxes = document.querySelectorAll('#seatsGrid input[type="checkbox"]:checked:not(:disabled)');
        const total = checkboxes.length * TICKET_PRICE;
        document.getElementById('totalPrice').innerText = total;
    }

    function bookTickets() {
        const direction = document.getElementById('directionSelect').value;
        const date = document.getElementById('dateInput').value;
        
        const checkboxes = document.querySelectorAll('#seatsGrid input[type="checkbox"]:checked:not(:disabled)');

        if (checkboxes.length === 0) {
            alert("Please select at least one seat.");
            return;
        }

        checkboxes.forEach(chk => {
            bookedDb.push({
                direction: direction,
                date: date,
                seat: parseInt(chk.value)
            });
        });

        updateTicketsTable();

        searchTickets(); 
        alert("Tickets booked successfully!");
    }

    function updateTicketsTable() {
        const tbody = document.getElementById('ticketsTableBody');
        tbody.innerHTML = '';

        bookedDb.forEach(ticket => {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${ticket.direction}</td>
                <td>${ticket.date}</td>
                <td>${ticket.seat}</td>
            `;
            tbody.appendChild(row);
        });
    }
