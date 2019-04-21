export class Favorito {
    constructor(public id: string){
        this.manageFav(id);
    }

    manageFav(id: string){
        let itemsArray: Array<string> = JSON.parse(localStorage.getItem('spotyfav'));

        if ( itemsArray === null) {
            localStorage.setItem('spotyfav', JSON.stringify([id]));
        } else {
            if (!itemsArray.includes(id)){
                itemsArray.push(id);
                localStorage.setItem('spotyfav', JSON.stringify(itemsArray));
            } else {
               let index = itemsArray.indexOf(id);
                if (index > -1) {
                    itemsArray.splice(index, 1);
                }
                localStorage.setItem('spotyfav', JSON.stringify(itemsArray));
            }
        }
    }


}
