// 1: first step
function users(searchText) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => you(data.data))
}


function you(levels){
  const post = document.getElementById('main container');

  // akber search jeta dimu oita clear howe jave 
  post.textContent = '';

  // nise je 12 tar option disi tar jonno shotto
  const showContainer = document.getElementById('showAll_Container')
  if(levels.length > 12){
    showContainer.classList.remove('hidden')
  }
  else{
    showContainer.classList.add('hidden')
  }

  // shudu 12 ta phone show korbe
  levels = levels.slice(0,12)

  for(const level of levels){
    // 2:Create div
    const phone = document.createElement('div');
    phone.classList = `card p-4 bg-gray-100 shadow-xl`;
    // 3: set inner html
    phone.innerHTML = ` 
    <figure><img src="${level.image}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">${level.phone_name}</h2>
      <p>Kidney dao phone nao, nahle bago</p>
      <div class="card-actions justify-center">
        <button onclick="allDetails('${level.slug}'); my_modal_5.showModal()" class="btn btn-primary">Show All</button>
      </div>
    </div>

    `;
    post.appendChild(phone) 
  }
  // loadin spinner stop korar jonno
  spineer(false);
}

// Seacrh bar
// 4: for search 
function button(){
  const SeacrhField = document.getElementById('search');
  const searchText = SeacrhField.value;
  spineer(true);
  // console.log(searchText);
  users(searchText)
}

// spiner loadin add
function spineer(isLoading){
  const loading = document.getElementById('loading-peatchure');
  if(isLoading){
    loading.classList.remove('hidden')
  }
  else{
    loading.classList.add('hidden')
  }
}


// for modal showing

function allDetails(id){
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
        .then(response => response.json())
        .then(data => modalCongo(data.data))
}

function modalCongo(lovely){
  const modalDetails = document.getElementById('modalHeading')
  modalDetails.innerText = lovely.name

  const allSet = document.getElementById('detailsInformation');
  allSet.innerHTML = `
    <p><span>Storage:</span>${lovely.mainFeatures.storage}</p>
    <p><span>Display Size:</span>${lovely.mainFeatures.displaySize}</p>
    <p><span>Sensors:</span>${lovely.mainFeatures.sensors}</p>
  
  `
  my_modal_5.showModal()
}

// users()







