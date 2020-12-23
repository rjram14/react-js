const url = "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${url}/articles?_end=3`,{method:'GET'})
    .then(data=> data.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}


export function articleNews(){
    const output = fetch(`${url}/articles?_start=3&_end=10`,{method:'GET'})
    .then(data=> data.json())

    return{
        type:'GET_ARTICLES',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${url}/galleries?_limit=2`,{method:'GET'})
    .then(data=> data.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}


export function selectedNews(id){
    const output = fetch(`${url}/articles?id=${id}`,{method:'GET'})
    .then(data=> data.json())

    return{
        type:'GET_SELECTED_NEWS',
        payload:output
    }
}

export function clearselectedNews(){
    return{
        type:'CLEAR_NEWS',
        payload:''
    }
}

export function PostData(title,body,category){
    var random = Math.floor(Math.random()*1000)
    var data = {
        "id": random,
        "title": title,
        "body": body,
        "category":category,
        "img": "2.jpg",
        "date": "21/21/1944",
        "author": "Mary Bottom",
        "views": 456,
        "likes": [
            67,
            13
        ]
    }

    fetch(`${url}/articles/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    .then((response) =>  response.json())

    return{
        type:'POST_FORM',
        payload:''
    }
}