let numArr = [1,2,3,4,5,6];
let numArr1 = [1,22,[3],44,[5,7],61];
let root = document.getElementById('root')


function generateList(array){

    let ulList = document.createElement('ul');
    root.append(ulList);
    for(let i of array){
        if(typeof i === "object"){
            let ulList2 = document.createElement('ul');
            ulList.append(ulList2);
            for(let k of i){
                let liItem1 = document.createElement('li');
                ulList2.append(liItem1);
                liItem1.innerText = k
            }
        }else {
            let liItem = document.createElement('li');
            ulList.append(liItem);
            liItem.innerText = i
        }

    }

}

generateList(numArr1)
generateList(numArr)