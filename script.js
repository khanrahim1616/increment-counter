const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;
  const updatecounter = () => {
    const targetcount = +counter.getAttribute("data-target");
    const startingcounter = Number(counter.innerHTML);
    console.log(startingcounter,"ghf")
    const incr=targetcount/100;
    if (startingcounter<targetcount){
        counter.innerHTML=`${Math.round(startingcounter+incr)}`;
        setTimeout(updatecounter,10)
    }else{
        counter.innerHTML=targetcount;
    }
};
updatecounter();
});