function showTicket(){
    const main = document.querySelector('.main');
    const name = document.querySelector('input[placeholder="Full name"]').value.trim();
    const ticketTypeSelect = document.getElementById('tickettype');
    if(!name){
        alert('please enter your name');
        return;
    }
    if(ticketTypeSelect.selectedIndex === 0){
        alert('Please select a ticket type');
        rerturn;
    }
    main.classList.add('blur');
    document.getElementById('loading').style.display = 'block';
    document.getElementById('ticket').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('ticketName').textContent = name;
        document.getElementById('ticketTypeDisplay').textContent = ticketType;
        document.getElementById('ticket').style.display = 'block';
    }, 3000);
    }
    
    
    
