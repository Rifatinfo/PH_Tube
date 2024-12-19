const loadCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    const data = await res.json();
    displayData(data.categories); 
}

const displayData = (categories) => {
    console.log(categories); 
    const categoriesContainer = document.getElementById("categories"); 
    categories.forEach((item) => {
        const button = document.createElement('button');
        button.classList.add("btn"); 
        button.innerText = item.category; 
        categoriesContainer.appendChild(button); 
    });
}

loadCategories();  



