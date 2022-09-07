var str="hhh";
var str2="aas";



// console.log(` previes val :${str} ${str2}:${str =str2}`);

const arr={
    content : [
            {
                    name : "lee" ,
                    address : {
                            flat_no: 303 ,
                            street : "4th lowel",
                    }
            },
            {
                    name : "Julia" ,
                    address : {
                            flat_no  :304 ,
                            street  :"4th Lowel"
                    }
            }
]
}

// console.log(arr.content.name);
for(var i=0;i<arr.content.length;i++){
    console.log(arr.content[i].address.flat_no)
}