let sortby_btn = document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener('click',()=>{
    sortby_opt.classList.toggle('sortby_opt_active');
})

let newest =document.getElementById('newest');
let all_shoes= document.getElementById('all_shoes');
let low = document.getElementById('low');
let high = document.getElementById('high');

let url="json.json";
let main_shoes_bx= document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data) => {
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array =[...data].splice(0,8);

    data.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });

    newest.addEventListener('click', () =>{
        main_shoes_bx.innerHTML='';
        sortby_btn.innerHTML = `
        <h5>Sort By: Newest</h5>
                <i class="bi bi-chevron-down"></i>
                `;
                sortby_opt.classList.toggle('sortby_opt_active');

                newest_array.forEach((el,i) =>{
                    const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.innerHTML = `
                    <img src="${Img}" alt="${Name}"/>
                                <h5 class="card_title" title="${Name}">
                                ${Name}
                                </h5>
                                <p>${Category} Shoes</p>
                                <div class="price">
                                    <h5>Rs ${Price} </h5>
                                    <h5>MRP: <del> RS ${MRP}</del></h5>
                                </div>
                                <div class="color_tag">
                                    <h6>Color ${Color}</h6>
                                    <h6>${Tag}</h6>
                                </div>
                                `;
             main_shoes_bx.appendChild(card)
                });

    })

    all_shoes.addEventListener('click', () =>{
        main_shoes_bx.innerHTML='';
        sortby_btn.innerHTML = `
        <h5>Sort By: All Shoes</h5>
                <i class="bi bi-chevron-down"></i>
                `;
                sortby_opt.classList.toggle('sortby_opt_active');

                all_shoes_array.forEach((el,i) =>{
                    const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.innerHTML = `
                    <img src="${Img}" alt="${Name}"/>
                                <h5 class="card_title" title="${Name}">
                                ${Name}
                                </h5>
                                <p>${Category} Shoes</p>
                                <div class="price">
                                    <h5>Rs ${Price} </h5>
                                    <h5>MRP: <del> RS ${MRP}</del></h5>
                                </div>
                                <div class="color_tag">
                                    <h6>Color ${Color}</h6>
                                    <h6>${Tag}</h6>
                                </div>
                                `;
             main_shoes_bx.appendChild(card)
                });

    })

    low.addEventListener('click', () =>{
        main_shoes_bx.innerHTML='';
        sortby_btn.innerHTML = `
        <h5>Sort By: Low To High</h5>
                <i class="bi bi-chevron-down"></i>
                `;
                sortby_opt.classList.toggle('sortby_opt_active');

                low_array.sort(({Price : a}, {Price : b}) => a-b)
                low_array.forEach((el,i) =>{
                    const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.innerHTML = `
                    <img src="${Img}" alt="${Name}"/>
                                <h5 class="card_title" title="${Name}">
                                ${Name}
                                </h5>
                                <p>${Category} Shoes</p>
                                <div class="price">
                                    <h5>Rs ${Price} </h5>
                                    <h5>MRP: <del> RS ${MRP}</del></h5>
                                </div>
                                <div class="color_tag">
                                    <h6>Color ${Color}</h6>
                                    <h6>${Tag}</h6>
                                </div>
                                `;
             main_shoes_bx.appendChild(card)
                });

    })

    high.addEventListener('click', () =>{
        main_shoes_bx.innerHTML='';
        sortby_btn.innerHTML = `
        <h5>Sort By: High To Low</h5>
                <i class="bi bi-chevron-down"></i>
                `;
                sortby_opt.classList.toggle('sortby_opt_active');

                high_array.sort(({Price : a}, {Price : b}) => a-b)
                high_array.reverse();
                high_array.forEach((el,i) =>{
                    const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                    let card = document.createElement('a');
                    card.classList.add('card');
                    card.innerHTML = `
                    <img src="${Img}" alt="${Name}"/>
                                <h5 class="card_title" title="${Name}">
                                ${Name}
                                </h5>
                                <p>${Category} Shoes</p>
                                <div class="price">
                                    <h5>Rs ${Price} </h5>
                                    <h5>MRP: <del> RS ${MRP}</del></h5>
                                </div>
                                <div class="color_tag">
                                    <h6>Color ${Color}</h6>
                                    <h6>${Tag}</h6>
                                </div>
                                `;
             main_shoes_bx.appendChild(card)
                });

    })

    let boot_array = all_shoes_array.filter((el)=> {
        return el.Type==='Boots';
    })
    let All_Main_filter_array=[];
    

    let boots= document.getElementById('boots');
    boots.addEventListener('click',()=>{
        if(boots.title==="boots_filter_on"){
            main_shoes_bx.innerHTML= '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title='boots_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(boot_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            boots.classList.toggle('i_active');
            boots.classList.toggle('bi-toggle2-off');
            boots.classList.toggle('bi-toggle2-on');
            boots.title='boots_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return boot_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })
    // loafer shoes
    let loafers_array = all_shoes_array.filter((el)=> {
        return el.Type==='Loafer';
    })
    
    

    let loafers= document.getElementById('loafers');
    loafers.addEventListener('click',()=>{
        main_shoes_bx.innerHTML= '';
        if(loafers.title==="loafers_filter_on"){
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title='loafers_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(loafers_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            loafers.classList.toggle('i_active');
            loafers.classList.toggle('bi-toggle2-off');
            loafers.classList.toggle('bi-toggle2-on');
            loafers.title='loafers_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return loafers_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let Air_Force_1_array = all_shoes_array.filter((el)=> {
        return el.Type==='Air Force';
    })
    // let All_Main_filter_array=[];
    

    let Air_Force_1= document.getElementById('Air_Force_1');
    Air_Force_1.addEventListener('click',()=>{
        if(Air_Force_1.title==="Air_Force_1_filter_on"){
            main_shoes_bx.innerHTML= '';
            Air_Force_1.classList.toggle('i_active');
            Air_Force_1.classList.toggle('bi-toggle2-off');
            Air_Force_1.classList.toggle('bi-toggle2-on');
            Air_Force_1.title='Air_Force_1_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(Air_Force_1_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            Air_Force_1.classList.toggle('i_active');
            Air_Force_1.classList.toggle('bi-toggle2-off');
            Air_Force_1.classList.toggle('bi-toggle2-on');
            Air_Force_1.title='Air_Force_1_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return Air_Force_1_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let Air_Max_array = all_shoes_array.filter((el)=> {
        return el.Type==='Air Max';
    })
    // let All_Main_filter_array=[];
    

    let Air_Max= document.getElementById('Air_Max');
    Air_Max.addEventListener('click',()=>{
        if(Air_Max.title==="Air_Max_filter_on"){
            main_shoes_bx.innerHTML= '';
            Air_Max.classList.toggle('i_active');
            Air_Max.classList.toggle('bi-toggle2-off');
            Air_Max.classList.toggle('bi-toggle2-on');
            Air_Max.title='Air_Max_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(Air_Max_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            Air_Max.classList.toggle('i_active');
            Air_Max.classList.toggle('bi-toggle2-off');
            Air_Max.classList.toggle('bi-toggle2-on');
            Air_Max.title='Air_Max_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return Air_Max_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let Zoom_Rival_array = all_shoes_array.filter((el)=> {
        return el.Type==='Zoom Rival';
    })
    // let All_Main_filter_array=[];
    

    let Zoom_Rival= document.getElementById('Zoom_Rival');
    Zoom_Rival.addEventListener('click',()=>{
        if(Zoom_Rival.title==="Zoom_Rival_filter_on"){
            main_shoes_bx.innerHTML= '';
            Zoom_Rival.classList.toggle('i_active');
            Zoom_Rival.classList.toggle('bi-toggle2-off');
            Zoom_Rival.classList.toggle('bi-toggle2-on');
            Zoom_Rival.title='Zoom_Rival_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(Zoom_Rival_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            Zoom_Rival.classList.toggle('i_active');
            Zoom_Rival.classList.toggle('bi-toggle2-off');
            Zoom_Rival.classList.toggle('bi-toggle2-on');
            Zoom_Rival.title='Zoom_Rival_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return Zoom_Rival_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let Pegasus_array = all_shoes_array.filter((el)=> {
        return el.Type==='Pegasus';
    })
    // let All_Main_filter_array=[];
    

    let Pegasus= document.getElementById('Pegasus');
    Pegasus.addEventListener('click',()=>{
        if(Pegasus.title==="Pegasus_filter_on"){
            main_shoes_bx.innerHTML= '';
            Pegasus.classList.toggle('i_active');
            Pegasus.classList.toggle('bi-toggle2-off');
            Pegasus.classList.toggle('bi-toggle2-on');
            Pegasus.title='Pegasus_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(Pegasus_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            Pegasus.classList.toggle('i_active');
            Pegasus.classList.toggle('bi-toggle2-off');
            Pegasus.classList.toggle('bi-toggle2-on');
            Pegasus.title='Pegasus_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return Pegasus_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let Nike_Dunk_array = all_shoes_array.filter((el)=> {
        return el.Type==='Nike Dunk';
    })
    // let All_Main_filter_array=[];
    

    let Nike_Dunk= document.getElementById('Nike_Dunk');
    Nike_Dunk.addEventListener('click',()=>{
        if(Nike_Dunk.title==="Nike_Dunk_filter_on"){
            main_shoes_bx.innerHTML= '';
            Nike_Dunk.classList.toggle('i_active');
            Nike_Dunk.classList.toggle('bi-toggle2-off');
            Nike_Dunk.classList.toggle('bi-toggle2-on');
            Nike_Dunk.title='Nike_Dunk_filter_off';
            All_Main_filter_array = All_Main_filter_array.concat(Nike_Dunk_array);

            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        } else{
            main_shoes_bx.innerHTML= '';
            Nike_Dunk.classList.toggle('i_active');
            Nike_Dunk.classList.toggle('bi-toggle2-off');
            Nike_Dunk.classList.toggle('bi-toggle2-on');
            Nike_Dunk.title='Nike_Dunk_filter_on';
            All_Main_filter_array = All_Main_filter_array.filter((el)=>{
                return Nike_Dunk_array.indexOf(el)<0;
            })
            All_Main_filter_array.forEach((el,i) =>{
                const {Img, Name, Category, MRP,Price, Tag,Color}= el;
                let card = document.createElement('a');
                card.classList.add('card');
                card.innerHTML = `
                <img src="${Img}" alt="${Name}"/>
                            <h5 class="card_title" title="${Name}">
                            ${Name}
                            </h5>
                            <p>${Category} Shoes</p>
                            <div class="price">
                                <h5>Rs ${Price} </h5>
                                <h5>MRP: <del> RS ${MRP}</del></h5>
                            </div>
                            <div class="color_tag">
                                <h6>Color ${Color}</h6>
                                <h6>${Tag}</h6>
                            </div>
                            `;
         main_shoes_bx.appendChild(card)
            });
        }
    })

    let right_input = document.getElementById('right_input');
let left_input = document.getElementById('left_input');
let left_input_icon = document.getElementById('left_input_icon');
let right_input_icon= document.getElementById('right_input_icon');


// console.log(array_1000_50000)

left_input.addEventListener('change', ()=> {
    let array_1000_50000 = all_shoes_array.filter((el) => {
        return el.Price <= 50000;
    })
    left_input_icon.style.left= left_input.value+'%';
    // console.log(left_input.value+'%')
    let price_box_value_left = (50000/100)*left_input.value;
    // console.log(price_box_value_left);
    document.getElementById('left_input_price').innerText= (price_box_value_left);
    let array_1000_50000_left = array_1000_50000.filter((el)=> {
        return el.Price >= price_box_value_left;
    
    })

   
    // console.log(array_1000_50000_left);
    main_shoes_bx.innerHTML='';
    array_1000_50000_left.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
});



})
// right




right_input.addEventListener('change', ()=> {
    
    right_input_icon.style.left= right_input.value+'%';
    // console.log(right_input.value+'%')
    let price_box_value_right = (50000/100)*right_input.value;
    // console.log(price_box_value_right);
    document.getElementById('right_input_price').innerText= (price_box_value_right+50000);
    let array_50001_100000 = all_shoes_array.filter((el) => {
        return el.Price >= 50000;
    })
    let array_1000_50000_right = array_50001_100000.filter((el)=> {
        return el.Price >= (price_box_value_right+50000);
        
    
    })
    console.log(price_box_value_right+50000);

   
    // console.log(array_1000_50000_left);
    main_shoes_bx.innerHTML='';
    array_1000_50000_right.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
});



})

const color = ['white','gray-white','yellow','yellow-black','orange','green','sky-blue','pink','red','blue','gray-black','brown','black'];
Array.from(document.getElementsByClassName('color')).forEach((el,i) =>{
    el.addEventListener('click', () =>{
        const color_array= all_shoes_array.filter((el) =>{
            return el.ColorTag === color[i];
        });
        main_shoes_bx.innerHTML= '';
        color_array.forEach((el,i) =>{
            const {Img, Name, Category, MRP,Price, Tag,Color}= el;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}"/>
                        <h5 class="card_title" title="${Name}">
                        ${Name}
                        </h5>
                        <p>${Category} Shoes</p>
                        <div class="price">
                            <h5>Rs ${Price} </h5>
                            <h5>MRP: <del> RS ${MRP}</del></h5>
                        </div>
                        <div class="color_tag">
                            <h6>Color ${Color}</h6>
                            <h6>${Tag}</h6>
                        </div>
                        `;
     main_shoes_bx.appendChild(card)
    });
    

    })
})


document.getElementsByClassName('colors')[0].addEventListener('click',()=> {
    main_shoes_bx.innerHTML='';
    all_shoes_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });

})

// size
const number=[4,7,9,6,5,8,10,11.5,9.5,16,17,18,11,8.5];
document.getElementsByClassName('size')[0].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size4 === number[0];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[1].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size7 === number[1];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[2].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size9 === number[2];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[3].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size6 === number[3];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[4].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size5 === number[4];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})
document.getElementsByClassName('size')[5].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size8 === number[5];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[6].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size10 === number[6];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[7].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size11_5 === number[7];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[8].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size9_5 === number[8];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[9].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size16 === number[9];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[10].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size17 === number[10];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[11].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size18 === number[11];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[12].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size11 === number[12];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})

document.getElementsByClassName('size')[13].addEventListener('click', () =>{
    main_shoes_bx.innerHTML='';
    let number_array = all_shoes_array.filter((el) =>{
        return el.Size8_5 === number[13];
    })
    number_array.forEach((el,i) =>{
        const {Img, Name, Category, MRP,Price, Tag,Color}= el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
                    <h5 class="card_title" title="${Name}">
                    ${Name}
                    </h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs ${Price} </h5>
                        <h5>MRP: <del> RS ${MRP}</del></h5>
                    </div>
                    <div class="color_tag">
                        <h6>Color ${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
                    `;
 main_shoes_bx.appendChild(card)
    });
})
})
