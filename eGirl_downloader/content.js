
(function returnLink(){
    button = document.getElementsByClassName("  _6CZji   ");
    var link = [];
    var parent = document.querySelector("body > div._2dDPU.CkGkG > div.zZYga > div > article > div._97aPb > div > div");
    var count = 0;
    var syncFinish = false;

    asincro();
    async function asincro(){
        if (button[0] !== undefined && parent !== null){
            var elements = parent.getElementsByClassName("KL4Bh")
            while (button[0] !== undefined){
                if (count > 1){
                    count -= 1;
                }
                link.push(elements[count].getElementsByClassName("FFVAD")[0].currentSrc);
                button[0].click();
                count++;
                await new Promise(r => setTimeout(r, 400));
            }
            link.push(elements[1].getElementsByClassName("FFVAD")[0].currentSrc);
        }else if (parent == null){
            alert("Imagem não encontrada (Abra a imagem no Instagram)");
        }else{
            var elements = parent.getElementsByClassName("KL4Bh")
            window.open(elements[0].getElementsByClassName("FFVAD")[0].currentSrc)
        }
        syncFinish = true; 
        if (syncFinish){
            for (let j = 0; j < link.length; j++){
                window.open(link[j]);
            }
        }
    }
})();
