interface props{
    width: string,
    height: string,
    position: string
    title:boolean
}
export function getProps(posParam){
    let props: props;
    let position;
    if (posParam.top || posParam.bottom||posParam.right||posParam.left) 
        position = "absolute";
    else
        position = "static";
   
     props = {
        position:position,
        width:"fit-content",
        height:"fit-content",
        title: posParam.title?true:false
     }  
     return props;


}