const more = document.getElementById("moreList");
more.addEventListener('click', function(){

    more.remove();

    const item = [
        {img : 'https://img.icons8.com/ios-glyphs/30/list--v1.png' , text : 'My Unread Leads'},
        {img : 'https://img.icons8.com/ios-glyphs/30/list--v1.png' , text : 'Recently Viewed Leads'},
        {img : 'https://img.icons8.com/ios-glyphs/30/list--v1.png' , text : 'View - Custom 1'},
        {img : 'https://img.icons8.com/ios-glyphs/30/list--v1.png' , text : 'View - Custom 2'},
    ];

    item.forEach(function(item){
        const newDiv = document.createElement('div');
        newDiv.className = 'lead-mobile additional-item';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.text;

        const p = document.createElement('p');
        p.textContent = item.text;
        newDiv.appendChild(img);
        newDiv.appendChild(p);
        
        const addAdditional = document.getElementById('addAdditionalItem');
        addAdditional.appendChild(newDiv);
    });

});