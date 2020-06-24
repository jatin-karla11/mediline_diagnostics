const search=document.getElementById('search');
const matchList=document.getElementById('match-list');

// search kits.json and filter it
const searchKits= async searchText=>{
    const res= await fetch('data/kits.json');
    const kits=await res.json();
    
    //get matches to current text input
    let matches=kits.filter(kit=>{
        const regex=new RegExp(`^${searchText}`,'gi');
        return kit.name.match(regex)||kit.abbr.match(regex);
    });
    if(searchText.length===0){
        matches=[];
        matchList.innerHTML="";
    }
    outputHtml(matches);
};
//show results in html
const outputHtml=matches=>{
    if(matches.length>0){
        const html=matches.map(match=>`
        <div class="card card-body mb-1">
          <h4> ${match.name} (${match.abbr}) <span class="text-primary"></span></h4>
          <small>Pack-size: ${match.packsize}</small>
        </div>`).join('');
        matchList.innerHTML=html;

    }
};

search.addEventListener('input',()=> searchKits(search.value));
