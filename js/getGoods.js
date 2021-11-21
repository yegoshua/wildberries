function getGoods(){
    const links = document.querySelectorAll('.navigation-link');

    function renderGoods (goods){
        const goodsContainer = document.querySelector('.long-goods-list');
        console.log(goodsContainer);
        goodsContainer.innerHTML = ``;
        goods.forEach((good)=>{
            
            const goodBlock = document.createElement('div')

            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')
            
            goodBlock.innerHTML = `
                <div class="goods-card">
					<span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="${good.name}" class="goods-image">
					<h3 class="goods-title">${good.name}</h3>
					<p class="goods-description">${good.description}</p>
					<button class="button goods-card-btn add-to-cart" data-id="${good.id}">
				        <span class="button-price">${good.price}$</span>
					</button>
				</div>            
            `
            goodsContainer.append(goodBlock);
            console.log(goodBlock);
        })
    }

    const getData = (value, category) =>{
        fetch('/db/db.json')
        .then((res)=> res.json())
        .then((data)=> {
            const array = category ? data.filter((item)=>item[category] === value): data;
            category ? console.log("есть"):console.log("нет");
            localStorage.setItem('goods', JSON.stringify(array));
            window.location.pathname !== "/goods.html" ? window.location.href = '/goods.html': 
            renderGoods(array);
            
        })
    }

    links.forEach((item)=>{
        item.addEventListener('click', (event)=>{
            event.preventDefault();
            const linkValue = item.textContent;
            const category = item.dataset.field;
            getData(linkValue, category);
        })
    }) 

    if(localStorage.getItem('goods') && window.location.pathname === "/goods.html"){
        renderGoods(JSON.parse(localStorage.getItem('goods')));
    }

}

getGoods();