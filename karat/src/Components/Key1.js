import React from "react";
import Person1 from "./Person1";

function Key1(){
    const favourites = [{f1:'hamilton',cricket:'shreyas iyer',football:'ronaldo',series:'stranger things'},
                        {f1:'verstappen',cricket:'virat kohli',football:'messi',series:'game of thrones'}]
    const favList = favourites.map(fav=><Person1 key={fav.f1} f1={fav.f1} cricket={fav.cricket} football={fav.football} series={fav.series}/>)
    return(
        <div><h1>{favList}</h1></div>
    )
}

export default Key1;