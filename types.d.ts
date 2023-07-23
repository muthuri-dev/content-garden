interface ITrending{
    results:{
        id:number;
        poster_path:string;
        title:string;
        overview:string;
    }[]
}
type TParams = {
    params:{
        movieId:string;
    }
}

interface IMovie {
    title:string;
    homepage:string;
    original_language:string;
    overview:string;
    release_date:string;
    backdrop_path:string;
}