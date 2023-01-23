const items = [

  'Identification of plant and plant disease causing organisms',
  'Cultivation of edible and medicinal mushrooms',
  'Sourcing and creating market',
  'Silk production (Sericulture)',
  'Aquaculture',
  'Raw material sourcing and funding',
  'Food processing/preservation/',
  'Packaging',
  'Refrigeration /Air-conditioning',
  'Hand gloves',
  'Foot-mats',
  'Germides',
  'Renewable products',
  'Biodiesel',
  'Business plan design',
  'Financial Mathematics',
  'Electronics',
  'Metal and wood workshop practices',
  'Production of farm fresh milk and yoghurts'
]


s = (e) => document.querySelector(e);
a = (e) => document.querySelectorAll(e);


window.onload = () => {

  s('#currentYear').innerText = (new Date()).getFullYear();

  s("#showMoreBtn").addEventListener("click", function (e) {
    // console.log('this', this);
    this.querySelector('a').textContent = this.querySelector('a').textContent === 'Show more' ? 'Show less' : 'Show more'

    a('#dummy-div').forEach(item => {
      item.style.display = item.style.display === '' ? 'block' : '';
    })

  });


  items.forEach(item => {
    const dummyDiv = document.createElement('div')
    dummyDiv.id = 'dummy-div'
    dummyDiv.classList = [...dummyDiv.classList, 'col-lg-3 col-md-6 col-sm-6 col-12 sal-animate']
    dummyDiv.dataset['salDelay'] = '150'
    dummyDiv.dataset['sal'] = 'slide-up'
    dummyDiv.dataset['salDuration'] = '800'
    dummyDiv.innerHTML = `
      <div class="service-card service-card-4">
                <div class="inner">
                  <div class="icon">
                    <i class="icon-pen-tool"></i>
                    <span class="subtitle">23 Courses</span>
                  </div>
                  <div class="content">
                    <h6 class="title">
                      <a href="#">${item}</a>
                    </h6>
                    <p class="description">
                      This training involves Artistic techniques, sculpture
                      making, drawing, shoe making and Soap Making
                    </p>
                  </div>
                </div>
              </div>
      `
    document.querySelector('.row.g-5.mt--25').appendChild(dummyDiv)
  })





};
