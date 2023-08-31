function users(searchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => you(data.data))
}


function you(levels){
  const post = document.getElementById('main container');
  // akber jeta search jeta dimu oita clear howe jave 
  post.textContent = '';
  for(const level of levels){
    const phone = document.createElement('div');
    phone.classList = `card p-4 bg-gray-100 shadow-xl`;
    phone.innerHTML = ` 
    <figure><img src="${level.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${level.phone_name}</h2>
      <p>Banglar phone bazar</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>

    `;
    post.appendChild(phone) 
  }
}

// Seacrh bar

function button(){
  const SeacrhField = document.getElementById('search');
  const searchText = SeacrhField.value;
  console.log(searchText);
  users(searchText)
}

// users()







