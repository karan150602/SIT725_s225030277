fetch('/api/recipes')
    .then(res => res.json())
    .then(data => {
        let container = document.getElementById("recipe-container");

        data.forEach(recipe => {
            container.innerHTML += `
                <div class="col s4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${recipe.image}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${recipe.name}</span>
                            <p>${recipe.desc}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    });