document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByClassName('add-to-cart');
    const cards = document.getElementsByClassName('card');
    let shoppingCart = document.getElementById('shopping-cart');
    let qty = document.getElementById('qty');
    qty.classList.add('no-display');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            // Obtén el botón que se hizo clic
            const clickedButton = event.target;
            let cartChilds = shoppingCart.querySelectorAll('p');
            if(cartChilds.length >= 9) return;

            // Obtén el hermano anterior del botón, que debería ser el <p>
            const pElement = clickedButton.previousElementSibling;

            // Asegúrate de que el hermano anterior es un <p>
            if (pElement && pElement.tagName === 'P') {
                // Ahora obtén el hermano anterior del <p>, que debería ser el <h3>
                const h3Element = pElement.previousElementSibling;

                // Asegúrate de que el hermano anterior del <p> es un <h3>
                if (h3Element && h3Element.tagName === 'H3') {
                    // Aquí puedes hacer lo que necesites con el <h3>
                    let newProduct = document.createElement('p');
                    newProduct.textContent = h3Element.textContent;
                    shoppingCart.appendChild(newProduct);
                    let elements = shoppingCart.querySelectorAll('p');
                    qty.textContent = elements.length;
                    qty.classList.remove('animate');
                    qty.offsetWidth; 
                    qty.classList.add('animate');
                    qty.classList.remove('no-display');
                } else {
                    console.error('El hermano anterior del <p> no es un <h3> o no existe.');
                }
            } else {
                console.error('El hermano anterior del botón no es un <p> o no existe.');
            }
        });
    }

    document.getElementById('shopping-cart-icon').addEventListener('click', () => {
        document.querySelector('body').classList.toggle('unhide');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle('unhide');
        }
    });

    document.getElementById('empty-cart-button').addEventListener('click', () => {
        let elements = shoppingCart.querySelectorAll('p');
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
        qty.classList.add('no-display');
    });
});