// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

// Services data
const services = [
{
icon:"🏠",
img:"images/deep-cleaning.jpg",
title:"Deep Cleaning Services",
desc:"A complete, room-by-room clean for homes and offices — floors, walls, switchboards, ceiling corners and hard-to-reach spots. We remove built-up dirt, dust and bacteria that regular sweeping misses, leaving every surface sanitized and fresh."
},
{
icon:"🛋️",
img:"images/sofa-cleaning.jpg",
title:"Sofa Cleaning Services",
desc:"Steam and shampoo cleaning that lifts embedded dust mites, food stains and odors from every type of upholstery fabric. Your sofa comes out looking newer, smelling fresher, and safer for kids and pets to lounge on."
},
{
icon:"🧹",
img:"images/carpet-cleaning.jpg",
title:"Carpet Cleaning Services",
desc:"Deep hot-water extraction that pulls dirt out from the carpet base, not just the surface. Effective against allergens, dust mites and old stains, restoring color and texture without leaving your carpet soaking wet."
},
{
icon:"🏭",
img:"images/showroom-warehouse.jpg",
title:"Showroom & Warehouse Cleaning",
desc:"Large-scale cleaning for showrooms, warehouses and industrial floors using commercial-grade equipment. We handle high ceilings, racking systems and large floor areas efficiently with minimal disruption to your business hours."
},
{
icon:"🏗️",
img:"images/post-construction.jpg",
title:"Post Interior / Post Construction Cleaning",
desc:"Thorough cleanup after renovation or construction work — removing cement dust, paint splatters, debris and packaging waste from floors, fittings and windows so your space is move-in ready."
},
{
icon:"🪟",
img:"images/facade-glass.jpg",
title:"Facade Glass Cleaning",
desc:"Streak-free cleaning of building exteriors and glass facades using safety-rigged equipment for high-rise access. Restores clarity and shine to glass surfaces while following strict safety protocols."
},
{
icon:"🧱",
img:"images/acp-panel.jpg",
title:"Aluminium Composite Panel Cleaning",
desc:"Specialized cleaning for ACP exterior panels that removes pollution grime, stains and algae buildup without damaging the panel coating, helping preserve the building's appearance and panel lifespan."
},
{
icon:"🐜",
img:"images/pest-control.jpg",
title:"Pest Control Services",
desc:"Safe, low-odor pest treatments for cockroaches, termites, mosquitoes and rodents using government-approved chemicals. We target entry points and breeding areas for long-lasting control, not just a quick spray."
},
{
icon:"🏡",
img:"images/nri-home-care.jpg",
title:"NRI Home Care AMC Services",
desc:"Scheduled home upkeep for owners living abroad — periodic dusting, ventilation checks, leak inspections and cleaning so your property stays in good condition and ready whenever you return."
},
{
icon:"🔧",
img:"images/amc-contracts.jpg",
title:"Annual Maintenance Contracts",
desc:"Year-round cleaning and upkeep plans for homes, offices and commercial spaces at fixed intervals. One contract covers recurring deep cleans so you never have to book service-by-service again."
},
{
icon:"🎨",
img:"images/painting.jpg",
title:"Painting Services",
desc:"Interior and exterior painting with proper surface prep — crack filling, sanding and primer — before clean, even coats are applied. Includes post-painting cleanup so you're left with a finished space, not a mess."
},
{
icon:"❄️",
img:"images/ac-service.jpg",
title:"Air Conditioner Services & Cleaning",
desc:"Filter and coil cleaning, gas check and general servicing that improves cooling performance and air quality while cutting down on electricity consumption from a clogged or neglected unit."
}
];

// Display Services
const grid = document.getElementById('services-grid');

grid.innerHTML = services.map(s => `
<div class="service-card">
    <img src="${s.img}" alt="${s.title}">
    <div class="service-body">
        <div class="service-icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
    </div>
</div>
`).join('');

// Active Navigation on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${current}`
        );
    });
});