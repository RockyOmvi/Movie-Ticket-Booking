const seatMap = document.getElementById('seat-map');
const selectedSeatsDisplay = document.getElementById('selected-seats');
const confirmButton = document.getElementById('confirm-btn');

const seatsData = [
    { id: 1, status: 'available' },
    { id: 2, status: 'available' },
    { id: 3, status: 'booked' },
    { id: 4, status: 'available' },
    { id: 5, status: 'available' },
    { id: 6, status: 'available' },
    { id: 7, status: 'booked' },
    { id: 8, status: 'available' },
    { id: 9, status: 'available' },
    { id: 10, status: 'available' },
    // Add more seats as needed
];

function generateSeats() {
    seatsData.forEach(seat => {
        const seatElement = document.createElement('div');
        seatElement.classList.add('seat');
        seatElement.classList.add(seat.status);
        seatElement.innerText = seat.id;

        seatElement.addEventListener('click', () => {
            if (seat.status === 'available') {
                seatElement.classList.toggle('selected');
                updateSelectedSeats();
            }
        });

        seatMap.appendChild(seatElement);
    });
}

function updateSelectedSeats() {
    const selectedSeats = [...document.querySelectorAll('.seat.selected')].map(seat => seat.innerText);
    selectedSeatsDisplay.innerText = `Selected Seats: ${selectedSeats.join(', ')}`;
}

confirmButton.addEventListener('click', () => {
    const selectedSeats = [...document.querySelectorAll('.seat.selected')].map(seat => seat.innerText);
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    window.location.href = 'checkout.html'; // Redirect to checkout page
});

generateSeats();