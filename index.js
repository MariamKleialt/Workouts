fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < json.length; i++) {

            var y = document.createElement('li')
            var content = `<div class="card" style="width:400px">
                                <img class="card-img-top" src="xxx" alt="Card image">
                                <div class="card-body">
                                <h4 class="card-title">yyy</h4>
                                <p class="card-text">zzz</p>
                                <a href="#" class="btn btn-primary">See Profile</a>
                                </div>
                            </div>`
            var test=content.replace("xxx",json[i].flag)
            test=test.replace("yyy",json[i].name)
            test= test.replace("zzz",json[i].capital + '/'+json[i].population +'/'+ json[i].area +'/'+json[i].region)
            y.innerHTML = test;
            y.className = 'list-group-item'
            document.getElementById('myUl').appendChild(y);

            // var x= document.createElement('img')
            // x.src=json[i].flag;
            // document.getElementById('myUl').appendChild(x);

        }
    })