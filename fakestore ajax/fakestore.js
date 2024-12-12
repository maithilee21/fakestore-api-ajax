function getdata(catname) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    const xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            const result = JSON.parse(xml.responseText);

            result.forEach(({ image, title, price }) => {
                const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${image}" class="card-img-top h-50" alt="${title}">
                        <div class="card-body">
                            <h5 class="card-title">$${price}</h5>
                            <p class="card-text">${title}</p>
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
            });
        }
    };

    xml.open('GET', `https://fakestoreapi.com/products${catname ? '/category/' + catname : ''}`);
    xml.send();
}


document.getElementById('electronics').onclick = function() {
    getdata("electronics");
};


document.getElementById('jewelery').onclick = function() {
    getdata("jewelery");
};



document.getElementById('mens').onclick = function() {
    getdata("men's clothing");
};


document.getElementById('womens').onclick = function() {
    getdata("women's clothing");
};


document.getElementById('submit').onclick = function() {
    var txtdata = document.getElementById('categoryName').value;
    console.log(txtdata);
    
    getdata(txtdata);
    
};

document.getElementById('home').onclick = function() {
    getdata();
};

document.addEventListener('DOMContentLoaded', () => {
    getdata();
});
