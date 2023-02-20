
// ma'lumot qo'shish uchun funkiya

let infoDO = []

let infoNE = []


function Addone(){
    let tsNeme = document.getElementById("your-name").value;
    let lnSurnme = document.getElementById("your-surnme").value;
    let tmDate  = document.getElementById("your-date").value;
    let dfPosition = document.getElementById("Lavozim-position").value;


    document.getElementById("your-name").value = "";
    document.getElementById("your-surnme").value = "";
    document.getElementById("your-date").value = "";
    document.getElementById("Lavozim-position").value = "";


    if(tsNeme.length>0 && lnSurnme.length>0 && tmDate.length>0 && dfPosition.length>0){



    } else{
        alert("Xatolik ma'lumotni kriting")
        return
    }

    let allWorkf = {
        nameLS: tsNeme,
        surnameLN: lnSurnme,
        dateTM: tmDate,
        position: dfPosition
    }

    infoDO.push(allWorkf);
    console.log(infoDO)
    drawTask()
    progrss()
}

// ma'lumotni oynaga chiqarish unchun funksiya ...

function  drawTask(){
    let res = ""

    for(let i = 0; i<infoDO.length; i++){
        res+=`
        <div class="card text-dark bg-info ml-3 mt-3" style="max-width: 18rem;">
        <div class="card-header">${i+1}) ${infoDO[i].nameLS} ${infoDO[i].surnameLN}</div>
        <div class="card-body">
          <h5 class="card-title">Information</h5>
            <table>
                <thead>
                    <tr>
                        <th>
                            Ism: <h6 class="mt-1">${infoDO[i].nameLS} ${infoDO[i].surnameLN}</h6>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>
                            tug'ilgan sana: <h6 class="mt-1">${infoDO[i].dateTM}</h6>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>
                            lavozim: <h6 class="mt-1">${infoDO[i].position}</h6>
                        </th>
                    </tr>
                </thead>
            </table>
            <div class="card-footer mt-3 bg-info">
                <button class="btn btn-success">Add</button>
                <button onclick="delall(${i})" class="btn btn-danger">Delete</button>
            </div>
        </div>
      </div>
        `
    }
    document.getElementById("info1").innerHTML = res;

    let DelCard = ""

    for(let i = 0; i<infoNE.length; i++){
        DelCard+=`
                    <tr>
                        <th>${i+1}</th>
                        <th>${infoNE[i].nameLS}</th>
                        <th>${infoNE[i].surnameLN}</th>
                        <th>${infoNE[i].dateTM}</th>
                        <th>${infoNE[i].position}</th>
                        <th><button onclick="infoNoDel(${i})" class="btn btn-danger">Delete</button></th>
                    </tr>
        `
    }
        document.getElementById("inss").innerHTML = DelCard;
}


// infoNE dan o'chirish uchun funksiya 

function infoNoDel(index){
    infoNE.splice(index,1);
    drawTask();
}



// o'chirish uchun funksiya

function delall(index){
    infoNE.push(infoDO[index]);
    infoDO.splice(index,1);
    console.log(infoNE);
    drawTask();
    progrss();
}


// progrss ucun funksiya

function progrss(){
   let progress= document.getElementById("progress")
   let percent = (100* infoNE.length)/(infoDO.length+infoNE.length);
   progress.style.width = percent+"%";
   percent = Math.floor(percent);
   progress.innerHTML = `${percent} %`
}


